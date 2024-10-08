// Static values for temperature (in °C) and wind speed (in km/h)
const temperature = 10;  // Static temperature in °C
const windSpeed = 5;     // Static wind speed in km/h

// Function to calculate the wind chill
function calculateWindChill(temp, windSpeed) {
    // Wind chill formula (for Celsius)
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Function to update the wind chill in the Weather section
function displayWindChill() {
    const windChillElement = document.querySelector("#weather-card ul li:nth-child(4)");

    // Check if the conditions are met for calculating wind chill
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill} °C`;
    } else {
        // If the conditions aren't met, display "N/A"
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
    }
}

// Call the displayWindChill function when the page loads
window.onload = displayWindChill;
