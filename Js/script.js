const menuBtn = document.getElementById("menuBtn")
const menuMobile = document.getElementById("menuMobile")
const handleMenu = () =>{

    if(menuMobile.classList.contains("hidden")){
        menuMobile.classList.remove("hidden")
    }else{
        menuMobile.classList.add("hidden")
    }
}

menuBtn.addEventListener("click", handleMenu)