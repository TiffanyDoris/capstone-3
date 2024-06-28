

// fetch(`${apiBaseURL}/api/posts`, {
//     headers: {
//       Authorization: `Bearer ${loginData.token}`,
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((post) => {

//       window.location.replace("posts.html");
//       })
//     })
//     .catch((error) => {
//       console.error("Error fetching posts:", error);
//     });