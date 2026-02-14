function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(id, name, price, image) {
  let cart = getCart();
  let existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, image, qty: 1 });
  }

  saveCart(cart);
  alert("Product Added to Cart!");
}

function updateCartCount() {
  let cart = getCart();
  let count = cart.reduce((sum, item) => sum + item.qty, 0);
  let el = document.getElementById("cart-count");
  if (el) el.innerText = count;
}

function clearCart() {
  localStorage.removeItem("cart");
  updateCartCount();
}

document.addEventListener("DOMContentLoaded", updateCartCount);
