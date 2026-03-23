document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPassword").value;
    let msg = document.getElementById("msg");

    if (pass !== confirmPass) {
        msg.innerHTML = "Passwords do not match!";
        msg.style.color = "red";
        return;
    }

    msg.innerHTML = "Registered successfully!";
    msg.style.color = "green";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login successful!");
});
