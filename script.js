
addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();

});

function checkInput(){
    const email = document.getElementById("email");
    const emailValue = email.value.trim();
    if(emailValue === ""){
        setErrorMessage(email, "Email Required!");
        email.focus();
    }
    else if(!isValidateEmail(emailValue)){
        setErrorMessage(email, "Email is not valid!");
        email.focus();
    }
    else{
        setSuccessMessage(email, "Success!");
    }
}

function setErrorMessage(input, msg){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = msg;
    formControl.className = "form-control error";
}

function setSuccessMessage(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidateEmail (email){
    const pattern = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}


// // $('.email-input').on('blur', function() {
// //     console.log("jjj")
// //     var email = $(this).val(); // Get the value of the email input field
// //     var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // Regular expression for email validation
// //     if (!emailRegex.test(email)) {
// //       // Invalid email address
// //         $(this).addClass('invalid');
// //         alert("No");
// //     } else {
// //       // Valid email address
// //         $(this).removeClass('invalid');
// //     }
// // });
// // const email = document.getElementsByClassName("email-input");

// var emailInput = document.querySelector('email-input');
// emailInput.addEventListener('blur', function() {
//     var email = emailInput.value; // Get the value of the email input field
//     var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // Regular expression for email validation
//     if (!emailRegex.test(email)) {
//     // Invalid email address
//         emailInput.classList.add('invalid');
//     } else {
//       // Valid email address
//         emailInput.classList.remove('invalid');
//     }
// });