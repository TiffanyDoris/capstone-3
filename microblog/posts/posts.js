/* Posts Page JavaScript */

"use strict";

const postsContainer = document.querySelector("#postsContainer");

fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJhcmt5IiwiaWF0IjoxNzE5NDk5NjQxLCJleHAiOjE3MTk1ODYwNDF9.yzW8iRZeWkXHOr67TsdFUuBckJfkXuShYEs8N51xJjc"
  },
})
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((post) => {
      const postHTML = `
        <div class="post">
        <span class="post-author">${post.username}</span>
        <p>${post.text}</p>
        <p>${post.likes}</p> 
        </div>
        `;
      postsContainer.innerHTML += postHTML;
    });
  })
  .catch((error) => console.error("error fetching post:", error));
