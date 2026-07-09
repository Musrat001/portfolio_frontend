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

async function updateNavbar() {

    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.style.display = "none"

    // loginBtn.style.display = "block";
    // logoutBtn.style.display = "none";

    // if (!token) {
    //     loginBtn.style.display = "block";
    //     logoutBtn.style.display = "none";
    //     return;
    // }

    try {

        const response = await fetch("https://protfolio-backend-45v7.onrender.com/v1/verify-token", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.ok) {
            loginBtn.style.display = "none";
            logoutBtn.style.display = "block";
        }

    } catch (err) {
        console.log(err);
    }
}
updateNavbar();


logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
})