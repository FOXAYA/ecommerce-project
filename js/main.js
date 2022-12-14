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
//form
function goToSignup() {
  document.getElementById('container-areyounew').style.display = "none";
  document.getElementById('id01').style.display = "none";
  document.getElementById('id02').style.display = "block";
}
//codezz
window.fbAsyncInit = function () {
  FB.init({
      appId: 530024878920498,
      status: true,
      cookie: true,
      xfbml: true
  });
  FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
          console.log('connected');
          var userProfile = document.getElementById('user-profile');
          document.getElementById('fbBtn').style.display = "none";
          document.getElementById('id01').style.display = 'none'
          userProfile.style.display = "block";

          FB.api('/me', { fields: 'id, name, email' }, function (response) {
              userProfile.innerHTML = response.name +
                  '<img src="https://graph.facebook.com/' +
                  response.id + '/picture">';

          });

      } else {
          console.log("no connected");
      }
  });
};

(function (doc) {
  var script;
  var id = 'facebook-jssdk';
  var ref = doc.getElementsByTagName('script')[0];
  if (doc.getElementById(id)) {
      return;
  }
  script = doc.createElement('script');
  script.id = id;
  script.async = true;
  script.src = "//connect.facebook.net/en_US/all.js";
  ref.parentNode.insertBefore(script, ref);
}(document));

function FbApp_Login() {
  FB.login(function (response) {
      if (response.authResponse) {
          console.log("user  loging in");
          window.location.replace('https://foxovic.epizy.com');
      }
      else {
          alert("Attempt of Login is Failed!");
      }
 `` }, { scope: 'email,user_photos,publish_actions' });
}