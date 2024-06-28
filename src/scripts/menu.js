let menuToggle = document.getElementById("menuToggle")
let menu = document.getElementById("menu")
let menuOpen = false
menuToggle.onclick = function () {
    if (menuOpen == false) {
        menuToggle.classList.add("active")  
        menu.classList.add("active")  
        menuOpen = true 
    } else {
        menuToggle.classList.remove("active")
        menu.classList.remove("active")
        menuOpen = false 
    }
}