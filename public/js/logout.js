const logoutHandler = async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    // Redirecting user to the hompage when they logout
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in.');
    }
}

document
  .querySelector('#logout')
  .addEventListener('click', logoutHandler);
