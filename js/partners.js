// const URL = "./db/partners.json";
const URL = "https://test-db0fe-default-rtdb.firebaseio.com/db/partners.json";

const renderItem = (data) => {
  data.forEach(el => {
    console.log(el);
  });
};

fetch(URL)
  .then((res) => res.json())
  .then((data) => renderItem(data))
  .catch((error) => console.log(error));
