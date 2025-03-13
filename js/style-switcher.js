<!-- ================Toggle Style Switcher================== -->
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
/*<!-- ================Theme Colors================== -->*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}

/*<!-- ================Theme Light and Dark Mode================== -->*/
document.addEventListener("DOMContentLoaded", () => {
    const dayNight = document.querySelector(".day-night");
    const icon = dayNight.querySelector("i");

    // Apply persisted theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.toggle("dark", savedTheme === "dark");
    }
    updateIcon();

    dayNight.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        updateIcon();
    });

    function updateIcon() {
        if (document.body.classList.contains("dark")) {
            icon.classList.add("fa-sun");
            icon.classList.remove("fa-moon");
        } else {
            icon.classList.add("fa-moon");
            icon.classList.remove("fa-sun");
        }
    }
});
