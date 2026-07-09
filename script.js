// const toggleButton = document.getElementById("toggleButton");
// const sideBarBox = document.getElementById("sideBarBox");
// const sidebar = document.getElementById("sidebar");
// let open = true;
// toggleButton.addEventListener("click", ()=>{

//     if(open){
//         sideBarBox.style.display = "none";
//         open = false;
//         sidebar.style.backgroundColor = "black";
//         sidebar.style.Color = "white";
//     }else{
//         sideBarBox.style.display = "block";
//         open = true;
//         sidebar.style.backgroundColor = "#dad7cd";
//     }
// })


const login = document.getElementById("login");
const logOut = document.getElementById("logOut");
const menu = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuOptions = document.getElementsByClassName("menu-options");
const menuElements = Array.from(menuOptions);
console.log(menuElements);


menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

menuElements.forEach(menuOption => {
    menuOption.addEventListener("click", () => {
        setTimeout(() => {
            navLinks.classList.toggle("active");
        }, 100);

    })
});


const token = localStorage.getItem("accessToken");

if (token) {
    logOut.style.display = "Block";
    login.style.display = "none";
}
else {
    login.style.display = "Block";
    logOut.style.display = "none";
}
