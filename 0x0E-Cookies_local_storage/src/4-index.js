function setCookies() {
  var firstName = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;
  Cookies.set("firstname", firstName, { expires: 10 });
  Cookies.set("email", email, { expires: 10 });
  showWelcomeMessageOrForm();
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
  if (Cookies.get("email") && Cookies.get("firstname")) {
    hideForm();
    const newElement = document.createElement("h1");
    newElement.setAttribute("id", "welcome");
    newElement.innerHTML =
      `Welcome ${Cookies.get("firstname")} ` +
      `<a href="javascript:deleteCookiesAndShowForm()" style="margin-left: 10px; font-style: italic; font-weight: normal; text-decoration: none;">(logout)</a>`;
    document.body.appendChild(newElement);
  } else showForm();
}
showWelcomeMessageOrForm();
