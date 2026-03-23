document.addEventListener("DOMContentLoaded", function () {
    let registerForm = document.getElementById("registerForm");
    let loginForm = document.getElementById("loginForm");
    let msg = document.getElementById("msg");

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let pass = document.getElementById("password").value;
        let confirmPass = document.getElementById("confirmPassword").value;

        if (name === "" || email === "" || pass === "" || confirmPass === "") {
            msg.innerHTML = "Please fill all fields!";
            msg.style.color = "red";
            return;
        }

        if (pass !== confirmPass) {
            msg.innerHTML = "Passwords do not match!";
            msg.style.color = "red";
            return;
        }

        msg.innerHTML = "Registered successfully!";
        msg.style.color = "green";
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login successful!");
    });
});
