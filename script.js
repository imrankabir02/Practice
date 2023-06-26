function checkInput(){
    const email = document.getElementById("email");
    const emailValue = email.value.trim();
    if(emailValue === ""){
        setErrorMessage(email, "Email Required!");
        email.focus();

    }else if(!isValidateEmail(emailValue)){
        setErrorMessage(email, "Email is not valid!");
        email.focus();
        return 0;
    }else{
      setSuccessMessage(email, "Success!");
    }
}

function setErrorMessage(input, msg){
    const email = document.getElementById("msg");
    email.style.display = "block";
    email.innerText = msg;
}

function setSuccessMessage(input,msg){
  const emailForm = document.getElementById("emailForm");
  emailForm.submit();
  const email = document.getElementById("msg");
  email.classList.remove("alert-danger");
  email.classList.add("alert-success");
  email.style.display = "block";
  email.innerText = msg;
}

function isValidateEmail (email){
    const pattern = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

document.addEventListener('keydown', function(event) {
  const msg = document.getElementById('msg');
  msg.style.display = 'none';
});