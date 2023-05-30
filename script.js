// Get all the quantity elements
var quantities = document.getElementsByClassName("quantity");

// Get all the increment buttons
var incrementButtons = document.getElementsByClassName("increment");

// Get all the decrement buttons
var decrementButtons = document.getElementsByClassName("decrement");

// Get all the delete buttons
var deleteButtons = document.getElementsByClassName("delete");

// Get all the heart buttons
var heartButtons = document.getElementsByClassName("heart");

// Initialize the total price based on the initial quantities
var initialTotalPrice = 0;
for (var i = 0; i < quantities.length; i++) {
    var quantity = parseInt(quantities[i].textContent);
    var price = parseFloat(
        document.getElementsByClassName("price")[i].textContent.substring(1)
    );
    initialTotalPrice += quantity * price;
}
var totalPriceElement = document.getElementById("totalPrice");
totalPriceElement.textContent = "Total Price: $" + initialTotalPrice.toFixed(2);

// Add event listeners to the buttons
for (var i = 0; i < incrementButtons.length; i++) {
    incrementButtons[i].addEventListener("click", incrementQuantity);
    decrementButtons[i].addEventListener("click", decrementQuantity);
    deleteButtons[i].addEventListener("click", deleteItem);
    heartButtons[i].addEventListener("click", toggleLike);
}

// Function to increment quantity
function incrementQuantity() {
    var quantityElement = this.parentNode.querySelector(".quantity");
    var quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotalPrice();
}

// Function to decrement quantity
function decrementQuantity() {
    var quantityElement = this.parentNode.querySelector(".quantity");
    var quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    }
}

// Function to delete item
function deleteItem() {
    var item = this.parentNode.parentNode;
    item.parentNode.removeChild(item);
    updateTotalPrice();
}

// Function to toggle like
function toggleLike() {
    this.classList.toggle("heart-liked");
    updateTotalPrice();
}

// Function to update total price
function updateTotalPrice() {
    var quantities = document.getElementsByClassName("quantity");
    var prices = document.getElementsByClassName("price");
    var total = 0;
    for (var i = 0; i < quantities.length; i++) {
        var quantity = parseInt(quantities[i].textContent);
        var price = parseFloat(prices[i].textContent.substring(1));
        total += quantity * price;
    }
    var totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = "Total Price: $" + total.toFixed(2);
}
