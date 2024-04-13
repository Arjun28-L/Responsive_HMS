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
    window.open("departments/dept1.html", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
   var eyeIcon2 = document.getElementById("eye-icon2");
    eyeIcon2.addEventListener("click", function() {
    window.open("departments/dept2.html", "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function() {
   var eyeIcon3 = document.getElementById("eye-icon3");
    eyeIcon3.addEventListener("click", function() {
    window.open("departments/dept3.html", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var eyeIcon4 = document.getElementById("eye-icon4");
   eyeIcon4.addEventListener("click", function() {
    window.open("departments/dept4.html", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
   var eyeIcon5 = document.getElementById("eye-icon5"); 
    eyeIcon5.addEventListener("click", function() {
    window.open("departments/dept5.html", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var eyeIcon6 = document.getElementById("eye-icon6");
     eyeIcon6.addEventListener("click", function() {
        window.open("departments/dept6.html", "_blank");
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
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});









