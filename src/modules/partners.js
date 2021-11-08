const partners = () => {
  const cardsRestaurants = document.querySelector(".cards-restaurants");

  const renderRestaurantCards = (data) => {
    data.forEach((item) => {
      const { image, kitchen, name, price, products, stars, time_of_delivery } = item;

      const a = document.createElement("a");
      a.classList.add("card");
      a.classList.add("card-restaurant");
      a.dataset.products = products;
      a.setAttribute("href", "restaurant.html");
      a.innerHTML = `
        <img class="card-image" src="${image}" alt="${name}" />
        <div class="card-text">
          <div class="card-heading">
            <h3 class="card-title">${name}</h3>
            <span class="card-tag tag">${time_of_delivery} мин</span>
          </div>
          <div class="card-info">
            <div class="rating">${stars}</div>
            <div class="price">От ${price} ₽</div>
            <div class="category">${kitchen}</div>
          </div>
        </div>
      `;

      a.addEventListener("click", (e) => {
        e.preventDefault();

        if (!localStorage.getItem("user")) {
          // Not authorized
          const buttonAuth = document.querySelector(".button-auth");
          const event = new Event("click");
          buttonAuth.dispatchEvent(event);
        } else {
          localStorage.setItem("restaurant", JSON.stringify(item));
          window.location.href = "restaurant.html";
        }
      });

      cardsRestaurants.append(a);
    });
  };

  const renderRestaurantError = ({ message }) => {
    const p = document.createElement("p");
    p.classList.add("error");
    p.innerText = message;
    cardsRestaurants.append(p);
  };

  // const URL = "./db/partners.json";
  const URL = "https://test-db0fe-default-rtdb.firebaseio.com/db/partners.json";

  fetch(URL)
    .then((res) => res.json())
    .then((data) => renderRestaurantCards(data))
    .catch((error) => renderRestaurantError(error));
};

export default partners;
