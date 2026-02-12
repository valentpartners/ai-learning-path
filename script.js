// Sidebar functionality
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('close-sidebar');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarContent = document.getElementById('sidebar-content');

function openSidebar(level) {
    const data = contentData[level];
    if (!data) return;

    sidebarTitle.textContent = data.title;
    
    let content = `<p class="sidebar-subtitle">${data.subtitle}</p>`;
    
    // Concepts Section
    content += '<div class="collapsible-section">';
    content += '<div class="section-header" onclick="toggleSection(this)">';
    content += '<span class="toggle-icon">▼</span>';
    content += '<h3>Concepts</h3>';
    content += '</div>';
    content += '<div class="section-content active">';
    content += '<ul>';
    data.concepts.forEach(item => {
        content += `<li>${item}</li>`;
    });
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    
    // Tools & Technologies Section
    content += '<div class="collapsible-section">';
    content += '<div class="section-header" onclick="toggleSection(this)">';
    content += '<span class="toggle-icon">▼</span>';
    content += '<h3>Tools & Technologies</h3>';
    content += '</div>';
    content += '<div class="section-content active">';
    content += '<ul>';
    data.tools.forEach(item => {
        content += `<li>${item}</li>`;
    });
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    
    // Deliverables Section
    content += '<div class="collapsible-section">';
    content += '<div class="section-header" onclick="toggleSection(this)">';
    content += '<span class="toggle-icon">▼</span>';
    content += '<h3>Deliverables</h3>';
    content += '</div>';
    content += '<div class="section-content active">';
    content += '<ul>';
    data.deliverables.forEach(item => {
        content += `<li>${item}</li>`;
    });
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    
    // Training Links Section
    if (data.training && data.training.length > 0) {
        content += '<div class="collapsible-section">';
        content += '<div class="section-header" onclick="toggleSection(this)">';
        content += '<span class="toggle-icon">▼</span>';
        content += '<h3>Training Resources</h3>';
        content += '</div>';
        content += '<div class="section-content active">';
        content += '<div class="training-links">';
        data.training.forEach(training => {
            content += '<div class="training-item">';
            if (training.url === '#') {
                content += `<span class="training-name">${training.name}</span>`;
            } else {
                content += `<a href="${training.url}" target="_blank" class="training-link">${training.name}</a>`;
            }
            if (training.duration) {
                content += `<span class="training-duration">${training.duration}</span>`;
            }
            content += '</div>';
        });
        content += '</div>';
        content += '</div>';
        content += '</div>';
    }
    
    sidebarContent.innerHTML = content;
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

function toggleSection(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '▶';
    } else {
        content.classList.add('active');
        icon.textContent = '▼';
    }
    
    // Ensure smooth animation by redrawing
    void content.offsetHeight;
}

function closeSidebarFunc() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Add click handlers
document.querySelectorAll('.clickable').forEach(element => {
    element.addEventListener('click', function() {
        const level = this.getAttribute('data-level');
        openSidebar(level);
    });
});

closeSidebar.addEventListener('click', closeSidebarFunc);
overlay.addEventListener('click', closeSidebarFunc);

// Toggle all sections expand/collapse
function toggleAllSections(expandAll) {
    const sections = document.querySelectorAll('.section-content');
    const btn = document.getElementById('toggle-all-btn');
    
    sections.forEach(section => {
        if (expandAll) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
    
    // Update icon for all toggle icons
    const icons = document.querySelectorAll('.toggle-icon');
    icons.forEach(icon => {
        icon.textContent = expandAll ? '▼' : '▶';
    });
    
    // Update button text
    btn.textContent = expandAll ? 'Collapse All' : 'Expand All';
}

// Add listener to toggle all button
document.getElementById('toggle-all-btn').addEventListener('click', function() {
    const allExpanded = document.querySelector('.section-content:not(.active)') === null;
    toggleAllSections(!allExpanded);
});

// Optional: Add hover effect
document.querySelectorAll('.clickable').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
    });
    element.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});