// template.js

document.addEventListener("DOMContentLoaded", function() {
    // Header rendering
    const header = document.querySelector("header");
    header.innerHTML = `
        <!-- back button -->
        <button class="logo">
            <a href="../index.html">
                <!-- <img src="https://cdn-icons-png.flaticon.com/512/3114/3114883.png" height="50px" width="50px"> -->
                <img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" height="50px" width="50px">
            </a>
        </button>
        <a href="../index.html"><button class="header-left-buttons">Course</button></a>
        <a href="../index.html"><button class="header-left-buttons">Practice</button></a>
        <a href="../index.html"><button class="header-left-buttons">Note</button></a>
        <!-- main-header -->
        <div class="main-header">
            <div>Ani - Thing</div>
        </div>
        <!-- log in button -->
        <button id="logInButton">
            <img src="https://cdn-icons-png.flaticon.com/256/310/310818.png" height="30px">
        </button>
        <!-- menu button -->
        <button id="menuButton">
            <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_2_icon-icons.com_71856.png" height="60px">
        </button>
    `;

    // Footer rendering
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <p>&copy; 2024 NoMercySusie</p>
    `;

    // Menu button functionality
    const menuButton = document.getElementById("menuButton");
    const menuList = document.getElementById("menuList");
    menuButton.addEventListener("click", function() {
        menuList.classList.toggle("hidden");
    });

    // Login button functionality
    const logInButton = document.getElementById("logInButton");
    const logInEntrance = document.getElementById("logInEntrance");
    logInButton.addEventListener("click", function() {
        logInEntrance.classList.toggle("hidden");
    });

    // Form submission
    const logInForm = document.getElementById("logInForm");
    logInForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Handle form submission logic here
        console.log("Username:", username);
        console.log("Password:", password);
        // Can send this data to a server or handle it as required
    });
});

// app.js
// document.addEventListener("DOMContentLoaded", function() {
//     // Fetch JSON data
//     fetch("data.json")
//         .then(response => response.json())
//         .then(data => {
//             renderHeader(data.header);
//             renderFooter(data.footer);
//         })
//         .catch(error => {
//             console.error("Error fetching JSON:", error);
//         });

//     // Function to render header
//     function renderHeader(headerData) {
//         const header = document.querySelector("header");
//         header.innerHTML = `
//             <button id="backButton">
//                 <a href="${headerData.backButton.url}">
//                     <img src="${headerData.backButton.image}" height="50px" width="50px">
//                 </a>
//             </button>
//             <div class="main-header">${headerData.title}</div>
//             <button id="logInButton">
//                 <img src="${headerData.logInButton.image}" height="30px">
//             </button>
//             <button id="menuButton">
//                 <img src="${headerData.menuButton.image}" height="60px">
//             </button>
//         `;
//     }

//     // Function to render footer
//     function renderFooter(footerData) {
//         const footer = document.querySelector("footer");
//         footer.innerHTML = `
//             <p>&copy; ${footerData.year} ${footerData.author}</p>
//         `;
//     }

//     // Add event listeners and functionality...
// });
