const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("inView");
        }
    })
}, {
    rootMargin: "0px", 
    threshold: [0, 0.5, 1]
});

const tags = document.querySelectorAll("#section");

tags.forEach(function (tag) {
    observer.observe(tag);
});