// WDD 131 - Product Review Confirmation
// Author: Lanre Ojo

// Get current review count
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase by one
reviewCount++;

// Save updated count
localStorage.setItem("reviewCount", reviewCount);

// Display count
document.querySelector("#reviewCount").textContent = reviewCount;

// Footer - Current Year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Footer - Last Modified
document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;