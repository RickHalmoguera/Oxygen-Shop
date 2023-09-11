const menuBtn = document.getElementById("menuBtn")
const navUl = document.getElementById("navUl")
const scrollBar = document.getElementById("scrollBar")
const backToTop = document.getElementById("backToTop")
const contactForm = document.getElementById("contactForm")
const nameInput = document.getElementById("nameInput")
const emailInput = document.getElementById("emailInput")
const checkboxInput = document.getElementById("checkboxInput")
const contactBtn = document.getElementById("contactBtn")

const xSrc = "./assets/Frame 14.svg"
const menuSrc ="./assets/Menu.svg"

let percent = 0
let isOpen = false

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

const handleScroll = ()=>{
    let htmlCurrentPx = document.documentElement.scrollTop
    let htmlHeightPx = document.documentElement.scrollHeight
    let windowHeightpx = window.innerHeight
    
    percent = Math.round(htmlCurrentPx / (htmlHeightPx - windowHeightpx)*100)
    
    scrollBar.style.width = percent+"%"

    if(percent > 25){
        backToTop.style.display ="block"
    }else{
        backToTop.style.display="none"
    }
}

const handleClick =() =>{
    setTimeout(()=> window.scrollTo(0, 0), 200)
}

const formOk = () =>{
    
}

const handleSubmit = (e) => {

    if (nameInput.value.length < 2 || nameInput.value.length > 100) {
        console.log("entro")
        nameInput.setCustomValidity("The name must have 2 or more characters")
        nameInput.classList.add("input__error")
        e.preventDefault()
    } else {
        nameInput.setCustomValidity("")
        nameInput.classList.remove("input__error")
    }

    const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput.value.length === 0 || !emailValidation.test(emailInput.value)) {
        emailInput.setCustomValidity("The email must be valid")
        emailInput.classList.add("input__error")
        e.preventDefault()
    } else {
        emailInput.setCustomValidity("")
        emailInput.classList.remove("input__error")
    }

    if (checkboxInput.checked === false) {
        checkboxInput.setCustomValidity("You must accept the conditions")
        checkboxInput.classList.add("input__error")
        e.preventDefault()
    } else {
        checkboxInput.setCustomValidity("")
        checkboxInput.classList.remove("input__error")
    }
}

const checkName = () =>{
    nameInput.setCustomValidity("")
    nameInput.classList.remove("input__error")
}

const checkEmail = () =>{
    emailInput.setCustomValidity("")
    emailInput.classList.remove("input__error")
}

const checkCheckBox = () =>{
    checkboxInput.setCustomValidity("")
    checkboxInput.classList.remove("input__error")
}


menuBtn.addEventListener("click", handleMenu)
window.addEventListener("scroll", handleScroll)
backToTop.addEventListener("click",handleClick)
contactForm.addEventListener("submit",handleSubmit)
nameInput.addEventListener("input",checkName)
emailInput.addEventListener("input", checkEmail)
checkboxInput.addEventListener("change", checkCheckBox)