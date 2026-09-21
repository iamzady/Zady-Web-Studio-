/* =========================================
   ZADY WEB STUDIO
   COMPLETE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.class
  kks           navLinks.classList.remove("open");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

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
                !name ||
                !phone ||
                !email ||
                !service ||
                !message
            ) {

                formMessage.textContent =
                    "Please fill in all the fields.";

                return;

            }


            formMessage.textContent =
                "Thank you! Your project request has been received.";


            contactForm.reset();

        }
    );

}


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) return;


        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.25)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);


/* =========================================
   CLOSE MOBILE MENU ON RESIZE
========================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 850 &&
            navLinks
        ) {

            navLinks.classList.remove("open");

            if (menuButton) {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }

    }
);


/* =========================================
   CURRENT YEAR
========================================= */

const footerText =
    document.querySelector(".footer-bottom p");


if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} ZADY Web Studio. All rights reserved.`;

}


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .portfolio-card, .price-card, .why-item, .process-step"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

}


/* =========================================
   DONE
========================================= */

console.log(
    "ZADY Web Studio website loaded successfully."
);
