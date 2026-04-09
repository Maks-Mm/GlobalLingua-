// Component loader function
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        document.getElementById(elementId).innerHTML = `<p style="color:red">Error loading component</p>`;
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