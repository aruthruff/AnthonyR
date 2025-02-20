/**********
Date: 6-25-2023
Author: Anthony Ruthruff
Class: CITW 165
Exercise: Exercise 6
**********/





//ADD NEW ITEM START OF LIST
function myFunction(){
    var played = ["Cyberpunk 2077", "Slay the Spire", "Kindom: Two Crowns", "Flat Heroes", "Final Fantasy 14"]
    var item = document.getElementById("play");

    for (var i = 0; i < played.length; i++) {
        var node = document.createElement("li");
        node.innerHTML = played[i];
        item.appendChild(node);
    }
}
















