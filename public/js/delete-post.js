const deletePostFormHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    // Redirecting user to the dashboard if response is ok
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        const error = `<p>*Failed to delete post</p>`;
        document.querySelector('.error-message').innerHTML = error;
    }
};

// When the user clicks the delete post button, the deletePostFormHandler will be called
document.querySelector('#delete-post-button').addEventListener('click', deletePostFormHandler);
