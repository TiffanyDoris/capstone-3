

const postsContainer = document.querySelector("#postsContainer");

fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/", {
  method: "GET",
  headers: {
    Authorization: "Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJhcmt5IiwiaWF0IjoxNzE5NTE0NDI0LCJleHAiOjE3MTk2MDA4MjR9.2SIHooli1obtJQbodIyncC3yYmsFl3DqDIiMMN40P2c"

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