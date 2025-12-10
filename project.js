
const projectDataPage = {
  "float": {
    title: "FLOAT",
    trailerUrl: "https://www.youtube.com/watch?v=q4AvDntjlUA",

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
            <li>- Programmer</li>
            <li>- Visual Effects</li>
            <li>- Version Control & Collaboration</li>
          </ul>
        </div>
      </div>
      <div class="project-context-section">
        <h3>FLOAT</h3>
        <p>FLOAT connects entertainment with medical progress. In this Mixed Reality puzzle game, players interact using a wearable bracelet from Myomod. The gameplay sessions generate valuable muscle data, directly contributing to the improvement of arm prosthetic.</p>
      </div>
    `,
    images: ["./assets/project-1.1.jpg"], 

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
    ],
    achievements: [
      "Winner: Varjo Academic Giveaway Campaign",
      "Winner: HNU Werkschau | Best Game-Award",
      "Winner: Best Student Games Award | Meaningful Game",
      "Winner: German Multimedia Prize mb21 2025 | Main Award",
      "Exhibitor: Gamescom 2025 | Bussines Area",
      "Exhibitor: Gamescom 2025 | Entertainment Area",
      "Exhibitor: GermanDevDays 2025",
      "Exhibitor: Play! Con 2025",
      "Exhibitor: Hackerkiste Augsburg 2025",
      "Exhibitor: Next Reality Festival 2025",
      "Exhibitor: German Multimedia Prize mb21",
      "Exhibitor: TINCON 2025",
      "Nominee: XRC25 | Young Talent",
      "Nominee: XRC25 | Community Award",
      "Member: Meta Horizon Start Community"
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
            <li>- Unreal Engine 5</li>
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

  "Mercury": {
    title: "Mercury",
    trailerUrl: "https://www.youtube.com/watch?v=MaNCLFus59I",
    text: `
      <div class="project-meta-grid">
        <div class="meta-column">
          <h3>Project Scope</h3>
          <ul>
            <li>- Under Development </li>
            <li>- Team of 6 People</li>
            <li>- Unreal Engine 5</li>
          </ul>
        </div>
        <div class="meta-column">
          <h3>My Role</h3>
          <ul>
            <li>- Enemy AI Behavior</li>
            <li>- Combat System Implementation</li>
            <li>- Game State Management</li>
          </ul>
        </div>
      </div>
      <div class="project-context-section">
        <h3>MERCURY</h3>
        <p>MERCURY is a high-octane VR Mecha Brawler designed exclusively for hand tracking. It stands as the first game of its kind, allowing players to pilot a giant mech using intuitive physical gestures. The project focuses on immersive, fast-paced close-quarters combat without the need for controllers.</p>
      </div>
      <div class="glass-card" style="padding: 1rem; margin-top: 2rem;">
    <h3 style="margin-bottom: 0.5rem;">AI Behavior Tree Logic</h3>
    
    <div id="bt-container" style="overflow: hidden; border-radius: 12px; height: 500px; border: 1px solid rgba(255,255,255,0.2); cursor: grab; background: #1a1a1a;">
        
        <img id="bt-image" src="./assets/bt-full.png" alt="Unreal Engine Behavior Tree" style="width: 100%; height: auto; display: block;" />
        
    </div>
    
    <p style="margin-top: 0.5rem; font-size: 0.8rem; opacity: 0.7; text-align: center;">
        🔍 Mausrad zum Zoomen • Ziehen zum Bewegen
    </p>
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
  
  const imagesEl = document.querySelector('.modal-images');
  const textEl = document.querySelector('.modal-text');
  
  const galleryImagesEl = document.querySelector('.gallery-images');
  const achievementsContainer = document.querySelector('.achievements-list');
  const achievementsSection = document.getElementById('achievements-section');

  if (!data) {
    titleEl.textContent = 'Project not found';
    textEl.innerHTML = '<p>No details available for this project.</p>';
    return;
  }

  titleEl.textContent = data.title;
  if (trailerEl && data.trailerUrl) {
    const videoId = extractYouTubeId(data.trailerUrl);
    if (videoId) {
      trailerEl.src = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  imagesEl.innerHTML = '';
  (data.images || []).forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    imagesEl.appendChild(img);
  });
  textEl.innerHTML = data.text || '';

  galleryImagesEl.innerHTML = '';
  
  if (data.gallery && data.gallery.length > 0) {
    data.gallery.forEach(item => {
      const itemContainer = document.createElement('div');
      itemContainer.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = "Gallery Image";

      const caption = document.createElement('p');
      caption.textContent = item.caption;

      itemContainer.appendChild(img);
      itemContainer.appendChild(caption);

      galleryImagesEl.appendChild(itemContainer);
    });
  } else {
    galleryImagesEl.innerHTML = '<p>No gallery images available.</p>';
  }

  if (achievementsContainer && achievementsSection) {
    achievementsContainer.innerHTML = '';
    
    if (data.achievements && data.achievements.length > 0) {
      data.achievements.forEach(ach => {
        const li = document.createElement('li');
        li.textContent = ach;
        achievementsContainer.appendChild(li);
      });
      achievementsSection.style.display = 'block';
    } else {
      achievementsSection.style.display = 'none';
    }
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


document.getElementById('home-logo').addEventListener('click', function() {
  if (window.opener && !window.opener.closed) {
    window.close(); 
  } else {
    window.location.href = 'index.html'; 
  }
});

function navigateToSection(sectionId) {
  if (window.opener && !window.opener.closed) {

    const target = sectionId ? `index.html#${sectionId}` : 'index.html';
    window.opener.location.href = target;
    

    window.close();
  } else {

    const target = sectionId ? `index.html#${sectionId}` : 'index.html';
    window.location.href = target;
  }
}
