var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    const name = document.forms['message-form']['fullname'].value;
    const email = document.forms['message-form']['email'].value;
    const option = document.forms['message-form']['option'].value;
    
    if (name === '') {
        alert("Please input your name.");
        return false;
    }

    if (!(email.indexOf('@') !== -1 && email.indexOf('.') !== -1)) {
        alert("Please input a valid email address.");
        return false;
    }

    if (option === '') {
        alert("Please input your option.");
        return false;
    }

    setSenderUI(name, email, option);
});

function setSenderUI(name, email, option) {
    document.getElementById("sender-fullname").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-option").innerHTML = option;
}
