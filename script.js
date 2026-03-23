function validateForm() {
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let msg = document.getElementById("msg");

    if (pass !== confirm) {
        msg.innerHTML = "Passwords do not match!";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "Registered successfully!";
    msg.style.color = "green";
    return false;
}
