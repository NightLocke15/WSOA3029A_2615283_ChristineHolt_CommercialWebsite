
//Hamburger menu functionality
const hamMenu = document.querySelector('.hamburger')

const offScreenMenu = document.querySelector('#offScreenMenu')

//Enables hamburger menu to summon menu of nav elements when in mobile 
document.addEventListener('DOMContentLoaded', function() {
    hamMenu.addEventListener('click', function() {
        hamMenu.classList.toggle('active')
        offScreenMenu.classList.toggle('active')    
    })
})