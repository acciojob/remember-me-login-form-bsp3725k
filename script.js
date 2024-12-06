        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const checkbox = document.getElementById("checkbox");
        const submitButton = document.getElementById("submit");
        const existingButton = document.getElementById("existing");
        const loginForm = document.getElementById("login-form");

        // Load saved credentials and display "Login as existing user" button if data exists
        window.onload = function () {
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingButton.style.display = "block";
            }
        };

        // Handle form submission
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = usernameInput.value;
            const password = passwordInput.value;

            if (checkbox.checked) {
                // Save to local storage if "Remember me" is checked
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                // Remove credentials from local storage if unchecked
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            alert(`Logged in as ${username}`);
        });

        // Handle "Login as existing user" button click
        existingButton.addEventListener("click", function () {
            const savedUsername = localStorage.getItem("username");
            if (savedUsername) {
                alert(`Logged in as ${savedUsername}`);
            }
        });