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
    greeting = 'Good Evening!';
} else if (hourNow > 11) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}

var element = document.getElementById('h2')



function myFunction() { 
    var info = document.getElementById("intro").innerHTML ='<h1>' + greeting + '</h1>';
    var intro = document.getElementById("home").style.position = 'absolute' ;
  
}

    
    

myFunction()












