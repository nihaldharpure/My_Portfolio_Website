/* ==========================================
       FILE: script.js
       Cut everything between these comments
       and save as a separate script.js file
    ========================================== */

/* ---------- CONFIGURATION ---------- */
// Default configuration values for the portfolio
const defaultConfig = {
  developer_name: 'Nihal Dharpure',
  job_title: 'Full Stack Web Developer',
  subtitle: 'A Software Developer',
  location: 'Narendra Nagar Nagpur , Maharashtra, India',
  email: 'nihaldharpure@gmail.com',
  phone: '8854916769',
  linkedin_url: 'https://linkedin.com',
  github_url: 'https://github.com',
  about_text: "I'm a passionate Full Stack Web Developer with expertise in building modern, responsive web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust server-side solutions. I love turning complex problems into simple, beautiful, and intuitive designs.",
  background_color: '#000000',
  accent_color: '#FF6B35',
  secondary_accent: '#8B5CF6',
  text_color: '#FFFFFF',
  muted_text_color: '#A0A0A0',
  font_family: 'Outfit',
  font_size: 16
};

/* ---------- CONFIG CHANGE HANDLER ---------- */
// Updates all DOM elements when config changes
async function onConfigChange(config) {
  // Get values with fallbacks to defaults
  const name = config.developer_name || defaultConfig.developer_name;
  const jobTitle = config.job_title || defaultConfig.job_title;
  const subtitle = config.subtitle || defaultConfig.subtitle;
  const location = config.location || defaultConfig.location;
  const email = config.email || defaultConfig.email;
  const phone = config.phone || defaultConfig.phone;
  const linkedinUrl = config.linkedin_url || defaultConfig.linkedin_url;
  const githubUrl = config.github_url || defaultConfig.github_url;
  const aboutText = config.about_text || defaultConfig.about_text;
  const bgColor = config.background_color || defaultConfig.background_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const fontFamily = config.font_family || defaultConfig.font_family;
  const fontSize = config.font_size || defaultConfig.font_size;

  // Update Hero Section
  document.getElementById('hero-name').textContent = name;
  document.getElementById('hero-title').textContent = jobTitle;
  document.getElementById('hero-subtitle').textContent = subtitle;
  document.getElementById('linkedin-btn').href = linkedinUrl;
  document.getElementById('github-btn').href = githubUrl;

  // Update About Section
  document.getElementById('about-name').textContent = name;
  document.getElementById('about-role').textContent = jobTitle;
  const locationEl = document.getElementById('about-location');
  locationEl.innerHTML = `
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
    ${location}
  `;
  document.getElementById('about-description').textContent = aboutText;
  document.getElementById('about-linkedin').href = linkedinUrl;

  // Update Contact Section
  document.getElementById('contact-address').textContent = location;
  document.getElementById('contact-phone').textContent = phone;
  document.getElementById('contact-email').textContent = email;
  document.getElementById('social-linkedin').href = linkedinUrl;

  // Update Footer
  document.getElementById('footer-name').textContent = name;

  // Apply Global Styles
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
  document.body.style.fontFamily = `${fontFamily}, 'Outfit', sans-serif`;
  document.body.style.fontSize = `${fontSize}px`;
}

/* ---------- CAPABILITIES MAPPING ---------- */
// Maps config to editable capabilities (colors, fonts)
function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.muted_text_color || defaultConfig.muted_text_color,
        set: (value) => {
          config.muted_text_color = value;
          window.elementSdk.setConfig({ muted_text_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => {
          config.accent_color = value;
          window.elementSdk.setConfig({ accent_color: value });
        }
      },
      {
        get: () => config.secondary_accent || defaultConfig.secondary_accent,
        set: (value) => {
          config.secondary_accent = value;
          window.elementSdk.setConfig({ secondary_accent: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

/* ---------- EDIT PANEL VALUES MAPPING ---------- */
// Maps config to edit panel fields
function mapToEditPanelValues(config) {
  return new Map([
    ['developer_name', config.developer_name || defaultConfig.developer_name],
    ['job_title', config.job_title || defaultConfig.job_title],
    ['subtitle', config.subtitle || defaultConfig.subtitle],
    ['location', config.location || defaultConfig.location],
    ['email', config.email || defaultConfig.email],
    ['phone', config.phone || defaultConfig.phone],
    ['linkedin_url', config.linkedin_url || defaultConfig.linkedin_url],
    ['github_url', config.github_url || defaultConfig.github_url],
    ['about_text', config.about_text || defaultConfig.about_text]
  ]);
}

/* ---------- SDK INITIALIZATION ---------- */
// Initialize the Element SDK if available
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

/* ---------- MOBILE MENU FUNCTIONALITY ---------- */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility
mobileMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
  });
});

/* ---------- SMOOTH SCROLL NAVIGATION ---------- */
// Enable smooth scrolling for all anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ---------- SCROLL ANIMATIONS ---------- */
// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply initial hidden state and observe sections
const sections = document.querySelectorAll('section');
sections.forEach(function(section) {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Make home section visible immediately
const homeSection = document.getElementById('home');
homeSection.style.opacity = '1';
homeSection.style.transform = 'translateY(0)';

/* ==========================================
  END OF script.js
========================================== */