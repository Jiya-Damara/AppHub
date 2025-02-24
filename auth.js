document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const authToggleLink = document.getElementById('authToggleLink');
    const authToggleText = document.getElementById('authToggleText');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const togglePassword = document.getElementById('togglePassword');
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const passwordField = document.getElementById('password');
    const loginPasswordField = document.getElementById('loginPassword');
    
    // Mobile menu functionality (copied from main site)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Toggle between Sign Up and Login forms
    authToggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isLoginVisible = !loginForm.classList.contains('hidden');
        
        if (isLoginVisible) {
            // Switch to Sign Up
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
            authToggleLink.textContent = 'Log in';
            authToggleText.textContent = 'Already have an account? ';
            authTitle.textContent = 'Create Your Account';
            authSubtitle.textContent = 'Join AppHub to discover and download your favorite apps';
        } else {
            // Switch to Login
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            authToggleLink.textContent = 'Sign up';
            authToggleText.textContent = 'Don\'t have an account? ';
            authTitle.textContent = 'Welcome Back';
            authSubtitle.textContent = 'Log in to access your apps and downloads';
        }
    });
    
    // Toggle password visibility for signup
    togglePassword.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
    
    // Toggle password visibility for login
    if (toggleLoginPassword) {
        toggleLoginPassword.addEventListener('click', function() {
            const type = loginPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
            loginPasswordField.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye');
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });
    }
    
    // Handle Sign Up Form Submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.querySelector('input[name="role"]:checked').value;
        
        // Simple validation
        if (!name || !email || !password) {
            showAlert('Please fill in all fields', 'error');
            return;
        }
        
        // Create user object
        const user = {
            name,
            email,
            password, // In a real app, you should never store plain passwords
            role,
            createdAt: new Date().toISOString()
        };
        
        // Get existing users from localStorage or initialize empty array
        const users = JSON.parse(localStorage.getItem('appHubUsers') || '[]');
        
        // Check if email already exists
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
            showAlert('Email already registered. Please log in instead.', 'error');
            return;
        }
        
        // Add new user to array
        users.push(user);
        
        // Save updated users array back to localStorage
        localStorage.setItem('appHubUsers', JSON.stringify(users));
        
        // Set current user (logged in)
        localStorage.setItem('appHubCurrentUser', JSON.stringify({
            name: user.name,
            email: user.email,
            role: user.role,
            isLoggedIn: true
        }));
        
        // Show success message and redirect based on role
        showAlert('Account created successfully! Redirecting...', 'success');
        
        // Redirect based on user role
        setTimeout(() => {
            if (role === 'developer') {
                window.location.href = 'developer-dashboard.html';
            } else {
                window.location.href = 'user-dashboard.html';
            }
        }, 2000);
    });
    
    // Handle Login Form Submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation
        if (!email || !password) {
            showAlert('Please fill in all fields', 'error');
            return;
        }
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('appHubUsers') || '[]');
        
        // Find user with matching email and password
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            showAlert('Invalid email or password', 'error');
            return;
        }
        
        // MODIFIED: Allow selection of role during login regardless of stored role
        showAlert('Login successful! Select your dashboard...', 'success');
        
        // Create buttons for role selection
        const roleSelector = document.createElement('div');
        roleSelector.className = 'role-selector-login';
        roleSelector.innerHTML = `
            <p style="margin-bottom: 10px;">Select dashboard type:</p>
            <button type="button" class="primary-btn" style="margin-right: 10px;" onclick="goToDashboard('user')">User Dashboard</button>
            <button type="button" class="primary-btn" onclick="goToDashboard('developer')">Developer Dashboard</button>
        `;
        
        // Define the goToDashboard function
        window.goToDashboard = function(selectedRole) {
            // Set current user with selected role
            localStorage.setItem('appHubCurrentUser', JSON.stringify({
                name: user.name,
                email: user.email,
                role: selectedRole,
                isLoggedIn: true
            }));
            
            // Redirect based on selected role
            if (selectedRole === 'developer') {
                window.location.href = 'developer-dashboard.html';
            } else {
                window.location.href = 'user-dashboard.html';
            }
        };
        
        // Temporarily hide the login form
        loginForm.style.display = 'none';
        
        // Show role selector
        loginForm.parentNode.insertBefore(roleSelector, loginForm.nextSibling);
    });
    
    // Helper function to show alerts
    function showAlert(message, type = 'info') {
        // Check if an alert already exists and remove it
        const existingAlert = document.querySelector('.auth-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create alert element
        const alertElement = document.createElement('div');
        alertElement.className = `auth-alert ${type}`;
        alertElement.textContent = message;
        
        // Insert alert before the form
        document.querySelector('.auth-header').after(alertElement);
        
        // Remove alert after 5 seconds
        setTimeout(() => {
            alertElement.remove();
        }, 5000);
    }
    
    // Check if user is already logged in and redirect accordingly
    const currentUser = JSON.parse(localStorage.getItem('appHubCurrentUser') || '{}');
    if (currentUser.isLoggedIn) {
        // MODIFIED: Instead of automatic redirect, show dashboard selection
        if (document.querySelector('.auth-header')) {
            const storedEmail = currentUser.email;
            const storedName = currentUser.name;
            
            // Hide existing forms
            if (signupForm) signupForm.style.display = 'none';
            if (loginForm) loginForm.style.display = 'none';
            
            // Show welcome back message
            document.querySelector('.auth-header').innerHTML = `
                <h2>Welcome back, ${storedName}!</h2>
                <p>Select which dashboard you'd like to access</p>
            `;
            
            // Show dashboard selector
            const dashboardSelector = document.createElement('div');
            dashboardSelector.className = 'dashboard-selector';
            dashboardSelector.innerHTML = `
                <button type="button" class="primary-btn auth-btn" style="margin-bottom: 10px;" 
                    onclick="window.location.href='user-dashboard.html'">
                    Go to User Dashboard
                </button>
                <button type="button" class="primary-btn auth-btn" 
                    onclick="window.location.href='developer-dashboard.html'">
                    Go to Developer Dashboard
                </button>
                <div style="margin-top: 20px;">
                    <a href="#" onclick="logOut()" class="link">Log Out</a>
                </div>
            `;
            
            // Add log out function
            window.logOut = function() {
                localStorage.removeItem('appHubCurrentUser');
                window.location.reload();
            };
            
            // Append to the auth card
            document.querySelector('.auth-card').appendChild(dashboardSelector);
        }
    }
});

// Add additional CSS for alerts and new elements
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .auth-alert {
            padding: 12px 16px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-size: 14px;
        }
        .auth-alert.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .auth-alert.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .auth-alert.info {
            background-color: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
        .role-selector-login {
            margin: 20px 0;
            text-align: center;
        }
        .dashboard-selector {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
        }
    `;
    document.head.appendChild(style);
});