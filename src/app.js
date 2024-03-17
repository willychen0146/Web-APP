// app.js
import { $ } from "./dollars.js";

const menuButton = $('#menuButton');
const menuList = $('#menuList');

menuButton.addEventListener('click', function() {
    menuList.classList.toggle('hidden');
});

const logInButton = $('#logInButton');
const logInEntrance = $('#logInEntrance');

logInButton.addEventListener('click', function() {
    logInEntrance.classList.toggle('hidden');
});