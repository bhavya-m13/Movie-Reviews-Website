document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registration-form').addEventListener('submit', function (event) {
        event.preventDefault(); 
        const firstName = document.getElementById('firstNameInput').value;
        const lastName = document.getElementById('lastNameInput').value;
        const emailAddress = document.getElementById('emailAddressInput').value;
        const username = document.getElementById('usernameInput').value;
        const password = document.getElementById('passwordInput').value;
        const ConfirmPassword = document.getElementById('confirmPasswordInput').value;
        const dob = document.getElementById('DOBInput').value;
        const city = document.getElementById('cityInput').value;
        const state = document.getElementById('stateInput').value;
        let bio = document.getElementById('bioInput').value;
        let favMovie = document.getElementById('favMovieInput').value;

        if (password !== ConfirmPassword) {
            alert('Your passwords do not match');
            return;
        }

        const today = new Date();
        const birthDate = new Date(dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 13) {
            alert('You must be at least thirteen years old to register.');
            return;
        }

        if(!bio){
            bio = "N/A";
        }
        if(!favMovie){
            favMovie = "N/A";
        }
        document.getElementById('registration-form').style.display = 'none';

        const registrationDisplay = document.getElementById('registrationDisplay');
        registrationDisplay.style.display = 'block';
        document.getElementById('registrationMessage').innerHTML = `
            <strong>Registration Successful!</strong><br>
            Name: ${firstName} ${lastName}<br>
            Email: ${emailAddress}<br>
            Username: ${username}<br>
            Date of Birth: ${dob}<br>
            City: ${city}<br>
            State: ${state}<br>
            Biography: ${bio}<br>
            Favorite Movie: ${favMovie}<br>
        `;
    });
});
