const showPassword = document.getElementById("showPassword");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

showPassword.addEventListener("change", () => {

    const type = showPassword.checked ? "text" : "password";

    password.type = type;
    confirmPassword.type = type;

});

const updatePasswordForm = document.getElementById("updatePasswordForm");


updatePasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {

        const passwordUpdateData = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            confirmPassword: document.getElementById("confirmPassword").value,
        }

        const response = await fetch(
            "https://protfolio-backend-45v7.onrender.com/v1/setPassword",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(passwordUpdateData)
            }
        );
        console.log(response);
        

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
                window.location.href = "index.html";
            }, 1000);

        }

    } catch (error) {
        console.log("Error while updating password", error);

    }
})