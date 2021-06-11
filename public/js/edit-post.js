const editPostFormHandler = async (event) => {
    event.preventDefault();
    console.log('edit post entered');

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    document.querySelector('#post-title').setAttribute('value', title);
    document.querySelector('#post-content').setAttribute('value', content);

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log('title', title);
    console.log('content', content);
    if (title && content) {
        alert('if statement entered');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                post_id: id,
                title,
                content
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        // Redirecting user to the dashboard if response is ok
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to edit post.');
        }
    } else {
        const titleRequirement = document.querySelector('#post-title').placeholder = 'A title is required before adding a post';
        const contentRequirement = document.querySelector('#post-content').placeholder = 'Content cannot be left empty before adding a post';

        if (!title && !content) {
            titleRequirement;
            contentRequirement
        } else if (!title) {
            titleRequirement;
        } else if (!content) {
            contentRequirement
        }
    }
};

document.querySelector('#edit-post-button').addEventListener('click', editPostFormHandler);
