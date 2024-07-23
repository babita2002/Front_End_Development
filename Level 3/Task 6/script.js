document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        let isValid = true;

        // Validate Name
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === '') {
            isValid = false;
            nameError.textContent = 'Name is required.';
            nameError.style.display = 'block';
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value)) {
            isValid = false;
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }

        // Validate Message
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim() === '') {
            isValid = false;
            messageError.textContent = 'Message is required.';
            messageError.style.display = 'block';
        } else {
            messageError.textContent = '';
            messageError.style.display = 'none';
        }

        if (isValid) {
            // If form is valid, you can submit it or perform any action you need
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
