// Function to save a new blog post
function savePost(title, content) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ title, content });
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to display all blog posts
function displayPosts() {
    const blogPostsDiv = document.getElementById('blog-posts');
    blogPostsDiv.innerHTML = '';

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        blogPostsDiv.appendChild(postDiv);
    });
}

// Handle new post form submission
document.getElementById('new-post-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    savePost(title, content);
    window.location.href = 'blog.html'; // Redirect to blog page
});

// Display posts on blog page
if (document.getElementById('blog-posts')) {
    displayPosts();
}
