function createElement(data) {
    let paragraph = document.createElement("p");
    paragraph.innerText = data;
    document.body.appendChild(paragraph);
  }

  function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      let extract = data.query.pages[Object.keys(data.query.pages)[0]].extract;
      callback(extract);
    };
    xhr.send();
  }
  queryWikipedia(createElement);
