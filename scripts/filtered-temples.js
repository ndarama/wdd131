// Hamburger menu toggle for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');  // Toggle visibility of nav links

  // Toggle hamburger icon between ☰ and ✖
  if (hamburger.textContent === '☰') {
    hamburger.textContent = '✖';  // Change to 'X' when clicked
  } else {
    hamburger.textContent = '☰';  // Change back to hamburger icon
  }
});

// Temples array
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
    // New temples added:
    {
      templeName: "Mediford Oregon",
      location: "Oregon, United States",
      dedicated: "1999, March, 15",
      area: 10700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/medford-oregon-temple/medford-oregon-temple-1583-main.jpg"
    },
    {
      templeName: "Tuxtla Gutiérrez Mexico",
      location: "Chiapas, Mexico",
      dedicated: "1999, February, 25",
      area: 10700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tuxtla-gutierrez-mexico-temple/tuxtla-gutierrez-mexico-temple-15226-main.jpg"
    },
    {
      templeName: "Kona Hawaii",
      location: "Hawaii, United States",
      dedicated: "1998, May, 7",
      area: 12325,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-40578-main.jpg"
    },
    {
      templeName: "Freetown Sierra Leonne",
      location: "Freetown, Sierra Leonne",
      dedicated: "2022, March, 19",
      area: 18000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/freetown-sierra-leone-temple/freetown-sierra-leone-temple-24087-main.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
       
  ];  

// Display temple cards
const templeContainer = document.querySelector('#temple-container');

function displayTemples(temples) {
  templeContainer.innerHTML = '';  // Clear existing content
  temples.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');
  
    templeCard.innerHTML = `
      <figure>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        <figcaption>
          <h3>${temple.templeName}</h3>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area} square feet</p>
        </figcaption>
      </figure>
    `;
  
    templeContainer.appendChild(templeCard);
  });
}

displayTemples(temples);  // Display all temples on load


// Filtering functions
document.getElementById('old-temples').addEventListener('click', () => {
  displayTemples(temples.filter(temple => new Date(temple.dedicated.split(',')[2]).getFullYear() < 1900));
});

document.getElementById('new-temples').addEventListener('click', () => {
  displayTemples(temples.filter(temple => new Date(temple.dedicated.split(',')[2]).getFullYear() > 2000));
});

document.getElementById('large-temples').addEventListener('click', () => {
  displayTemples(temples.filter(temple => temple.area > 90000));
});

document.getElementById('small-temples').addEventListener('click', () => {
  displayTemples(temples.filter(temple => temple.area < 10000));
});

document.getElementById('home').addEventListener('click', () => {
  displayTemples(temples);  // Display all temples
});

// Footer - Set current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;