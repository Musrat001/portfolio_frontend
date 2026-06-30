const form = document.getElementById("registerForm");
// const successMessage = document.getElementById("successMessage");
// const registerCard = document.getElementById("register-card");
// const login = document.getElementById("login");








form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const userData = {
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            confirmPassword: document.getElementById("confirmPassword").value
        }

        const response = await fetch(
            "https://protfolio-backend-45v7.onrender.com/v1/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    
                },
                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();
        if (!response.ok) {
            alert(data.message);
            return;
        }
        if (data) {
            console.log(data);
            // registerCard.style.display = "none";
            // successMessage.innerText = data.message;
            alert(data.message);
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);

        }


    } catch (error) {
        console.log(error);
    }
})

