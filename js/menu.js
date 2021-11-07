const renderTitle = ({ name, stars, price, kitchen }) => {
  const sectionHeading = document.querySelector(".section-heading");
  const restaurantTitle = sectionHeading.querySelector(".restaurant-title");
  const divRating = sectionHeading.querySelector(".rating");
  const divPrice = sectionHeading.querySelector(".price");
  const divCategory = sectionHeading.querySelector(".category");

  restaurantTitle.textContent = name;
  divRating.textContent = stars;
  divPrice.textContent = `От ${price} ₽`;
  divCategory.textContent = kitchen;
};

const renderMenuCards = (data) => {
  const cardsMenu = document.querySelector(".cards-menu");

  data.forEach(({ description, image, name, price }) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img class="card-image" src="${image}" alt="${name}" />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title card-title-reg">${name}</h3>
        </div>
        <div class="card-info">
          <div class="ingredients">${description}</div>
        </div>
        <div class="card-buttons">
          <button class="button button-primary button-add-cart">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
          </button>
          <strong class="card-price-bold">${price} ₽</strong>
        </div>
      </div>
    `;
    cardsMenu.append(div);
  });
};

const redirectHome = () => window.location.href = "/";

if (!localStorage.getItem("restaurant")) { // No data
  redirectHome();
}

const restaurant = JSON.parse(localStorage.getItem("restaurant"));
// const URL = `./db/${restaurant.products}`;
const URL = `https://test-db0fe-default-rtdb.firebaseio.com/db/${restaurant.products}`;

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    renderTitle(restaurant);
    renderMenuCards(data);
  })
  .catch((error) => redirectHome());
