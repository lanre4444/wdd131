// Display the current year
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Display the last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.innerHTML = "&times;";
    } else {
        menuButton.innerHTML = "&#9776;";
    }
});