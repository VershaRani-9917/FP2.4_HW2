const items = [
  { id: 1, item: "Item 1", status: "In Sale" },
  { id: 2, item: "Item 2", status: "New Release" },
  { id: 3, item: "Item 3", status: "New Release" },
  { id: 4, item: "Item 4", status: "In Sale" },
  { id: 5, item: "Item 5", status: "In Sale" },
];

const itemListContainer = document.querySelector("#itemList");
const filterRadioButtons = document.getElementsByName("status");

function renderItems(selectedStatus) {
  const filteredItems =
    selectedStatus === "all"
      ? items
      : items.filter((item) => item.status === selectedStatus);

  const itemListHTML = filteredItems
    .map(
      (item) => `
      <li>
        <strong>ID: </strong>${item.id}<br>
        <strong>Item: </strong>${item.item}<br>
        <strong>Status: </strong>${item.status}<br>
        <hr>
      </li>`
    )
    .join("");

  itemListContainer.innerHTML = itemListHTML;
}

// Initial render (show all items)
renderItems("all");

// Event listener for filtering
filterRadioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener("change", function () {
    renderItems(this.value);
  });
});
