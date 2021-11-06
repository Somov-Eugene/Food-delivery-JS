const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");

const logInForm = document.getElementById("logInForm");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");

const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");

const login = (user) => {
  buttonAuth.style.display = "none";
  buttonOut.style.display = "flex";

  userName.textContent = user.login;
  userName.style.display = "block";

  modalAuth.style.display = "none";
};

const logout = () => {
  localStorage.removeItem("user");

  userName.style.display = "none";
  userName.textContent = "";

  buttonOut.style.display = "none";
  buttonAuth.style.display = "flex";
};

buttonAuth.addEventListener("click", () => {
  modalAuth.style.display = "flex";
});

closeAuth.addEventListener("click", () => {
  modalAuth.style.display = "none";
});

logInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    login: inputLogin.value,
    password: inputPassword.value,
  };

  localStorage.setItem("user", JSON.stringify({login: user.login}));
  login(user);
});

buttonOut.addEventListener("click", () => {
  logout();
});

if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")));
}
