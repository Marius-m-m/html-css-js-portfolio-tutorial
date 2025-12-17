const projectDataPage = {
  "float": {
    title: "FLOAT",
    trailerUrl: "./assets/Trailer_Float.mp4",

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
            <li>- Gameplay Programming</li>
            <li>- VFX Implementation</li>
            <li>- Repository Management & Tools</li>
          </ul>
        </div>
      </div>
      <div class="project-context-section">
        <h3>FLOAT</h3>
        <p>FLOAT utilizes VR Hand Tracking for immersive puzzle gameplay to gather medical data. By wearing the Myomod bracelet during play, users generate muscle data without extra effort, directly contributing to the development of better arm prosthetics.</p>
      </div>
    `,
    images: ["./assets/project-1.1.jpg"], 

    gallery: [
      {
        src: "./assets/Walk.mp4",
        caption: "Footstep VFX Spawner Triggered by movement. Applies random rotation & scale to meshes to create organic variety."
      },
      {
        src: "./assets/Butterfly.mp4",
        caption: "Interactive Butterfly Swarm Tech: Reactive ambient particles that flee from player input (Hand-Collider). Flight animation is handled via shader based vertex displacement on simple planes to maximize performance while maintaining gameplay interactivity."
      },
      {
        src: "./assets/Fireworks.mp4",
        caption: "Event Driven Firework System Tech: A multi stage system where a leader particle drives secondary emitters. Uses event payloads to pass position and color data from the rocket to the trails and explosion, ensuring synchronized timing and visual consistency without hardcoded values."
      },
       {
        src: "./assets/Fish.mp4",
        caption: "Vertex Animated Fish Swarm Tech: The swimming motion is purely mathematical (Vertex Displacement Shader) eliminating the need for expensive skeletal rigs. Movement is driven by Niagara attraction forces for organic flow."
      }
    ],
achievements: [
      {
        text: "Winner: Varjo Academic Giveaway Campaign",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7334126257871175680/"
      },
      {
        text: "Winner: Best Student Games Award | Meaningful Game",
        link: "https://www.studentgamesfestival.com/2025-winners"
      },
      {
        text: "Winner: German Multimedia Prize mb21 2025 | Main Award",
        link: "https://www.mb21.de/wettbewerbsjahr_2025.html?articles=float"
      },
      {
        text: "Nominee: XRC25 | Young Talent",
        link: "https://nextrealitycontest.de/de/nominierte/nominierte-2025/"
      },
      {
        text: "Nominee: XRC25 | Community Award",
        link: "https://nextrealitycontest.de/de/nominierte/nominierte-2025/"
      },
      {
        text: "Exhibitor: Gamescom 2025 | Business Area",
        link: "https://www.games-bavaria.com/gamescom-2025/"
      },
      {
        text: "Exhibitor: Gamescom 2025 | Entertainment Area",
        link: "https://rawtalentbooth.com/"
      },
      {
        text: "Exhibitor: GermanDevDays 2025",
        link: "https://germandevdays.com/exhibitors"
      },
      {
        text: "Exhibitor: Play! Con 2025",
        link: "https://play-con.de/ausstellerinnen-2025-neuulm/"
      },
      {
        text: "Exhibitor: Next Reality Festival 2025",
        link: "https://nextrealityfestival.com/aussteller/float/"
      },

      "Winner: HNU Werkschau | Best Game-Award",
      "Exhibitor: Hackerkiste Augsburg 2025",
      "Exhibitor: TINCON 2025",
      "Member: Meta Horizon Start Community"
    ]
  },
  "neo-tokyo": {
    title: "NEO TOKYO",
    trailerUrl: "./assets/Trailer_Neo_Tokyo.mp4",
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
          </ul>
        </div>
      </div>
      <div class="project-context-section">
        <h3>NEO TOKYO</h3>
        <p>NEO TOKYO is an endless VR wave shooter set in a stylized cyberpunk metropolis. Players defend against increasingly difficult swarms of police drones, utilizing a strategic shop system between rounds to upgrade weapons and stats for infinite progression..</p>
      </div>
    `,
    images: ["./assets/project2.1.png"],
    
    gallery: [
      {
        src: "./assets/project2.2.mp4",
      },
    ],
achievements: [
      {
        text: "Exhibitor: Game Connect 2025 - Bayern meets Hessen ",
        link: "https://events.games-bavaria.com/event/%F0%9F%8E%AE-hessen-meets-bayern-game-connect-2025/"
      },
      {
        text: "Exhibitor: HNU Werkschau",
      },
      {
        text: "Winner: 2. HNU Game Jam",
      },
    ]
  },

  "Mercury": {
    title: "Mercury",
    trailerUrl: "./assets/Trailer_Mercury.mp4",
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

      <div style="margin-top: 2rem;">
          <h3 style="margin-bottom: 0.5rem;">AI Behavior Tree Logic</h3>
          
          <div id="bt-container" style="display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 12px; height: 500px; cursor: grab; border: 1px solid rgba(255,255,255,0.2); background: #1a1a1a; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
              
              <img id="bt-image" src="./assets/bt-full.png" alt="Unreal Engine Behavior Tree" style="max-width: 100%; max-height: 100%; width: auto; height: auto; display: block; transform-origin: center center;" />
          </div>
          
          <p style="margin-top: 1rem;">
              Enemy AI Architecture Tech: Blackboard driven Behavior Tree. Manages the complete decision making hierarchy of the enemy Mech, handling state transitions between patrolling, target acquisition, and melee combat engagement.
          </p>
      </div>
    `,

    gallery: [
      {
        src: "https://blueprintue.com/render/lrxabwo3/",
        caption: "Hybrid Physics Reaction System Tech: Applies localized impulses to hit bones and simulates physics below the hips for realistic impact staggering. Includes a custom recovery logic that monitors pose stability in Tick and blends back to kinematic animation once the actor is balanced.",
        isBlueprint: true 
      },
      {
        src: "https://blueprintue.com/render/435xr683/",
        caption: "Modular Health & Damage Component Tech: A universal Actor Component designed for high reusability. Decouples damage logic from specific classes, allowing any actor to process health events and destruction simply by attaching this component.",
        isBlueprint: true
      }
    ],
    achievements: [
      {
        text: "Participant: Meta Horizon Start Developer Competition",
        link: "https://devpost.com/software/mercury-05i6ty?ref_content=my-projects-tab&ref_feature=my_projects"
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
const flowerHTML = `
  <div id="clouds">
    <div class="cloud x1"></div>
    <div class="cloud x2"></div>
    <div class="cloud x3"></div>
    <div class="cloud x4"></div>
  </div>

  <div class="night"></div>
  <div class="flowers">
    <div class="flower flower--1">
      <div class="flower__leafs flower__leafs--1">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>
      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
        <div class="flower__line__leaf flower__line__leaf--5"></div>
        <div class="flower__line__leaf flower__line__leaf--6"></div>
      </div>
    </div>
    <div class="flower flower--2">
      <div class="flower__leafs flower__leafs--2">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>
      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
      </div>
    </div>
    <div class="flower flower--3">
      <div class="flower__leafs flower__leafs--3">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>
      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
      </div>
    </div>
    <div class="grow-ans" style="--d:1.2s">
      <div class="flower__g-long">
        <div class="flower__g-long__top"></div>
        <div class="flower__g-long__bottom"></div>
      </div>
    </div>
    <div class="growing-grass">
      <div class="flower__grass flower__grass--1">
        <div class="flower__grass--top"></div>
        <div class="flower__grass--bottom"></div>
        <div class="flower__grass__leaf flower__grass__leaf--1"></div>
        <div class="flower__grass__leaf flower__grass__leaf--2"></div>
        <div class="flower__grass__leaf flower__grass__leaf--3"></div>
        <div class="flower__grass__leaf flower__grass__leaf--4"></div>
        <div class="flower__grass__leaf flower__grass__leaf--5"></div>
        <div class="flower__grass__leaf flower__grass__leaf--6"></div>
        <div class="flower__grass__leaf flower__grass__leaf--7"></div>
        <div class="flower__grass__leaf flower__grass__leaf--8"></div>
        <div class="flower__grass__overlay"></div>
      </div>
    </div>
    <div class="growing-grass">
      <div class="flower__grass flower__grass--2">
        <div class="flower__grass--top"></div>
        <div class="flower__grass--bottom"></div>
        <div class="flower__grass__leaf flower__grass__leaf--1"></div>
        <div class="flower__grass__leaf flower__grass__leaf--2"></div>
        <div class="flower__grass__leaf flower__grass__leaf--3"></div>
        <div class="flower__grass__leaf flower__grass__leaf--4"></div>
        <div class="flower__grass__leaf flower__grass__leaf--5"></div>
        <div class="flower__grass__leaf flower__grass__leaf--6"></div>
        <div class="flower__grass__leaf flower__grass__leaf--7"></div>
        <div class="flower__grass__leaf flower__grass__leaf--8"></div>
        <div class="flower__grass__overlay"></div>
      </div>
    </div>
    <div class="grow-ans" style="--d:2.4s">
      <div class="flower__g-right flower__g-right--1">
        <div class="leaf"></div>
      </div>
    </div>
    <div class="grow-ans" style="--d:2.8s">
      <div class="flower__g-right flower__g-right--2">
        <div class="leaf"></div>
      </div>
    </div>
    <div class="grow-ans" style="--d:2.8s">
      <div class="flower__g-front">
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1"><div class="flower__g-front__leaf"></div></div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2"><div class="flower__g-front__leaf"></div></div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3"><div class="flower__g-front__leaf"></div></div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4"><div class="flower__g-front__leaf"></div></div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5"><div class="flower__g-front__leaf"></div></div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6"><div class="flower__g-front__leaf"></div></div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7"><div class="flower__g-front__leaf"></div></div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8"><div class="flower__g-front__leaf"></div></div>
        <div class="flower__g-front__line"></div>
      </div>
    </div>
    <div class="grow-ans" style="--d:3.2s">
      <div class="flower__g-fr">
        <div class="leaf"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
      </div>
    </div>
    <div class="long-g long-g--0">
      <div class="grow-ans" style="--d:3s"><div class="leaf leaf--0"></div></div>
      <div class="grow-ans" style="--d:2.2s"><div class="leaf leaf--1"></div></div>
      <div class="grow-ans" style="--d:3.4s"><div class="leaf leaf--2"></div></div>
      <div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div>
    </div>
    <div class="long-g long-g--1">
      <div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--0"></div></div>
      <div class="grow-ans" style="--d:3.8s"><div class="leaf leaf--1"></div></div>
      <div class="grow-ans" style="--d:4s"><div class="leaf leaf--2"></div></div>
      <div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--3"></div></div>
    </div>
    <div class="long-g long-g--2">
      <div class="grow-ans" style="--d:4s"><div class="leaf leaf--0"></div></div>
      <div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--1"></div></div>
      <div class="grow-ans" style="--d:4.4s"><div class="leaf leaf--2"></div></div>
      <div class="grow-ans" style="--d:4.6s"><div class="leaf leaf--3"></div></div>
    </div>
    <div class="long-g long-g--3">
      <div class="grow-ans" style="--d:4s"><div class="leaf leaf--0"></div></div>
      <div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--1"></div></div>
      <div class="grow-ans" style="--d:3s"><div class="leaf leaf--2"></div></div>
      <div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div>
    </div>
    <div class="long-g long-g--4">
      <div class="grow-ans" style="--d:4s"><div class="leaf leaf--0"></div></div>
      <div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--1"></div></div>
      <div class="grow-ans" style="--d:3s"><div class="leaf leaf--2"></div></div>
      <div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div>
    </div>
    <div class="long-g long-g--5">
      <div class="grow-ans" style="--d:4s"><div class="leaf leaf--0"></div></div>
      <div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--1"></div></div>
      <div class="grow-ans" style="--d:3s"><div class="leaf leaf--2"></div></div>
      <div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div>
    </div>
    <div class="long-g long-g--6">
      <div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--0"></div></div>
      <div class="grow-ans" style="--d:4.4s"><div class="leaf leaf--1"></div></div>
      <div class="grow-ans" style="--d:4.6s"><div class="leaf leaf--2"></div></div>
      <div class="grow-ans" style="--d:4.8s"><div class="leaf leaf--3"></div></div>
    </div>
    <div class="long-g long-g--7">
      <div class="grow-ans" style="--d:3s"><div class="leaf leaf--0"></div></div>
      <div class="grow-ans" style="--d:3.2s"><div class="leaf leaf--1"></div></div>
      <div class="grow-ans" style="--d:3.5s"><div class="leaf leaf--2"></div></div>
      <div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div>
    </div>
`;
// --- NEUER MECH HUD WIDGET CODE ---
const mercuryHTML = `
  <div id="mech-widget">
    <div class="ring-outer"></div>
    <div class="ring-inner"></div>
    <div class="core-glow"></div>
    <div class="orbital-dot d1"></div>
    <div class="orbital-dot d2"></div>
    <div class="tech-label">SYSTEM: <span class="blink">ONLINE</span></div>
  </div>
`;
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
  
  const trailerContainer = document.getElementById('trailer-container');
  
  if (trailerContainer) {
    trailerContainer.innerHTML = ''; 

    if (data.trailerUrl) {
      if (data.trailerUrl.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = data.trailerUrl;
        video.controls = true; 
        video.autoplay = false; 
        
        trailerContainer.appendChild(video);
      } 
      else {
        const videoId = extractYouTubeId(data.trailerUrl);
        if (videoId) {
          const iframe = document.createElement('iframe');
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
          
          trailerContainer.appendChild(iframe);
        }
      }
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

  if (id === 'float') {
    galleryImagesEl.className = 'gallery-images float-grid-mode';
  } else {
    galleryImagesEl.className = 'gallery-images'; 
  }
  if (data.gallery && data.gallery.length > 0) {
    data.gallery.forEach(item => {
      const itemContainer = document.createElement('div');
      itemContainer.className = 'gallery-item';

      if (item.src.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = item.src;
        
        video.autoplay = true;
        video.loop = true;
        video.muted = true;     
        video.playsInline = true; 
        video.controls = true;  
        
        itemContainer.appendChild(video);
      } 

      else if (item.isBlueprint) {
        const iframeContainer = document.createElement('div');
        iframeContainer.style.cssText = `
            width: 100%; height: 500px; border-radius: 12px; overflow: hidden; 
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 4px 30px rgba(0,0,0,0.1); background: #212121;
        `;
        const iframe = document.createElement('iframe');
        iframe.src = item.src;
        iframe.style.cssText = "width: 100%; height: 100%; border: none;";
        iframe.scrolling = "no"; 
        iframe.allowFullscreen = true;
        iframeContainer.appendChild(iframe);
        itemContainer.appendChild(iframeContainer);

      } else if (item.isZoomable) {
         const img = document.createElement('img');
         img.src = item.src;
         img.alt = "Zoomable Image";
         itemContainer.appendChild(img);
      } else {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = "Gallery Image";
        itemContainer.appendChild(img);
      }

      if (item.caption) {
        const caption = document.createElement('p');
        caption.textContent = item.caption;
        caption.style.marginTop = "1rem";
        itemContainer.appendChild(caption);
      }
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
        
        if (typeof ach === 'object' && ach.link) {
            const link = document.createElement('a');
            link.href = ach.link;
            link.target = "_blank"; 
            link.textContent = ach.text;
            link.className = "achievement-link"; 
            li.appendChild(link);
        } 
        else if (typeof ach === 'object') {
            li.textContent = ach.text;
        }

        else {
            li.textContent = ach;
        }
        
        achievementsContainer.appendChild(li);
      });
      achievementsSection.style.display = 'block';
    } else {
      achievementsSection.style.display = 'none';
    }
    
    if (typeof initPanzoom === 'function') {
        setTimeout(initPanzoom, 100);
    }
    // ... existierender Code ...

  // FLOWER INJECTION LOGIC
// --- HIER DIE LOGIK EINFÜGEN ---
  
  // 1. Container suchen oder erstellen
  let animContainer = document.getElementById('flower-container');
  if (!animContainer) {
    animContainer = document.createElement('div');
    animContainer.id = 'flower-container';
    document.body.appendChild(animContainer);
  }

  // 2. Container leeren und resetten
  animContainer.innerHTML = '';
  animContainer.classList.remove('active');

  // 3. Je nach Projekt den richtigen Code einfügen
  if (id === 'float') {
    animContainer.innerHTML = flowerHTML; // Nutzt die Blumen & Wolken Variable
    animContainer.classList.add('active');
  } 
  else if (id === 'Mercury') {
    animContainer.innerHTML = mercuryHTML; // Nutzt die neue Widget Variable
    animContainer.classList.add('active');
  }
  }
  }

function initPanzoom() {
  const elem = document.getElementById('bt-image');
  const container = document.getElementById('bt-container');

  if (elem && container && typeof Panzoom !== 'undefined') {
      const panzoom = Panzoom(elem, {
          maxScale: 20,
          minScale: 1.0,    
          startScale: 2.0,   
          contain: 'outside',
          cursor: 'grab'
      });

      container.addEventListener('wheel', panzoom.zoomWithWheel);
      container.addEventListener('dblclick', () => {
          panzoom.reset();
      });
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

document.addEventListener('DOMContentLoaded', () => {
  const id = getQueryProject();
  populateProjectPage(id);
  setupTabs();
});
