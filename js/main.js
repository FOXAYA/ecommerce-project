/*  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });*/

//wow animation
new WOW().init();
// Toggle the .pa-fixed-header class when the user
// scroll 100px

window.onscroll = () => { scrollNavbar() };

scrollNavbar = () => {
  // Target elements
  const navBar = document.getElementById("navBar");
  const links = document.querySelectorAll("#navBar a");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.add('text-black');
    }

  } else {
    navBar.classList.remove("pa-fixed-header");

    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.remove('text-black');
    }
  }
}
//code form
var login_container = document.getElementById('id01');
var signUp_container = document.getElementById('id02');
var container_areYouNew = document.getElementById('container-areyounew');


function goToSignup(){
  container_areYouNew.style.display ="none";
  login_container.style.display = "none";
  signUp_container.style.display = "block";

}


