function setCookies() {
  var firstname = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;

  var date = new Date();
  date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000);
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

function showForm() {
  const welcomeElement = document.getElementById("welcome");
  if (welcomeElement) welcomeElement.remove();

  const form = document.getElementById("form");
  form.style.display = "block";
}

function hideForm() {
  const form = document.getElementById("form");
  form.style.display = "none";
}

function deleteCookiesAndShowForm() {
  showForm();
  document.cookie =
    "email=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "firstname=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function showWelcomeMessageOrForm() {
  if (getCookie("email") && getCookie("firstname")) {
    hideForm();
    const newElement = document.createElement("h1");
    newElement.setAttribute("id", "welcome");
    newElement.innerHTML =
      `Welcome ${getCookie("firstname")} ` +
      `<a href="javascript:deleteCookiesAndShowForm()" style="margin-left: 10px; font-style: italic; font-weight: normal; text-decoration: none;">(logout)</a>`;
    document.body.appendChild(newElement);
  } else showForm();
}
showWelcomeMessageOrForm();
