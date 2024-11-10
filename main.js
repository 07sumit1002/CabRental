function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var tel = document.forms["myForm"]["tel"].value;
  var location = document.forms["myForm"]["location"].value;
  var time = document.forms["myForm"]["time"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (tel == "") {
    alert("Contact must be filled out");
    return false;
  }
  if (location == "") {
    alert("Location must be filled out");
    return false;
  }
  if (time == "") {
    alert("Time must be filled out");
    return false;
  }
}
var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Link to the "next" button
    prevEl: ".swiper-button-prev", // Link to the "prev" button
  },
});
AOS.init({
  duration: 800,
  delay: 400
});

//FAQ SECTION JS STARTING
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
    const header = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon i");

    header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        accordions.forEach((a, i) => {
            const c = a.querySelector(".accordion__content");
            const ic = a.querySelector(".accordion__icon i");

            if (i === index) {
                c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
                ic.classList.toggle("ri-add-line", isOpen);
                ic.classList.toggle("ri-subtract-fill", !isOpen);
            } else {
                c.style.height = "0px";
                ic.classList.add("ri-add-line");
                ic.classList.remove("ri-subtract-fill");
            }
        });
    });
});
//FAQ SECTION JS ENDS HERE
