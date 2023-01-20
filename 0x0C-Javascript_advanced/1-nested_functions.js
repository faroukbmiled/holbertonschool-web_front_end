var globalVariable = "Welcome";

function outer() {
  alert(globalVariable);
  var course = "Holberton";

  function inner() {
    alert(globalVariable + " " + course);

    function inception() {
      var exclamation = "!";
      alert(globalVariable + " " + course + exclamation);
    }
    inception();
  }
  inner();
}
outer();
