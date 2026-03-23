function validateForm() {
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPassword").value;
    let msg = document.getElementById("msg");

    if (pass !== confirmPass) {
        msg.innerHTML = "Passwords do not match!";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "Registered successfully!";
    msg.style.color = "green";
    return false;
}
