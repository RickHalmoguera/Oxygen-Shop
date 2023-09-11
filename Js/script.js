const menuBtn = document.getElementById("menuBtn")
const navUl = document.getElementById("navUl")
const scrollBar = document.getElementById("scrollBar")
const backToTop = document.getElementById("backToTop")
const contactForm = document.getElementById("contactForm")
const nameInput = document.getElementById("nameInput")
const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const emailInput = document.getElementById("emailInput")
const checkboxInput = document.getElementById("checkboxInput")
const contactBtn = document.getElementById("contactBtn")

const xSrc = "./assets/Frame 14.svg"
const menuSrc ="./assets/Menu.svg"

let percent = 0
let isOpen = false
let isValid
let nameIsValid
let emailIsValid

const handleMenu = () =>{
    console.log("Hola")
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
