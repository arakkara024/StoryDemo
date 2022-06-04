// Variable Declarations

let relay = document.getElementById("relay");
let topLogBtn = document.getElementById("log-in-div-btn");
let topRegBtn = document.getElementById("register-div-btn");
let dualForm = document.getElementById("dual-form");

// Top Log in Button Function

topLogBtn.addEventListener("click", function() {
    relay.classList.remove("relay-btn-active");
    dualForm.classList.remove("register-form-active");
});

// Top Register Button Function

topRegBtn.addEventListener("click", function() {
    relay.classList.add("relay-btn-active");
    dualForm.classList.add("register-form-active");
});

