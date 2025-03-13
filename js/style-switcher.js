document.addEventListener("DOMContentLoaded", () => {
    /* ================ Toggle Style Switcher ================ */
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
    if (styleSwitcherToggle) {
        styleSwitcherToggle.addEventListener("click", () => {
            document.querySelector(".style-switcher").classList.toggle("open");
        });
    }

    // Hide style switcher on scroll
    window.addEventListener("scroll", () => {
        const styleSwitcher = document.querySelector(".style-switcher");
        if (styleSwitcher && styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });

    /* ================ Theme Colors ================ */
    const alternateStyles = document.querySelectorAll(".alternate-style");
    function setActiveStyle(color) {
        alternateStyles.forEach((style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });
    }

    /* ================ Theme Light and Dark Mode ================ */
    const dayNight = document.querySelector(".day-night");
    if (dayNight) {
        // Load saved theme from localStorage or default to dark mode
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.remove("dark");
            dayNight.querySelector("i").classList.add("fa-sun");
        } else {
            document.body.classList.add("dark");
            dayNight.querySelector("i").classList.add("fa-moon");
        }

        // Toggle dark/light mode and save preference
        dayNight.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                dayNight.querySelector("i").classList.remove("fa-sun");
                dayNight.querySelector("i").classList.add("fa-moon");
            } else {
                localStorage.setItem("theme", "light");
                dayNight.querySelector("i").classList.remove("fa-moon");
                dayNight.querySelector("i").classList.add("fa-sun");
            }
        });
    }
});
