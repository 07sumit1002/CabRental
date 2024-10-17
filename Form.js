// Get form elements
const form = document.querySelector('.booking-form');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const city = document.getElementById('city');
const vehicle = document.getElementById('vehicle');
const pickupDate = document.getElementById('pickupDate');
const dropoffDate = document.getElementById('dropoffDate');
const bookNowButton = document.getElementById('bookNow');

// Helper function to validate input fields
function validateForm() {
    if (fullName.value === "") {
        alert("Please enter your full name.");
        fullName.focus();
        return false;
    }

    if (phone.value === "" || !/^\d{10}$/.test(phone.value)) {
        alert("Please enter a valid 10-digit phone number.");
        phone.focus();
        return false;
    }

    if (email.value === "" || !/\S+@\S+\.\S+/.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }

    if (city.value === "Select City") {
        alert("Please select a city.");
        city.focus();
        return false;
    }

    if (vehicle.value === "Select Vehicle") {
        alert("Please select a vehicle.");
        vehicle.focus();
        return false;
    }

    if (pickupDate.value === "") {
        alert("Please select a pickup date.");
        pickupDate.focus();
        return false;
    }

    if (dropoffDate.value === "") {
        alert("Please select a drop-off date.");
        dropoffDate.focus();
        return false;
    }

    if (new Date(pickupDate.value) > new Date(dropoffDate.value)) {
        alert("Drop-off date cannot be earlier than pickup date.");
        dropoffDate.focus();
        return false;
    }

    return true;
}

// Handle form submission
bookNowButton.addEventListener('click', (e) => {
    e.preventDefault(); 

    if (validateForm()) {
        alert("Form submitted successfully!");
    }
});
