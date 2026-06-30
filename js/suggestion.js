const form = document.getElementById("suggestion-form");

// const container = document.getElementById("container");
// const loginMessage = document.getElementById("loginMessage");


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const userData = {
            name: document.getElementById("name").value,
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

        console.log(response);

        if (!response.ok) {
            alert(data.message);
            if (response.status == 404) {
                console.log("Email is not registerd!");
                console.log(response.status);
                setTimeout(() => {
                    window.location.href = "register.html";
                }, 1000);

            }
            return;
        }
        if (data) {
            console.log(data);
            setTimeout(() => {
                alert(data.message);
                window.location.href = "index.html";
            }, 1000);

        }


    } catch (error) {
        console.log(error);
    }
})

