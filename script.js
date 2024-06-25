document
  .getElementById("view-all-button")
  .addEventListener("click", function () {
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
