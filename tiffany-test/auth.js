// Function to signup
function signup(username, password) {
  fetch("/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("loginData", JSON.stringify(data));
        window.location.assign("/public/posts.html");
      } else {
        alert("Signup failed");
      }
    });
}

// Function to get login data from local storage
function getLoginData() {
  return JSON.parse(localStorage.getItem("loginData"));
}

// Function to login
function login(username, password) {
  fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("loginData", JSON.stringify(data));
        window.location.assign("/public/posts.html");
      } else {
        alert("Login failed");
      }
    });
}

// Function to logout
function logout() {
  localStorage.removeItem("loginData");
  window.location.assign("/public/index.html");
}
