(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function statusChangeCallback(response) {
  // Called with the results from FB.getLoginStatus().
  console.log("statusChangeCallback");
  console.log(response); // The current login status of the person.
  if (response.status === "connected") {
    // Logged into your webpage and Facebook.
    testAPI();
  } else {
    // Not logged into your webpage or we are unable to tell.
    document.getElementById("status").innerHTML = "Please log " + "into this webpage.";
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: "1099553874278619",
    cookie: true,
    xfbml: true,
    version: "v18.0",
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });

  FB.login(function (response) {
    if (response.authResponse) {
      console.log("Welcome!  Fetching your information.... ");
      FB.api("/me", { fields: "name, email" }, function (response) {
        document.getElementById("profile").innerHTML =
          "Good to see you, " + response.name + ". i see your email address is " + response.email;
      });
    } else {
      //  <!-- If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email -->
      console.log("User cancelled login or did not fully authorize.");
    }
  });

  FB.AppEvents.logPageView();
};

function testAPI() {
  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log("Welcome!  Fetching your information.... ");
  FB.api("/me", function (response) {
    console.log("Successful login for: " + response.name);
    document.getElementById("status").innerHTML = "Thanks for logging in, " + response.name + "!";
  });
}
