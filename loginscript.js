document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('emailAddressInput').value;
        document.getElementById('login-form').style.display = 'none';
        const loginDisplay = document.getElementById('loginDisplay');
        loginDisplay.style.display = 'block';
        document.getElementById('loggedInMessage').textContent = `Welcome, ${username}!`;
    });
});
