const menuBtn = document.getElementById("menuBtn")
const navUl = document.getElementById("navUl")
const scrollBar = document.getElementById("scrollBar")

const xSrc = "../assets/Frame 14.svg"
const menuSrc ="../assets/Menu.svg"

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
    
    let percent = Math.round(htmlCurrentPx / (htmlHeightPx - windowHeightpx)*100)
    
    scrollBar.style.width = percent+"%"

}


window.addEventListener("scroll", handleScroll)
menuBtn.addEventListener("click", handleMenu)