// ================================
// ZADY WEB STUDIO - SCRIPT
// ================================


// MOBILE MENU
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-label", "Close menu");
        } else {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");
        }

    });


    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}


// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            phone === "" ||
            email === "" ||
            service === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all the fields.";

            return;
        }


        formMessage.textContent =
            "Thank you! Your request has been received.";

        contactForm.reset();

    });

}


// NAVBAR SHADOW
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// RESET MOBILE MENU ON DESKTOP
window.addEventListener("resize", function () {

    if (window.innerWidth > 850) {

        navLinks.classList.remove("open");

        menuButton.textContent = "☰";

    }

});


// CURRENT YEAR
const footerText =
    document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} ZADY Web Studio. All rights reserved.`;

}


// WEBSITE LOADED
console.log("ZADY Web Studio loaded successfully.");
