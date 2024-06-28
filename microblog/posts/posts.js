"use strict";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJhcmt5IiwiaWF0IjoxNzE5NTE0NDI0LCJleHAiOjE3MTk2MDA4MjR9.2SIHooli1obtJQbodIyncC3yYmsFl3DqDIiMMN40P2c";

document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("postsContainer");
  const logoutButton = document.getElementById("logoutButton");

  logoutButton.addEventListener("click", function () {
    logout();
    window.location.replace("../account/login.html");
  });

  fetch(`${apiBaseURL}/api/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((posts) => {
      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${post.username}</h5>
              <p class="card-text">${post.text}</p>
              <p class="card-text"><small class="text-muted">${new Date(post.createdAt).toLocaleString()}</small></p>
              <button class="btn btn-primary like-button" data-post-id="${post.id}">Like</button>
            </div>
          </div>
        `;
        postsContainer.appendChild(postElement);
      });

      document.querySelectorAll(".like-button").forEach((button) => {
        button.addEventListener("click", function () {
          const postId = this.getAttribute("data-post-id");
          likePost(postId);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});

function likePost(postId) {
  fetch(`${apiBaseURL}/api/posts/${postId}/like`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Post liked:", data);
    })
    .catch((error) => {
      console.error("Error liking post:", error);
    });
}
