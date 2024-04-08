// template.js

// document.addEventListener("DOMContentLoaded", function() {
//     // Header rendering
//     const header = document.querySelector("header");
//     header.innerHTML = `
        // <!-- back button -->
        // <button class="logo">
        //     <a href="../index.html">
        //         <!-- <img src="https://cdn-icons-png.flaticon.com/512/3114/3114883.png" height="50px" width="50px"> -->
        //         <img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" height="50px" width="50px">
        //     </a>
        // </button>
        // <a href="../index.html"><button class="header-left-buttons">Course</button></a>
        // <a href="../index.html"><button class="header-left-buttons">Practice</button></a>
        // <a href="../index.html"><button class="header-left-buttons">Note</button></a>
        // <!-- main-header -->
        // <div class="main-header">
        //     <div>Ani - Thing</div>
        // </div>
        // <!-- log in button -->
        // <button id="logInButton">
        //     <img src="https://cdn-icons-png.flaticon.com/256/310/310818.png" height="30px">
        // </button>
        // <!-- menu button -->
        // <button id="menuButton">
        //     <img src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_2_icon-icons.com_71856.png" height="60px">
        // </button>

        // <nav id="menuList" class="hidden">
        //     <ul>
        //         <li><a href="#Introduction">Introduction</a></li>
        //         <li><a href="#About">About</a></li>
        //         <li><a href="#Anime-List">Anime-List</a></li>
        //         <li><a href="#Services">Services</a></li>
        //         <li><a href="#Contact">Contact</a></li>
        //     </ul>
        // </nav>

        // <!-- Login form -->
        // <div id="logInEntrance" class="hidden">
        //     <form id="logInForm">
        //         <h2>Login</h2>
        //         <label for="username">Username:</label>
        //         <input type="text" id="username" name="username" required>
        //         <label for="password">Password:</label>
        //         <input type="password" id="password" name="password" required>
        //         <input type="submit" value="Submit">
        //         <input type="reset" value="Reset">
        //     </form>
        // </div>
//     `;
// });

// render header
document.addEventListener("DOMContentLoaded", function() {
    fetch('./data/header.json')
        .then(response => response.json())
        .then(config => {
            // Render the logo
            const logoButton = document.querySelector('.logo a');
            const logoImage = document.querySelector('.logo img');
            if (logoButton && logoImage) {
                logoButton.setAttribute('href', config.logo.link);
                logoImage.setAttribute('src', config.logo.imageUrl);
                logoImage.setAttribute('height', config.logo.imgHeight);
                logoImage.setAttribute('width', config.logo.imgWidth);
            }

            // Render header buttons
            const header = document.querySelector('.headerButtons');
            config.buttons.forEach(button => {
                const anchor = document.createElement('a');
                anchor.setAttribute('href', button.link);
                anchor.innerHTML = `<button class="header-left-buttons">${button.text}</button>`;
                // header.insertBefore(anchor, header.firstChild);
                header.appendChild(anchor);
            });

            // Set main header text
            const mainHeaderDiv = document.querySelector('.main-header');
            if (mainHeaderDiv) {
                mainHeaderDiv.textContent = config.mainHeader;
            }

            // Set login button image
            const loginButtonImage = document.querySelector('#logInButton img');
            if (loginButtonImage) {
                loginButtonImage.setAttribute('src', config.loginButtonImage);
            }

            // Set menu button image
            const menuButtonImage = document.querySelector('#menuButton img');
            if (menuButtonImage) {
                menuButtonImage.setAttribute('src', config.menuButtonImage);
            }

            // Render the menu list
            // const menuList = document.querySelector('#menuList ul');
            // config.menuItems.forEach(item => {
            //     const listItem = document.createElement('li');
            //     listItem.innerHTML = `<a href="${item.link}">${item.text}</a>`;
            //     menuList.appendChild(listItem);
            // });

            // Get the menuList container
            const menuListContainer = document.querySelector('#menuList');

            // Create and append the close button
            const closeButton = document.createElement('div');
            closeButton.className = 'menu-close-btn';
            closeButton.innerHTML = '&times;';
            menuListContainer.appendChild(closeButton);

            // Create and append the ul element
            const menuList = document.createElement('ul');
            menuListContainer.appendChild(menuList);

            // Render the menu list items
            config.menuItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${item.link}">${item.text}</a>`;
                menuList.appendChild(listItem);
            });

            // Set login form
            const loginForm = document.querySelector('#logInEntrance');
            loginForm.innerHTML = `
                <form id="logInForm">
                    <h2>Login</h2>
                    <div class="form-control">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-control">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <div class="form-control">
                        <input type="submit" value="Submit">
                        <input type="reset" value="Reset">
                    </div>
                    <div class="form-control">
                        <p>Don't have an account? <a href="register.html">Register</a></p>
                    </div>
                </form>
            `;

            // Menu button functionality
            // const menuButton = document.getElementById("menuButton");
            // const tempMenuList = document.getElementById("menuList");
            // menuButton.addEventListener("click", function() {
            //     tempMenuList.classList.toggle("hidden");
            // });

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
                console.log('Login attempt', { username, password });
                // Can send this data to a server or handle it as required
            });
        })
        .catch(error => console.error('Error loading header configuration:', error));
})

// render footer
document.addEventListener("DOMContentLoaded", function() {
    fetch("./data/footer.json")
    .then(response => response.json())
    .then(config => {
        const footerLink = document.querySelector('.footer-link');
        config.socialLinks.forEach(socialLink => {
            const anchor = document.createElement('a');
            anchor.setAttribute('href', socialLink.url);
            const img = document.createElement('img');
            img.setAttribute('src', socialLink.imageSrc);
            img.setAttribute('height', '30px');
            img.style.padding = '5px'; // Adjust padding as needed
            anchor.appendChild(img);
            footerLink.appendChild(anchor);
        });
        const footerText = document.createElement('p');
        footerText.innerHTML = `${config.footerText.copyRight}<br>${config.footerText.contact}`;
        footerLink.appendChild(footerText);
    })
    .catch(error => console.error("Error fetching footer config:", error));
});

// header button functionality
// document.addEventListener("DOMContentLoaded", function() {
//     // Menu button functionality
//     const menuButton = document.getElementById("menuButton");
//     const menuList = document.getElementById("menuList");
//     menuButton.addEventListener("click", function() {
//         menuList.classList.toggle("hidden");
//     });

//     // Login button functionality
//     const logInButton = document.getElementById("logInButton");
//     const logInEntrance = document.getElementById("logInEntrance");
//     logInButton.addEventListener("click", function() {
//         logInEntrance.classList.toggle("hidden");
//     });
// });