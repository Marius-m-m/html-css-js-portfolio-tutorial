// Project page script: populate Overview and Gallery from query param `project`
const projectDataPage = {
  "float": {
    title: "FLOAT",
    trailerUrl: "https://www.youtube.com/watch?v=q4AvDntjlUA",
    // OVERVIEW BEREICH
    text: `
      <div class="project-meta-grid">
        <div class="meta-column">
          <h3>Project Scope</h3>
          <ul>
            <li>- 3rd Semester Project</li>
            <li>- Team of 6 People</li>
            <li>- Unreal Engine 5</li>
          </ul>
        </div>
        <div class="meta-column">
          <h3>My Role</h3>
          <ul>
            <li>- Main Programmer</li>
            <li>- Shader Development</li>
            <li>- Tool Programming</li>
          </ul>
        </div>
      </div>
      <div class="project-context-section">
        <h3>The Context</h3>
        <p>Placeholder text for the overview context. Describe the main challenges here.</p>
      </div>
    `,
    images: ["./assets/project-1.png"], // Hauptbild(er) für Overview

    // NEUE GALERIE STRUKTUR: BILD + TEXT PAARE
    gallery: [
      {
        src: "./assets/project-1.png",
        caption: "Placeholder text for Image 1. Explain what is happening in this specific screenshot or blueprint."
      },
      {
        src: "./assets/project-1.png",
        caption: "Placeholder text for Image 2. Maybe explain a specific code snippet shown above."
      },
      {
        src: "./assets/project-1.png",
        caption: "Placeholder text for Image 3. Detail regarding the level design or lighting."
      }
    ]
  },

  "neo-tokyo": {
    title: "NEO TOKYO",
    trailerUrl: "https://www.youtube.com/watch?v=Vg8SspmbAuc",
    text: `
      <div class="project-meta-grid">
        <div class="meta-column">
          <h3>Project Scope</h3>
          <ul>
            <li>- Game Jam Project</li>
            <li>- 48 Hours</li>
            <li>- Unity</li>
          </ul>
        </div>
        <div class="meta-column">
          <h3>My Role</h3>
          <ul>
            <li>- Gameplay Programmer</li>
            <li>- UI Implementation</li>
            <li>- Sound Integration</li>
          </ul>
        </div>
      </div>
      <div class="project-context-section">
        <h3>The Context</h3>
        <p>Placeholder text for Neo Tokyo overview.</p>
      </div>
    `,
    images: ["./assets/project-2.png"],
    
    gallery: [
      {
        src: "./assets/project-2.png",
        caption: "Placeholder description for the Neo Tokyo gameplay screenshot."
      },
      {
        src: "./assets/project-2.png",
        caption: "Placeholder description explaining the neon shader effects."
      },
      {
        src: "./assets/project-2.png",
        caption: "Placeholder description for the character controller logic."
      }
    ]
  },

  "mechavr": {
    title: "MechaVR",
    trailerUrl: "https://www.youtube.com/watch?v=q4AvDntjlUA",
    text: `
      <div class="project-meta-grid">
        <div class="meta-column">
          <h3>Project Scope</h3>
          <ul>
            <li>- Bachelor Thesis</li>
            <li>- Solo Project</li>
            <li>- VR Hardware</li>
          </ul>
        </div>
        <div class="meta-column">
          <h3>My Role</h3>
          <ul>
            <li>- Full Stack Dev</li>
            <li>- Hardware Integration</li>
            <li>- Optimization</li>
          </ul>
        </div>
      </div>
      <div class="project-context-section">
        <h3>The Context</h3>
        <p>Placeholder text for MechaVR overview.</p>
      </div>
    `,
    images: ["./assets/project-3.png"],

    gallery: [
      {
        src: "./assets/project-3.png",
        caption: "Placeholder text describing the mech cockpit view."
      },
      {
        src: "./assets/project-3.png",
        caption: "Placeholder text explaining the input mapping system."
      }
    ]
  }
};

function getQueryProject() {
  const params = new URLSearchParams(window.location.search);
  return params.get('project');
}

function extractYouTubeId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function populateProjectPage(id) {
  const data = projectDataPage[id];
  const titleEl = document.getElementById('project-title');
  const trailerEl = document.getElementById('project-trailer');
  
  // Overview Elements
  const imagesEl = document.querySelector('.modal-images');
  const textEl = document.querySelector('.modal-text');
  
  // Gallery Elements
  const galleryImagesEl = document.querySelector('.gallery-images');
  // Note: We don't need .gallery-text anymore because text is now attached to images

  if (!data) {
    titleEl.textContent = 'Project not found';
    textEl.innerHTML = '<p>No details available for this project.</p>';
    return;
  }

  /* --- 1. SET TITLE & TRAILER --- */
  titleEl.textContent = data.title;
  if (trailerEl && data.trailerUrl) {
    const videoId = extractYouTubeId(data.trailerUrl);
    if (videoId) {
      trailerEl.src = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  /* --- 2. POPULATE OVERVIEW TAB --- */
  imagesEl.innerHTML = '';
  (data.images || []).forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    imagesEl.appendChild(img);
  });
  textEl.innerHTML = data.text || '';

  /* --- 3. POPULATE GALLERY TAB (New Logic) --- */
  galleryImagesEl.innerHTML = '';
  
  if (data.gallery && data.gallery.length > 0) {
    // Loop through the new object structure
    data.gallery.forEach(item => {
      // Create a container for the Pair (Image + Text)
      const itemContainer = document.createElement('div');
      itemContainer.className = 'gallery-item';

      // Create Image
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = "Gallery Image";

      // Create Caption Text
      const caption = document.createElement('p');
      caption.textContent = item.caption;

      // Append to container
      itemContainer.appendChild(img);
      itemContainer.appendChild(caption);

      // Append container to main gallery div
      galleryImagesEl.appendChild(itemContainer);
    });
  } else {
    galleryImagesEl.innerHTML = '<p>No gallery images available.</p>';
  }
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