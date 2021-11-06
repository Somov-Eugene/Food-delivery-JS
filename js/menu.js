const restaurant = "pizza-plus";
// const URL = `./db/${restaurant}.json`;
const URL = `https://test-db0fe-default-rtdb.firebaseio.com/db/${restaurant}.json`;

const renderItem = (data) => {
  data.forEach(el => {
    console.log(el);
  });
};

fetch(URL)
  .then((res) => res.json())
  .then((data) => renderItem(data))
  .catch((error) => console.log(error));
