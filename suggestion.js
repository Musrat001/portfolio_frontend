const form = document.getElementById("suggestion-form");
const successMessage = document.getElementById("successMessage");
const container = document.getElementById("container");
// const loginMessage = document.getElementById("loginMessage");








form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const userData = {
            username: document.getElementById("name").value,
            email: document.getElementById("email").value,
            suggestion: document.getElementById("suggestion").value
        }
        console.log(userData);


        const response = await fetch(
            "https://protfolio-backend-45v7.onrender.com/v1/suggestion",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();
        if(!response.ok){
            alert(data.message);
            return;
        }
        if (data) {
            console.log(data);
            container.style.display = "none";
            successMessage.innerText = data.message;
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);

        }


    } catch (error) {
        console.log(error);
    }
})

