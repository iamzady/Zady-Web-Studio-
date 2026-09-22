/* ========================================
   ZADY WEB STUDIO
   COMPLETE JAVASCRIPT
======================================== */


/* ========================================
   MOBILE MENU
======================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("open");


            if (
                navLinks.classList.contains("open")
            ) {

                menuButton.textContent = "✕";

                menuButton.setAttribute(
                    "aria-label",
                    "Close menu"
                );

            } else {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }
    );


    /* Close menu after clicking a link */

    const navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("open");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }
        );

    });

}


/* ========================================
   CONTACT FORM → WHATSAPP
======================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get form values */

            const name =
                document
                .getElementById("name")
                .value
                .trim();


            const phone =
                document
                .getElementById("phone")
                .value
                .trim();


            const email =
                document
                .getElementById("email")
                .value
                .trim();


            const service =
                document
                .getElementById("service")
                .value;


            const message =
                document
                .getElementById("message")
                .value
                .trim();


            /* Validate */

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


            /* =================================
               YOUR WHATSAPP NUMBER
            ================================= */

            const whatsappNumber =
                "916385558452";


            /* =================================
               CREATE WHATSAPP MESSAGE
            ================================= */

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

━━━━━━━━━━━━━━━━━━

ZADY WEB STUDIO

📧 iamzady7@gmail.com
📱 +91 63855 58452`;


            /* Encode message */

            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            /* Create WhatsApp URL */

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodedMessage;


            /* Show status */

            formMessage.textContent =
                "Opening WhatsApp...";


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank"
            );


            /* Clear form */

            contactForm.reset();

        }
    );

}


/* ========================================
   HEADER SCROLL EFFECT
======================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) {
            return;
        }


        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.25)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);


/* ========================================
   CLOSE MOBILE MENU ON RESIZE
======================================== */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 750) {

            if (navLinks) {

                navLinks.classList.remove(
                    "open"
                );

            }


            if (menuButton) {

                menuButton.textContent =
                    "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }

    }
);


/* ========================================
   FOOTER YEAR
======================================== */

const footerBottom =
    document.querySelector(
        ".footer-bottom p"
    );


if (footerBottom) {

    footerBottom.textContent =
        `© ${new Date().getFullYear()} ZADY Web Studio. All rights reserved.`;

}


/* ========================================
   SMOOTH NAVIGATION
======================================== */

const allAnchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


allAnchorLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* ========================================
   PAGE LOADED
======================================== */

console.log(
    "ZADY Web Studio loaded successfully."
);
