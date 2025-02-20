/**********
Date: 6-18-2023
Author: Anthony Ruthruff
Class: CITW 165
Exercise: Exercise 5
**********/  







function calc() {
    var text;
    var entry = parseInt(document.getElementById("submit").value);
    var letterGrade;
    //write the if statements in this area below, leaving the last curly brace at the end of the script.

    do {
        letterGrade = parseInt(letterGrade);
        letterGrade = prompt("Enter 0 through 100 to calculate grade, type (close) to exit");
        
      
        if (letterGrade >= 0) {
            alert(obtainGrade(letterGrade));
        } 
        else if (letterGrade == "close"){
            prompt.close();
        }
    } while (letterGrade < -1 || letterGrade > 101){
        prompt("Enter number 100 or below. " + score);
    };

    
    // GRADING FUNCTION
    function obtainGrade(score) {
        if (score >= 0 && score <= 60){
            return("Number grade: " + score + "\nLetter Grade: F")
        }
        else if (score >= 60 && score <= 69) {
            return ("Number grade: " + score + "\nLetter Grade: D");
        }
        else if (score >= 70 && score <= 76) {
            return ("Number grade: " + score + "\nLetter Grade: C");
        }
        else if (score >= 77 && score <= 79) {
            return ("Number grade: " + score + "\nLetter Grade:  C+");
        }
        else if (score >= 80 && score <= 82) {
            return ("Number grade: " + score + "\nLetter Grade: B-");
        }
        else if (score >= 83 && score <= 86) {
            return ("Number grade: " + score + "\nLetter Grade:  B");
        }
        else if (score >= 87 && score <= 89) {
            return ("Number grade: " + score + "\nLetter Grade: B+");
        }
        else if (score >= 90 && score <= 92) {
            return ("Number grade: " + score + "\nLetter Grade: A-");
        }
        else if (score >= 93 && score <= 96) {
            return ("Number grade: " + score + "\nLetter Grade: A");
        }
        else if (score >= 97 && score <= 100) {
            return ("Number grade: " + score + "\nLetter Grade: A+");
        }
        else if (score >= 100){
            return("Enter number between 0 - 100. " 
            + "\nYou entered: "+ score);
        }
        else if (score == "x"){
            prompt.close();
        }
    }
        
}

       





