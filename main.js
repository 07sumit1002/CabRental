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
  },
});
AOS.init({
  duration: 800,
  delay: 400
});
