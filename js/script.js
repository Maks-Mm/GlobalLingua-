const cityDataset = [
    {
        group: "inspiration",
        country: "Germany",
        city: "Berlin",
        flag: "🇩🇪",
        image: "public/berlin-GettyImages-154341690.webp",
        landmarkTitle: "Brandenburger Tor & East Side Gallery",
        landmarkDesc: "Symbol of unity and freedom.",
        tag: "Reichstag Dome"
    },
    {
        group: "inspiration",
        country: "Poland",
        city: "Warszawa",
        flag: "🇵🇱",
        image: "public/things-to-do-in-Warsaw.webp",
        landmarkTitle: "Stare Miasto & Zamek Królewski",
        landmarkDesc: "Reconstructed historic core.",
        tag: "Łazienki Park"
    },
    {
        group: "inspiration",
        country: "UK",
        city: "London",
        flag: "🇬🇧",
        image: "public/big-ben-tower-houses-parliament-westminster-london_255553-6090.avif",
        landmarkTitle: "Tower Bridge & British Museum",
        landmarkDesc: "Imperial cultural center.",
        tag: "Globe Theatre"
    },
    {
        group: "inspiration",
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
        country: "USA",
        city: "Washington D.C.",
        flag: "🇺🇸",
        image: "public/washington.jpg",
        landmarkTitle: "Capitol & National Mall",
        landmarkDesc: "Federal governance core.",
        tag: "Lincoln Memorial"
    },

    {
        group: "capitals",
        country: "Austria",
        city: "Wien",
        flag: "🇦🇹",
        image: "public/vienna.jpg",
        landmarkTitle: "Schönbrunn Palace",
        landmarkDesc: "Habsburg imperial capital.",
        tag: "Ringstraße"
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
        country: "Australia",
        city: "Canberra",
        flag: "🇦🇺",
        image: "public/canberra.jpg",
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
        image: "public/moscow.jpg",
        landmarkTitle: "Red Square & Kremlin",
        landmarkDesc: "Central political system.",
        tag: "St. Basil’s Cathedral"
    },

    {
        group: "capitals",
        country: "Belarus",
        city: "Minsk",
        flag: "🇧🇾",
        image: "public/minsk.jpg",
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
    }
];



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
    await loadComponent('footer', 'components/footer.html');

    // Initialize translations and form after components are loaded
    initializeApp();
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

    const items = cityDataset.filter(c => c.group === group);

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
        return Math.floor(viewport.offsetWidth / getCardWidth());
    }

    function getMaxIndex() {
        return Math.max(0, items.length - getVisibleCards());
    }

    function update() {
        const translateX = index * getCardWidth();
        track.style.transform = `translateX(-${translateX}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index = Math.min(index + 1, getMaxIndex());
        update();
    });

    prevBtn.addEventListener("click", () => {
        index = Math.max(index - 1, 0);
        update();
    });

    window.addEventListener("resize", () => {
        index = Math.min(index, getMaxIndex());
        update();
    });

    update();
}

function initCityCarousels() {
    renderCarousel("capitals", "capitalsCarousel");
}