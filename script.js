const shoppingSites = [
  "Amazon", "Flipkart", "Reliance Digital", "Croma", "Tata CLiQ",
  "Snapdeal", "Myntra", "Paytm Mall", "ShopClues", "Vijay Sales"
];

function getRandomPrice() {
  return Math.floor(Math.random() * 5000) + 10000; // ₹10,000 – ₹15,000
}

function comparePrices() {
  const productName = document.getElementById("productInput").value.trim();
  const tbody = document.querySelector("#price-table tbody");
  const title = document.getElementById("productTitle");

  if (productName === "") {
    alert("Please enter a product name.");
    return;
  }

  title.textContent = `Price Comparison for "${productName}"`;
  tbody.innerHTML = "";

  let prices = [];

  shoppingSites.forEach(site => {
    const price = getRandomPrice();
    prices.push({ site, price });
  });

  const minPrice = Math.min(...prices.map(p => p.price));

  prices.forEach(({ site, price }) => {
    const row = document.createElement("tr");
    if (price === minPrice) row.classList.add("lowest");
    row.innerHTML = `<td>${site}</td><td>${price}</td>`;
    tbody.appendChild(row);
  });
}
