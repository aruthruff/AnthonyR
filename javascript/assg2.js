/**********
Date: 5-27-2023
Author: Anthony Ruthruff
Class: CITW 165
Exercise: Exercise 2
**********/




var today = new Date();
var hourNow = today.getHours();
var greeting;


if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 11) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

var element = document.getElementById('h2')

document.write('<h1>' + greeting + '</h1>');

function myFunction() { document.write("<h2> Welcome </h2>") 
    document.getElementById("h2").style.color = "blue";
}

myFunction()



var info = document.getElementById("info");
info.style.backgroundColor = "red";









