let settingBtn = document.getElementById("setting-btn").addEventListener("click", function() {
    settingModal.style.display = "grid";
});
let settingModal = document.getElementById("setting-modal");
let closeSettings = document.getElementById("close").addEventListener("click", function() {
    settingModal.style.display = "none";
});
