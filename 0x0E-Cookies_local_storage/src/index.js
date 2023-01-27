function setCookies() {
  var firstname = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;
  document.cookie = "firstname=" + firstname;
  document.cookie = "email=" + email;
}

function showCookies() {
  var cookies = document.cookie;
  var p = document.createElement("p");
  p.innerHTML = "Cookies: " + cookies;
  document.body.appendChild(p);
}
