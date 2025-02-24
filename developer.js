// DOM Element References
const profileBtn = document.getElementById('profileBtn');
const profileMenu = document.getElementById('profileMenu');
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');
const fileStatus = document.getElementById('fileStatus');
const appForm = document.getElementById('appForm');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const cancelUpload = document.getElementById('cancelUpload');
const modalDrop = document.getElementById('modalDrop');
const modalFile = document.getElementById('modalFile');
const modalBrowse = document.getElementById('modalBrowse');
const modalStatus = document.getElementById('modalStatus');
const updateBtns = document.querySelectorAll('.updateBtn');
const detailsBtns = document.querySelectorAll('.details-button');
const loadMore = document.getElementById('loadMore');
const periodSelect = document.getElementById('periodSelect');
const filterSelect = document.getElementById('filter');
const searchInput = document.querySelector('.search-input');
const newsletterForm = document.querySelector('.newsletter-form');
const navLinks = document.querySelectorAll('.nav-link');

// App data for dynamic rendering
const appData = [
    {
        id: 'app1',
        name: 'UI Framework',
        description: 'Comprehensive UI component library',
        version: '1.2.3',
        category: ['ui', 'frontend'],
        downloads: 531,
        rating: 4.8,
        date: 'Feb 10, 2025',
        details: {
            description: 'A modern UI framework with over 100 components for building responsive web applications.',
            platforms: ['Web', 'React', 'Vue', 'Angular'],
            requirements: 'Node.js 14+, npm or yarn',
            changelog: [
                { version: '1.2.3', changes: ['Fixed button focus states', 'Improved accessibility', 'Added dark mode support'] },
                { version: '1.2.2', changes: ['Performance improvements', 'Fixed dialog component'] },
                { version: '1.2.1', changes: ['Added new chart components', 'Bug fixes'] }
            ]
        }
    },
    {
        id: 'app2',
        name: 'API Manager',
        description: 'Backend API management solution',
        version: '2.0.1',
        category: ['backend'],
        downloads: 723,
        rating: 4.6,
        date: 'Jan 25, 2025',
        details: {
            description: 'A complete solution for managing, monitoring, and securing your APIs.',
            platforms: ['Node.js', 'Python', 'Java'],
            requirements: 'Node.js 16+, MongoDB 5+',
            changelog: [
                { version: '2.0.1', changes: ['Fixed rate limiting issue', 'Improved logging', 'Added OAuth2 support'] },
                { version: '2.0.0', changes: ['Major rewrite', 'Added analytics dashboard', 'GraphQL support'] },
                { version: '1.9.5', changes: ['Security fixes', 'Performance optimizations'] }
            ]
        }
    },
    {
        id: 'app3',
        name: 'Mobile SDK',
        description: 'Cross-platform mobile development kit',
        version: '1.0.0',
        category: ['mobile'],
        downloads: 178,
        rating: 4.2,
        date: 'Feb 18, 2025',
        details: {
            description: 'Build native mobile apps for iOS and Android from a single codebase.',
            platforms: ['iOS', 'Android'],
            requirements: 'Xcode 14+, Android Studio 2023+',
            changelog: [
                { version: '1.0.0', changes: ['Initial release', 'Core components', 'Navigation system', 'Device API access'] }
            ]
        }
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeDropZones();
    initializeProfileMenu();
    initializeModal();
    initializeSearch();
    initializeFilters();
    initializeDetailsButtons();
    initializeNavigationLinks();
    initializeNewsletter();
    setupPlatformCheckboxes();
    updateStats();
});

// Profile Menu Toggle
function initializeProfileMenu() {
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileMenu.classList.toggle('hidden');
    });

    // Handle dropdown menu items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.textContent.trim();
            handleProfileAction(action);
            profileMenu.classList.add('hidden');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.add('hidden');
        }
    });
}

// Handle profile actions
function handleProfileAction(action) {
    switch(action) {
        case 'Profile':
            showNotification('Profile page is under development', 'info');
            break;
        case 'Settings':
            showNotification('Settings page will be available soon', 'info');
            break;
        case 'Logout':
            if (confirm('Are you sure you want to logout?')) {
                showNotification('Logout successful', 'success');
                // In a real app, this would redirect to login page
            }
            break;
    }
}

// Navigation Links
function initializeNavigationLinks() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active-link'));
            
            // Add active class to clicked link
            this.classList.add('active-link');
            
            const page = this.textContent.trim();
            showNotification(`Navigating to ${page} page`, 'info');
        });
    });
}

// File Upload Handling
function initializeDropZones() {
    // Main dropzone
    setupDropZone(dropZone, fileInput, fileStatus, browseBtn);
    
    // Modal dropzone
    setupDropZone(modalDrop, modalFile, modalStatus, modalBrowse);
    
    // Form submission
    appForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitForm(appForm);
    });
}

function setupDropZone(dropZone, fileInput, statusElement, browseButton) {
    // Handle drag events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    // Highlight drop zone on drag over
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });
    
    function highlight() {
        dropZone.classList.add('highlight');
    }
    
    function unhighlight() {
        dropZone.classList.remove('highlight');
    }
    
    // Handle file drop
    dropZone.addEventListener('drop', handleDrop, false);
    
    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        
        if (files.length > 0) {
            handleFiles(files);
        }
    }
    
    // Browse button functionality
    browseButton.addEventListener('click', function() {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            handleFiles(fileInput.files);
        }
    });
    
    function handleFiles(files) {
        const file = files[0];
        const validExtensions = ['.zip', '.tar.gz'];
        const fileName = file.name;
        const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
        
        if (validExtensions.includes(fileExtension) || fileName.endsWith('.tar.gz')) {
            statusElement.textContent = `File selected: ${fileName}`;
            statusElement.classList.add('success');
            statusElement.classList.remove('error');
            
            // Add progress animation
            const progressBar = document.createElement('div');
            progressBar.className = 'upload-progress';
            dropZone.appendChild(progressBar);
            
            // Simulate upload progress
            let width = 0;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    statusElement.textContent = `File uploaded: ${fileName}`;
                    
                    // Remove progress bar after completion
                    setTimeout(() => {
                        if (progressBar.parentNode) {
                            progressBar.parentNode.removeChild(progressBar);
                        }
                    }, 1000);
                } else {
                    width += 5;
                    progressBar.style.width = width + '%';
                }
            }, 100);
        } else {
            statusElement.textContent = 'Please select a valid package file (.zip or .tar.gz)';
            statusElement.classList.add('error');
            statusElement.classList.remove('success');
        }
    }
}

// Form validation and submission
function validateForm(form) {
    const appName = form.querySelector('#appName').value;
    const version = form.querySelector('#version').value;
    const category = form.querySelector('#category').value;
    const description = form.querySelector('#description').value;
    const fileStatus = form.querySelector('#fileStatus').textContent;
    const platforms = Array.from(form.querySelectorAll('input[name="platforms"]:checked')).map(input => input.value);
    
    let valid = true;
    let errors = [];
    
    if (!appName) {
        errors.push('App name is required');
        valid = false;
    }
    
    if (!version) {
        errors.push('Version is required');
        valid = false;
    } else if (!/^\d+\.\d+\.\d+$/.test(version)) {
        errors.push('Version must be in format x.y.z (e.g., 1.0.0)');
        valid = false;
    }
    
    if (!category) {
        errors.push('Category is required');
        valid = false;
    }
    
    if (!description || description.length < 10) {
        errors.push('Description is required (min 10 characters)');
        valid = false;
    }
    
    if (platforms.length === 0) {
        errors.push('At least one platform must be selected');
        valid = false;
    }
    
    if (!fileStatus.includes('File uploaded') && !fileStatus.includes('File selected')) {
        errors.push('App package file is required');
        valid = false;
    }
    
    return { valid, errors };
}

// Form submission
function submitForm(form) {
    // Validate form first
    const validation = validateForm(form);
    
    if (!validation.valid) {
        // Show validation errors
        showNotification(validation.errors.join('<br>'), 'error', 5000);
        return;
    }
    
    // Get form data
    const formData = new FormData(form);
    const appData = {
        name: formData.get('appName'),
        version: formData.get('version'),
        category: formData.get('category'),
        description: formData.get('description'),
        platforms: formData.getAll('platforms')
    };
    
    // Show loading spinner
    const submitBtn = form.querySelector('.primary-button');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission with network delay
    setTimeout(() => {
        // Update stats to reflect new app
        const totalApps = document.getElementById('totalApps');
        totalApps.textContent = parseInt(totalApps.textContent) + 1;
        
        // Add new app to the grid
        addNewAppToGrid(appData);
        
        // Reset form
        form.reset();
        fileStatus.textContent = '';
        
        // Restore button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('App submitted successfully!', 'success');
    }, 2000);
}

// Add new app to the grid
function addNewAppToGrid(appData) {
    const appGrid = document.querySelector('.app-grid');
    
    // Create random stats for the new app
    const downloads = Math.floor(Math.random() * 100);
    const rating = (3.5 + Math.random() * 1.5).toFixed(1);
    
    // Get the current date
    const today = new Date();
    const date = `${today.toLocaleString('default', { month: 'short' })} ${today.getDate()}, ${today.getFullYear()}`;
    
    // Create a new app card
    const newCard = document.createElement('div');
    newCard.className = 'app-card';
    newCard.dataset.category = appData.category;
    
    // Determine gradient color based on category
    let gradient = 'blue-gradient';
    if (appData.category === 'backend') gradient = 'green-gradient';
    if (appData.category === 'mobile') gradient = 'orange-gradient';
    if (appData.category === 'frontend') gradient = 'purple-gradient';
    
    newCard.innerHTML = `
        <div class="app-card-header ${gradient}">
            <div class="app-version">v${appData.version}</div>
            <div class="app-title-container">
                <h3 class="app-title">${appData.name}</h3>
                <p class="app-subtitle">${appData.description}</p>
            </div>
        </div>
        <div class="app-card-body">
            <div class="app-meta">
                <div class="app-meta-item">
                    <i class="fas fa-download meta-icon"></i>
                    <span>${downloads}</span>
                </div>
                <div class="app-meta-item">
                    <i class="fas fa-star meta-icon star"></i>
                    <span>${rating}</span>
                </div>
                <div class="app-meta-item">
                    <i class="fas fa-calendar-alt meta-icon"></i>
                    <span>${date}</span>
                </div>
            </div>
            <div class="app-tags">
                <span class="tag ${getCategoryColor(appData.category)}">${getCategoryLabel(appData.category)}</span>
            </div>
            <div class="app-actions">
                <button class="app-button details-button">
                    <i class="fas fa-eye button-icon"></i> Details
                </button>
                <button class="app-button update-button updateBtn">
                    <i class="fas fa-upload button-icon"></i> Update
                </button>
            </div>
        </div>
    `;
    
    // Apply a "new" effect
    newCard.classList.add('new-app');
    
    // Add to the beginning of the grid
    appGrid.insertBefore(newCard, appGrid.firstChild);
    
    // Initialize the new buttons
    const detailsBtn = newCard.querySelector('.details-button');
    const updateBtn = newCard.querySelector('.updateBtn');
    
    detailsBtn.addEventListener('click', function() {
        showAppDetails({
            name: appData.name,
            description: appData.description,
            version: appData.version,
            platforms: appData.platforms,
            changelog: [
                { version: appData.version, changes: ['Initial release'] }
            ]
        });
    });
    
    updateBtn.addEventListener('click', function() {
        showUpdateModal(appData.name, appData.version);
    });
    
    // Remove the new effect after 3 seconds
    setTimeout(() => {
        newCard.classList.remove('new-app');
    }, 3000);
}

// Helper function to get category color
function getCategoryColor(category) {
    const colors = {
        'ui': 'blue',
        'frontend': 'purple',
        'backend': 'green',
        'mobile': 'orange'
    };
    return colors[category] || 'blue';
}

// Helper function to get category label
function getCategoryLabel(category) {
    const labels = {
        'ui': 'UI',
        'frontend': 'Frontend',
        'backend': 'Backend',
        'mobile': 'Mobile'
    };
    return labels[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

// Setup platform checkboxes
function setupPlatformCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox-input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updatePlatformSummary();
        });
    });
}

// Update platform summary
function updatePlatformSummary() {
    const checkboxes = document.querySelectorAll('.checkbox-input:checked');
    const platforms = Array.from(checkboxes).map(cb => cb.value);
    
    const summary = document.createElement('div');
    summary.className = 'platform-summary';
    summary.textContent = platforms.length > 0 
        ? `Selected platforms: ${platforms.join(', ')}` 
        : 'No platforms selected';
    
    // Remove any existing summary
    const existingSummary = document.querySelector('.platform-summary');
    if (existingSummary) {
        existingSummary.remove();
    }
    
    // Add new summary
    if (platforms.length > 0) {
        const checkboxGroup = document.querySelector('.checkbox-group');
        checkboxGroup.appendChild(summary);
    }
}

// Modal handling
function initializeModal() {
    // Show modal when update buttons are clicked
    updateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Get app details from the card
            const card = this.closest('.app-card');
            const appName = card.querySelector('.app-title').textContent;
            const currentVersion = card.querySelector('.app-version').textContent.substring(1); // Remove the 'v' prefix
            
            showUpdateModal(appName, currentVersion);
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
    });
    
    cancelUpload.addEventListener('click', function() {
        modal.classList.add('hidden');
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    });
    
    // Handle modal form submission
    document.getElementById('versionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate modal form
        const newVersion = document.getElementById('newVersion').value;
        const notes = document.getElementById('notes').value;
        const fileStatus = document.getElementById('modalStatus').textContent;
        
        if (!newVersion || !/^\d+\.\d+\.\d+$/.test(newVersion)) {
            showNotification('Please enter a valid version number (e.g., 1.0.1)', 'error');
            return;
        }
        
        if (!notes || notes.length < 5) {
            showNotification('Please enter release notes', 'error');
            return;
        }
        
        if (!fileStatus.includes('File selected') && !fileStatus.includes('File uploaded')) {
            showNotification('Please select a package file', 'error');
            return;
        }
        
        // Show loading spinner
        const submitBtn = this.querySelector('.primary-button');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
        submitBtn.disabled = true;
        
        // Simulate upload with network delay
        setTimeout(() => {
            // Update the stats to reflect new upload
            const updates = document.getElementById('updates');
            updates.textContent = parseInt(updates.textContent) + 1;
            
            // Update the version on the card
            const modalTitle = document.querySelector('.modal-title').textContent;
            const appName = modalTitle.replace('Update ', '');
            
            const appCards = document.querySelectorAll('.app-card');
            appCards.forEach(card => {
                const cardTitle = card.querySelector('.app-title').textContent;
                if (cardTitle === appName) {
                    card.querySelector('.app-version').textContent = `v${newVersion}`;
                    // Add an update animation
                    card.classList.add('updated');
                    setTimeout(() => {
                        card.classList.remove('updated');
                    }, 3000);
                }
            });
            
            // Reset modal form
            this.reset();
            document.getElementById('modalStatus').textContent = '';
            
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Close modal and show success message
            modal.classList.add('hidden');
            showNotification(`Version ${newVersion} uploaded successfully!`, 'success');
        }, 2000);
    });
}

// Show update modal with pre-filled data
function showUpdateModal(appName, currentVersion) {
    // Set modal title to include app name
    document.querySelector('.modal-title').textContent = `Update ${appName}`;
    
    // Set suggested new version (increment patch version)
    const versionParts = currentVersion.split('.');
    const newPatch = parseInt(versionParts[2]) + 1;
    const suggestedVersion = `${versionParts[0]}.${versionParts[1]}.${newPatch}`;
    document.getElementById('newVersion').value = suggestedVersion;
    
    // Clear previous data
    document.getElementById('notes').value = '';
    document.getElementById('modalStatus').textContent = '';
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Focus on notes field
    setTimeout(() => {
        document.getElementById('notes').focus();
    }, 100);
}

// Initialize details buttons
function initializeDetailsButtons() {
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.app-card');
            const appName = card.querySelector('.app-title').textContent;
            
            // Find app details in our data
            const app = appData.find(app => app.name === appName);
            if (app) {
                showAppDetails(app.details);
            }
        });
    });
}

// Show app details
function showAppDetails(details) {
    // Create details modal
    const detailsModal = document.createElement('div');
    detailsModal.className = 'modal details-modal';
    detailsModal.id = 'detailsModal';
    
    detailsModal.innerHTML = `
        <div class="modal-content details-modal-content">
            <div class="modal-header">
                <h3 class="modal-title">${details.name || 'App Details'}</h3>
                <button class="modal-close" id="closeDetailsModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="details-content">
                <div class="details-section">
                    <h4>Description</h4>
                    <p>${details.description || 'No description available.'}</p>
                </div>
                <div class="details-section">
                    <h4>Supported Platforms</h4>
                    <div class="platform-tags">
                        ${(details.platforms || []).map(platform => `
                            <span class="platform-tag">${platform}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="details-section">
                    <h4>System Requirements</h4>
                    <p>${details.requirements || 'No specific requirements.'}</p>
                </div>
                <div class="details-section">
                    <h4>Version History</h4>
                    <div class="changelog">
                        ${(details.changelog || []).map(log => `
                            <div class="changelog-item">
                                <div class="changelog-version">v${log.version}</div>
                                <ul class="changelog-changes">
                                    ${log.changes.map(change => `<li>${change}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button secondary-button" id="closeDetailsBtn">Close</button>
                <button class="button primary-button" id="downloadAppBtn">Download</button>
            </div>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(detailsModal);
    
    // Show modal
    setTimeout(() => {
        detailsModal.classList.add('visible');
    }, 10);
    
    // Close buttons
    const closeBtn = document.getElementById('closeDetailsModal');
    const closeFooterBtn = document.getElementById('closeDetailsBtn');
    const downloadBtn = document.getElementById('downloadAppBtn');
    
    closeBtn.addEventListener('click', closeDetailsModal);
    closeFooterBtn.addEventListener('click', closeDetailsModal);
    
    downloadBtn.addEventListener('click', function() {
        showNotification('Starting download...', 'success');
        setTimeout(() => {
            closeDetailsModal();
        }, 1500);
    });
    
    // Close when clicking outside
    detailsModal.addEventListener('click', function(e) {
        if (e.target === detailsModal) {
            closeDetailsModal();
        }
    });
    
    // Close with Escape key
    const escapeHandler = function(e) {
        if (e.key === 'Escape') {
            closeDetailsModal();
        }
    };
    document.addEventListener('keydown', escapeHandler);
    
    // Function to close modal
    function closeDetailsModal() {
        detailsModal.classList.remove('visible');
        setTimeout(() => {
            document.body.removeChild(detailsModal);
            document.removeEventListener('keydown', escapeHandler);
        }, 300);
    }
}

// Newsletter form
function initializeNewsletter() {
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterButton = document.querySelector('.newsletter-button');
    
    newsletterButton.addEventListener('click', function() {
        const email = newsletterInput.value;
        if (!email || !validateEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading indicator
        newsletterButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        newsletterButton.disabled = true;
        
        // Simulate subscription
        setTimeout(() => {
            newsletterInput.value = '';
            newsletterButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
            newsletterButton.disabled = false;
            
            showNotification('Thank you for subscribing to our newsletter!', 'success');
        }, 1500);
    });
    
    // Submit on enter
    newsletterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            newsletterButton.click();
            e.preventDefault();
        }
    });
}

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Search functionality
function initializeSearch() {
    searchInput.addEventListener('input', function() {
        filterApps();
    });
    
    // Clear search button
    const searchContainer = document.querySelector('.search-container');
    const clearButton = document.createElement('button');
    clearButton.className = 'clear-search hidden';
    clearButton.innerHTML = '<i class="fas fa-times"></i>';
    searchContainer.appendChild(clearButton);
    
    // Show/hide clear button
    searchInput.addEventListener('input', function() {
        if (this.value) {
            clearButton.classList.remove('hidden');
        } else {
            clearButton.classList.add('hidden');
        }
    });
    
    // Clear search
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        clearButton.classList.add('hidden');
        filterApps();
    });
}

// Filter functionality
function initializeFilters() {
    filterSelect.addEventListener('change', function() {
        filterApps();
    });
}

function filterApps() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = filterSelect.value;
    
    const appCards = document.querySelectorAll('.app-card');
    let visibleCount = 0;
    
    appCards.forEach(card => {
        const title = card.querySelector('.app-title').textContent.toLowerCase();
        const subtitle = card.querySelector('.app-subtitle').textContent.toLowerCase();
        const categories = card.dataset.category.split(' ');
        
        // Check if card matches search term
        const matchesSearch = searchTerm === '' || 
                            title.includes(searchTerm) || 
                            subtitle.includes(searchTerm);
        
        // Check if card matches selected category
        const matchesCategory = selectedCategory === 'all' || 
                              categories.includes(selectedCategory);
        
        // Show or hide card based on filters
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show no results message
    const noResultsMsg = document.querySelector('.no-results-message');
    if (visibleCount === 0) {
        if (!noResultsMsg) {
            const message = document.createElement('div');
            message.className = 'no-results-message';
            message.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search-minus empty-icon"></i>
                    <p>No apps found matching your criteria</p>
                    <button class="button secondary-button reset-filters">Reset Filters</button>
                </div>
            `;
            
            const appGrid = document.querySelector('.app-grid');
            appGrid.parentNode.insertBefore(message, appGrid.nextSibling);
            
            // Add reset button functionality
            message.querySelector('.reset-filters').addEventListener('click', function() {
                searchInput.value = '';
                filterSelect.value = 'all';
                filterApps();
            });
        }
    } else if (noResultsMsg) {
        noResultsMsg.remove();
    }
    
    // Update load more button visibility
    loadMore.style.display = visibleCount <= 3 ? 'none' : 'block';
}

// Update statistics
function updateStats() {
    // Get random stats for demonstration
    document.getElementById('totalApps').textContent = appData.length;
    document.getElementById('downloads').textContent = '1,432';
    document.getElementById('updates').textContent = '57';
    
    // Update period select
    periodSelect.addEventListener('change', function() {
        // Simulate loading new stats
        const loadingIndicator = document.createElement('span');
        loadingIndicator.className = 'stats-loading';
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        const statsCards = document.querySelectorAll('.stats-card-value');
        statsCards.forEach(card => {
            card.appendChild(loadingIndicator.cloneNode(true));
        });
        
        // Update with new "data" after delay
        setTimeout(() => {
            // Remove loading indicators
            document.querySelectorAll('.stats-loading').forEach(el => el.remove());
            
            // Set new random values
            const multiplier = this.value === 'week' ? 0.3 : 
                              this.value === 'month' ? 1 : 
                              this.value === 'quarter' ? 3 : 6;
            
            document.getElementById('totalApps').textContent = Math.floor(appData.length * (1 + Math.random() * 0.2));
            document.getElementById('downloads').textContent = Math.floor(1432 * multiplier);
            document.getElementById('updates').textContent = Math.floor(57 * multiplier);
            
            showNotification(`Statistics updated for ${this.options[this.selectedIndex].text}`, 'info');
        }, 800);
    });
}

// Show notification
function showNotification(message, type = 'info', duration = 3000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Set icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon} notification-icon"></i>
        <div class="notification-message">${message}</div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to notifications container (create if it doesn't exist)
    let container = document.querySelector('.notifications-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'notifications-container';
        document.body.appendChild(container);
    }
    
    container.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // Auto-dismiss after duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, duration);
}

// Load more functionality
loadMore.addEventListener('click', function() {
    // Simulate loading more apps
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    this.disabled = true;
    
    setTimeout(() => {
        // Create 3 more app cards
        for (let i = 0; i < 3; i++) {
            const newApp = {
                name: `New App ${Math.floor(Math.random() * 1000)}`,
                description: 'Dynamically loaded application',
                version: '1.0.0',
                category: ['ui', 'frontend', 'backend', 'mobile'][Math.floor(Math.random() * 4)],
                platforms: ['Web', 'Mobile', 'Desktop'][Math.floor(Math.random() * 3)]
            };
            
            addNewAppToGrid(newApp);
        }
        
        // Restore button
        this.innerHTML = 'Load More';
        this.disabled = false;
        
        // Update stats
        const totalApps = document.getElementById('totalApps');
        totalApps.textContent = parseInt(totalApps.textContent) + 3;
        
        // Hide button after several loads
        const appCount = document.querySelectorAll('.app-card').length;
        if (appCount > 12) {
            this.style.display = 'none';
            showNotification('All available apps have been loaded', 'info');
        }
    }, 1500);
});