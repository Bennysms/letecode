let icon = document.querySelector(".icon");
let menu = document.querySelector(".navlist");
icon.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    icon.classList.toggle("black");
    if(icon.getAttribute("name") == "menu-outline"){
        icon.setAttribute("name", "close-outline");
    }
    else{
        icon.setAttribute("name", "menu-outline");
    }
    
});
// ---------------------------------------------

// Ajout des cours 

const coursView = document.querySelector(".cours-box");
if(coursView){

    fetch("cours.json")
    .then((response) =>{
        return response.json()
    }).then((data) =>{
        let courses = data;
        for (const cours of courses) {
            coursView.innerHTML+= `
            <div class="box">
                <div class="img">
                    <img src="${cours.image}">
                </div>
                <div class="text">
                    <h3>${cours.name}</h3>
                    <p>${cours.time} heure(s)</p>
                </div>
            </div>
            `;
        }
    })
}

// ---------------------------------------------

// Ajout des membres de la communauté

const membre = document.querySelector(".box-container");
if(membre){

    fetch("membres.json")
    .then((res) =>{
        return res.json()
    }).then((dt) =>{
        let members = dt;
        for (const member of members){
            membre.innerHTML+=`
            <div class="box">
                <div class="img">
                    <img src="${member.image}" alt="photo_membre">
                </div>
                <div class="name">
                    <h2>${member.name}</h2>
                </div>
            </div>
            `;
        }
    })
}



