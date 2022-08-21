// console.log(document.cookie);
//Cookies
// let username = getCookie("foxClientName");
// let useremail = getCookie("foxClientEmail");
// if(username != ""){
// console.log(username);
// console.log(useremail);
// }else{
// setCookie("foxClientName", `${response.name}`, 365);
// setCookie("foxClientEmail", `${response.email}`, 365);
// }



//  window.fbAsyncInit = function () {
//     FB.getLoginStatus(function (response) {
//         console.log("status " + response.status);
//         console.log("accessToken " + response.authResponse['accessToken']);
//         console.log("expiresIn " + response.authResponse['expiresIn']);
//         console.log("reauthorize_required_in " + response.authResponse['reauthorize_required_in']);
//         console.log("signedRequest " +  response.authResponse['signedRequest']);
//         console.log("userID " + response.authResponse['userID']);
//     })
// }

let sellBtn = document.getElementById('sell-btn');

sellBtn.addEventListener("click", () => {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            window.location.replace('https://foxovic.epizy.com/user.html');
            // location.replace("user.html");
        } else {
            document.getElementById('id02').style.display = 'block';
        }
    }

    )
});


// function sell() {
//     FB.getLoginStatus(function (response) {
//         if (response.status === 'connected') {
//             window.location.replace('https://foxovic.epizy.com/user.html');
//             // location.replace("user.html");
//         } else {
//             document.getElementById('id02').style.display = 'block';
//         }
//     }

//     )
// };

