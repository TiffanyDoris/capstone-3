const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJhcmt5IiwiaWF0IjoxNzE5NTE0NDI0LCJleHAiOjE3MTk2MDA4MjR9.2SIHooli1obtJQbodIyncC3yYmsFl3DqDIiMMN40P2c";
const postContent = document.querySelector("#postContent");

  

  function createPost(){

    let post = {
      text: postContent.value,
    };
    
    let requestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    };
    
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", requestInit)
      .then((response) => response.json())
      .then((post) => {
        
        window.location.replace("posts.html");
      });
    }
  