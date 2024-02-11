

// ===========================show page========================
function showPage(pageId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
}

//=============================== navigation========================
function toggleNavbar() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down past a certain point, show the button
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
  
    const scrollThreshold = 20;

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 1;
}

   function displayWords() {
       let currentIndex = 0;
       const words = ['Devloper', 'Designer'];
       function updateWord() {
           document.getElementById('words').innerText = words[currentIndex];
           currentIndex = (currentIndex + 1) % words.length;
       }
       updateWord();

       setInterval(updateWord, 2000); 
   }
   displayWords();

//message me
const scriptURL = 'https://script.google.com/macros/s/AKfycbw3C3x7wvRNLUx0ntDS28PmeExjqx7fJnQ7leA-NOVTIMW87j1NoAXYdZWYzG1GHaUUpw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})











