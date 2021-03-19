const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

function showError(input, message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    let checker = 0;
    //console.log("Submit was clicked");
    if(firstName.value === ""){
        showError(firstName, "Please enter your first name");
    }
    else{
        showSuccess(firstName);
        checker++

    }
    if(lastName.value === ""){
        showError(lastName, "Please enter your last name");
    }
    else{
        showSuccess(lastName);
        checker++
    }
    if(email.value === ""){
        showError(email, "Please enter an Email");
    }
    else{
        showSuccess(email);
        checker++
    }
    if(message.value === ""){
        showError(message, "Please enter your message");
    }
    else{
        showSuccess(message);
        checker++
    }
   
    if(checker == 4){
    swal("Thank you " + firstName.value + " !", "We will answer your question soon", "success");
    }
}); 