// ================================
// ZADY WEB STUDIO - WHATSAPP FORM
// ================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


// ================================
// MOBILE MENU
// ================================

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });


    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuButton.textContent = "☰";

        });

    });

}


// ================================
// WHATSAPP CONTACT FORM
// ================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


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


        // Check required fields

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


        // Your WhatsApp number

        const whatsappNumber =
            "916385558452";


        // Create WhatsApp message

        const whatsappMessage =
`🔔 NEW WEBSITE ENQUIRY

👤 Name:
${name}

📱 Phone:
${phone}

📧 Email:
${email}

💻 Service:
${service}

📝 Project Details:
${message}

━━━━━━━━━━━━━━
ZADY Web Studio`;


        // Encode message

        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        // WhatsApp URL

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank"
        );


        // Show message

        formMessage.textContent =
            "Opening WhatsApp...";


        // Reset form

        contactForm.reset();

    });

}


// ================================
// NAVBAR SHADOW
// ================================

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (!header) return;


    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ================================
// RESET MOBILE MENU
// ================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 850) {

        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuButton) {
            menuButton.textContent = "☰";
        }

    }

});


// ================================
// FOOTER YEAR
// ================================

const footerText =
    document.querySelector(".footer-bottom p");


if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} ZADY Web Studio. All rights reserved.`;

}


// ================================
// CONSOLE
// ================================

console.log(
    "ZADY Web Studio loaded successfully."
);
