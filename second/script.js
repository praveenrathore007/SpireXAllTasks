/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        themeToggle.textContent = "☾";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeToggle.textContent = "☼";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});



/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☾";

}



/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");



menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});



closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});



/* Close mobile menu after clicking link */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove(
            "active"
        );

    });

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );



revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;


            if (
                window.scrollY >=
                sectionTop - 180
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);



/* =========================================
   BUTTON INTERACTION
========================================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .contact-button"
    );


buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-3px)";

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform = "";

        }
    );

});



/* =========================================
   CURRENT YEAR
========================================= */

const copyright =
    document.getElementById(
        "copyright"
    );


if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} Praveen Rathore`;

}