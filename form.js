document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(event.target);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send email using EmailJS
    emailjs.init("rFmrvCkqto8sLKPwp");
    emailjs.send("service_4rwx4ee", "template_t8bewwj", data)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            // Display success message
            const confirmationMessage = document.createElement("p");
            confirmationMessage.textContent = "Message sent successfully!";
            confirmationMessage.style.color = "green";
            confirmationMessage.style.textAlign = "center";
            event.target.appendChild(confirmationMessage);
        }, function(error) {
            console.error("Email sending failed:", error);
            // Display error message
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Message sending failed. Please try again later.";
            errorMessage.style.color = "red";
            event.target.appendChild(errorMessage);
        });
});

