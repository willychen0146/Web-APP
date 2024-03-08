// app.js
import { $ } from "./dollars.js";

const menuButton = $('#menuButton');
const menuList = $('#menuList');

menuButton.addEventListener('click', function() {
    menuList.classList.toggle('hidden');
});
