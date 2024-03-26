// app.js
// import { $ } from "./dollars.js";

// const menuButton = $('#menuButton');
// const menuList = $('#menuList');

// add base element to assign BASE_URL (i.e. /Web-App/) for rest of the href.
const base = document.createElement('base')
base.href = import.meta.env.BASE_URL
document.head.insertBefore(base, document.head.firstChild)

const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('menuList');

menuButton.addEventListener('click', function() {
    menuList.classList.toggle('hidden');
});

const logInButton = document.getElementById('logInButton');
const logInEntrance = document.getElementById('logInEntrance');

logInButton.addEventListener('click', function() {
    logInEntrance.classList.toggle('hidden');
});

// Login submission
const logInForm = document.getElementById("logInForm");
logInForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Username:", username);
    console.log("Password:", password);
});

// Language courses stars
document.querySelectorAll('#languageCourses .star').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('checked');
      this.textContent = this.classList.contains('checked') ? '★' : '☆';
    });
});
