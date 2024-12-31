function toggleCart() {
    const cartPanel = document.getElementById('cart-panel');
    const cartOverlay = document.getElementById('cart-overlay');
    cartPanel.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}