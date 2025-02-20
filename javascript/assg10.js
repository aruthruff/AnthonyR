/**********
Date: 7-21-2023
Author: Anthony Ruthruff
Class: CITW 165
Exercise: Exercise 10
**********/


$("#email_form").validate({
    rules: {
        last_name: "required",
        first_name: "required",
        zip: "required",
        email: "required",
        email_confirm: {
            equalTo: "#email"
        }
    }
});
    

















