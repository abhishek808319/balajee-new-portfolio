
const text = document.getElementById('animated-text').textContent;
const letters = text.split('');

const animatedText = document.getElementById('animated-text');
animatedText.textContent = '';

letters.forEach((letter, index) => {
    setTimeout(() => {
        animatedText.textContent += letter;
    }, 100 * index);
});
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
 

toggleBtn.onclick = function(){
 
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
 
}
const themeToggle = document.getElementById("themeToggle");
const body = document.body;


 
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
});
function openProfile() {
    var modal = document.getElementById("profile-modal");
    var fullPhoto = document.getElementById("full-profile-photo");
    modal.style.display = "block";
    fullPhoto.src = "profile.jpg";
}

function closeProfile() {
    var modal = document.getElementById("profile-modal");
    modal.style.display = "none";
}
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // You can add code here to process the form data, like sending it to a server.

    // For this example, we'll just display an alert.
    alert("Feedback submitted! Thank you.");
});