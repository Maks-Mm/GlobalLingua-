const cityDataset = [
    {
        group: "capitals",
        country: "Germany",
        city: "Berlin",
        flag: "🇩🇪",
        image: "public/BerlinGermany.jpg",
        landmarkTitle: "Brandenburg Gate & East Side Gallery",
        landmarkDesc: "Symbol of unity and freedom.",
        tag: "Reichstag Dome"
    },
    {
        group: "capitals",
        country: "Poland",
        city: "Warsaw",
        flag: "🇵🇱",
        image: "public/things-to-do-in-Warsaw.webp",
        landmarkTitle: "Old Town & Royal Castle",
        landmarkDesc: "Reconstructed historic core.",
        tag: "Łazienki Park"
    },
    {
        group: "capitals",
        country: "United Kingdom",
        city: "London",
        flag: "🇬🇧",
        image: "public/big-ben-tower-houses-parliament-westminster-london_255553-6090.avif",
        landmarkTitle: "Tower Bridge & British Museum",
        landmarkDesc: "Imperial cultural center.",
        tag: "Globe Theatre"
    },
    {
        group: "capitals",
        country: "Ukraine",
        city: "Kyiv",
        flag: "🇺🇦",
        image: "public/kievUkraineImage.jpg",
        landmarkTitle: "St. Sophia Cathedral",
        landmarkDesc: "Kyivan Rus heritage.",
        tag: "Andriyivskyi Descent"
    },

    {
        group: "capitals",
        country: "United States",
        city: "Washington, D.C.",
        flag: "🇺🇸",
        image: "public/Washington.jpg",
        landmarkTitle: "Capitol & National Mall",
        landmarkDesc: "Federal governance core.",
        tag: "Lincoln Memorial"
    },
    {
        group: "capitals",
        country: "Ireland",
        city: "Dublin",
        flag: "🇮🇪",
        image: "public/dublin.jpg",
        landmarkTitle: "Trinity College & Temple Bar",
        landmarkDesc: "English-speaking EU tech hub.",
        tag: "Guinness Storehouse"
    },
    {
        group: "capitals",
        country: "Austria",
        city: "Vienna",
        flag: "🇦🇹",
        image: "public/vienna.jpg",
        landmarkTitle: "Schönbrunn Palace",
        landmarkDesc: "Habsburg imperial capital.",
        tag: "Ringstrasse"
    },
    {
        group: "capitals",
        country: "Switzerland",
        city: "Bern",
        flag: "🇨🇭",
        image: "public/bern.jpg",
        landmarkTitle: "Old Town & Federal Palace",
        landmarkDesc: "Administrative capital.",
        tag: "Zytglogge"
    },
    {
        group: "capitals",
        country: "Belgium",
        city: "Brussels",
        flag: "🇧🇪",
        image: "public/brussels.jpg",
        landmarkTitle: "Grand Place & EU Institutions",
        landmarkDesc: "Multilingual administrative hub with German-speaking minority region.",
        tag: "Atomium"
    },
    {
        group: "capitals",
        country: "Luxembourg",
        city: "Luxembourg City",
        flag: "🇱🇺",
        image: "public/Luxemburg.jpg",
        landmarkTitle: "Old Quarters & Grund",
        landmarkDesc: "Multilingual state with German as official language.",
        tag: "Adolphe Bridge"
    },
    {
        group: "capitals",
        country: "Liechtenstein",
        city: "Vaduz",
        flag: "🇱🇮",
        image: "public/Vaduz.avif",
        landmarkTitle: "Vaduz Castle",
        landmarkDesc: "German-speaking microstate capital.",
        tag: "Liechtenstein National Museum"
    },

    {
        group: "capitals",
        country: "Australia",
        city: "Canberra",
        flag: "🇦🇺",
        image: "public/Canberra.webp",
        landmarkTitle: "Parliament House",
        landmarkDesc: "Planned capital city.",
        tag: "Lake Burley Griffin"
    },
    {
        group: "capitals",
        country: "New Zealand",
        city: "Wellington",
        flag: "🇳🇿",
        image: "public/wellington.jpg",
        landmarkTitle: "Te Papa Museum",
        landmarkDesc: "Cultural and political center.",
        tag: "Cuba Street"
    },

    {
        group: "capitals",
        country: "Russia",
        city: "Moscow",
        flag: "🇷🇺",
        image: "public/Moscow.avif",
        landmarkTitle: "Red Square & Kremlin",
        landmarkDesc: "Central political system.",
        tag: "St. Basil’s Cathedral"
    },
    {
        group: "capitals",
        country: "Belarus",
        city: "Minsk",
        flag: "🇧🇾",
        image: "public/Minsk.webp",
        landmarkTitle: "Independence Avenue",
        landmarkDesc: "Soviet-era urban structure.",
        tag: "Victory Square"
    },
    {
        group: "capitals",
        country: "Kazakhstan",
        city: "Astana",
        flag: "🇰🇿",
        image: "public/astana.jpg",
        landmarkTitle: "Bayterek Tower",
        landmarkDesc: "Modern planned capital.",
        tag: "Nur Astana Mosque"
    },

    {
        group: "capitals",
        country: "Moldova",
        city: "Chișinău",
        flag: "🇲🇩",
        image: "public/Chișinău.jpg",
        landmarkTitle: "Stephen the Great Central Park",
        landmarkDesc: "Post-Soviet administrative center with Russian usage legacy.",
        tag: "Triumphal Arch"
    },
    {
        group: "capitals",
        country: "Uzbekistan",
        city: "Tashkent",
        flag: "🇺🇿",
        image: "public/tashkent.jpg",
        landmarkTitle: "Independence Square",
        landmarkDesc: "Russian widely used in business and administration.",
        tag: "Amir Timur Square"
    },
    {
        group: "capitals",
        country: "Kyrgyzstan",
        city: "Bishkek",
        flag: "🇰🇬",
        image: "public/Bishkek.webp",
        landmarkTitle: "Ala-Too Square",
        landmarkDesc: "Russian widely used in urban communication.",
        tag: "Osh Bazaar"
    },
    {
        group: "capitals",
        country: "Tajikistan",
        city: "Dushanbe",
        flag: "🇹🇯",
        image: "public/dushanbe.jpg",
        landmarkTitle: "Rudaki Park",
        landmarkDesc: "Russian remains functional in administration.",
        tag: "National Museum"
    },
    {
        group: "capitals",
        country: "Armenia",
        city: "Yerevan",
        flag: "🇦🇲",
        image: "public/Yerevan.webp",
        landmarkTitle: "Republic Square",
        landmarkDesc: "Strong Russian legacy usage in business context.",
        tag: "Cascade Complex"
    },
    {
        group: "capitals",
        country: "Azerbaijan",
        city: "Baku",
        flag: "🇦🇿",
        image: "public/Baku.jpeg",
        landmarkTitle: "Flame Towers & Old City",
        landmarkDesc: "Russian still used in commerce and older generations.",
        tag: "Icherisheher"
    },
    {
        group: "capitals",
        country: "Georgia",
        city: "Tbilisi",
        flag: "🇬🇪",
        image: "public/tbilisi.jpg",
        landmarkTitle: "Old Town & Narikala Fortress",
        landmarkDesc: "Residual Russian usage in trade and older context.",
        tag: "Rustaveli Avenue"
    },

    {
        group: "capitals",
        country: "Latvia",
        city: "Riga",
        flag: "🇱🇻",
        image: "public/riga.jpg",
        landmarkTitle: "Old Town",
        landmarkDesc: "Large Russian-speaking minority presence.",
        tag: "Freedom Monument"
    },
    {
        group: "capitals",
        country: "Lithuania",
        city: "Vilnius",
        flag: "🇱🇹",
        image: "public/vilnius.jpg",
        landmarkTitle: "Old Town & Gediminas Tower",
        landmarkDesc: "Limited Russian-speaking communities.",
        tag: "Cathedral Square"
    },
    {
        group: "capitals",
        country: "Estonia",
        city: "Tallinn",
        flag: "🇪🇪",
        image: "public/Tallinn.webp",
        landmarkTitle: "Old Town",
        landmarkDesc: "Significant Russian-speaking population in urban zones.",
        tag: "Toompea Hill"
    }
];

// YouTube Video Dataset
const videoDataset = [
    {
        id: "E6588DlZW-c",
        title: "Why Choose GlobalLingua Academy",
        desc: "Overview of the academy structure, teaching methodology, and measurable outcomes. Focus on efficiency, structured progression, and multilingual competence.",
        status: "Academy"
    },
    {
        id: "wubFLbRdqzk",
        title: "How to Learn a Language Correctly",
        desc: "Explanation of cognitive learning phases: input, repetition, active recall, and real-world usage. Eliminates ineffective memorization patterns.",
        status: "Methodology"
    },
    {
        id: "0Y34Wcm_qdc",
        title: "Vocabulary Acquisition System",
        desc: "Systematic vocabulary building using spaced repetition, contextual usage, and frequency-based prioritization.",
        status: "Vocabulary"
    },
    {
        id: "eVFzbxmKNUw",
        title: "Grammar Without Overload",
        desc: "Focused grammar training based on patterns, not rules memorization. Applied through speaking and sentence construction.",
        status: "Grammar"
    },
    {
        id: "_nWMP68DqHE",
        title: "Speaking Confidence Development",
        desc: "Reduction of speaking barrier through controlled practice loops and real conversation simulation.",
        status: "Speaking"
    },
    {
        id: "AKbFGGAOEoU",
        title: "Learning Phases Explained",
        desc: "Breakdown of beginner → intermediate → advanced transition. Clear expectations and milestones at each stage.",
        status: "Learning Phases"
    },
    {
        id: "BJWmWP4gofw",
        title: "Common Mistakes in Language Learning",
        desc: "Analysis of typical learner errors: passive learning, lack of repetition, and absence of speaking practice.",
        status: "Mistakes"
    },
    {
        id: "iHoLc0cCZU8",
        title: "History of GlobalLingua Academy",
        desc: "Foundation, development, and expansion strategy of the academy. Positioning in multilingual education markets.",
        status: "History"
    },
    {
        id: "dnOu6ysy7NU",
        title: "Student Success Cases",
        desc: "Case studies showing transition from beginner to professional communication level.",
        status: "Results"
    },
    {
        id: "E6588DlZW-c",
        title: "How to Book a Consultation",
        desc: "Step-by-step explanation of consultation process, evaluation, and personalized learning path setup.",
        status: "Consultation"
    }
];

// Render YouTube Video Gallery
function renderVideoGallery(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const tabsContainer = container.querySelector("#videoTabsContainer");
    const mainIframe = container.querySelector("#mainVideo");
    const mainTitle = container.querySelector("#videoTitle");
    const mainDesc = container.querySelector("#videoDescription");
    const mainStatus = container.querySelector("#videoStatusMain");

    if (!tabsContainer) return;

    const totalVideos = videoDataset.length;

    // Render video tabs
    tabsContainer.innerHTML = videoDataset.map((video, index) => `
    <div class="video-tab ${index === 0 ? 'active' : ''}" data-video-index="${index}">
      <div class="video-tab-inner">
        <figure>
          <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" 
               alt="${video.title}"
               loading="lazy">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
              <path id="Icon_ionic-ios-play-circle" data-name="Icon ionic-ios-play-circle" 
                    d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.625,14.625,0,0,0,18,3.375Zm5.892,14.9L14.245,24.11a.313.313,0,0,1-.471-.274V12.164a.312.312,0,0,1,.471-.274l9.647,5.836a.322.322,0,0,1,0,.548Z" 
                    transform="translate(-3.375 -3.375)" fill="#8BBD47"></path>
            </svg>
          </span>
        </figure>
        <div class="video-tab-desc">
          <div class="video-status">${video.status || `Video ${index + 1} of ${totalVideos}`}</div>
          <div class="video-title">${video.title}</div>
          <div class="video-desc">${video.desc}</div>
        </div>
      </div>
    </div>
  `).join("");

    // Function to load a video
    function loadVideo(index, autoplay = false) {
        const video = videoDataset[index];
        if (!video) return;

        const autoplayParam = autoplay ? '?autoplay=1' : '';
        mainIframe.src = `https://www.youtube.com/embed/${video.id}${autoplayParam}`;
        mainTitle.textContent = video.title;
        mainDesc.textContent = video.desc;
        mainStatus.textContent = `Playing video ${index + 1} of ${totalVideos}`;

        // Update active state in tabs
        document.querySelectorAll('.video-tab').forEach((tab, i) => {
            if (i === index) {
                tab.classList.add('active');
                const statusDiv = tab.querySelector('.video-status');
                if (statusDiv && !video.status) {
                    statusDiv.textContent = `Playing video ${index + 1} of ${totalVideos}`;
                }
            } else {
                tab.classList.remove('active');
                const statusDiv = tab.querySelector('.video-status');
                const tabVideo = videoDataset[i];
                if (statusDiv && tabVideo && !tabVideo.status) {
                    statusDiv.textContent = `Video ${i + 1} of ${totalVideos}`;
                }
            }
        });
    }

    // Load first video
    loadVideo(0, false);

    // Add click handlers to tabs
    const tabs = tabsContainer.querySelectorAll('.video-tab');
    tabs.forEach((tab, idx) => {
        tab.addEventListener('click', () => {
            loadVideo(idx, true);
        });
    });
}

// Initialize video gallery after component loads
function initVideoGallery() {
    const videoContainer = document.getElementById('youtube');
    if (videoContainer && videoContainer.querySelector('#videoTabsContainer')) {
        renderVideoGallery('youtube');
    } else {
        // Retry if component not yet loaded
        setTimeout(initVideoGallery, 100);
    }
}

async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;

        if (elementId === "inspiration") {
            initCityCarousels();
        }

    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        document.getElementById(elementId).innerHTML =
            `<p style="color:red">Error loading component</p>`;
    }
}

// Load all components in order
async function loadAllComponents() {
    await loadComponent('header', 'components/header.html');
    await loadComponent('hero', 'components/hero.html');
    await loadComponent('courses', 'components/courses.html');
    await loadComponent('pricing', 'components/pricing.html');
    await loadComponent('inspiration', 'components/inspiration.html');
    await loadComponent('testimonials', 'components/testimonials.html');
    await loadComponent('contact', 'components/contact.html');
    await loadComponent('youtube', 'components/youtubeShortsAI.html');
    await loadComponent('footer', 'components/footer.html');

    // Initialize translations and form after components are loaded
    initializeApp();
    // Initialize both carousels after components are loaded
    initCityCarousels();
    initVideoGallery();
}

// All your translations object here (copy from your HTML)
const translations = { /* ... your full translations object ... */ };

// Initialize language and form
function initializeApp() {
    // Set up language switching
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
    });

    const savedLang = localStorage.getItem("preferredLanguage") || "en";
    setLanguage(savedLang);

    // Set up form handler
    const form = document.getElementById("appointmentForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name")?.value.trim();
            if (!name) {
                document.getElementById("formFeedback").innerHTML = "❌ Please enter your name.";
                return;
            }
            document.getElementById("formFeedback").innerHTML = "✅ Thank you " + name + "! We will contact you within 24h via email/WhatsApp. - Valeriya";
            form.reset();
        });
    }
}

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    localStorage.setItem("preferredLanguage", lang);
}

// Start loading components when page loads
loadAllComponents();

function renderCarousel(group, containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;

    const track = root.querySelector(".carousel-track");
    const prevBtn = root.querySelector(".prev");
    const nextBtn = root.querySelector(".next");

    // Check if track exists, if not, the carousel structure might be missing
    if (!track) {
        console.error(`Carousel container ${containerId} missing .carousel-track element`);
        return;
    }

    const items = cityDataset.filter(c => c.group === group);

    if (items.length === 0) {
        console.warn(`No items found for group: ${group}`);
        track.innerHTML = '<div class="city-card">No cities found</div>';
        return;
    }

    track.innerHTML = items.map(c => `
        <div class="city-card">
            <div class="city-image">
                <img src="${c.image}" alt="${c.city}">
            </div>
            <div class="city-info">
                <div class="city-name">${c.flag} ${c.city}</div>
                <div class="landmark-icon">🏛️</div>
                <div class="landmark-title">${c.landmarkTitle}</div>
                <div class="landmark-desc">${c.landmarkDesc}</div>
                <div class="visit-tag">${c.tag}</div>
            </div>
        </div>
    `).join("");

    let index = 0;

    function getCardWidth() {
        const card = track.querySelector(".city-card");
        return card ? card.offsetWidth + 20 : 280; // include gap
    }

    function getVisibleCards() {
        const viewport = root.querySelector(".carousel-viewport");
        if (!viewport) return 1;
        return Math.max(1, Math.floor(viewport.offsetWidth / getCardWidth()));
    }

    function getMaxIndex() {
        return Math.max(0, items.length - getVisibleCards());
    }

    function update() {
        const translateX = index * getCardWidth();
        track.style.transform = `translateX(-${translateX}px)`;

        // Disable/enable buttons based on position
        if (prevBtn) prevBtn.disabled = (index === 0);
        if (nextBtn) nextBtn.disabled = (index >= getMaxIndex());
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            index = Math.max(index - 1, 0);
            update();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            index = Math.min(index + 1, getMaxIndex());
            update();
        });
    }

    window.addEventListener("resize", () => {
        index = Math.min(index, getMaxIndex());
        update();
    });

    update();
}

function initCityCarousels() {
    // Render both carousels - "capitals" and "inspiration"
    renderCarousel("capitals", "capitalsCarousel");
    renderCarousel("inspiration", "inspirationCarousel");
}