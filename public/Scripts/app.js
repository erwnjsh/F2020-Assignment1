// BEGIN DOCUMENT HEADER
// FILE NAME    :   app.js
// AUTHOR NAME  :   Erwin Joshua Manuel
// STUDENT ID   :   301107750
// DATE CREATED :   10/5/2020
// END DOCUMENT HEADER


// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function(){

    function Start()
    {
        console.log("App Started...");

        if(document.title === "Contact")
        {
            let sendButton = document.getElementById("sendButton");
            let cancelButton = document.getElementById("cancelButton");
            let form = document.forms[0];

            // SENDBUTTON CLICK
            sendButton.addEventListener("click",(event) => {
                event.preventDefault();

                // CAPTURING VALUES FROM FORM
                let FName = document.getElementById("FName").value;
                let LName = document.getElementById("LName").value;
                let Email = document.getElementById("Email").value;
                let TelNum = document.getElementById("TelNum").value;
                let Message = document.getElementById("Message").value;

                // OUTPUTTING VALUES ON CONSOLE
                console.info(`First Name     : ${FName}
                Last Name      : ${LName}
                Email          : ${Email}
                Phone Number   : ${TelNum}
                Message        : ${Message}`);

                form.reset();
            });

            // CANCEL BUTTON CLICK
            cancelButton.addEventListener("click",(event) => {
                event.preventDefault();
                if(confirm("Are you sure?"))
                {
                    location.href = "/";
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();