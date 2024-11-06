// Function to show the specific section when navigation link is clicked
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

// Function to display the "Redeem New Card" form within the same section
function showRedeemNewCard() {
    // Hide the renewal section if visible
    document.getElementById('renew').style.display = 'none';

    // Show the fields for redeeming a new card
    const redeemSection = document.getElementById('redeem');
    redeemSection.innerHTML = `
        <h2>Redeem a New Card</h2>
        <form>
            <input type="email" placeholder="Email" required>
            <input type="text" placeholder="Phone Number" required>
            <select required>
                <option value="">Select Validity Plan</option>
                <option value="1 month">1 Month</option>
                <option value="3 months">3 Months</option>
                <option value="6 months">6 Months</option>
                <option value="1 year">1 Year</option>
            </select>
            <input type="text" placeholder="Card Owner's Name" required>
            <button type="submit">Proceed to Payment</button>
        </form>
    `;
}

// Function to display the "Renew Your Card" form within the same section
function showRenewCard() {
    // Hide the redeem section if visible
    document.getElementById('redeem').style.display = 'none';

    // Show the fields for renewing a card
    const renewSection = document.getElementById('renew');
    renewSection.innerHTML = `
        <h2>Renew Your Card</h2>
        <form>
            <input type="email" placeholder="Email" required>
            <input type="text" placeholder="Phone Number" required>
            <select required>
                <option value="">Select Validity Plan</option>
                <option value="1 month">1 Month</option>
                <option value="3 months">3 Months</option>
                <option value="6 months">6 Months</option>
                <option value="1 year">1 Year</option>
            </select>
            <input type="text" placeholder="Card Number" required>
            <input type="text" placeholder="Card Owner's Name" required>
            <button type="submit">Proceed to Payment</button>
        </form>
    `;
}

// Show the home section by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
