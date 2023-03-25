let icon = document.querySelector(".icon");
let menu = document.querySelector(".navlist");
icon.addEventListener("click", ()=>{
    menu.classList.toggle("active")
    icon.classList.toggle("black")
    if(icon.getAttribute("name") == "menu-outline"){
        icon.setAttribute("name", "close-outline")
    }
    else{
        icon.setAttribute("name", "menu-outline")
    }
    
})
