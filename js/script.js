const translations = {};

/* LANGUAGE SWITCH */
function setLanguage(lang) {
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("preferredLanguage", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.getAttribute("data-lang"));
    });
});

const savedLang = localStorage.getItem("preferredLanguage") || "en";
setLanguage(savedLang);

/* FORM */
document.getElementById("appointmentForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;

    if (!name.trim()) {
        document.getElementById("formFeedback").innerHTML = "Enter name";
        return;
    }

    document.getElementById("formFeedback").innerHTML =
        "Submitted";

    e.target.reset();
});

// LOAD COMPONENTS
async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

loadComponent("header", "components/header.html");
loadComponent("hero", "components/hero.html");
loadComponent("cards", "components/cards.html");
loadComponent("footer", "components/footer.html");