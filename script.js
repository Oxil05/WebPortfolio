document.addEventListener("DOMContentLoaded", function () {

    // 1. Dynamic Greeting based on current time
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greetingMessage = "Welcome to My Portfolio!";

        if (currentHour >= 5 && currentHour < 12) {
            greetingMessage = "Good morning! Welcome to My Portfolio";
        } else if (currentHour >= 12 && currentHour < 18) {
            greetingMessage = "Good afternoon! Welcome to My Portfolio";
        } else {
            greetingMessage = "Good evening! Welcome to My Portfolio";
        }

        greetingElement.textContent = greetingMessage;
    }

    const aboutBtn = document.getElementById("about-btn");
    const extraInfo = document.getElementById("extra-info");

    if (aboutBtn && extraInfo) {
        aboutBtn.addEventListener("click", function () {
            if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
                extraInfo.style.display = "block";
                aboutBtn.textContent = "Show Less";
            } else {
                extraInfo.style.display = "none";
                aboutBtn.textContent = "Show More";
            }
        });
    }

    const contactBtn = document.getElementById("contact-btn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    const profileImg = document.getElementById("profile-img");
    if (profileImg) {
        profileImg.addEventListener("click", function () {
            alert("Hi! I'm Jhon Edrian Capisonda. Thanks for checking out my portfolio!");
        });
    }

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                event.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");

    function updateActiveNav() {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 160;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSectionId) {
                link.classList.add("active");
            }
        });

        if (header) {
            if (window.scrollY > 30) {
                header.style.boxShadow = "0 4px 12px darkred";
            } else {
                header.style.boxShadow = "0 2px 8px gray";
            }
        }
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();

});
