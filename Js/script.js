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
const modal = document.getElementById("modal")
const modalInput = document.getElementById("modalInput")
const modalMsg = document.getElementById("modalMsg")
const modalBtn = document.getElementById("modalBtn")
const modalBtnClose = document.getElementById("modalBtnClose")
const modalForm = document.getElementById("modalForm")

const xSrc = "./assets/Frame 14.svg"
const menuSrc ="./assets/Menu.svg"

let percent = 0
let isOpen = false
let isValid
let nameIsValid
let emailIsValid
let modalIsValid

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

const checkName = ()=>{
    
    if (nameInput.value.length < 2 || nameInput.value.length >100) {
        nameError.style.visibility ="visible"
        nameInput.classList.add("input-error")
        nameIsValid = false
      } else {
        nameIsValid = true
        nameError.style.visibility ="hidden"
        nameInput.classList.remove("input-error")
      }
}

const checkEmail = ()=>{
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!emailRegex.test(emailInput.value)){
        emailError.style.visibility="visible"
        emailInput.classList.add("input-error")
        emailIsValid = false
    }else {
        emailIsValid = true
        emailError.style.visibility="hidden"
        emailInput.classList.remove("input-error")
      }
}

const handleSubmit = (e) =>{
    e.preventDefault()

    if(nameIsValid && emailIsValid){
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
            id: 1,
            name: nameInput.value,
            email: emailInput.value,
            userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    if(!nameIsValid || !emailIsValid){
        checkName()
        checkEmail()
    }
}

setTimeout(()=> modal.showModal(), 5000)

const closeModalClickOutside = (e) =>{
    const modalDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      modal.close()
    }
}

const closeModal = () =>{
    modal.close()
}

const checkModalEmail = ()=>{
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!emailRegex.test(modalInput.value)){
        modalMsg.style.visibility="visible"
        modalMsg.classList.remove("correct")
        modalInput.classList.add("input-error")
        modalIsValid = false
    }else {
        modalIsValid = true
        modalInput.classList.remove("input-error")
      }
}

const handleSubscribe = (e) =>{
    e.preventDefault()

    if(!modalIsValid){
        checkModalEmail()
    }
    if(modalIsValid){
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
            id: 1,
            email: modalInput.value,
            userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        modalMsg.style.visibility ="visible"
        modalMsg.innerText ="Thanks for subscribing"
        modalMsg.classList.add("correct")
        setTimeout(()=> modal.close(), 1000)

    }
}


modalForm.addEventListener("submit",handleSubscribe)
modalBtnClose.addEventListener("click",closeModal)
modal.addEventListener("click",closeModalClickOutside)
menuBtn.addEventListener("click", handleMenu)
window.addEventListener("scroll", handleScroll)
backToTop.addEventListener("click",handleClick)
nameInput.addEventListener("input",checkName)
emailInput.addEventListener("input",checkEmail)
contactForm.addEventListener("submit", handleSubmit)
