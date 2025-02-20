/**********
Date: 6-4-2023
Author: Anthony Ruthruff
Class: CITW 165
Exercise: Exercise 3
**********/



//Create variables for the welcome message
var greeting = 'Hey there ';
var name = 'Anthony!';
var message = ', please check your order:';
//Concatenate the three variable above to create the welcome message
var welcome = greeting + name + message;

//Create variable to hold details about the sign
var sign = 'Blissful Knight';
var tiles = sign.length;
var subTotal = tiles * 7;
var shipping = 9;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementById('greeting');
//Replace the content of that element with the personalized welcome message
el.textContent = welcome;

//Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Get the element that has an id of shipping then update its contents
var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

//Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;










