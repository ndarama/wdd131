// Update the copyright year and last modification date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Array for destinations and packages
const destinations = [
    {
        name: "Kigali",
        image: "images/rwandatravel (6).webp",
        description: "Experience the vibrant markets, art galleries, and local cuisine of Kigali."
    },
    {
        name: "Volcanoes National Park",
        image: "images/rwandatravel (1).webp",
        description: "Home to mountain gorillas, perfect for nature and adventure enthusiasts."
    },
    {
        name: "Lake Kivu",
        image: "images/rwandatravel (4).webp",
        description: "A peaceful lake ideal for relaxation, kayaking, and scenic views."
    }
];

const packages = [
    {
        name: "Bronze",
        icon: "fas fa-medal",
        description: "Affordable travel experiences with essential features."
    },
    {
        name: "Silver",
        icon: "fas fa-award",
        description: "Upgrade your experience with additional amenities and guided tours."
    },
    {
        name: "Gold",
        icon: "fas fa-trophy",
        description: "Exclusive access to premium experiences and top-rated services."
    }
];

// Function to render destinations dynamically
function renderDestinations() {
    const container = document.querySelector(".destinations .grid-container");
    container.innerHTML = ""; // Clear any existing content

    destinations.forEach(destination => {
        const item = document.createElement("div");
        item.classList.add("destination-item");

        item.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}" loading="lazy" width="350">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
        `;
        
        container.appendChild(item);
    });
}

// Function to render packages dynamically
function renderPackages() {
    const container = document.querySelector(".packages .grid-container");
    container.innerHTML = ""; // Clear any existing content

    packages.forEach(pkg => {
        const item = document.createElement("div");
        item.classList.add("package-item");

        item.innerHTML = `
            <i class="${pkg.icon}"></i>
            <h3>${pkg.name}</h3>
            <p>${pkg.description}</p>
        `;
        
        container.appendChild(item);
    });
}

// Call functions to render content
renderDestinations();
renderPackages();

// Define package details in arrays
const bronzeFeatures = [
    "Guided city tour of Kigali",
    "Budget accommodation",
    "Transportation within Kigali",
];

const silverFeatures = [
    "All Bronze features",
    "Accommodation upgrades",
    "Guided tours of national parks",
    "Cultural experience and workshops",
];

const goldFeatures = [
    "All Silver features",
    "Luxury accommodations",
    "Private guides and transportation",
    "Gorilla trekking experience",
    "Personalized itinerary",
];

// Function to populate package details
function populatePackages() {
    // Get each package list element by its ID
    const bronzeList = document.getElementById("bronze-list");
    const silverList = document.getElementById("silver-list");
    const goldList = document.getElementById("gold-list");

    // Function to create list items from features array
    function createListItems(featuresArray, listElement) {
        featuresArray.forEach((feature) => {
            const listItem = document.createElement("li");
            listItem.textContent = feature;
            listElement.appendChild(listItem);
        });
    }

    // Populate each package with its respective features
    createListItems(bronzeFeatures, bronzeList);
    createListItems(silverFeatures, silverList);
    createListItems(goldFeatures, goldList);
}

// Call function after DOM content is fully loaded
document.addEventListener("DOMContentLoaded", populatePackages);

// Array of travel packages
const travelPackages = [
    {
        name: "Mountain Gorilla Experience",
        image: "images/rwanda4.webp",
        description: "Discover the majestic mountain gorillas in their natural habitat.",
        location: "Volcanoes National Park"
    },
    {
        name: "Nyungwe Rainforest",
        image: "images/rwanda4.webp",
        description: "Experience the dense jungle and vibrant biodiversity.",
        location: "Nyungwe Forest National Park"
    },
    {
        name: "Lake Kivu Beaches",
        image: "images/rwanda4.webp",
        description: "Relax by the beautiful Lake Kivu and enjoy scenic beaches.",
        location: "Lake Kivu"
    },
    {
        name: "Akagera National Park",
        image: "images/rwanda4.webp",
        description: "Explore Rwanda's Big Five safari in Akagera National Park.",
        location: "Akagera National Park"
    },
    {
        name: "Kigali City Tour",
        image: "images/rwanda4.webp",
        description: "Discover Kigali's historical and cultural landmarks.",
        location: "Kigali"
    },
    {
        name: "Volcanoes National Park",
        image: "images/rwandatravel (1).webp",
        description: "Adventure through the park and hike active volcanoes.",
        location: "Volcanoes National Park"
    }
];

// Google Map Initialization
function initMap() {
    const rwandaLocation = { lat: -1.9706, lng: 30.1044 }; // Coordinates for Kigali, Rwanda
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 10,
        center: rwandaLocation
    });
    const marker = new google.maps.Marker({
        position: rwandaLocation,
        map: map,
        title: "Travel Rwanda Office"
    });
}

// JavaScript to handle form submission and validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default form submission behavior

        // Validate form fields
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();
        const agree = document.getElementById("agree").checked;

        if (!firstName || !lastName || !phone || !address || !subject || !message || !agree) {
            alert("Please fill in all fields and agree to the terms.");
            return;
        }

        // Redirect to confirmation page if form is valid
        window.location.href = "confirmation.html";
    });
});
