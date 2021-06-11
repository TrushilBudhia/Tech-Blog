const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      // Reloading the page if response is ok
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment.');
        document.querySelector('.comment-form').style.display = 'block'; 
      }
    }
  };
  
  document.querySelector('#add-comment-btn').addEventListener('click', commentFormHandler);
  