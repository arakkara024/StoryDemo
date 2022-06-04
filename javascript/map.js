let settingBtn = document.getElementById("setting-btn").addEventListener("click", function() {
    settingModal.style.display = "grid";
});
let settingModal = document.getElementById("setting-modal");
let closeSettings = document.getElementById("close").addEventListener("click", function() {
    settingModal.style.display = "none";
});


let no = document.getElementById("back").addEventListener("click", function() {
    exitModal.style.display = "grid";
});
let exitModal = document.getElementById("exit-modal");
let exitClose = document.getElementById("no").addEventListener("click", function() {
    exitModal.style.display = "none";
});

let level1 = document.getElementById("level1").addEventListener("click", function() {
    startModal.style.display = "grid";
});

let startModal = document.getElementById("start-modal");
let closeStart = document.getElementById("start-close").addEventListener("click", function() {
    startModal.style.display = "none";
});