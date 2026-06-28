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



const menu = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
