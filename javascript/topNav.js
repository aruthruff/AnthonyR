/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNav() {
  var x = document.getElementById("darkmodeNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

topNav();
