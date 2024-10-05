//Fade in animation for the sectins on the home page. You tube video: https://www.youtube.com/watch?v=evmu1ABASaU

//This detects when certain elements show up on the screen
const observer = new IntersectionObserver(function (entries) {
    //Change the class in order to be able to style in in CSS so it will fade in at a certain moment.
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("inView");
        }
    })
}, {
    //setting a point where the sections will fade in
    rootMargin: "0px", 
    threshold: [0, 0.5, 1]
});

//Access the tags on the sections on this page
const tags = document.querySelectorAll("#section");

//Have the observer view these sections in order to have them fade in
tags.forEach(function (tag) {
    observer.observe(tag);
});