document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    // Populate product options dynamically
    const productSelect = document.getElementById('product');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Set the current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Review counter using localStorage
    if (localStorage.getItem('reviewCount') === null) {
        localStorage.setItem('reviewCount', '0');
    }

    if (window.location.pathname.includes('review.html')) {
        let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10);
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);

        // Display the updated review count on the page
        document.getElementById('reviewCounter').textContent = reviewCount;
    }
});
