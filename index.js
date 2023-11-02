/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                Logo animation        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
const text = document.getElementById('animated-text').textContent;
const letters = text.split('');

const animatedText = document.getElementById('animated-text');
animatedText.textContent = '';

letters.forEach((letter, index) => {
    setTimeout(() => {
        animatedText.textContent += letter;
    }, 100 * index);
});


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                Home Menu Bar        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
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
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                Dark theme button        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
const checkB = document.getElementById("check-5");
const header = document.body;

 checkB.addEventListener("change", () => {
    if (checkB.checked) {
        body.classList.remove("dark-theme");
    } else {
        body.classList.add("dark-theme");
    }
});
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

 themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        body.classList.remove("dark-theme");
    } else {
        body.classList.add("dark-theme");
    }
});
 
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                About me profile        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
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

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                Certificates        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/*>>>>>>>>>>>>>>>           Progress image 1           <<<<<<<<<<<<<<<<<*/
function openProfile2() {
    var modal = document.getElementById("progress-model");
    var fullPhoto = document.getElementById("full-progress-img1");
    modal.style.display = "block";
    fullPhoto.src ="certi.png";
}

function closeProfile2() {
    var modal = document.getElementById("progress-model");
    modal.style.display = "none";
}
/*>>>>>>>>>>>>>>>           Progress image 2           <<<<<<<<<<<<<<<<<*/
function openProfile3() {
    var modal = document.getElementById("progress-mode2");
    var fullPhoto = document.getElementById("full-progress-img3");
    modal.style.display = "block";
    fullPhoto.src ="certi2.png";
}

function closeProfile3() {
    var modal = document.getElementById("progress-mode2");
    modal.style.display = "none";
}
/*>>>>>>>>>>>>>>>           Progress image 3           <<<<<<<<<<<<<<<<<*/
function openProfile4() {
    var modal = document.getElementById("progress-mode3");
    var fullPhoto = document.getElementById("full-progress-img3");
    modal.style.display = "block";
    fullPhoto.src ="certi3.png";
}

function closeProfile4() {
    var modal = document.getElementById("progress-mode3");
    modal.style.display = "none";
}
/*>>>>>>>>>>>>>>>           Progress image 4           <<<<<<<<<<<<<<<<<*/
function openProfile5() {
    var modal = document.getElementById("progress-mode4");
    var fullPhoto = document.getElementById("full-progress-img4");
    modal.style.display = "block";
    fullPhoto.src ="certi4.png";
}

function closeProfile5() {
    var modal = document.getElementById("progress-mode4");
    modal.style.display = "none";
}
/*>>>>>>>>>>>>>>>           Progress image 5           <<<<<<<<<<<<<<<<<*/
function openProfile6() {
    var modal = document.getElementById("progress-mode5");
    var fullPhoto = document.getElementById("full-progress-img5");
    modal.style.display = "block";
    fullPhoto.src ="certi.png";
}

function closeProfile6() {
    var modal = document.getElementById("progress-mode5");
    modal.style.display = "none";
}
/*>>>>>>>>>>>>>>>           Progress image 6           <<<<<<<<<<<<<<<<<*/
function openProfile7() {
    var modal = document.getElementById("progress-mode6");
    var fullPhoto = document.getElementById("full-progress-img6");
    modal.style.display = "block";
    fullPhoto.src ="certi2.png";
}

function closeProfile7() {
    var modal = document.getElementById("progress-mode6");
    modal.style.display = "none";
}
/*>>>>>>>>>>>>>>>           Progress image 7           <<<<<<<<<<<<<<<<<*/
function openProfile8() {
    var modal = document.getElementById("progress-mode7");
    var fullPhoto = document.getElementById("full-progress-img7");
    modal.style.display = "block";
    fullPhoto.src ="certi3.png";
}

function closeProfile8() {
    var modal = document.getElementById("progress-mode7");
    modal.style.display = "none";
}
/*>>>>>>>>>>>>>>>           Progress image 8           <<<<<<<<<<<<<<<<<*/
function openProfile9() {
    var modal = document.getElementById("progress-mode8");
    var fullPhoto = document.getElementById("full-progress-img8");
    modal.style.display = "block";
    fullPhoto.src ="certi4.png";
}

function closeProfile9() {
    var modal = document.getElementById("progress-mode8");
    modal.style.display = "none";
}



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>               Feed back alert       <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // You can add code here to process the form data, like sending it to a server.

    // For this example, we'll just display an alert.
    alert("Feedback submitted! Thank you.");
});
