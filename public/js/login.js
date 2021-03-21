const loginFormHandler = async (event) => {
    event.preventDefault();

    // Login info
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
      // Send a POST request to the API endpoint
        const response = await fetch('/api/user-routes/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
        // Redirect the browser to the dashboard page
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/user-routes', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);