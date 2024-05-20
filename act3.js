function displayWelcomeMessage() {
    var name = document.getElementById("name").value;
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p>Welcome Mr/Ms " + name + "</p>";
  }