// const successMessage = document.getElementById("successMessage");
// const home = document.getElementById("home");
const form = document.getElementById("login-card");
// const loginCard = document.getElementById("loginCard");



form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {

        const loginData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }
        console.log("About to send login request");
        const token = localStorage.getItem("accessToken");

        const response = await fetch(
            "https://protfolio-backend-45v7.onrender.com/v1/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(loginData)
            }
        );

        const data = await response.json();
        if (!response.ok) {
            alert(data.message);
            return;
        }

        console.log(data);
        if (data) {
            localStorage.setItem("accessToken", data.accessToken);
            alert(data.message);
            setTimeout(() => {
                window.location.href = "index.html";
            }, 700);
        }

    } catch (error) {
        console.log("Error While loging in..", error);
    }
})