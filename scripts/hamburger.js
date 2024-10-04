const hamMenu = document.querySelector('.hamburger')

const offScreenMenu = document.querySelector('#offScreenMenu')

document.addEventListener('DOMContentLoaded', function() {
    hamMenu.addEventListener('click', function() {
        hamMenu.classList.toggle('active')
        offScreenMenu.classList.toggle('active')    
    })
})