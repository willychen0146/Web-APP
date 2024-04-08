// app.js
// import { $ } from "./dollars.js";

// const menuButton = $('#menuButton');
// const menuList = $('#menuList');

// add base element to assign BASE_URL (i.e. /Web-App/) for rest of the href.
const base = document.createElement('base')
base.href = import.meta.env.BASE_URL
document.head.insertBefore(base, document.head.firstChild)

document.getElementById('menuButton').addEventListener('click', function() {
    var menu = document.getElementById('menuList');
    menu.style.display = 'flex'; // Show the menu
    menu.style.animation = 'slideDown 0.5s ease forwards'; // Apply slide down animation
});

document.querySelector('.menu-close-btn').addEventListener('click', function() {
    var menu = document.getElementById('menuList');
    menu.style.animation = 'slideUp 0.5s ease forwards'; // Animate slide up
    setTimeout(function() {
        menu.style.display = 'none'; // Hide after animation
        menu.style.animation = ''; // Reset animation property
    }, 500); // Wait for animation to finish
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
