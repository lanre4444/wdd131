// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // The three more temple objects here...
    {
        templeName: "Orlando Florida",
        location: "Windermere, Florida, United States",
        dedicated: "1994, October, 9",
        area: 70000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51938-main.jpg"
    },
    {
        templeName: "Baton Rouge Louisiana",
        location: "Baton Rouge, Louisiana, United States",
        dedicated: "2000, July, 16",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/baton-rouge-louisiana-temple/baton-rouge-louisiana-temple-7146-main.jpg"
    },
    {
        templeName: "McAllen Texas",
        location: "McAllen, Texas, United States",
        dedicated: "2023, October, 8",
        area: 27897,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
    }
];

// Select the gallery container
const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("#page-title");

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

function displayTemples(filteredTemples) {

    // Clear the gallery before displaying temples
    gallery.innerHTML = "";

    filteredTemples.forEach((temple) => {

        // Create the HTML elements
        const card = document.createElement("figure");
        const image = document.createElement("img");
        const caption = document.createElement("figcaption");

        // Set image attributes
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        // Set the caption content
        caption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        // Put the image and caption inside the figure
        card.appendChild(image);
        card.appendChild(caption);

        // Add the figure to the gallery
        gallery.appendChild(card);
    });

}

// Display all temples when the page loads
displayTemples(temples);

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Old";

    const oldTemples = temples.filter((temple) => {
        return new Date(temple.dedicated).getFullYear() < 1900;
    });

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "New";

    const newTemples = temples.filter((temple) => {
        return new Date(temple.dedicated).getFullYear() > 2000;
    });

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Large";

    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Small";

    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
});