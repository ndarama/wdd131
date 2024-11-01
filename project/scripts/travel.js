// Service lists for each package
const bronzeServices = [
    "Guided City Tour",
    "Group Transport",
    "Basic Accommodation",
    "Complimentary Breakfast",
    "Sightseeing",
    "Tour Guide",
    "Limited Access Pass",
    "Local Cuisine Experience"
  ];
  
  const silverServices = [
    "All Bronze Package Features",
    "Airport Pickup",
    "3-Star Accommodation",
    "VIP City Tour",
    "Free Wi-Fi",
    "Exclusive Dining Options",
    "Priority Pass",
    "In-depth Local Experiences"
  ];
  
  const goldServices = [
    "All Silver Package Features",
    "Luxury Hotel Stay",
    "Private Chauffeur",
    "Customized Itinerary",
    "Helicopter Tour",
    "Fine Dining",
    "Personal Guide",
    "All-Access Pass"
  ];
  // Array for featured destinations
  const featuredDestinations = [
    {
        image: "images/rwanda4.webp",
        name: "Mountain Gorilla Experience",
        description: "A unique adventure with mountain gorillas."
    },
    {
        image: "images/rwanda4.webp",
        name: "Nyungwe Rainforest",
        description: "Explore onee of the oldest rainforests in Africa."
    },
    {
        image: "images/rwanda4.webp",
        name: "Lake Kivu Beaches",
        description: "Relax by the scenic shores of Lake Kivu."
    }
  ];
  
  // Array for more destinations
  const moreDestinations = [
    {
        image: "images/rwanda4.webp",
        name: "Akagera National Park",
        description: "Discover the wildlife in Akagera's savannah."
    },
    {
        image: "images/rwanda4.webp",
        name: "Kigali City Tour",
        description: "Experience the vibrant culture of Kigali."
    },
    {
        image: "images/rwanda4.webp",
        name: "Volcanoes National Park",
        description: "Hike through the iconic volcanoes of Rwanda."
    },
    // Add more items as needed
  ];
  
  // Array for travel packages
  const travelPackages = [
    {
        name: "Bronze",
        description: "Affordable package with essential services.",
        services: [
            "Guided tours",
            "Accommodation",
            "Local transportation"
        ]
    },
    {
        name: "Silver",
        description: "A balanced package with added comforts.",
        services: [
            "Guided tours",
            "Accommodation",
            "Local transportation",
            "Meal plans",
            "Entrance fees to parks"
        ]
    },
    {
        name: "Gold",
        description: "Premium package for a luxurious experience.",
        services: [
            "Guided tours",
            "Luxury accommodation",
            "Private transportation",
            "All-inclusive meals",
            "VIP access to attractions",
            "Personal guide"
        ]
    }
  ];
  
  // Function to render destinations and packages dynamically
  function renderContent() {
    // Render featured destinations
    const featuredContainer = document.querySelector('.featured-container');
    featuredContainer.innerHTML = featuredDestinations.map(dest => `
        <div class="destination-item">
            <img src="${dest.image}" alt="${dest.name}">
            <p>${dest.name}</p>
        </div>
    `).join('');
  
    // Render more destinations
    const moreContainer = document.querySelector('.more-container');
    moreContainer.innerHTML = moreDestinations.map(dest => `
        <div class="destination-item">
            <img src="${dest.image}" alt="${dest.name}">
            <p>${dest.name}</p>
        </div>
    `).join('');
  
    // Render travel packages
    const packagesContainer = document.getElementById('packages-container');
    packagesContainer.innerHTML = travelPackages.map(pkg => `
        <div class="package-item">
            <h3>${pkg.name}</h3>
            <p>${pkg.description}</p>
            <ul>
                ${pkg.services.map(service => `<li>${service}</li>`).join('')}
            </ul>
        </div>
    `).join('');
  }
  
  // Call the render function on page load
  window.onload = renderContent;
  
  // Toggle mobile menu
  function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
  }
  
  // Populate package lists
  function populateServices(services, elementId) {
    const listElement = document.getElementById(elementId);
    services.forEach(service => {
        const listItem = document.createElement('li');
        listItem.textContent = service;
        listElement.appendChild(listItem);
    });
  }
  
  populateServices(bronzeServices, 'bronze-list');
  populateServices(silverServices, 'silver-list');
  populateServices(goldServices, 'gold-list');
  
  // Display last modified date
  document.getElementById('last-modified').textContent = document.lastModified;
  
  // Toggle mobile menu
  function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Populate the 'Subject' dropdown with predefined options
    const subjects = ["General Inquiry", "Support", "Feedback", "Other"];
    const subjectDropdown = document.getElementById("subject");
    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectDropdown.appendChild(option);
    });
  
    // Display the last modified date
    document.getElementById("lastModified").textContent = document.lastModified;
  
    // Initialize Google Map
    function initMap() {
        const mapOptions = {
            zoom: 15,
            center: { lat: -1.9438, lng: 30.0594 }
        };
        new google.maps.Map(document.getElementById("map"), mapOptions);
    }
  
    // Load Google Map script dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/`;
    script.async = true;
    document.body.appendChild(script);
  });
  
  
  