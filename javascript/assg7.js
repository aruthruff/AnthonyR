/**********
Date: 7-2-2023
Author: Anthony Ruthruff
Class: CITW 165
Exercise: Exercise 7
**********/


//**Variables**//
let yourName, yourNote, yourText, target;

yourNote = document.getElementById('yourNote');



//**IE 5-8 Fallback**//
function yourLabel(e) {
    if (!e) {
        e = window.event;
    }
    target = event.target || event.srcElement;
    yourText = e.target.value;
    yourNote.textContent = yourText;
}

//**On and Off Button**/
function yourControls(e) {
    if (!e) {
        e = window.event;
    }
    target = event.target || event.srcElement;
    if (event.preventDefault) {
        e.preventDefault();
    } else {
        event.returnValue = false;
    }

    switch (target.getAttribute('data-state')) {
        case 'on':
            on(target);
            break;
        case 'off':
            off(target);
            break;
    }
};

//**Grabbing Attribute Nodes**//
function on(target) {
    target.setAttribute('data-state', 'off');
    target.textContent = 'off';
}

function off(target) {
    target.setAttribute('data-state', 'on');
    target.textContent = 'on';
}



//**adds function to on/off button**//
if (document.addEventListener) {
    document.addEventListener('click', function (e) {
        yourControls(e);
    }, false);

    
} else {
    document.attachEvent('onclick', function (e) {
        yourControls(e);
    });

    yourName.attachEvent('onkeyup', yourLabel, false)
}

//**onkeydown Event**/
function myFunction() {
    document.getElementById("here").innerHTML = "Press Enter To Return To Homepage";
  }

//**open homepage function**/
function clickFunction() {
document.getElementById("container").innerHTML = location.href="index.html";
}