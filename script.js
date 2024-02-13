document.addEventListener('DOMContentLoaded', function () {
    // Assuming you have some way to access the Yahoo Finance page content
    const yahooFinancePage = /* some method to access Yahoo Finance content */;

    // Get the first <h3> element
    const firstH3 = yahooFinancePage.querySelector('h3');

    // Find the <a> element inside the first <h3>
    const link = firstH3.querySelector('a');

    // Click on the link
    link.click();
});