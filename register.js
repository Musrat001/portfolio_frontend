const form = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");
const registerCard = document.getElementById("register-card");
const login = document.getElementById("login");




if (password !== confirmPassword) {
    console.log("password is not mathing");
}



form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const userData = {
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }

        const response = await fetch(
            "https://protfolio-backend-45v7.onrender.com/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();
        if (data) {
            console.log(data);
            registerCard.style.display = "none";
            successMessage.innerText = "Registered successfully!..";
            setTimeout(()=>{
                window.location.href = "login.html";
            }, 2000);

        }


    } catch (error) {
        console.log(error);
    }
})

