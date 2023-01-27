function setCookies() {
  var firstname = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;

  var date = new Date();
  date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();

  document.cookie = "firstname=" + firstname + ";" + expires + ";path=/";
  document.cookie = "email=" + email + ";" + expires + ";path=/";
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    return "";
}

function showCookies() {
    var email = getCookie("email");
    var firstname = getCookie("firstname");
    var p = document.createElement("p");
    p.innerHTML = "Email: " + email + " - Firstname: " + firstname;
    document.body.appendChild(p);
}
