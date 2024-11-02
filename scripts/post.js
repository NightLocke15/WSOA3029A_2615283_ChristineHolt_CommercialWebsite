const messages = ["Please enter your name. No numbers or special characters allowed.", 
    "Please enter a valid email address.", 
    "Message invalid", 
    "Successfully Submitted!!", ""]

const nameInput = document.querySelector(".nameInput");
const emailInput = document.querySelector(".emailInput");
const messageInput = document.querySelector(".messageInput");
const submit = document.querySelector(".submit");

const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const messageError = document.querySelector(".messageError");
const successMessage = document.querySelector(".success");

submit.addEventListener('click', function () {
    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;

    let letterRule = /^[a-zA-Z ]*$/;
    let at = email.indexOf("@");
    let dot = email.lastIndexOf(".");

    if (name == null || name == "" || !letterRule.test(name)) {
        nameError.innerHTML = messages[0];
    }
    else {
        nameError.innerHTML = messages[4];
    }

    let emails = ["@gmail", "@outlook", "@yahoo", "@icloud"];

    if ((at < 1 || dot < at + 2 || dot + 2 > email.length) && emails.some(e => !email.includes(e))) {
        emailError.innerHTML = messages[1];
    }
    else {
        emailError.innerHTML = messages[4];
    }

    if (message == null || message == "" || message.length > 5000) {
        messageError.innerHTML = messages[2];
    }
    else {
        messageError.innerHTML = messages[4];
    }

    if (nameError.innerHTML == "" && emailError.innerHTML == "" && messageError.innerHTML == "") {
        successMessage.innerHTML = messages[3];
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
    else {
        successMessage.innerHTML = messages[4];
    }
})