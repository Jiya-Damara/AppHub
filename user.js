const apps = [
  {
    id: 1,
    name: "Adobe Photoshop",
    version: "24.1",
    publisher: "Adobe Inc.",
    category: "Design",
    size: "2.4 GB",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968520.png",
    lastUpdated: "2024-02-10",
    status: "update-available",
    description: "Professional image editing and design software with AI-powered features",
    rating: 4.5,
    downloads: "10M+",
    price: "$20.99/month",
    tags: ["photo editing", "graphic design", "ai", "creative"],
    requirements: {
      os: "Windows 10/11 64-bit",
      processor: "Intel or AMD with 64-bit support; 2 GHz or faster",
      ram: "8 GB",
      graphics: "DirectX 12 compatible",
      storage: "4 GB"
    },
    features: ["AI-powered editing", "Cloud storage", "Neural filters", "Layer editing"],
    installProgress: 0,
    releaseNotes: "New AI features, performance improvements, bug fixes"
  },
  {
    id: 2,
    name: "Visual Studio Code",
    version: "1.86",
    publisher: "Microsoft",
    category: "Development",
    size: "350 MB",
    icon: "https://img.icons8.com/?size=48&id=0OQR1FYCuA9f&format=png",
    lastUpdated: "2024-02-15",
    status: "installed",
    description: "Lightweight but powerful source code editor",
    rating: 4.8,
    downloads: "50M+",
    price: "Free",
    tags: ["code editor", "programming", "ide"],
    requirements: {
      os: "Windows 7, 8, 10, 11",
      processor: "1.6 GHz or faster",
      ram: "4 GB",
      graphics: "DirectX 9 compatible",
      storage: "500 MB"
    },
    features: ["IntelliSense", "Debug support", "Git integration", "Extensions"],
    installProgress: 100,
    releaseNotes: "Improved extension management, better Git integration"
  },
  {
    id: 3,
    name: "Spotify",
    version: "8.8.0",
    publisher: "Spotify AB",
    category: "Entertainment",
    size: "200 MB",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111624.png",
    lastUpdated: "2024-02-20",
    status: "not-installed",
    description: "Music streaming service with millions of songs",
    rating: 4.7,
    downloads: "100M+",
    price: "Free (Premium available)",
    tags: ["music", "streaming", "audio"],
    requirements: {
      os: "Windows 10 or later",
      processor: "Any modern processor",
      ram: "2 GB",
      storage: "1 GB"
    },
    features: ["Offline playback", "High quality audio", "Playlist sharing"],
    installProgress: 0,
    releaseNotes: "New UI improvements, podcast features"
  },
  {
    id: 4,
    name: "Blender",
    version: "3.6",
    publisher: "Blender Foundation",
    category: "3D Graphics",
    size: "300 MB",
    icon: "https://img.icons8.com/?size=48&id=65231&format=png",
    lastUpdated: "2024-03-01",
    status: "not-installed",
    description: "Free and open-source 3D creation suite",
    rating: 4.6,
    downloads: "5M+",
    price: "Free",
    tags: ["3d modeling", "animation", "rendering"],
    requirements: {
      os: "Windows 8.1, 10, 11",
      processor: "64-bit quad core CPU with SSE2 support",
      ram: "8 GB",
      graphics: "OpenGL 4.3 compatible GPU with 2 GB RAM",
      storage: "1 GB"
    },
    features: ["3D modeling", "Animation", "Rendering", "Video editing"],
    installProgress: 0,
    releaseNotes: "Improved geometry nodes, faster rendering"
  },
  {
    id: 5,
    name: "Slack",
    version: "4.33.0",
    publisher: "Slack Technologies",
    category: "Productivity",
    size: "150 MB",
    icon: "https://img.icons8.com/?size=80&id=5nhKmqUrXtmq&format=png",
    lastUpdated: "2024-02-28",
    status: "installed",
    description: "Business communication platform",
    rating: 4.5,
    downloads: "20M+",
    price: "Free (Premium plans available)",
    tags: ["communication", "team collaboration", "messaging"],
    requirements: {
      os: "Windows 10 or later",
      processor: "1.5 GHz or faster",
      ram: "4 GB",
      storage: "500 MB"
    },
    features: ["Real-time messaging", "File sharing", "Voice and video calls"],
    installProgress: 100,
    releaseNotes: "Enhanced search functionality, performance improvements"
  },
  {
    id: 6,
    name: "Minecraft",
    version: "1.20",
    publisher: "Mojang Studios",
    category: "Games",
    size: "1 GB",
    icon: "https://img.icons8.com/?size=48&id=16462&format=png",
    lastUpdated: "2024-03-10",
    status: "not-installed",
    description: "Sandbox video game with endless possibilities",
    rating: 4.8,
    downloads: "200M+",
    price: "$26.95",
    tags: ["sandbox", "crafting", "adventure"],
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-4690 3.5GHz / AMD A10-7800 APU 3.5 GHz",
      ram: "8 GB",
      graphics: "NVIDIA GeForce 700 Series or AMD Radeon Rx 200 Series",
      storage: "4 GB"
    },
    features: ["Multiplayer", "Mod support", "Cross-platform play"],
    installProgress: 0,
    releaseNotes: "New biomes, mobs, and crafting recipes"
  },
  {
    id: 7,
    name: "Microsoft Office",
    version: "2024",
    publisher: "Microsoft",
    category: "Productivity",
    size: "4 GB",
    icon: "https://cdn-icons-png.flaticon.com/128/11895/11895551.png",
    lastUpdated: "2024-01-15",
    status: "update-available",
    description: "Suite of productivity applications including Word, Excel, and PowerPoint",
    rating: 4.7,
    downloads: "1B+",
    price: "$149.99/year",
    tags: ["office", "word processing", "spreadsheets", "presentations"],
    requirements: {
      os: "Windows 10 or later",
      processor: "1.6 GHz or faster, 2-core",
      ram: "4 GB (64-bit)",
      graphics: "DirectX 9 or later, with WDDM 2.0 or higher",
      storage: "4 GB"
    },
    features: ["Cloud integration", "Real-time collaboration", "AI-powered tools"],
    installProgress: 100,
    releaseNotes: "Enhanced AI features, improved performance, new templates"
  },
  {
    id: 8,
    name: "Zoom",
    version: "5.12",
    publisher: "Zoom Video Communications",
    category: "Communication",
    size: "250 MB",
    icon: "https://img.icons8.com/?size=48&id=7csVZvHoQrLW&format=png",
    lastUpdated: "2024-03-05",
    status: "installed",
    description: "Video conferencing and online meeting app",
    rating: 4.6,
    downloads: "50M+",
    price: "Free (Pro available)",
    tags: ["video conferencing", "meetings", "online"],
    requirements: {
      os: "Windows 10 or later",
      processor: "1.5 GHz or faster",
      ram: "4 GB",
      graphics: "DirectX 10 compatible",
      storage: "500 MB"
    },
    features: ["HD video", "Screen sharing", "Virtual backgrounds"],
    installProgress: 100,
    releaseNotes: "Minor bug fixes and performance improvements"
  },
  {
    id: 9,
    name: "Notion",
    version: "2.0.1",
    publisher: "Notion Labs",
    category: "Productivity",
    size: "120 MB",
    icon: "https://img.icons8.com/?size=64&id=wue74HqaylSJ&format=png",
    lastUpdated: "2024-03-08",
    status: "update-available",
    description: "All-in-one workspace for notes, tasks, and projects",
    rating: 4.7,
    downloads: "10M+",
    price: "Free (Premium available)",
    tags: ["notes", "productivity", "organization"],
    requirements: {
      os: "Windows 10 or later",
      processor: "Dual-core processor",
      ram: "4 GB",
      graphics: "Integrated graphics",
      storage: "200 MB"
    },
    features: ["Note-taking", "Task management", "Collaborative editing"],
    installProgress: 0,
    releaseNotes: "Added calendar integration and improved syncing"
  }
];


// Extended state management
const state = {
  currentCategory: "All Apps",
  currentSearch: "",
  currentStatus: "all",
  currentSort: "name",
  currentView: "grid",
  selectedTags: [],
  installingApps: new Set(),
  notifications: [],
  updateQueue: []
};

// Enhanced utility functions
const utils = {
  formatSize(size) {
    const [value, unit] = size.split(" ");
    const units = ["B", "KB", "MB", "GB", "TB"];
    let index = units.indexOf(unit);
    let numericValue = parseFloat(value);
    
    while (numericValue >= 1024 && index < units.length - 1) {
      numericValue /= 1024;
      index++;
    }
    
    return `${numericValue.toFixed(1)} ${units[index]}`;
  },

  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  },

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
};

// Enhanced UI management
const ui = {
  showToast(message, type = "success", duration = 3000) {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type} animate-in`;
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon">${type === "success" ? "✓" : "!"}</span>
        <span class="toast-message">${message}</span>
      </div>
    `;

    const container = document.getElementById("toastContainer") || document.body;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("animate-out");
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  showModal(title, content) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>${title}</h2>
          <button class="close-btn">&times;</button>
        </div>
        <div class="modal-body">${content}</div>
      </div>
    `;

    modal.querySelector(".close-btn").onclick = () => modal.remove();
    document.body.appendChild(modal);
    return modal;
  },

  updateAppCard(app) {
    const card = document.querySelector(`[data-app-id="${app.id}"]`);
    if (!card) return;

    const progressBar = card.querySelector(".progress-fill");
    const actionBtn = card.querySelector(".action-btn");
    const statusBadge = card.querySelector(".status-badge");

    if (progressBar) progressBar.style.width = `${app.installProgress}%`;
    if (actionBtn) {
      actionBtn.disabled = app.status === "installing" || app.status === "updating" || app.status === "uninstalling";
      actionBtn.textContent = this.getActionButtonText(app);
    }
    if (statusBadge) statusBadge.textContent = app.status;
  },

  getActionButtonText(app) {
    switch (app.status) {
      case "update-available": return "Update";
      case "not-installed": return "Install";
      case "installed": return "Uninstall";
      case "installing": return "Installing...";
      case "updating": return "Updating...";
      case "uninstalling": return "Uninstalling...";
      default: return "...";
    }
  },

  showUpdateNotification(updates) {
    const content = `
      <h3>New Updates Available</h3>
      <ul>
        ${updates.map(app => `<li>${app.name} (v${app.version})</li>`).join('')}
      </ul>
      <button id="updateAllBtn" class="btn btn-primary">Update All</button>
    `;
    const modal = this.showModal("App Updates", content);
    modal.querySelector("#updateAllBtn").onclick = () => {
      appManager.updateAllApps(updates);
      modal.remove();
    };
  }
};

// Enhanced app management
const appManager = {
  async installApp(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app || state.installingApps.has(appId)) return;

    state.installingApps.add(appId);
    app.status = "installing";
    ui.updateAppCard(app);

    try {
      await this.simulateProgress(app, "Installing");
      
      app.status = "installed";
      app.installProgress = 100;
      ui.showToast(`${app.name} has been installed successfully`);
    } catch (error) {
      app.status = "not-installed";
      app.installProgress = 0;
      ui.showToast(`Failed to install ${app.name}`, "error");
    } finally {
      state.installingApps.delete(appId);
      ui.updateAppCard(app);
    }
  },

  async updateApp(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app || state.installingApps.has(appId)) return;

    state.installingApps.add(appId);
    app.status = "updating";
    ui.updateAppCard(app);

    try {
      await this.simulateProgress(app, "Updating");
      
      app.status = "installed";
      app.lastUpdated = new Date().toISOString().split("T")[0];
      app.version = this.incrementVersion(app.version);
      ui.showToast(`${app.name} has been updated successfully to version ${app.version}`);
    } catch (error) {
      app.status = "update-available";
      ui.showToast(`Failed to update ${app.name}`, "error");
    } finally {
      state.installingApps.delete(appId);
      ui.updateAppCard(app);
    }
  },

  async uninstallApp(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    const confirmed = await this.showConfirmation(
      "Uninstall Confirmation",
      `Are you sure you want to uninstall ${app.name}?`
    );

    if (!confirmed) return;

    try {
      app.status = "uninstalling";
      ui.updateAppCard(app);
      
      await this.simulateProgress(app, "Uninstalling");
      
      app.status = "not-installed";
      app.installProgress = 0;
      ui.showToast(`${app.name} has been uninstalled successfully`, "warning");
    } catch (error) {
      ui.showToast(`Failed to uninstall ${app.name}`, "error");
    } finally {
      ui.updateAppCard(app);
    }
  },

  async simulateProgress(app, action) {
    return new Promise((resolve, reject) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 2;
        if (progress >= 100) {
          clearInterval(interval);
          app.installProgress = 100;
          ui.updateAppCard(app);
          resolve();
        } else {
          app.installProgress = Math.min(progress, 99);
          ui.updateAppCard(app);
        }
      }, 100);
    });
  },

  showConfirmation(title, message) {
    return new Promise(resolve => {
      const modal = ui.showModal(title, `
        <div class="confirmation-dialog">
          <p>${message}</p>
          <div class="button-group">
            <button class="btn btn-secondary" onclick="this.closest('.modal').remove(); return false;">Cancel</button>
            <button class="btn btn-danger" onclick="this.closest('.modal').remove(); return true;">Uninstall</button>
          </div>
        </div>
      `);

      modal.querySelector(".btn-danger").onclick = () => {
        modal.remove();
        resolve(true);
      };

      modal.querySelector(".btn-secondary").onclick = () => {
        modal.remove();
        resolve(false);
      };
    });
  },

  incrementVersion(version) {
    const parts = version.split('.');
    parts[parts.length - 1] = parseInt(parts[parts.length - 1]) + 1;
    return parts.join('.');
  },

  checkForUpdates() {
    const updates = apps.filter(app => app.status === "installed").map(app => {
      if (Math.random() < 0.3) { // 30% chance of an update
        return {
          ...app,
          version: this.incrementVersion(app.version),
          status: "update-available"
        };
      }
      return null;
    }).filter(Boolean);

    if (updates.length > 0) {
      state.updateQueue = updates;
      ui.showUpdateNotification(updates);
    }
  },

  async updateAllApps(updates) {
    for (const app of updates) {
      await this.updateApp(app.id);
    }
    state.updateQueue = [];
  }
};

// Event handlers
const eventHandlers = {
  init() {
    // Search handling
    const searchBox = document.querySelector(".search-box");
    searchBox.addEventListener("input", utils.debounce((e) => {
      state.currentSearch = e.target.value;
      this.renderApps();
    }, 300));

    // Filter handling
    const statusFilter = document.getElementById("statusFilter");
    statusFilter.addEventListener("change", (e) => {
      state.currentStatus = e.target.value;
      this.renderApps();
    });

    // Sort handling
    const sortOption = document.getElementById("sortOption");
    sortOption.addEventListener("change", (e) => {
      state.currentSort = e.target.value;
      this.renderApps();
    });

    // View toggle
    const viewToggle = document.getElementById("viewToggle");
    viewToggle.addEventListener("click", (e) => {
      state.currentView = state.currentView === "grid" ? "list" : "grid";
      this.renderApps();
    });

    // Category selection
    document.querySelectorAll(".category-item").forEach(item => {
      item.addEventListener("click", () => {
        document.querySelectorAll(".category-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        state.currentCategory = item.dataset.category;
        this.renderApps();
      });
    });

    // Initial render
    this.renderApps();

    // Check for updates periodically
    setInterval(() => {
      appManager.checkForUpdates();
    }, 120000); // Check every 2 minutes
  },

  renderApps() {
    const filteredApps = this.filterApps();
    const appsContainer = document.getElementById("appsContainer");
    
    appsContainer.className = state.currentView === "grid" ? "apps-grid" : "apps-list";
    appsContainer.innerHTML = filteredApps.map(app => this.renderAppCard(app)).join("");
  },

  filterApps() {
    return apps
      .filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(state.currentSearch.toLowerCase()) ||
                            app.description.toLowerCase().includes(state.currentSearch.toLowerCase()) ||
                            app.publisher.toLowerCase().includes(state.currentSearch.toLowerCase());
        const matchesStatus = state.currentStatus === "all" || app.status === state.currentStatus;
        const matchesCategory = state.currentCategory === "All Apps" || app.category === state.currentCategory;
        const matchesTags = state.selectedTags.length === 0 || 
                           state.selectedTags.every(tag => app.tags.includes(tag));
        
        return matchesSearch && matchesStatus && matchesCategory && matchesTags;
      })
      .sort((a, b) => {
        switch (state.currentSort) {
          case "size":
            return parseFloat(a.size) - parseFloat(b.size);
          case "date":
            return new Date(b.lastUpdated) - new Date(a.lastUpdated);
          case "rating":
            return b.rating - a.rating;
          default:
            return a.name.localeCompare(b.name);
        }
      });
  },

  renderAppCard(app) {
    return `
      <div class="app-card ${state.currentView}" data-app-id="${app.id}">
        <div class="app-header">
          <img src="${app.icon}" alt="${app.name}" class="app-icon">
          <div class="app-info">
            <div class="app-name-row">
              <h3 class="app-name">${app.name}</h3>
              <span class="status-badge ${app.status}">${app.status}</span>
            </div>
            <div class="app-meta">
              <span class="publisher">${app.publisher}</span>
              <span class="category">${app.category}</span>
              <span class="version">v${app.version}</span>
              <span class="size">${app.size}</span>
            </div>
          </div>
        </div>
        
        <div class="app-body">
          <p class="app-description">${app.description}</p>
          
          <div class="app-stats">
            <div class="stat-item">
              <span class="stat-icon">⭐</span>
              <span class="stat-value">${app.rating}/5</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon">↓</span>
              <span class="stat-value">${app.downloads}</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon">💰</span>
              <span class="stat-value">${app.price}</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon">🕒</span>
              <span class="stat-value">Updated ${utils.formatDate(app.lastUpdated)}</span>
            </div>
          </div>

          <div class="tags-container">
            ${app.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          
          ${app.installProgress > 0 ? `
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${app.installProgress}%"></div>
              <span class="progress-text">${Math.round(app.installProgress)}%</span>
            </div>
          ` : ''}

          <div class="app-actions">
            ${this.renderActionButton(app)}
            <button class="btn btn-outline" onclick="eventHandlers.showDetails(${app.id})">
              <span class="btn-icon">ℹ️</span>
              Details
            </button>
          </div>
        </div>
      </div>
    `;
  },

  renderActionButton(app) {
    switch (app.status) {
      case "update-available":
        return `
          <button class="btn btn-primary action-btn" onclick="appManager.updateApp(${app.id})"
                  ${state.installingApps.has(app.id) ? 'disabled' : ''}>
            <span class="btn-icon">↑</span>
            Update
          </button>
        `;
      case "not-installed":
        return `
          <button class="btn btn-primary action-btn" onclick="appManager.installApp(${app.id})"
                  ${state.installingApps.has(app.id) ? 'disabled' : ''}>
            <span class="btn-icon">↓</span>
            Install
          </button>
        `;
      case "installed":
        return `
          <button class="btn btn-danger action-btn" onclick="appManager.uninstallApp(${app.id})"
                  ${state.installingApps.has(app.id) ? 'disabled' : ''}>
            <span class="btn-icon">🗑️</span>
            Uninstall
          </button>
        `;
      default:
        return `
          <button class="btn btn-secondary action-btn" disabled>
            <span class="btn-icon">⏳</span>
            ${app.status}...
          </button>
        `;
    }
  },

  showDetails(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    const content = `
      <div class="app-details">
        <div class="details-section">
          <h3>System Requirements</h3>
          <ul class="requirements-list">
            ${Object.entries(app.requirements).map(([key, value]) => `
              <li><strong>${key.toUpperCase()}:</strong> ${value}</li>
            `).join('')}
          </ul>
        </div>

        <div class="details-section">
          <h3>Features</h3>
          <ul class="features-list">
            ${app.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>

        <div class="details-section">
          <h3>Release Notes</h3>
          <p>${app.releaseNotes}</p>
        </div>
      </div>
    `;

    ui.showModal(`${app.name} Details`, content);
  }
};

// Additional utility functions
const systemUtils = {
  checkSystemRequirements(app) {
    // Simulate system requirements check
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          compatible: true,
          warnings: [],
          recommendations: []
        });
      }, 500);
    });
  },

  getSystemInfo() {
    // Simulate getting system information
    return {
      os: "Windows 11 64-bit",
      processor: "Intel Core i7",
      ram: "16 GB",
      graphics: "NVIDIA RTX 3060",
      storage: "500 GB free"
    };
  }
};

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'f') {
    e.preventDefault();
    document.querySelector('.search-box').focus();
  }
});

// Add drag and drop support for installing apps
document.addEventListener('dragover', (e) => e.preventDefault());
document.addEventListener('drop', (e) => {
  e.preventDefault();
  const appId = e.dataTransfer.getData('application/json');
  if (appId) {
    appManager.installApp(parseInt(appId));
  }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  eventHandlers.init();
});

// Export necessary functions and objects for global access
window.appManager = appManager;
window.eventHandlers = eventHandlers;
window.ui = ui;