// Welcome Message

const orderBtn = document.querySelector(".left button");

orderBtn.addEventListener("click", function () {
alert("☕ Welcome to Purple Coffee!");
});

// Contact Button

const sendBtn = document.querySelector(".contact button");

sendBtn.addEventListener("click", function () {

alert("Thank you! Your message has been sent.");

});

// Smooth Scroll (Future Use)

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

});

});
