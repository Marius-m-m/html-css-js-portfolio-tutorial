function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// PROJECT DETAILS MODAL LOGIC
const projectData = {
  "float": {
    title: "FLOAT",
    text: `<p>FLOAT is a mixed-reality experience that blends virtual and physical interactions. Add more descriptive text here about your role, tech used, or highlights.</p>`,
    images: ["./assets/project-1.png"],
    galleryImages: ["./assets/project-1.png","./assets/project-1.png","./assets/project-1.png"],
    galleryText: `<p>Extended gallery and notes for FLOAT. Add screenshots, build notes, or step-by-step descriptions here.</p>`
  },
  "neo-tokyo": {
    title: "NEO TOKYO",
    text: `<p>NEO TOKYO is a fast-paced VR game with neon aesthetics. Add details about mechanics, challenges solved, or links to builds.</p>`,
    images: ["./assets/project-2.png"],
    galleryImages: ["./assets/project-2.png","./assets/project-2.png","./assets/project-2.png"],
    galleryText: `<p>Gallery for NEO TOKYO. Use this area to explain level design, assets, or development screenshots.</p>`
  },
  "mechavr": {
    title: "MechaVR",
    text: `<p>MechaVR is a VR mech experience. Describe features, your contributions, and any media or downloads.</p>`,
    images: ["./assets/project-3.png"],
    galleryImages: ["./assets/project-3.png","./assets/project-3.png","./assets/project-3.png"],
    galleryText: `<p>MechaVR gallery: large screenshots, control diagrams, and developer commentary belong here.</p>`
  }
};

function openModalForProject(id) {
  const modal = document.getElementById('project-modal');
  const titleEl = modal.querySelector('.modal-title');
  const textEl = modal.querySelector('.modal-text');
  const imagesEl = modal.querySelector('.modal-images');
  const galleryImagesEl = modal.querySelector('.gallery-images');
  const galleryTextEl = modal.querySelector('.gallery-text');

  // Reset tabs to Overview by default
  const tabs = modal.querySelectorAll('.modal-tabs .tab');
  tabs.forEach(t => {
    const isOverview = t.dataset.tab === 'overview';
    t.classList.toggle('active', isOverview);
    t.setAttribute('aria-selected', isOverview ? 'true' : 'false');
  });
  const panels = modal.querySelectorAll('.modal-panel');
  panels.forEach(p => {
    p.classList.toggle('hidden', p.dataset.panel !== 'overview');
  });

  const data = projectData[id];
  if (!data) return;

  titleEl.textContent = data.title;
  textEl.innerHTML = data.text;
  imagesEl.innerHTML = '';
  data.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    imagesEl.appendChild(img);
  });

  // populate gallery
  if (galleryImagesEl && galleryTextEl) {
    galleryImagesEl.innerHTML = '';
    (data.galleryImages || []).forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = data.title;
      galleryImagesEl.appendChild(img);
    });
    galleryTextEl.innerHTML = data.galleryText || '';
  }

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Close when clicking overlay or close button
document.addEventListener('click', (e) => {
  if (e.target.matches('[data-close]')) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Open modal when clicking the project image (replaces hover behavior)
function setupProjectImageClicks() {
  const images = document.querySelectorAll('.project-img');
  images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      const card = img.closest('.details-container');
      const btn = card ? card.querySelector('.details-btn') : null;
      const id = btn ? btn.dataset.project : card && card.dataset.project;
      if (id) openModalForProject(id);
      e.preventDefault();
    });
  });
}

// initialize click bindings once DOM is ready
function setupModalTabs() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  const tabButtons = modal.querySelectorAll('.modal-tabs .tab');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabButtons.forEach(b => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      const panels = modal.querySelectorAll('.modal-panel');
      panels.forEach(p => p.classList.toggle('hidden', p.dataset.panel !== target));
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setupProjectImageClicks();
    setupModalTabs();
  });
} else {
  setupProjectImageClicks();
  setupModalTabs();
}
