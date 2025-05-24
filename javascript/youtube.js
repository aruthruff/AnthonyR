// button to toggle background color
function backgroundColorButton() {
  const button = document.getElementById("colorButton");
 
  let y = document.body;
 
  button.addEventListener("click", () => {
    y.classList.toggle("colorToggle");
  })
   button.addEventListener("click", () => {
    x.classList.toggle("colorToggle");
  })
}



// function to change one attribut to another
function createSlidshow() {
  document.getElementById("slideshow").setAttribute("id", "slideshow-container");
}



function darkTopNav(){
  document.getElementById("myTopnav").setAttribute("id", "darkmodeNav");
}



// function to display time
function timeButton() {
  const button = document.getElementById("messageButton");
  const x = document.getElementById("bodyID")
  button.addEventListener("click", () => {
    x.classList.toggle(alert(Date()));
  })
}


// function to show latitude and longitude
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


backgroundColorButton();
createSlidshow();
darkTopNav();
timeButton();
locationButton();