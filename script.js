let currentUser = "";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Nelson" && password === "1234") {
        currentUser = "Nelson";
        openDashboard();
    } 
    else if (username === "Migad" && password === "20/05/2025") {
        currentUser = "Migad";
        openDashboard();
    } 
    else {
        document.getElementById("status").innerText = "Wrong login ❌";
    }
}

function openDashboard() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("welcome").innerText = "Welcome " + currentUser + " 💖";

    showLove();
}

function saveMessage() {
    let msg = document.getElementById("message").value;
    localStorage.setItem(currentUser + "_msg", msg);
    alert("Saved 💾");
}

function loadMessage() {
    let msg = localStorage.getItem(currentUser + "_msg");
    if (msg) {
        document.getElementById("message").value = msg;
    } else {
        alert("No saved message ❌");
    }
}

function showLove() {
    if (currentUser === "Nelson") {
        alert("Migad ❤️\nBUILDING THE FUTURE TOGETHER 💕");
    } else {
        alert("Nelson 💙\nYou are my happiness 💕");
    }
}