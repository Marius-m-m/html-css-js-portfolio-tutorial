// Project page script: populate Overview and Gallery from query param `project`
const projectDataPage = {
  "float": {
    title: "FLOAT",
    text: `<p>FLOAT is a mixed-reality experience that blends virtual and physical interactions. I worked on the interaction system, performance optimization, and shader work to create smooth transitions between virtual objects and the physical environment.</p>
           <p>Technical highlights: built with Unity, custom rendering pipeline tweaks, and spatial mapping integrations. Below you can see several screenshots and build notes.</p>`,
    images: ["./assets/project-1.png"],
    galleryImages: [
      "./assets/project-1.png",
      "./assets/project-1.png",
      "./assets/project-1.png",
      "./assets/project-1.png",
      "./assets/project-1.png",
      "./assets/project-1.png"
    ],
    galleryText: `<p>Extended gallery and notes for FLOAT. Add screenshots, build notes, or step-by-step descriptions here. Include annotations about controls, scene setup, and useful links for builds or downloads.</p>`
  },
  "neo-tokyo": {
    title: "NEO TOKYO",
    text: `<p>NEO TOKYO is a fast-paced VR game with neon aesthetics. I implemented core gameplay mechanics, input handling for motion controllers, and a custom audio-reactive environment.</p>
           <p>Design notes: focus on short-session gameplay and strong visual feedback. Below are development screenshots and notes on asset pipelines.</p>`,
    images: ["./assets/project-2.png"],
    galleryImages: [
      "./assets/project-2.png",
      "./assets/project-2.png",
      "./assets/project-2.png",
      "./assets/project-2.png",
      "./assets/project-2.png"
    ],
    galleryText: `<p>Gallery for NEO TOKYO. Use this area to explain level design, assets, or development screenshots. Add notes about lighting, performance, and art direction.</p>`
  },
  "mechavr": {
    title: "MechaVR",
    text: `<p>MechaVR is a VR mech experience. I worked on vehicle control systems, haptics integration, and multiplayer syncing for durable mech battles.</p>
           <p>Notes: complex input mapping, weapon systems, and procedural animation blending were key challenges. See the gallery for screenshots and diagrams.</p>`,
    images: ["./assets/project-3.png"],
    galleryImages: [
      "./assets/project-3.png",
      "./assets/project-3.png",
      "./assets/project-3.png",
      "./assets/project-3.png"
    ],
    galleryText: `<p>MechaVR gallery: large screenshots, control diagrams, and developer commentary belong here. Include links to documentation, build notes, and credits.</p>`
  }
};

function getQueryProject() {
  const params = new URLSearchParams(window.location.search);
  return params.get('project');
}

function populateProjectPage(id) {
  const data = projectDataPage[id];
  const titleEl = document.getElementById('project-title');
  const imagesEl = document.querySelector('.modal-images');
  const textEl = document.querySelector('.modal-text');
  const galleryImagesEl = document.querySelector('.gallery-images');
  const galleryTextEl = document.querySelector('.gallery-text');

  if (!data) {
    titleEl.textContent = 'Project not found';
    textEl.innerHTML = '<p>No details available for this project.</p>';
    return;
  }

  titleEl.textContent = data.title;
  imagesEl.innerHTML = '';
  (data.images || []).forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    img.style.width = '100%';
    img.style.borderRadius = '8px';
    // make the primary (first) image larger
    if (i === 0) img.style.maxWidth = '520px';
    imagesEl.appendChild(img);
  });
  textEl.innerHTML = data.text || '';

  galleryImagesEl.innerHTML = '';
  (data.galleryImages || []).forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    galleryImagesEl.appendChild(img);
  });
  galleryTextEl.innerHTML = data.galleryText || '';
}

function setupTabs() {
  const tabButtons = document.querySelectorAll('.modal-tabs .tab');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabButtons.forEach(b => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      const panels = document.querySelectorAll('.modal-panel');
      panels.forEach(p => p.classList.toggle('hidden', p.dataset.panel !== target));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getQueryProject();
  populateProjectPage(id);
  setupTabs();
});
