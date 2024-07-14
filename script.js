document.addEventListener('DOMContentLoaded', () => {
  const chatbot = document.getElementById('chatbot');
  const openChatbotBtn = document.getElementById('open-chatbot-btn');
  const closeBtn = document.getElementById('close-btn');
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatbotMessages = document.getElementById('chatbot-messages');

  openChatbotBtn.addEventListener('click', () => {
      chatbot.style.display = 'flex';
      openChatbotBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
      chatbot.style.display = 'none';
      openChatbotBtn.style.display = 'block';
  });

  sendBtn.addEventListener('click', () => {
      const message = userInput.value;
      if (message.trim() !== '') {
          addMessage('user', message);
          userInput.value = '';
          botReply(message);
      }
  });

  userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          sendBtn.click();
      }
  });

  function addMessage(sender, text) {
      const messageElem = document.createElement('div');
      messageElem.classList.add('message', `${sender}-message`);
      messageElem.textContent = text;
      chatbotMessages.appendChild(messageElem);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function botReply(userMessage) {
      let botMessage = 'Sorry, I didn\'t understand that.';

      const lowerCaseMessage = userMessage.toLowerCase();

      if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
          botMessage = 'Hello! How can I assist you today? 😊';
      } else if (lowerCaseMessage.includes('book') && lowerCaseMessage.includes('cab')) {
          botMessage = 'Sure! You can book a cab by visiting our booking page.';
      } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
          botMessage = 'Our cab rental prices vary based on the distance and type of vehicle. Please visit our pricing page for more details.';
      } else if (lowerCaseMessage.includes('contact')) {
          botMessage = 'You can contact us at support@cabrental.com or call us at (123) 456-7890.';
      } else if (lowerCaseMessage.includes('location')) {
          botMessage = 'We operate in multiple cities. Please provide your city to check availability.';
      } else if (lowerCaseMessage.includes('cancel')) {
          botMessage = 'To cancel a booking, please visit our cancellation page or contact our support team.';
      } else if (lowerCaseMessage.includes('thanks') || lowerCaseMessage.includes('thank you')) {
          botMessage = 'You\'re welcome! If you have any other questions, feel free to ask.';
      }
      else if (lowerCaseMessage.includes('how') && lowerCaseMessage.includes('book')) {
        botMessage = 'You can book a cab by visiting our booking page and filling in your details. If you need further assistance, I\'m here to help!';
      }
        else if (lowerCaseMessage.includes('schedule') && lowerCaseMessage.includes('ride')) {
          botMessage = 'To schedule a ride, please go to our booking page, select your preferred date and time, and complete the form. If you have any questions, feel free to ask.';
        }
        else if (lowerCaseMessage.includes('operate') && lowerCaseMessage.includes('city')) {
          botMessage = 'Yes, we operate in [city]. You can book a cab through our website. If you need further assistance, let me know.';
        }
        else if (lowerCaseMessage.includes('operating') && lowerCaseMessage.includes('hours')) {
          botMessage = 'Our cabs operate 24/7 to accommodate your needs.';
        }
        else if (lowerCaseMessage.includes('payment methods')) {
          botMessage = 'We accept various payment methods including credit cards, debit cards, and digital wallets. You can find more details on our payment methods page.';
        }
        else if (lowerCaseMessage.includes('driver')) {
          botMessage = 'You can get details about your driver after you book a cab. The driver\'s information will be shared with you via email and SMS.';
      } else if (lowerCaseMessage.includes('vehicle')) {
        botMessage = 'We offer various types of vehicles including sedans, SUVs, and luxury cars. You can choose the type of car when booking a cab on our website.';
      }
      else if (lowerCaseMessage.includes('safety')) {
        botMessage = 'Your safety is our priority. We conduct background checks on all our drivers and ensure our vehicles are regularly sanitized. You can find more information on our safety measures page.';
      }
      else if (lowerCaseMessage.includes('special request')) {
        botMessage = 'We accommodate special requests such as child seats and wheelchair accessible cabs. Please mention your requirements when booking a cab or contact our support for assistance.';
      }
      else if (lowerCaseMessage.includes('feedback')) {
        botMessage = 'We value your feedback! You can leave feedback on our website after your ride. Thank you for helping us improve our services.';
      }
      else {
        botMessage = 'Sorry, I didn\'t understand that. Can you please rephrase or ask another question?';
    }
      setTimeout(() => {
          addMessage('bot', botMessage);
      
      }, 1000);
  }
});




document
  .getElementById("view-all-button")
  .addEventListener("click", function () {
    const testimonialsContainer = document.getElementById(
      "testimonials-container"
    );
    document.getElementById('bookNow').addEventListener('click', function() {
      alert('Booking confirmed!');
  });
  
  
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
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 mybutton.addEventListener("click", function() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 });
 // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

 
 
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
