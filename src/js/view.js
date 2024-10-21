//this page is here to fetch data from products api
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products ");
    const data = await response.json();
    console.log(data);

    const display = document.querySelector(".display");

    const displayTemplate = data
      .map(
        (dataItem) => `
      <div class="item-container">
        <h3 class="item-cat">Category : ${dataItem.category}</h3>
        <img class="item-image"  src=${dataItem.image} height:100px width:100px/>
        <h1>${dataItem.title}</h1>
        <p>Ratings : ${dataItem.rating.rate}</p>
        <h3 class="item-price">$${dataItem.price}</h3>
        <button class="item-btn">View details</button>
      </div>
      `
      )
      .join("");

    display.innerHTML = displayTemplate;
  } catch (error) {
    console.error(error);
  }
}
