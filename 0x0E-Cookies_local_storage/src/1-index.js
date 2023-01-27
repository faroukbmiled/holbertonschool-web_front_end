function setCookies() {
  var firstname = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;

  var date = new Date();
  date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();

  document.cookie = "firstname=" + firstname + ";" + expires + ";path=/";
  document.cookie = "email=" + email + ";" + expires + ";path=/";
}

function showCookies() {
  var cookies = document.cookie;
  var p = document.createElement("p");
  p.innerHTML = "Cookies: " + cookies;
  document.body.appendChild(p);
}
