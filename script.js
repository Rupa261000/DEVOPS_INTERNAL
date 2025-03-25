// ValidationFormScript.js

document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for validation

        // Retrieve form values
        const fullName = form.querySelector('input[placeholder="fullname"]').value.trim();
        const username = form.querySelector('input[placeholder="username"]').value.trim();
        const mailID = form.querySelector('input[placeholder="mailID"]').value.trim();
        const phoneNo = form.querySelector('input[placeholder="phoneno"]').value.trim();
        const password = form.querySelector('input[placeholder="password"]').value;
        const confirmPassword = form.querySelector('input[placeholder="cpassword"]').value;
        const gender = form.querySelector('input[name="gender"]:checked');

        // Validation messages
        let errors = [];

        // Validate Full Name
        if (!fullName) {
            errors.push("Full Name is required.");
        } else if (fullName.length < 3) {
            errors.push("Full Name must be at least 3 characters long.");
        }

        // Validate Username
        if (!username) {
            errors.push("Username is required.");
        } else if (username.length < 3) {
            errors.push("Username must be at least 3 characters long.");
        }

        // Validate Mail ID
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!mailID) {
            errors.push("Mail ID is required.");
        } else if (!emailRegex.test(mailID)) {
            errors.push("Invalid Mail ID format.");
        }

        // Validate Phone Number
        const phoneRegex = /^\d{10}$/;
        if (!phoneNo) {
            errors.push("Phone Number is required.");
        } else if (!phoneRegex.test(phoneNo)) {
            errors.push("Phone Number must be 10 digits long.");
        }

        // Validate Password
        if (!password) {
            errors.push("Password is required.");
        } else if (password.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        // Validate Confirm Password
        if (confirmPassword !== password) {
            errors.push("Passwords do not match.");
        }

        // Validate Gender
        if (!gender) {
            errors.push("Please select a gender.");
        }

        // Display errors or submit form
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Form submitted successfully!");
            form.submit(); // Uncomment this line to enable actual form submission
        }

    });

});
