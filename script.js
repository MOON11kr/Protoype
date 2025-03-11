// Function to load Home content
function loadHome() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section id="home">
            <h2 class="section-heading">Welcome to Career</h2>
            <div class="video-container">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229144731/d1.webp" class="images">
                <div class="video-description">
                    <div class="channel-dp-container-2">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229150325/dm1.jpeg" class="channel-dp-2">
                    </div>
                    <div class="video-details">
                        <a href="#" class="video-title">Top Career Opportunities</a>
                        <a href="#" class="channel-name">Career Hub</a>
                        <a href="#" class="views">1.5M views</a>
                        <i class="fas fa-circle"></i>
                        <a href="#" class="time">2 weeks ago</a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Function to load Entrepreneurship & Business content
function loadEntrepreneurship() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section id="entrepreneurship">
            <h2 class="section-heading">Entrepreneurship & Business</h2>
            <!-- Spotlight Section -->
            <div class="spotlight">
                <div class="spotlight-container">Ad 1</div>
                <div class="spotlight-container">Ad 2</div>
                <div class="spotlight-container">Ad 3</div>
            </div>
            <!-- Section 1: Law, Finance, Taxes, Government Schemes -->
            <div class="section">
                <h3>Law, Finance, Taxes, Government Schemes</h3>
                <div class="video-container">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229144731/d1.webp" class="images">
                    <div class="video-description">
                        <div class="channel-dp-container-2">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229150325/dm1.jpeg" class="channel-dp-2">
                        </div>
                        <div class="video-details">
                            <a href="#" class="video-title">Starting Your Own Business</a>
                            <a href="#" class="channel-name">Business Daily</a>
                            <a href="#" class="views">1.5M views</a>
                            <i class="fas fa-circle"></i>
                            <a href="#" class="time">2 weeks ago</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section 2: Projects (Practice, Research) -->
            <div class="section">
                <h3>Projects (Practice, Research)</h3>
                <div class="video-container">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229145100/d2.webp" class="images">
                    <div class="video-description">
                        <div class="channel-dp-container-2">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229150542/dm2.webp" class="channel-dp-2">
                        </div>
                        <div class="video-details">
                            <a href="#" class="video-title">Scaling Your Startup</a>
                            <a href="#" class="channel-name">Startup World</a>
                            <a href="#" class="views">800K views</a>
                            <i class="fas fa-circle"></i>
                            <a href="#" class="time">1 month ago</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section 3: Student Initiatives, Startups, Incubators, Schemes -->
            <div class="section">
                <h3>Student Initiatives, Startups, Incubators, Schemes</h3>
                <div class="video-container">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229145216/d3.jpeg" class="images">
                    <div class="video-description">
                        <div class="channel-dp-container-2">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229150325/dm1.jpeg" class="channel-dp-2">
                        </div>
                        <div class="video-details">
                            <a href="#" class="video-title">Introduction to AI</a>
                            <a href="#" class="channel-name">Tech World</a>
                            <a href="#" class="views">2M views</a>
                            <i class="fas fa-circle"></i>
                            <a href="#" class="time">1 month ago</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Function to save data to local storage
function saveToLocalStorage(data) {
    let projects = JSON.parse(localStorage.getItem('projects')) || []; // Get existing projects or initialize an empty array
    projects.push(data); // Add the new project
    localStorage.setItem('projects', JSON.stringify(projects)); // Save back to local storage
}

// Function to load data from local storage
function loadFromLocalStorage() {
    const projects = JSON.parse(localStorage.getItem('projects')) || []; // Get projects from local storage
    const cardsContainer = document.getElementById('cards-container');
    
    // Clear existing cards
    cardsContainer.innerHTML = '';

    // Loop through projects and create cards
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <div class="stage-tag ${project.stage.toLowerCase()}">${project.stage}</div>
            ${project.imageUrl ? `<div class="card-image" style="background-image: url('${project.imageUrl}');"></div>` : ''}
            <h3>${project.title}</h3>
            <p><strong>Description:</strong> ${project.description}</p>
            <p><strong>Category:</strong> ${project.category}</p>
            <p><strong>Created by:</strong> ${project.creator}</p>
            <p><strong>Team Members:</strong> ${project.teamMembers}</p>
            <p><strong>Contact:</strong> <a href="mailto:${project.email}" class="email-link">${project.email}</a></p>
            <p><strong>Discord:</strong> <a href="${project.discord}" target="_blank" class="discord-link">Join Discord</a></p>
            <p><strong>Other Contact:</strong> <a href="${project.contact}" target="_blank" class="contact-link">${project.contact}</a></p>
        `;
        cardsContainer.appendChild(card);
    });
}

// Handle form submission
document.getElementById('submit-idea').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const stage = document.getElementById('stage').value;
    const creator = document.getElementById('creator').value;
    const teamMembers = document.getElementById('team-members').value;
    const email = document.getElementById('email').value;
    const discord = document.getElementById('discord').value;
    const contact = document.getElementById('contact').value;
    const imageUrl = document.getElementById('image-url').value;

    // Create a project object
    const project = {
        title,
        description,
        category,
        stage,
        creator,
        teamMembers,
        email,
        discord,
        contact,
        imageUrl
    };

    // Save to local storage
    saveToLocalStorage(project);

    // Reload cards from local storage
    loadFromLocalStorage();

    // Reset the form and hide it
    document.getElementById('submit-idea').reset();
    document.getElementById('idea-form').classList.add('hidden');
});

// Load projects from local storage when the page loads
window.addEventListener('load', function() {
    loadFromLocalStorage();
});
function renderEventsSection() {
    return `
      <section id="events">
        <h2 class="section-heading">Events, Seminars & Competitions</h2>
        <div class="events-container">
          <!-- Event Card 1 -->
          <div class="event-card">
            <a href="https://example.com/register-event1" target="_blank">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229144731/d1.webp" alt="Event Poster">
            </a>
            <div class="event-details">
              <h3>Webinar: Alliances & Marketing</h3>
              <p>Join us for an insightful webinar on alliances and marketing in modern businesses.</p>
              <a href="https://example.com/register-event1" class="register-link" target="_blank">Register Now</a>
            </div>
          </div>
  
          <!-- Event Card 2 -->
          <div class="event-card">
            <a href="https://example.com/register-event2" target="_blank">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229145100/d2.webp" alt="Event Poster">
            </a>
            <div class="event-details">
              <h3>Hackathon: Code for Good</h3>
              <p>Participate in a 48-hour hackathon to solve real-world problems.</p>
              <a href="https://example.com/register-event2" class="register-link" target="_blank">Register Now</a>
            </div>
          </div>
  
          <!-- Event Card 3 -->
          <div class="event-card">
            <a href="https://example.com/register-event3" target="_blank">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231229145216/d3.jpeg" alt="Event Poster">
            </a>
            <div class="event-details">
              <h3>Networking Session: Meet Industry Leaders</h3>
              <p>Connect with industry leaders and expand your professional network.</p>
              <a href="https://example.com/register-event3" class="register-link" target="_blank">Register Now</a>
            </div>
          </div>
  
          <!-- Event Card 4 -->
          <div class="event-card">
            <a href="https://example.com/register-event4" target="_blank">
              <img src="https://via.placeholder.com/150" alt="Event Poster">
            </a>
            <div class="event-details">
              <h3>Workshop: Digital Marketing</h3>
              <p>Learn the latest trends in digital marketing and grow your business online.</p>
              <a href="https://example.com/register-event4" class="register-link" target="_blank">Register Now</a>
            </div>
          </div>
  
          <!-- Event Card 5 -->
          <div class="event-card">
            <a href="https://example.com/register-event5" target="_blank">
              <img src="https://via.placeholder.com/150" alt="Event Poster">
            </a>
            <div class="event-details">
              <h3>Seminar: AI in Healthcare</h3>
              <p>Explore how AI is transforming the healthcare industry.</p>
              <a href="https://example.com/register-event5" class="register-link" target="_blank">Register Now</a>
            </div>
          </div>
  
          <!-- Event Card 6 -->
          <div class="event-card">
            <a href="https://example.com/register-event6" target="_blank">
              <img src="https://via.placeholder.com/150" alt="Event Poster">
            </a>
            <div class="event-details">
              <h3>Conference: Future of Work</h3>
              <p>Discover the future of work in a post-pandemic world.</p>
              <a href="https://example.com/register-event6" class="register-link" target="_blank">Register Now</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const fab = document.getElementById('fab');
    const fabToggle = document.getElementById('fab-toggle');

    fabToggle.addEventListener('click', () => {
        fab.classList.toggle('open');
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('side-bar-section');
  const homeButton = document.getElementById('home-button');
  const sidebarClose = document.getElementById('sidebar-close');

  // Toggle sidebar open when home button is clicked
  homeButton.addEventListener('click', () => {
      sidebar.classList.add('open');
  });

  // Toggle sidebar closed when close button (X) is clicked
  sidebarClose.addEventListener('click', () => {
      sidebar.classList.remove('open');
  });
});
function toggleMenu() {
  const iconContainer = document.getElementById('icon-container');
  iconContainer.classList.toggle('active');
}