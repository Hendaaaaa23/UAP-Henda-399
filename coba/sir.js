let total = 0;
const itemList = [];

function addItem() {
  const kode = document.getElementById("kode").value;
  const barang = parseFloat(document.getElementById("barang").value);
  total += barang;
  itemList.push({ kode, barang });
  displayItems();
  displayTotal();
}

function displayItems() {
  const itemListElement = document.getElementById("itemList");
  itemListElement.innerHTML = "";
  itemList.forEach((kode) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = `${kode.kode} - $${kode.barang}`;
    itemListElement.appendChild(itemElement);
  });
}

function displayTotal() {
  document.getElementById("total").textContent = total;
}
function editActivity(button) {
  var card = button.closest(".card");
  var activityValue = card.querySelector(".text-bg-primary").textContent;
  var newActivityValue = prompt("Edit Item:", activityValue);
}
