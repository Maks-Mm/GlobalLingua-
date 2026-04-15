const cityDataset = [
    {
        group: "capitals",
        country: "Germany",
        city: "Berlin",
        flag: "🇩🇪",
        image: "/BerlinGermany.jpg",
        landmarkTitle: "Brandenburg Gate & East Side Gallery",
        landmarkDesc: "Symbol of unity and freedom.",
        tag: "Reichstag Dome"
    },
    {
        group: "capitals",
        country: "Poland",
        city: "Warsaw",
        flag: "🇵🇱",
        image: "/things-to-do-in-Warsaw.webp",
        landmarkTitle: "Old Town & Royal Castle",
        landmarkDesc: "Reconstructed historic core.",
        tag: "Łazienki Park"
    },
    {
        group: "capitals",
        country: "United Kingdom",
        city: "London",
        flag: "🇬🇧",
        image: "/big-ben-tower-houses-parliament-westminster-london_255553-6090.avif",
        landmarkTitle: "Tower Bridge & British Museum",
        landmarkDesc: "Imperial cultural center.",
        tag: "Globe Theatre"
    },
    {
        group: "capitals",
        country: "Ukraine",
        city: "Kyiv",
        flag: "🇺🇦",
        image: "/kievUkraineImage.jpg",
        landmarkTitle: "St. Sophia Cathedral",
        landmarkDesc: "Kyivan Rus heritage.",
        tag: "Andriyivskyi Descent"
    },

    {
        group: "capitals",
        country: "United States",
        city: "Washington, D.C.",
        flag: "🇺🇸",
        image: "/Washington.jpg",
        landmarkTitle: "Capitol & National Mall",
        landmarkDesc: "Federal governance core.",
        tag: "Lincoln Memorial"
    },
    {
        group: "capitals",
        country: "Ireland",
        city: "Dublin",
        flag: "🇮🇪",
        image: "/Dublin.jpg",
        landmarkTitle: "Trinity College & Temple Bar",
        landmarkDesc: "English-speaking EU tech hub.",
        tag: "Guinness Storehouse"
    },
    {
        group: "capitals",
        country: "Austria",
        city: "Vienna",
        flag: "🇦🇹",
        image: "/Vienna.jpg",
        landmarkTitle: "Schönbrunn Palace",
        landmarkDesc: "Habsburg imperial capital.",
        tag: "Ringstrasse"
    },
    {
        group: "capitals",
        country: "Switzerland",
        city: "Bern",
        flag: "🇨🇭",
        image: "/Bern.jpg",
        landmarkTitle: "Old Town & Federal Palace",
        landmarkDesc: "Administrative capital.",
        tag: "Zytglogge"
    },
    {
        group: "capitals",
        country: "Belgium",
        city: "Brussels",
        flag: "🇧🇪",
        image: "/Brussels.jpg",
        landmarkTitle: "Grand Place & EU Institutions",
        landmarkDesc: "Multilingual administrative hub with German-speaking minority region.",
        tag: "Atomium"
    },
    {
        group: "capitals",
        country: "Luxembourg",
        city: "Luxembourg City",
        flag: "🇱🇺",
        image: "/Luxemburg.jpg",
        landmarkTitle: "Old Quarters & Grund",
        landmarkDesc: "Multilingual state with German as official language.",
        tag: "Adolphe Bridge"
    },
    {
        group: "capitals",
        country: "Liechtenstein",
        city: "Vaduz",
        flag: "🇱🇮",
        image: "/Vaduz.avif",
        landmarkTitle: "Vaduz Castle",
        landmarkDesc: "German-speaking microstate capital.",
        tag: "Liechtenstein National Museum"
    },

    {
        group: "capitals",
        country: "Australia",
        city: "Canberra",
        flag: "🇦🇺",
        image: "/Canberra.webp",
        landmarkTitle: "Parliament House",
        landmarkDesc: "Planned capital city.",
        tag: "Lake Burley Griffin"
    },
    {
        group: "capitals",
        country: "New Zealand",
        city: "Wellington",
        flag: "🇳🇿",
        image: "/Wellington.jpg",
        landmarkTitle: "Te Papa Museum",
        landmarkDesc: "Cultural and political center.",
        tag: "Cuba Street"
    },

    {
        group: "capitals",
        country: "Russia",
        city: "Moscow",
        flag: "🇷🇺",
        image: "/Moscow.avif",
        landmarkTitle: "Red Square & Kremlin",
        landmarkDesc: "Central political system.",
        tag: "St. Basil’s Cathedral"
    },
    {
        group: "capitals",
        country: "Belarus",
        city: "Minsk",
        flag: "🇧🇾",
        image: "/Minsk.webp",
        landmarkTitle: "Independence Avenue",
        landmarkDesc: "Soviet-era urban structure.",
        tag: "Victory Square"
    },
    {
        group: "capitals",
        country: "Kazakhstan",
        city: "Astana",
        flag: "🇰🇿",
        image: "/Astana.jpg",
        landmarkTitle: "Bayterek Tower",
        landmarkDesc: "Modern planned capital.",
        tag: "Nur Astana Mosque"
    },

    {
        group: "capitals",
        country: "Moldova",
        city: "Chișinău",
        flag: "🇲🇩",
        image: "/Chișinău.jpg",
        landmarkTitle: "Stephen the Great Central Park",
        landmarkDesc: "Post-Soviet administrative center with Russian usage legacy.",
        tag: "Triumphal Arch"
    },
    {
        group: "capitals",
        country: "Uzbekistan",
        city: "Tashkent",
        flag: "🇺🇿",
        image: "/Tashkent.jpg",
        landmarkTitle: "Independence Square",
        landmarkDesc: "Russian widely used in business and administration.",
        tag: "Amir Timur Square"
    },
    {
        group: "capitals",
        country: "Kyrgyzstan",
        city: "Bishkek",
        flag: "🇰🇬",
        image: "/Bishkek.webp",
        landmarkTitle: "Ala-Too Square",
        landmarkDesc: "Russian widely used in urban communication.",
        tag: "Osh Bazaar"
    },
    {
        group: "capitals",
        country: "Tajikistan",
        city: "Dushanbe",
        flag: "🇹🇯",
        image: "/Dushanbe.jpg",
        landmarkTitle: "Rudaki Park",
        landmarkDesc: "Russian remains functional in administration.",
        tag: "National Museum"
    },
    {
        group: "capitals",
        country: "Armenia",
        city: "Yerevan",
        flag: "🇦🇲",
        image: "/Yerevan.webp",
        landmarkTitle: "Republic Square",
        landmarkDesc: "Strong Russian legacy usage in business context.",
        tag: "Cascade Complex"
    },
    {
        group: "capitals",
        country: "Azerbaijan",
        city: "Baku",
        flag: "🇦🇿",
        image: "/Baku.jpeg",
        landmarkTitle: "Flame Towers & Old City",
        landmarkDesc: "Russian still used in commerce and older generations.",
        tag: "Icherisheher"
    },
    {
        group: "capitals",
        country: "Georgia",
        city: "Tbilisi",
        flag: "🇬🇪",
        image: "/Tbilisi.jpg",
        landmarkTitle: "Old Town & Narikala Fortress",
        landmarkDesc: "Residual Russian usage in trade and older context.",
        tag: "Rustaveli Avenue"
    },

    {
        group: "capitals",
        country: "Latvia",
        city: "Riga",
        flag: "🇱🇻",
        image: "/Riga.jpg",
        landmarkTitle: "Old Town",
        landmarkDesc: "Large Russian-speaking minority presence.",
        tag: "Freedom Monument"
    },
    {
        group: "capitals",
        country: "Lithuania",
        city: "Vilnius",
        flag: "🇱🇹",
        image: "/Vilnius.jpg",
        landmarkTitle: "Old Town & Gediminas Tower",
        landmarkDesc: "Limited Russian-speaking communities.",
        tag: "Cathedral Square"
    },
    {
        group: "capitals",
        country: "Estonia",
        city: "Tallinn",
        flag: "🇪🇪",
        image: "/Tallinn.webp",
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


function applyBlobFilter() {
    const el = document.querySelector('.footer .bubbles');
    if (el) {
        el.style.filter = 'url(#blob)';
    }
}

function initBubbles() {
    const container = document.getElementById('bubbles');
    if (!container) return;

    container.innerHTML = '';

    for (let i = 0; i < 128; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
        bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
        bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
        bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
        bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);

        container.appendChild(bubble);
    }
}


// Initialize AOS
AOS.init({
    duration: 800,        // Animation duration in ms
    once: false,          // Whether animation should happen only once
    offset: 100,          // Offset (in px) from the original trigger point
    delay: 0,             // Delay in ms
    easing: 'ease-in-out' // Easing function
});


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

    initBubbles(); 

    // Initialize translations and form after components are loaded
    initializeApp();
    // Initialize both carousels after components are loaded
    initCityCarousels();
    initVideoGallery();
}

// All your translations object here (copy from your HTML)
const translations = {
    pl: {
        "nav-courses": "Kursy",
        "nav-pricing": "Ceny",
        "nav-contact": "Kontakt",
        "nav-reviews": "Opinie",
        "hero-badge": "✨ Kariera · Międzynarodowość · Rozwój",
        "hero-title": "Opanuj języki z GlobalLingua Academy",
        "hero-desc": "",
        "free-call": "📞 Zadzwoń za darmo",
        "gallery1": "Lekcje grupowe",
        "gallery2": "Business English",
        "gallery3": "Kursy dla młodzieży",
        "gallery4": "Certyfikaty",
        "gallery5": "Warsztaty",
        "gallery6": "Integracja",
        "gallery7": "Nowoczesne sale",
        "gallery8": "Sukces",
        "courses-title": "📚 Nasze spektrum językowe",
        "cat-kids": "Dzieci i młodzież",
        "cat-kids-desc": "Niemiecki, angielski, polski przez zabawę.",
        "cat-career": "Kariera i biznes",
        "cat-career-desc": "Słownictwo branżowe, prezentacje.",
        "cat-migration": "Migracja i studia",
        "cat-migration-desc": "Zrozumienie urzędów, życia codziennego.",
        "cat-hobby": "Hobby i kultura",
        "cat-hobby-desc": "Poznawanie kultur, podróże.",
        "pricing-title": "💰 Ceny – zależne od regionu",
        "west": "Zachód (DE/AT/CH)",
        "west-note": "Premium, elastyczne terminy",
        "east": "Wschód / EU Centralna",
        "east-note": "Umiarkowane ceny",
        "online": "Online świat",
        "online-note": "AI + lektor na żywo",
        "price-info": "*cena za godzinę / rabaty grupowe.",
        "inspiration-title": "🏛️ Podróż językowa i inspiracja",
        "feature-method": "Indywidualne podejście",
        "feature-method-desc": "Różnorodność, oryginalne materiały",
        "feature-booking": "Umów termin",
        "feature-booking-desc": "Prosty panel, konsultacje",
        "feature-culture": "Zrozumieć kulturę",
        "feature-culture-desc": "Budowanie postaw",
        "reviews-title": "⭐ Co mówią nasi uczniowie",
        "contact-title": "📩 Umów spotkanie",
        "manager-role": "Manager Konsultingowy & Doradca Językowy",
        "manager-hours": "📅 Konsultacje osobiste: pon.–pt. 9:00–18:00",
        "manager-direct": "✨ Zapraszam do kontaktu – pomogę Ci w nauce języków.",
        "submit-btn": "Wyślij zapytanie"
    },

    ua: {
        "nav-courses": "Курси",
        "nav-pricing": "Ціни",
        "nav-contact": "Контакт",
        "nav-reviews": "Відгуки",
        "hero-badge": "✨ Кар'єра · Міжнародність · Розвиток",
        "hero-title": "Опануйте мови з GlobalLingua Academy",
        "hero-desc": "Польська, Німецька, Англійська, Російська, Українська.",
        "free-call": "📞 Безкоштовний дзвінок",
        "gallery1": "Групові заняття",
        "gallery2": "Ділова англійська",
        "gallery3": "Курси для молоді",
        "gallery4": "Сертифікати",
        "gallery5": "Майстер-класи",
        "gallery6": "Інтеграція",
        "gallery7": "Сучасні класи",
        "gallery8": "Успіх",
        "courses-title": "📚 Наш мовний спектр",
        "cat-kids": "Діти та підлітки",
        "cat-kids-desc": "Німецька, англійська, польська через гру.",
        "cat-career": "Кар'єра та бізнес",
        "cat-career-desc": "Ділова лексика, презентації.",
        "cat-migration": "Міграція та навчання",
        "cat-migration-desc": "Розуміння органів влади, побуту.",
        "cat-hobby": "Хобі та культура",
        "cat-hobby-desc": "Пізнання культур, подорожі.",
        "pricing-title": "💰 Ціни – залежно від регіону",
        "west": "Захід (DE/AT/CH)",
        "west-note": "Преміум підтримка",
        "east": "Схід / Центральна ЄС",
        "east-note": "Помірні ціни",
        "online": "Онлайн світ",
        "online-note": "ШІ + живий викладач",
        "price-info": "*за урок / знижки групам.",
        "inspiration-title": "🏛️ Мовна подорож та натхнення",
        "feature-method": "Індивідуальний підхід",
        "feature-method-desc": "Оригінальні методики",
        "feature-booking": "Записатися",
        "feature-booking-desc": "Проста панель, консультація",
        "feature-culture": "Зрозуміти культуру",
        "feature-culture-desc": "Міжкультурна компетенція",
        "reviews-title": "⭐ Що кажуть студенти",
        "contact-title": "📩 Записати на зустріч",
        "manager-role": "Консалтинговий менеджер",
        "manager-hours": "📅 Консультації: Пн–Пт 9:00–18:00",
        "manager-direct": "✨ Звертайтеся для мовного консультування.",
        "submit-btn": "Надіслати запит"
    },

    de: {
        "nav-courses": "Kurse",
        "nav-pricing": "Preise",
        "nav-contact": "Kontakt",
        "nav-reviews": "Bewertungen",
        "hero-badge": "✨ Karriere · Internationalität · Entwicklung",
        "hero-title": "Sprachen meistern mit GlobalLingua Academy",
        "hero-desc": "Polnisch, Deutsch, Englisch, Russisch, Ukrainisch.",
        "free-call": "📞 Jetzt kostenlos anrufen",
        "gallery1": "Gruppenunterricht",
        "gallery2": "Business English",
        "gallery3": "Jugendkurse",
        "gallery4": "Zertifikate",
        "gallery5": "Workshops",
        "gallery6": "Integration",
        "gallery7": "Moderne Räume",
        "gallery8": "Erfolg",
        "courses-title": "📚 Unser Sprachspektrum",
        "cat-kids": "Kinder & Jugendliche",
        "cat-kids-desc": "Spielerisch Deutsch, Englisch, Polnisch.",
        "cat-career": "Karriere & Business",
        "cat-career-desc": "Fachvokabular, Präsentationen.",
        "cat-migration": "Migration & Studien",
        "cat-migration-desc": "Behördenverständnis, Alltag.",
        "cat-hobby": "Hobby & Kultur",
        "cat-hobby-desc": "Kulturen verstehen, Reisen.",
        "pricing-title": "💰 Preise – abhängig von Wohnregion",
        "west": "Westen (DE/AT/CH)",
        "west-note": "Premium-Betreuung",
        "east": "Osten / Zentral-EU",
        "east-note": "moderate Preise",
        "online": "Online weltweit",
        "online-note": "KI + Live-Lehrer",
        "price-info": "*Einzelstunde / Gruppenrabatte möglich.",
        "inspiration-title": "🏛️ Sprachreise & Inspiration",
        "feature-method": "Individuelle Lernweise",
        "feature-method-desc": "Vielfältigkeit, originale Materialien",
        "feature-booking": "Termine vereinbaren",
        "feature-booking-desc": "Einfaches Dashboard, Beratung",
        "feature-culture": "Kultur verstehen",
        "feature-culture-desc": "Interkulturelle Kompetenz",
        "reviews-title": "⭐ Was unsere Lernenden sagen",
        "contact-title": "📩 Termin buchen",
        "manager-role": "Consulting Manager & Sprachberaterin",
        "manager-hours": "📅 Persönliche Beratung: Mo–Fr 9:00–18:00",
        "manager-direct": "✨ Kontaktieren Sie mich für Sprachberatung.",
        "submit-btn": "Anfrage senden"
    },

    en: {
        "nav-courses": "Courses",
        "nav-pricing": "Pricing",
        "nav-contact": "Contact",
        "nav-reviews": "Reviews",
        "hero-badge": "✨ Career · Internationality · Growth",
        "hero-title": "Master languages with GlobalLingua Academy",
        "hero-desc": "Polish, German, English, Russian, Ukrainian.",
        "free-call": "📞 Call for free",
        "gallery1": "Group Lessons",
        "gallery2": "Business English",
        "gallery3": "Youth Courses",
        "gallery4": "Certificates",
        "gallery5": "Workshops",
        "gallery6": "Integration",
        "gallery7": "Modern Classrooms",
        "gallery8": "Success",
        "courses-title": "📚 Our Language Spectrum",
        "cat-kids": "Kids & Teens",
        "cat-kids-desc": "Fun German, English, Polish for school.",
        "cat-career": "Career & Business",
        "cat-career-desc": "Business vocabulary, presentations.",
        "cat-migration": "Migration & Studies",
        "cat-migration-desc": "Understanding authorities, daily life.",
        "cat-hobby": "Hobby & Culture",
        "cat-hobby-desc": "Understand cultures, travel.",
        "pricing-title": "💰 Prices – depending on region",
        "west": "West (DE/AT/CH)",
        "west-note": "Premium support",
        "east": "East / Central EU",
        "east-note": "moderate prices",
        "online": "Online worldwide",
        "online-note": "AI-assisted + live teacher",
        "price-info": "*per lesson / group discounts available.",
        "inspiration-title": "🏛️ Language Journey & Inspiration",
        "feature-method": "Individual Learning",
        "feature-method-desc": "Diverse methods, original materials",
        "feature-booking": "Book Appointment",
        "feature-booking-desc": "Easy dashboard, consultation",
        "feature-culture": "Understand Culture",
        "feature-culture-desc": "Intercultural competence",
        "reviews-title": "⭐ What our students say",
        "contact-title": "📩 Book your appointment",
        "manager-role": "Consulting Manager & Language Consultant",
        "manager-hours": "📅 Personal consultations: Mon–Fri 9:00–18:00",
        "manager-direct": "✨ Contact me for language consulting & career coaching.",
        "submit-btn": "Request appointment"
    },

    ru: {
        "nav-courses": "Курсы",
        "nav-pricing": "Цены",
        "nav-contact": "Контакт",
        "nav-reviews": "Отзывы",
        "hero-badge": "✨ Карьера · Международность · Развитие",
        "hero-title": "Освойте языки с GlobalLingua Academy",
        "hero-desc": "Польский, немецкий, английский, русский, украинский.",
        "free-call": "📞 Бесплатный звонок",
        "gallery1": "Групповые занятия",
        "gallery2": "Деловой английский",
        "gallery3": "Курсы для молодежи",
        "gallery4": "Сертификаты",
        "gallery5": "Мастер-классы",
        "gallery6": "Интеграция",
        "gallery7": "Современные классы",
        "gallery8": "Успех",
        "courses-title": "📚 Наш языковой спектр",
        "cat-kids": "Дети и подростки",
        "cat-kids-desc": "Немецкий, английский, польский через игру.",
        "cat-career": "Карьера и бизнес",
        "cat-career-desc": "Деловая лексика, презентации.",
        "cat-migration": "Миграция и учеба",
        "cat-migration-desc": "Понимание госорганов, быта.",
        "cat-hobby": "Хобби и культура",
        "cat-hobby-desc": "Изучение культур, путешествия.",
        "pricing-title": "💰 Цены – в зависимости от региона",
        "west": "Запад (DE/AT/CH)",
        "west-note": "Премиум поддержка",
        "east": "Восток / Центральная Европа",
        "east-note": "умеренные цены",
        "online": "Онлайн мир",
        "online-note": "ИИ + живой преподаватель",
        "price-info": "*за урок / групповые скидки.",
        "inspiration-title": "🏛️ Языковое путешествие и вдохновение",
        "feature-method": "Индивидуальный подход",
        "feature-method-desc": "Разнообразие методов, материалы",
        "feature-booking": "Записаться на встречу",
        "feature-booking-desc": "Простая система, консультация",
        "feature-culture": "Понимание культуры",
        "feature-culture-desc": "Межкультурная компетенция",
        "reviews-title": "⭐ Что говорят студенты",
        "contact-title": "📩 Запись на прием",
        "manager-role": "Консультационный менеджер и языковой консультант",
        "manager-hours": "📅 Консультации: Пн–Пт 9:00–18:00",
        "manager-direct": "✨ Свяжитесь со мной для языковых консультаций.",
        "submit-btn": "Отправить заявку"
    }
};



// Initialize language and form
function initializeApp() {
    // Set up language switching
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
    });

    const savedLang = localStorage.getItem("preferredLanguage") || "en";
    setLanguage(savedLang);

    // Set up form handler with proper error handling
    const form = document.getElementById("appointmentForm");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                fullName: form.fullName?.value || '',
                email: form.email?.value || '',
                phone: form.phone?.value || '',
                language: form.language?.value || 'en',
                appointment: form.appointment?.value || ''
            };

            // Basic validation
            if (!data.fullName) {
                if (window.toastManager) {
                    window.toastManager.warning('Missing Information', 'Please enter your full name');
                } else {
                    alert('Please enter your full name');
                }
                form.fullName?.focus();
                return;
            }
            
            if (!data.email) {
                if (window.toastManager) {
                    window.toastManager.warning('Missing Information', 'Please enter your email address');
                } else {
                    alert('Please enter your email address');
                }
                form.email?.focus();
                return;
            }
            
            if (!data.email.includes('@') || !data.email.includes('.')) {
                if (window.toastManager) {
                    window.toastManager.error('Invalid Email', 'Please enter a valid email address');
                } else {
                    alert('Please enter a valid email address');
                }
                form.email?.focus();
                return;
            }
            
            if (!data.phone) {
                if (window.toastManager) {
                    window.toastManager.warning('Missing Information', 'Please enter your phone number');
                } else {
                    alert('Please enter your phone number');
                }
                form.phone?.focus();
                return;
            }

            // Show loading toast
            let loadingToastId = null;
            if (window.toastManager) {
                loadingToastId = window.toastManager.show('help', 'Sending...', 'Please wait while we submit your request', 0);
            }

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                // Close loading toast
                if (loadingToastId && window.toastManager) {
                    window.toastManager.closeToast(loadingToastId);
                }

                // Check if response is ok
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                // Try to parse JSON
                let result;
                const text = await response.text();
                try {
                    result = JSON.parse(text);
                } catch (e) {
                    console.error("JSON parse error:", text);
                    throw new Error("Invalid response from server");
                }

                if (result.success === true) {
                    if (window.toastManager) {
                        window.toastManager.success(
                            '✓ Appointment Requested!',
                            `Thank you ${data.fullName}! We'll contact you via ${data.phone} within 24 hours.`,
                            6000
                        );
                    } else {
                        alert('Request sent successfully!');
                    }
                    form.reset();
                } else {
                    throw new Error(result.message || "Request failed");
                }

            } catch (err) {
                console.error("Form submission error:", err);
                
                if (loadingToastId && window.toastManager) {
                    window.toastManager.closeToast(loadingToastId);
                }
                
                if (window.toastManager) {
                    window.toastManager.error(
                        'Submission Error',
                        err.message || 'Unable to send request. Please try again or contact us via WhatsApp.',
                        6000
                    );
                } else {
                    alert('Error sending request. Please try again.');
                }
            }
        });
    }
    
    // Welcome toast message
    setTimeout(() => {
        if (window.toastManager) {
            window.toastManager.help(
                '✨ Welcome to GlobalLingua Academy!',
                'Book a free consultation and start your language journey today. 🇪🇺',
                5000
            );
        }
    }, 1000);
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