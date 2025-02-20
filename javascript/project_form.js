$("#email_form").validate({
    rules: {
        myname: "required",
        psw: "required",
        email: "required",
        email_confirm: {
            equalTo: "#email"
        }
    }
});
    
        