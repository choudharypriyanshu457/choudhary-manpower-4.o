// Choudhary Manpower Website Script

// Website Loading Message
window.onload = function () {
    console.log("Choudhary Manpower Website Loaded Successfully");
};


// WhatsApp Enquiry Form

function sendMessage() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;


    if(name == "" || phone == "") {

        alert("Please fill your Name and Mobile Number");

        return;

    }


    let whatsappURL =
    "https://wa.me/918630190068?text=" +
    "Name: " + name +
    "%0AMobile: " + phone +
    "%0ARequirement: " + message;


    window.open(whatsappURL, "_blank");

}
// Smooth Scroll Navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        let target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Button Click Animation

let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});


// Current Year Automatically

let year = new Date().getFullYear();

let footerYear = document.querySelector("footer p:last-child");

if(footerYear){

    footerYear.innerHTML =
    "© " + year + " All Rights Reserved";

}
