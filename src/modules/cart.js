const cart = () => {
  const buttonCart = document.getElementById("cart-button");
  const modalCart = document.querySelector(".modal-cart");
  const buttonClose = modalCart.querySelector(".close");
  const modalBody = modalCart.querySelector(".modal-body");
  const buttonSend = modalCart.querySelector(".send-cart");
  const buttonClear = modalCart.querySelector(".clear-cart");

  const modalPrice = modalCart.querySelector(".modal-pricetag");

  const resetCart = () => {
    localStorage.removeItem("cart");
    modalCart.classList.remove("is-open");
    modalBody.innerHTML = "";
    modalPrice.textContent = "0 ₽";

    window.location.reload(); // Clear Cart from memory
  };

  const decrementQuantity = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));

    cartArray.map((item) => {
      if (item.id === id) {
        item.quantity = item.quantity > 1 ? item.quantity - 1 : 1;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cartArray));
    renderItems(cartArray);
  };

  const incrementQuantity = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));

    cartArray.map((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cartArray));
    renderItems(cartArray);
  };

  const renderPrice = () => {
    let sumPrice = 0;
    const cartArray = JSON.parse(localStorage.getItem("cart"));

    if (cartArray) {
      sumPrice = cartArray.reduce((acc, current) => acc + current.price * current.quantity, 0);
    }

    modalPrice.textContent = `${sumPrice} ₽`;
  };

  const renderItems = (data) => {
    modalBody.innerHTML = ""; // Clearing previous content

    data.forEach(({ id, name, price, quantity }) => {
      const foodRow = document.createElement("div");
      foodRow.classList.add("food-row");
      foodRow.innerHTML = `
        <span class="food-name">${name}</span>
        <strong class="food-price">${price} ₽</strong>
        <div class="food-counter">
          <button class="counter-button btn-dec" data-index="${id}">-</button>
          <span class="counter">${quantity}</span>
          <button class="counter-button btn-inc" data-index="${id}">+</button>
        </div>
      `;
      modalBody.append(foodRow);
    });

    renderPrice();
  };

  modalBody.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-inc")) {
      incrementQuantity(e.target.dataset.index);
    } else if (e.target.classList.contains("btn-dec")) {
      decrementQuantity(e.target.dataset.index);
    }
  });

  buttonCart.addEventListener("click", () => {
    if (localStorage.getItem("cart")) {
      renderItems(JSON.parse(localStorage.getItem("cart")));
    }
    modalCart.classList.add("is-open");
  });

  buttonClose.addEventListener("click", () => {
    modalCart.classList.remove("is-open");
  });

  buttonClear.addEventListener("click", () => {
    resetCart();
  });

  buttonSend.addEventListener("click", () => {
    const cartArray = localStorage.getItem("cart");

    if (cartArray) {
      const URL = "https://jsonplaceholder.typicode.com/posts";

      fetch(URL, { method: "POST", body: cartArray })
        .then((response) => {
          if (response.ok) {
            resetCart();
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  });
};

export default cart;
