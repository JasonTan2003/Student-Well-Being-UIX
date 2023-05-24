const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const dropdownArrow = document.querySelector('.dropdown-arrow');
const dropdownMenu = document.querySelector('.dropdown-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

dropdownArrow.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
});

const loginButton = document.getElementById("loginButton");
const modal = document.getElementById("modal");
const closeButton = modal.querySelector(".close");

// Add event listener to the login button
loginButton.addEventListener("click", function() {
  // Show the modal
  modal.style.display = "block";
});

// Add event listener to the close button
closeButton.addEventListener("click", function() {
  // Hide the modal
  modal.style.display = "none";
});

const getStartedButton = document.getElementById("getStartedButton");
const getStartedModal = document.getElementById("getStartedModal");
const getStartedCloseButton = getStartedModal.querySelector(".close");

getStartedButton.addEventListener("click", function() {
    getStartedModal.style.display = "block";
});

getStartedCloseButton.addEventListener("click", function() {
    getStartedModal.style.display = "none";
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Extract the username from the email
    var username = email.substring(0, email.indexOf('@'));

    alert('Welcome, ' + username + '!');

    document.getElementById('modal').style.display = 'none';
});

document.getElementById('getStartedForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var username = email.substring(0, email.indexOf('@'));
    var password = document.getElementById('password').value;

    alert('Sign up successful! Welcome, ' + username + '!')

    document.getElementById('getStartedModal').style.display = 'none';
});