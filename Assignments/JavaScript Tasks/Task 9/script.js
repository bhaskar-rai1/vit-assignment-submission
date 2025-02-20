document.addEventListener('DOMContentLoaded', function() {
    // Registration Page
    if (document.getElementById('registrationForm')) {
        const registrationForm = document.getElementById('registrationForm');
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const contact = document.getElementById('contact').value;
            const address = document.getElementById('address').value;

            const user = { name, email, contact, address };
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            registrationForm.reset();
            alert('User registered successfully!');
        });
    }

    // View Page
    if (document.getElementById('userTableBody')) {
        const userTableBody = document.getElementById('userTableBody');
        const users = JSON.parse(localStorage.getItem('users')) || [];

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
            userTableBody.appendChild(row);
        });
    }
});