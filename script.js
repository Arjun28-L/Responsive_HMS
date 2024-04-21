let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

//This is for details of doctor to show in other page
document.addEventListener("DOMContentLoaded", function() {
    var eyeIcon1 = document.getElementById("eye-icon1");
    eyeIcon1.addEventListener("click", function() {
    window.open("dept1.html");
    });
});
document.addEventListener("DOMContentLoaded", function() {
   var eyeIcon2 = document.getElementById("eye-icon2");
    eyeIcon2.addEventListener("click", function() {
    window.open("dept2.html");
    });
});

document.addEventListener("DOMContentLoaded", function() {
   var eyeIcon3 = document.getElementById("eye-icon3");
    eyeIcon3.addEventListener("click", function() {
    window.open("dept3.html");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var eyeIcon4 = document.getElementById("eye-icon4");
   eyeIcon4.addEventListener("click", function() {
    window.open("dept4.html");
    });
});
document.addEventListener("DOMContentLoaded", function() {
   var eyeIcon5 = document.getElementById("eye-icon5"); 
    eyeIcon5.addEventListener("click", function() {
    window.open("dept5.html");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var eyeIcon6 = document.getElementById("eye-icon6");
     eyeIcon6.addEventListener("click", function() {
        window.open("dept6.html");
    });
});



//This is for navigating within our main page
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the # symbol
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior:'smooth' });
            }
        });
    });
});











