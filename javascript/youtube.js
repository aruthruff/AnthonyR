

//Button to toggle background color
function backgroundColorButton() {
  const button = document.getElementById("colorButton");
  const x = document.getElementById("bodyID");

  button.addEventListener("click", () => {
    x.classList.toggle("colorToggle");
  })
}

function createAttribute() {
  const changeClassColor = document.createAttribute("class");
  changeClassColor.value = "demo";
  document.getElementsByTagName("h1")[0].setAttributeNode(changeClassColor);

  const changeBodyColor = document.createAttribute("class");
  changeBodyColor.value = "bodyDefaultColor";
  document.getElementById("bodyID").setAttributeNode(changeBodyColor);
}

function timeButton() {
  const button = document.getElementById("messageButton");
  const x = document.getElementById("bodyID")

  button.addEventListener("click", () => {
    x.classList.toggle(alert(Date()));
  })
}

function locationButton() {

  const button = document.getElementById("locButton");
  const loc = document.getElementById("loc");

  button.addEventListener("click", () => {
    loc.classList.toggle(alert(msg));
  })

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

timeButton()

//Call Function
backgroundColorButton()

//Call Function
createAttribute()

//Call Function
locationButton()

//Call Function
myFunction()
















