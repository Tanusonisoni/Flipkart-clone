const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${item.name} added to your cart 🛒`);
  });
});
