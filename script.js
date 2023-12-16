window.fbAsyncInit = function () {
  FB.init({
    appId: "1099553874278619",
    xfbml: true,
    version: "v18.0",
  });
  FB.AppEvents.logPageView();

  function logoutFromFacebook() {
    FB.logout(function (response) {
      // Proses logout berhasil
      console.log("Logged out from Facebook");
      // Lakukan langkah logout di sini seperti menghapus token dari local storage dll.
    });
  }
};

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
