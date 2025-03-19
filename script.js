document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let currentTheme = localStorage.getItem("theme");

    // Apply the saved theme or system preference
    if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add("dark-mode");
    }

    // Toggle Theme on Button Click
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Save theme preference
        const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
});
