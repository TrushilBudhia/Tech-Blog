const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // Redirecting user to the dashboard if response is ok
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up.');
    }
  }
};

// When the user clicks the signup button, the signupFormHandler will be called
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);