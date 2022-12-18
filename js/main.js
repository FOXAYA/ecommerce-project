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
/**/
function filterFunction(that, event) {
    let container, input, filter, li, input_val;
    container = $(that).closest(".searchable");
    input_val = container.find("input").val().toUpperCase();

    if (["ArrowDown", "ArrowUp", "Enter"].indexOf(event.key) != -1) {
        keyControl(event, container)
    } else {
        li = container.find("ul li");
        li.each(function (i, obj) {
            if ($(this).text().toUpperCase().indexOf(input_val) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        container.find("ul li").removeClass("selected");
        setTimeout(function () {
            container.find("ul li:visible").first().addClass("selected");
        }, 100)
    }
}

function keyControl(e, container) {
    if (e.key == "ArrowDown") {

        if (container.find("ul li").hasClass("selected")) {
            if (container.find("ul li:visible").index(container.find("ul li.selected")) + 1 < container.find("ul li:visible").length) {
                container.find("ul li.selected").removeClass("selected").nextAll().not('[style*="display: none"]').first().addClass("selected");
            }

        } else {
            container.find("ul li:first-child").addClass("selected");
        }

    } else if (e.key == "ArrowUp") {

        if (container.find("ul li:visible").index(container.find("ul li.selected")) > 0) {
            container.find("ul li.selected").removeClass("selected").prevAll().not('[style*="display: none"]').first().addClass("selected");
        }
    } else if (e.key == "Enter") {
        container.find("input").val(container.find("ul li.selected").text()).blur();
        onSelect(container.find("ul li.selected").text())
    }

    container.find("ul li.selected")[0].scrollIntoView({
        behavior: "smooth",
    });
}

function onSelect(val) {
    alert(val)
}

$(".searchable input").focus(function () {
    $(this).closest(".searchable").find("ul").show();
    $(this).closest(".searchable").find("ul li").show();
});
$(".searchable input").blur(function () {
    let that = this;
    setTimeout(function () {
        $(that).closest(".searchable").find("ul").hide();
    }, 300);
});

$(document).on('click', '.searchable ul li', function () {
    $(this).closest(".searchable").find("input").val($(this).text()).blur();
    onSelect($(this).text())
});

$(".searchable ul li").hover(function () {
    $(this).closest(".searchable").find("ul li.selected").removeClass("selected");
    $(this).addClass("selected");
});
/**/
