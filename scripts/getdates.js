// Get the current year and display it in the footer
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get the last modified date of the document and display it in the second paragraph
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last modified: " + document.lastModified;
