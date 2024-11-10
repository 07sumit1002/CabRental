document
  .getElementById("view-all-button")
  .addEventListener("click", ()=>{
    const testimonialsContainer = document.getElementById(
      "testimonials-container"
  );

    const newTestimonials = [
      {
        text: "I've used many cab services before, but this one is by far the best. Highly recommended!",
        client: "- Emily",
        imgSrc: "images/download.jpeg",
      },
      {
        text: "Amazing service! The drivers are professional and the cars are always clean.",
        client: "- Chris",
        imgSrc: "images/istockphoto-1158014305-612x612.jpg",
      },
      {
        text: "Super reliable and affordable. I use their service for all my city travels.",
        client: "- Ashley",
        imgSrc: "images/images (3).jpeg",
      },
      {
        text: "Great experience! The cab arrived on time and the driver was very courteous.",
        client: "- Michael",
        imgSrc: "images/images (4).jpeg",
      },
      {
        text: "Affordable prices and excellent service. Will definitely use again.",
        client: "- Sarah",
        imgSrc: "images/images (5).jpeg",
      },
      {
        text: "Fast and reliable service. The app makes booking so easy.",
        client: "- David",
        imgSrc: "images/images (6).jpeg",
      },
    ];

    // Shuffle the array to get random testimonials each time
    newTestimonials.sort(() => Math.random() - 0.5);

    // Clear existing testimonials
    testimonialsContainer.innerHTML = "";

    // Add the original testimonials back
    const originalTestimonials = [
      {
        text: "Using Cab Rental has made my life so much easier. The service is top-notch and always reliable.",
        client: "- Alex",
        imgSrc: "images/download3.jpeg",
      },
      {
        text: "The best cab rental service I’ve ever used! The drivers are friendly and always on time.",
        client: "- Jordan",
        imgSrc: "images/images.jpeg",
      },
      {
        text: "Excellent service! The booking process is seamless, and the cabs are always clean and comfortable.",
        client: "- Taylor",
        imgSrc: "images/images (4).jpeg",
      },
    ];

    originalTestimonials.forEach((testimonial) => {
      const testimonialDiv = document.createElement("div");
      testimonialDiv.classList.add("testimonial");

      const testimonialText = document.createElement("p");
      testimonialText.textContent = testimonial.text;
      testimonialDiv.appendChild(testimonialText);

      const testimonialClient = document.createElement("p");
      testimonialClient.classList.add("client");
      testimonialClient.textContent = testimonial.client;
      testimonialDiv.appendChild(testimonialClient);

      const testimonialImg = document.createElement("img");
      testimonialImg.src = testimonial.imgSrc;
      testimonialImg.alt = testimonial.client.slice(2);
      testimonialImg.classList.add("client-photo");
      testimonialDiv.appendChild(testimonialImg);

      testimonialsContainer.appendChild(testimonialDiv);
    });

    // Get the button
    let mybutton = document.getElementById("topButton");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };



    // Add new random testimonials
    newTestimonials.slice(0, 3).forEach((testimonial) => {
      const testimonialDiv = document.createElement("div");
      testimonialDiv.classList.add("testimonial");

      const testimonialText = document.createElement("p");
      testimonialText.textContent = testimonial.text;
      testimonialDiv.appendChild(testimonialText);

      const testimonialClient = document.createElement("p");
      testimonialClient.classList.add("client");
      testimonialClient.textContent = testimonial.client;
      testimonialDiv.appendChild(testimonialClient);

      const testimonialImg = document.createElement("img");
      testimonialImg.src = testimonial.imgSrc;
      testimonialImg.alt = testimonial.client.slice(2);
      testimonialImg.classList.add("client-photo");
      testimonialDiv.appendChild(testimonialImg);

      testimonialsContainer.appendChild(testimonialDiv);
    });

  });
const themeSwitch = document.getElementById('theme-switch'); // Ensure this matches your HTML button's ID
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

document.getElementById('bookNow').addEventListener('click', function () {
  const name=document.getElementById('fullName').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const email=document.getElementById('email').value.trim();
  const city=document.getElementById('city').value.trim();
  const vehicle=document.getElementById('vehicle').value.trim();
  const pickupDate=document.getElementById('pickupDate').value.trim();
  const dropoffDate=document.getElementById('dropoffDate').value.trim();

  if(!name || !phone || !email || !city || !vehicle || !pickupDate || !dropoffDate)
  {
    alert('Please fill all fields');
  }
  else
  alert('Booking confirmed!');
});

// Function to enable dark mode
function enableDarkMode() {
  themeSwitch.classList.add('dark-theme'); // Update the switch appearance
  body.classList.add('dark-mode');
  header.classList.add('dark-mode');
  footer.classList.add('dark-mode');
}

// Function to disable dark mode
function disableDarkMode() {
  themeSwitch.classList.remove('dark-theme'); // Update the switch appearance
  body.classList.remove('dark-mode');
  header.classList.remove('dark-mode');
  footer.classList.remove('dark-mode');
}

// Event listener for dark mode toggle button
themeSwitch.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    localStorage.removeItem('dark-mode'); // Remove from local storage
    disableDarkMode(); // Switch to light mode
  } else {
    enableDarkMode(); // Switch to dark mode
    localStorage.setItem('dark-mode', 'enabled'); // Save in local storage
  }
});

// Optional: Check the initial mode on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
  enableDarkMode();
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to ML Fusion Lab!");
});