const successMessage = document.getElementById("successMessage");
const home = document.getElementById("home");
const form = document.getElementById("login-card");
const loginCard = document.getElementById("loginCard");



form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {

        const loginData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }

        const response = await fetch(
            "http://localhost:8080/v1/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            }
        );

        const data = await response.json();
        // const text = await response.text();
        // console.log(text);
        console.log(data);
        if (data) {
            loginCard.style.display = "none";
            successMessage.innerText = "You logged in SuccessFully!";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }

    } catch (error) {
        console.log("Error While loging in..", error);
    }
})