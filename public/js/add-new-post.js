const addPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;
    console.log('title', title);
    console.log('content', content);
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
      // Redirecting user to the dashboard if response is ok
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        const error = `<p>*Failed to create post</p>`;
        document.querySelector('.error-message').innerHTML = error;
      }
    } else {
      const titleRequirement = document.querySelector('#post-title').placeholder = 'A title is required before adding a post';
      const contentRequirement = document.querySelector('#post-content').placeholder = 'Content cannot be left empty before adding a post';
        
      if(!title && !content) {
        titleRequirement;
        contentRequirement
      } else if (!title) {
        titleRequirement;
      } else if (!content) {
        contentRequirement
      }
    }
  };
  
  // When the user clicks the add post button, the addPostFormHandler will be called
  document.querySelector('#post-button').addEventListener('click', addPostFormHandler);
  