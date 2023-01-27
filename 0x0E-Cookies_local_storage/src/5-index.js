let availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

if (typeof Storage !== "undefined") {
  function addItemToCart(item) {
    sessionStorage.setItem(item, true);
  }

  function createStore() {
    const ul = document.createElement("ul");

    availableItems.forEach((item, _idx) => {
      const li = document.createElement("li");
      ul.innerHTML += `<li onclick="addItemToCart(this.id)" id=${item}>${item}</li>`;
    });
    document.body.appendChild(ul);
  }

  function displayCart() {
    if (sessionStorage.length > 0) {
      let p = document.createElement("p");
      p.innerHTML = `You previously had ${
        localStorage.length - 1
      } items in your cart`;
      document.body.appendChild(p);
    }
  }
  createStore();
  displayCart();
} else {
  alert(
    "Sorry, your browser does not support Web storage. Try again with a better one"
  );
}
