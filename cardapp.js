const products = {
  1: { name: "Shoes", price: 999 },
  2: { name: "T-Shirt", price: 499 }
};

let cart = {};

function addToCart(id) {
  if (cart[id]) {
    cart[id].quantity += 1;
  } else {
    cart[id] = { ...products[id], quantity: 1 };
  }
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let total = 0;

  for (let id in cart) {
    const item = cart[id];
    total += item.price * item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      ${item.name} - ₹${item.price} x ${item.quantity}
      <button onclick="removeFromCart(${id})">Remove</button>
    `;
    cartDiv.appendChild(itemDiv);
  }

  document.getElementById("total").innerText = `Total: ₹${total}`;
}