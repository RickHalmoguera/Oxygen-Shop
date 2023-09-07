const menuBtn = document.getElementById("menuBtn")
const navUl = document.getElementById("navUl")

const xSrc = "../assets/Frame 14.svg"
const menuSrc ="../assets/Menu.svg"

let isOpen = false

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