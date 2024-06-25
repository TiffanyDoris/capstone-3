// Function to create a post
function createPost(content) {
  const loginData = getLoginData();
  fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginData.token}`,
    },
    body: JSON.stringify({ content }),
  })
    .then((response) => response.json())
    .then((post) => {
      // Add the new post to the timeline
      displayPost(post);
    });
}

// Function to fetch posts
function fetchPosts() {
  const loginData = getLoginData();
  fetch("/api/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  })
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach(displayPost);
    });
}

// Function to display a post
function displayPost(post) {
  const timeline = document.getElementById("timeline");
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.textContent = post.content;
  timeline.prepend(postElement);
}

// Function to delete a post
function deletePost(postId) {
  const loginData = getLoginData();
  fetch(`/api/posts/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  }).then(() => {
    document.getElementById(`post-${postId}`).remove();
  });
}

// Function to edit a post
function editPost(postId, newContent) {
  const loginData = getLoginData();
  fetch(`/api/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginData.token}`,
    },
    body: JSON.stringify({ content: newContent }),
  })
    .then((response) => response.json())
    .then((updatedPost) => {
      document.getElementById(`post-${postId}`).textContent = updatedPost.content;
    });
}
