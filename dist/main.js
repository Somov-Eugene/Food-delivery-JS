(()=>{"use strict";var __webpack_modules__={853:()=>{eval('\n;// CONCATENATED MODULE: ./src/modules/auth.js\nconst auth = () => {\n  const buttonAuth = document.querySelector(".button-auth");\n  const modalAuth = document.querySelector(".modal-auth");\n  const closeAuth = document.querySelector(".close-auth");\n\n  const logInForm = document.getElementById("logInForm");\n  const inputLogin = document.getElementById("login");\n  const inputPassword = document.getElementById("password");\n\n  const buttonOut = document.querySelector(".button-out");\n  const userName = document.querySelector(".user-name");\n\n  const login = ({ login }) => {\n    buttonAuth.style.display = "none";\n    buttonOut.style.display = "flex";\n\n    userName.textContent = login;\n    userName.style.display = "block";\n\n    modalAuth.style.display = "none";\n  };\n\n  const logout = () => {\n    localStorage.removeItem("user");\n    localStorage.removeItem("restaurant");\n\n    userName.style.display = "none";\n    userName.textContent = "";\n\n    buttonOut.style.display = "none";\n    buttonAuth.style.display = "flex";\n  };\n\n  buttonAuth.addEventListener("click", () => {\n    modalAuth.style.display = "flex";\n  });\n\n  closeAuth.addEventListener("click", () => {\n    modalAuth.style.display = "none";\n  });\n\n  logInForm.addEventListener("submit", (e) => {\n    e.preventDefault();\n\n    const user = {\n      login: inputLogin.value,\n      password: inputPassword.value,\n    };\n\n    localStorage.setItem("user", JSON.stringify(user));\n    login(user);\n  });\n\n  buttonOut.addEventListener("click", () => {\n    logout();\n  });\n\n  if (localStorage.getItem("user")) {\n    login(JSON.parse(localStorage.getItem("user")));\n  }\n};\n\n/* harmony default export */ const modules_auth = (auth);\n\n;// CONCATENATED MODULE: ./src/modules/partners.js\nconst partners = () => {\n  const cardsRestaurants = document.querySelector(".cards-restaurants");\n\n  const renderRestaurantCards = (data) => {\n    data.forEach((item) => {\n      const { image, kitchen, name, price, products, stars, time_of_delivery } = item;\n\n      const a = document.createElement("a");\n      a.classList.add("card");\n      a.classList.add("card-restaurant");\n      a.dataset.products = products;\n      a.setAttribute("href", "/restaurant.html");\n      a.innerHTML = `\n        <img class="card-image" src="${image}" alt="${name}" />\n        <div class="card-text">\n          <div class="card-heading">\n            <h3 class="card-title">${name}</h3>\n            <span class="card-tag tag">${time_of_delivery} мин</span>\n          </div>\n          <div class="card-info">\n            <div class="rating">${stars}</div>\n            <div class="price">От ${price} ₽</div>\n            <div class="category">${kitchen}</div>\n          </div>\n        </div>\n      `;\n\n      a.addEventListener("click", (e) => {\n        e.preventDefault();\n\n        if (!localStorage.getItem("user")) {\n          // Not authorized\n          const buttonAuth = document.querySelector(".button-auth");\n          const event = new Event("click");\n          buttonAuth.dispatchEvent(event);\n        } else {\n          localStorage.setItem("restaurant", JSON.stringify(item));\n          window.location.href = "/restaurant.html";\n        }\n      });\n\n      cardsRestaurants.append(a);\n    });\n  };\n\n  const renderRestaurantError = ({ message }) => {\n    const p = document.createElement("p");\n    p.classList.add("error");\n    p.innerText = message;\n    cardsRestaurants.append(p);\n  };\n\n  // const URL = "./db/partners.json";\n  const URL = "https://test-db0fe-default-rtdb.firebaseio.com/db/partners.json";\n\n  fetch(URL)\n    .then((res) => res.json())\n    .then((data) => renderRestaurantCards(data))\n    .catch((error) => renderRestaurantError(error));\n};\n\n/* harmony default export */ const modules_partners = (partners);\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\nmodules_auth();\nmodules_partners();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODUzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQWUsSUFBSSxFQUFDOzs7QUM5RHBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsaUVBQWlFOztBQUUvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTSxTQUFTLEtBQUs7QUFDM0Q7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDLHlDQUF5QyxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDLG9DQUFvQyxPQUFPO0FBQzNDLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDs7QUFFQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1REFBZSxRQUFRLEVBQUM7OztBQzdEVTtBQUNROztBQUUxQyxZQUFJO0FBQ0osZ0JBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kX2RlbGl2ZXJ5X2pzLy4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIiwid2VicGFjazovL2Zvb2RfZGVsaXZlcnlfanMvLi9zcmMvbW9kdWxlcy9wYXJ0bmVycy5qcz8wODU5Iiwid2VicGFjazovL2Zvb2RfZGVsaXZlcnlfanMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYXV0aFwiKTtcbiAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1hdXRoXCIpO1xuICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWF1dGhcIik7XG5cbiAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dJbkZvcm1cIik7XG4gIGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xuICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcblxuICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vdXRcIik7XG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLW5hbWVcIik7XG5cbiAgY29uc3QgbG9naW4gPSAoeyBsb2dpbiB9KSA9PiB7XG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gbG9naW47XG4gICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInJlc3RhdXJhbnRcIik7XG5cbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfTtcblxuICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfSk7XG5cbiAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgbG9naW46IGlucHV0TG9naW4udmFsdWUsXG4gICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZSxcbiAgICB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICBsb2dpbih1c2VyKTtcbiAgfSk7XG5cbiAgYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9nb3V0KCk7XG4gIH0pO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcbiAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xuIiwiY29uc3QgcGFydG5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzUmVzdGF1cmFudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzLXJlc3RhdXJhbnRzXCIpO1xuXG4gIGNvbnN0IHJlbmRlclJlc3RhdXJhbnRDYXJkcyA9IChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IGltYWdlLCBraXRjaGVuLCBuYW1lLCBwcmljZSwgcHJvZHVjdHMsIHN0YXJzLCB0aW1lX29mX2RlbGl2ZXJ5IH0gPSBpdGVtO1xuXG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgICAgYS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1yZXN0YXVyYW50XCIpO1xuICAgICAgYS5kYXRhc2V0LnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIvcmVzdGF1cmFudC5odG1sXCIpO1xuICAgICAgYS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlXCIgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke25hbWV9PC9oMz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC10YWcgdGFnXCI+JHt0aW1lX29mX2RlbGl2ZXJ5fSDQvNC40L08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ1wiPiR7c3RhcnN9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2VcIj7QntGCICR7cHJpY2V9IOKCvTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+JHtraXRjaGVufTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG5cbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xuICAgICAgICAgIC8vIE5vdCBhdXRob3JpemVkXG4gICAgICAgICAgY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWF1dGhcIik7XG4gICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoXCJjbGlja1wiKTtcbiAgICAgICAgICBidXR0b25BdXRoLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVzdGF1cmFudFwiLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9yZXN0YXVyYW50Lmh0bWxcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhcmRzUmVzdGF1cmFudHMuYXBwZW5kKGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJlc3RhdXJhbnRFcnJvciA9ICh7IG1lc3NhZ2UgfSkgPT4ge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICBwLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgY2FyZHNSZXN0YXVyYW50cy5hcHBlbmQocCk7XG4gIH07XG5cbiAgLy8gY29uc3QgVVJMID0gXCIuL2RiL3BhcnRuZXJzLmpzb25cIjtcbiAgY29uc3QgVVJMID0gXCJodHRwczovL3Rlc3QtZGIwZmUtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2RiL3BhcnRuZXJzLmpzb25cIjtcblxuICBmZXRjaChVUkwpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gcmVuZGVyUmVzdGF1cmFudENhcmRzKGRhdGEpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlbmRlclJlc3RhdXJhbnRFcnJvcihlcnJvcikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFydG5lcnM7XG4iLCJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcbmltcG9ydCBwYXJ0bmVycyBmcm9tIFwiLi9tb2R1bGVzL3BhcnRuZXJzXCI7XG5cbmF1dGgoKTtcbnBhcnRuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///853\n')}},__webpack_exports__={};__webpack_modules__[853]()})();