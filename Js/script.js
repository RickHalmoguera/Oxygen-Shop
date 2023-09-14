const menuBtn = document.getElementById("menuBtn")
const navUl = document.getElementById("navUl")
const scrollBar = document.getElementById("scrollBar")
const backToTop = document.getElementById("backToTop")
const contactForm = document.getElementById("contactForm")
const contactFeedback = document.getElementById("contactFeedback")
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
const currencySelect = document.getElementById("currencySelect")
const basicPrice = document.getElementById("basicPrice")
const proPrice = document.getElementById ("proPrice")
const premiumPrice = document.getElementById("premiumPrice") 

const xSrc = "./assets/Frame 14.svg"
const menuSrc ="./assets/Menu.svg"

const waitTime = 5000

let percent = 0
let isOpen = false
let isClosed = false
let htmlCurrentPx
let htmlHeightPx
let windowHeightPx
let isValid
let nameIsValid
let emailIsValid
let modalIsValid
let scrollOver25 = false

let currencyData


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
    htmlCurrentPx = document.documentElement.scrollTop
    htmlHeightPx = document.documentElement.scrollHeight
    windowHeightPx = window.innerHeight
    
    percent = Math.round(htmlCurrentPx / (htmlHeightPx - windowHeightPx)*100)
    
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

        nameInput.value =""
        emailInput.value =""
        contactForm.style.display ="none"
        contactFeedback.style.display = "block"
        setTimeout( ()=>{
            contactFeedback.style.display = "none"
            contactForm.style.display ="block"
        },2000)

    }
    if(!nameIsValid || !emailIsValid){
        checkName()
        checkEmail()
    }
}

const checkLocalStorage = () =>{
    const storageValue = sessionStorage.getItem('isClosed');
    if (storageValue === 'true') {
      return true;
    } else if (storageValue === 'false') {
      return false;
}
}

const checkScrollModal =()=>{
    if(percent >=25 && checkLocalStorage() != true){
        scrollOver25 = true
        modal.showModal()
        window.removeEventListener("scroll", checkScrollModal)
    }
}

const checkAndOpenModal = ()=>{
    if(!scrollOver25 && checkLocalStorage() != true){
        modal.showModal()
        window.removeEventListener("scroll", checkScrollModal)
    }
}

setTimeout(checkAndOpenModal, waitTime)


const closeModalClickOutside = (e) =>{
    const modalDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      closeModal()
    }
}

const closeModal = () =>{
    isClosed = true
    sessionStorage.setItem('isClosed', isClosed.toString());
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
        setTimeout(closeModal, 1000)

    }
}

const fetchCurrencyData =() =>{
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';
    
    fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error('Something went wrong')
        }
        return response.json()
        })
        .then(data => {
        currencyData = data
        setPrice(currencyData)
        })
        .catch(error => {
        console.error(error)
        })
}

const setPrice = (currencyData) => {
    fetchCurrencyData
    const usdBasic = 10
    const usdPro = 25
    const usdPremium = 60
    console.log(currencyData.usd.gbp)
    const eurBasic = "€0" 
    const eurPro =  "€" + Math.round(usdPro * currencyData.usd.eur)
    const eurPremium = "€" + Math.round(usdPremium * currencyData.usd.eur)

    const gbpBasic = "£0"
    const gbpPro = "£" + Math.round(usdPro * currencyData.usd.gbp)
    const gbpPremium = "£" + Math.round(usdPremium * currencyData.usd.gbp)

    if(currencySelect.value =="usd"){
        basicPrice.innerText = "$" + usdBasic
        proPrice.innerText = "$" +usdPro
        premiumPrice.innerText = "$" +usdPremium
    }else if(currencySelect.value =="gbp"){
        basicPrice.innerText = gbpBasic
        proPrice.innerText = gbpPro
        premiumPrice.innerText = gbpPremium
    }else if(currencySelect.value ="eur") {
        basicPrice.innerText = eurBasic
        proPrice.innerText = eurPro
        premiumPrice.innerText = eurPremium
    }
}


currencySelect.addEventListener("change",fetchCurrencyData)
modalForm.addEventListener("submit",handleSubscribe)
modalBtnClose.addEventListener("click",closeModal)
modal.addEventListener("click",closeModalClickOutside)
menuBtn.addEventListener("click", handleMenu)
window.addEventListener("scroll", handleScroll)
window.addEventListener("scroll", checkScrollModal)
backToTop.addEventListener("click",handleClick)
nameInput.addEventListener("input",checkName)
emailInput.addEventListener("input",checkEmail)
contactForm.addEventListener("submit", handleSubmit)
