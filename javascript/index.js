

//Set attribute to "demo" class from external CSS
//Set attribute to "body" class for external CSS
function createAttribute() {
    const changeClassColor = document.createAttribute("Class");
    changeClassColor.value = "demo";
    document.getElementsByTagName("h1")[0].setAttributeNode(changeClassColor);

    const changeBodyColor = document.createAttribute("Class");
    changeBodyColor.value = "bodyDefaultColor";
    document.getElementById("bodyID").setAttributeNode(changeBodyColor);
}


//Button to toggle background color
function backgroundColorButton() {
    const button = document.getElementById("colorButton");
    const x = document.getElementById("bodyID");
    button.addEventListener("click", () => { x.classList.toggle("colorToggle") })
}




function displayToggleButton() {
    const button = document.getElementById("displayButton");
    const x = document.getElementById("bodyID");
    button.addEventListener("click", () => {
        x.classList.toggle("displayToggle");
    })
}


function timeButton() {
    const button = document.getElementById("messageButton");
    const x = document.getElementById("bodyID")

    button.addEventListener("click", () => {
        x.classList.toggle(alert(Date()));
    })
}


function scamButton() {
    const button = document.getElementById("scamButton");
    const x = document.getElementById("bodyID");


    button.addEventListener("click", () => {
        x.classList.toggle(alert("Windows has detected a malware virus on your device. Please call 1-888-555-5555 IMMEDIATELY"));
    })
}



//Set background color from element ID's
function elementIDChange() {
    const button = document.getElementById("myButton");
    const para = document.getElementById("myPara");
    para.style.backgroundColor = "blue";
    button.style.backgroundColor = "lightgray";


    //Button to toggle paragraph to "hidden"
    button.addEventListener("click", () => {
        para.classList.toggle("hidden");
    });
}



function locationButton() {
    const button = document.getElementById("locButton");
    const loc = document.getElementById("loc");
    loc.style.backgroundColor = "rgb(44 48 50)";
    loc.style.color = "white";
    loc.style.width = "100px";
    loc.style.border = "solid";
    loc.style.borderRadius = "5px"


    button.addEventListener("click", () => {
        loc.classList.toggle("hidden");
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

// Call Function
locationButton()

// Call Function
backgroundColorButton()

// Call Function
elementIDChange()

// Call Function
scamButton()

// Call Function
timeButton()

// Call Function
displayToggleButton()

// Call Function
createAttribute()




