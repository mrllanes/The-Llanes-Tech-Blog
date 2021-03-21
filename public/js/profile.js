const newFormHandler = async (event) => {
    event.preventDefault();

    const postName = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();

    if (postName && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ postName, description }),
            headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to create blog');
    }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/post-routes/${id}`, {
            method: 'DELETE',
        });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to delete blog');
    }
    }
};

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
