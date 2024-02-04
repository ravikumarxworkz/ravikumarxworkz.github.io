function showPage(pageId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
}

$(document).ready(function () {
    // Add a scroll event listener
    $(window).scroll(function () {
        // Check if the user has scrolled down
        if ($(this).scrollTop() > 100) {
            // If yes, add the "fixed-top" class to the navbar
            $('.navbar').addClass('fixed-top');
        } else {
            // If no, remove the "fixed-top" class
            $('.navbar').removeClass('fixed-top');
        }
    });
});

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// function sendEmail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };
//     const serviceID = "service_l48aw6h";
//     const templateID = "template_uly1sc5";
//     emailjs.send(serviceID, templateID, params).then(res => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("your message sent sucessfully")
//     })
//         .catch((err) => console.log(err));
// }
