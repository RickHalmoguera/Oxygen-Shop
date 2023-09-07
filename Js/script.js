const menuBtn = document.getElementById("menuBtn")
const navUl = document.getElementById("navUl")

const xSrc = "../assets/Frame 14.svg"
const menuSrc ="../assets/Menu.svg"

let isOpen = false

/* Checks if the Menu is already open, if its not open, displays de menu links and change the Menu img to the "X" img 
if its open, hides the menu links and changes the Menu img to the Hamburger*/

const handleMenu = () =>{
    if(isOpen){
        menuBtn.src = menuSrc
        isOpen = false
        navUl.style.display ="none"
    }else{
        menuBtn.src = xSrc
        isOpen = true
        navUl.style.display ="block"
    }
}

menuBtn.addEventListener("click", handleMenu)