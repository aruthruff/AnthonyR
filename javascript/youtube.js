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



function darkTopNav() {
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

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function countVisits() {
  let visitCount = parseInt(getCookie('visitCount')) || 0;
  visitCount++;
  setCookie('visitCount', visitCount, 30); // Cookie expires in 30 days
  document.getElementById('visitCounter').textContent = visitCount;
}

const scrollableElement = document.querySelector('#image-container');

scrollableElement.addEventListener('wheel', (event) => {
  event.preventDefault();
  scrollableElement.scrollLeft += event.deltaY; // Or event.deltaX if supported
});

countVisits();

backgroundColorButton();
createSlidshow();
darkTopNav();
timeButton();
locationButton();