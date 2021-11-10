const menu = () => {
  const cardsMenu = document.querySelector(".cards-menu");

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

  const addToCart = (cartItem) => {
    const cartArray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    if (cartArray.some((item) => item.id === cartItem.id)) {
      cartArray.map((item) => {
        if (item.id === cartItem.id) {
          item.quantity++;
        }
        return item;
      });
    } else {
      cartArray.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cartArray));
  };

  const renderMenuCards = (data) => {
    data.forEach(({ id, description, image, name, price }) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
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

      const buttonAddCart = card.querySelector(".button-add-cart");
      buttonAddCart.addEventListener("click", () => addToCart({ id, name, price, quantity: 1 }));

      cardsMenu.append(card);
    });
  };

  const redirectHome = () => (window.location.href = "/");

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
};

export default menu;
