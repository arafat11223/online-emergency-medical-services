const products = [
  { id: 1, name: "Ecosprin 75 mg", company: "ACME Laboratories Ltd.", price: 7.20, unit: "1's tab", discount: 10, image: "https://via.placeholder.com/150x120?text=Ecosprin" },
  { id: 2, name: "Atova 10 mg", company: "Beacon Pharmaceuticals Ltd.", price: 162.00, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Atova" },
  { id: 3, name: "Sergel 20 mg", company: "Square Pharmaceuticals Ltd.", price: 6.44, unit: "1's tab", discount: 8, image: "https://via.placeholder.com/150x120?text=Sergel" },
  { id: 4, name: "Napa 500 mg", company: "Beximco Pharmaceuticals Ltd.", price: 10.80, unit: "1x10's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Napa" },
  { id: 5, name: "Vitamin C 500mg", company: "HealthPlus", price: 15.00, unit: "1x30's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Vitamin+C" },
  { id: 6, name: "Calcium D3", company: "Wellness Pharma", price: 20.00, unit: "1x30's box", discount: 0, image: "https://via.placeholder.com/150x120?text=Calcium+D3" },
  { id: 7, name: "Bizoran 40 mg", company: "Beacon Pharmaceuticals Ltd.", price: 162.08, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Bizoran" },
  { id: 8, name: "Thyrox 50 mcg", company: "ACME Laboratories Ltd.", price: 61.38, unit: "1x100's box", discount: 7, image: "https://via.placeholder.com/150x120?text=Thyrox" },
  { id: 9, name: "Rosuva 10 mg", company: "Square Pharmaceuticals PLC.", price: 198.00, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Rosuva" },
  { id: 10, name: "Ceevit 250 mg", company: "Square Pharmaceuticals PLC.", price: 17.10, unit: "1x10's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Ceevit" },
  { id: 11, name: "Monas 10 mg", company: "ACME Laboratories Ltd.", price: 236.25, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Monas" },
  { id: 12, name: "Pantonix 20 mg", company: "Beximco Pharmaceuticals Ltd.", price: 88.20, unit: "1x10's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Pantonix" },
  { id: 13, name: "Paracetamol 500 mg", company: "HealthPlus", price: 5.00, unit: "1's tab", discount: 5, image: "https://via.placeholder.com/150x120?text=Paracetamol" },
  { id: 14, name: "Amoxicillin 250 mg", company: "ACME Laboratories Ltd.", price: 12.00, unit: "1x10's box", discount: 8, image: "https://via.placeholder.com/150x120?text=Amoxicillin" },
  { id: 15, name: "Ibuprofen 400 mg", company: "Beacon Pharmaceuticals Ltd.", price: 9.50, unit: "1x10's box", discount: 7, image: "https://via.placeholder.com/150x120?text=Ibuprofen" },
  { id: 16, name: "Aspirin 75 mg", company: "Square Pharmaceuticals Ltd.", price: 6.20, unit: "1's tab", discount: 10, image: "https://via.placeholder.com/150x120?text=Aspirin" },
  { id: 17, name: "Metformin 500 mg", company: "Beximco Pharmaceuticals Ltd.", price: 15.75, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Metformin" },
  { id: 18, name: "Omeprazole 20 mg", company: "HealthPlus", price: 18.00, unit: "1x14's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Omeprazole" },
  { id: 19, name: "Loratadine 10 mg", company: "Wellness Pharma", price: 7.50, unit: "1x10's box", discount: 0, image: "https://via.placeholder.com/150x120?text=Loratadine" },
  { id: 20, name: "Vitamin D3 1000 IU", company: "HealthPlus", price: 12.00, unit: "1x30's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Vitamin+D3" },
  { id: 21, name: "Cetirizine 10 mg", company: "ACME Laboratories Ltd.", price: 6.80, unit: "1's tab", discount: 10, image: "https://via.placeholder.com/150x120?text=Cetirizine" },
  { id: 22, name: "Azithromycin 500 mg", company: "Beacon Pharmaceuticals Ltd.", price: 25.00, unit: "1x3's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Azithromycin" },
  { id: 23, name: "Calcium Carbonate", company: "Wellness Pharma", price: 14.00, unit: "1x30's box", discount: 0, image: "https://via.placeholder.com/150x120?text=Calcium+Carbonate" },
  { id: 24, name: "Diclofenac 50 mg", company: "Square Pharmaceuticals Ltd.", price: 8.50, unit: "1x10's box", discount: 7, image: "https://via.placeholder.com/150x120?text=Diclofenac" },
  { id: 25, name: "Fluoxetine 20 mg", company: "ACME Laboratories Ltd.", price: 22.00, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Fluoxetine" },
  { id: 26, name: "Magnesium 250 mg", company: "HealthPlus", price: 13.00, unit: "1x30's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Magnesium" },
  { id: 27, name: "Hydrochlorothiazide 25 mg", company: "Beacon Pharmaceuticals Ltd.", price: 9.00, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Hydrochlorothiazide" },
  { id: 28, name: "Salbutamol Inhaler", company: "Square Pharmaceuticals Ltd.", price: 120.00, unit: "1's inhaler", discount: 10, image: "https://via.placeholder.com/150x120?text=Salbutamol" },
  { id: 29, name: "Multivitamin Tablets", company: "Wellness Pharma", price: 18.00, unit: "1x30's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Multivitamin" },
  { id: 30, name: "Clarithromycin 500 mg", company: "ACME Laboratories Ltd.", price: 28.00, unit: "1x14's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Clarithromycin" },
  { id: 31, name: "Cetirizine Syrup", company: "HealthPlus", price: 9.50, unit: "100 ml", discount: 5, image: "https://via.placeholder.com/150x120?text=Cetirizine+Syrup" },
  { id: 32, name: "Zinc Tablets", company: "Beacon Pharmaceuticals Ltd.", price: 11.00, unit: "1x30's box", discount: 0, image: "https://via.placeholder.com/150x120?text=Zinc" },
  { id: 33, name: "Metoprolol 50 mg", company: "Square Pharmaceuticals Ltd.", price: 15.00, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Metoprolol" },
  { id: 34, name: "Levothyroxine 100 mcg", company: "ACME Laboratories Ltd.", price: 20.00, unit: "1x30's box", discount: 7, image: "https://via.placeholder.com/150x120?text=Levothyroxine" },
  { id: 35, name: "Vitamin B12", company: "HealthPlus", price: 16.00, unit: "1x30's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Vitamin+B12" },
  { id: 36, name: "Lisinopril 10 mg", company: "Beacon Pharmaceuticals Ltd.", price: 18.00, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Lisinopril" },
  { id: 37, name: "Omeprazole DR 40 mg", company: "Square Pharmaceuticals Ltd.", price: 22.00, unit: "1x14's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Omeprazole+DR" },
  { id: 38, name: "Vitamin E Capsules", company: "Wellness Pharma", price: 19.00, unit: "1x30's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Vitamin+E" },
  { id: 39, name: "Doxycycline 100 mg", company: "ACME Laboratories Ltd.", price: 25.00, unit: "1x20's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Doxycycline" },
  { id: 40, name: "Folic Acid 5 mg", company: "HealthPlus", price: 10.00, unit: "1x30's box", discount: 0, image: "https://via.placeholder.com/150x120?text=Folic+Acid" },
  { id: 41, name: "Prednisolone 5 mg", company: "Beacon Pharmaceuticals Ltd.", price: 12.00, unit: "1x30's box", discount: 8, image: "https://via.placeholder.com/150x120?text=Prednisolone" },
  { id: 42, name: "Hydrocortisone Cream", company: "Square Pharmaceuticals Ltd.", price: 15.00, unit: "30 gm", discount: 5, image: "https://via.placeholder.com/150x120?text=Hydrocortisone" },
  { id: 43, name: "Magnesium Citrate", company: "Wellness Pharma", price: 14.00, unit: "1x30's box", discount: 0, image: "https://via.placeholder.com/150x120?text=Magnesium+Citrate" },
  { id: 44, name: "Cough Syrup", company: "HealthPlus", price: 8.00, unit: "100 ml", discount: 7, image: "https://via.placeholder.com/150x120?text=Cough+Syrup" },
  { id: 45, name: "Azithromycin Syrup", company: "ACME Laboratories Ltd.", price: 20.00, unit: "100 ml", discount: 10, image: "https://via.placeholder.com/150x120?text=Azithromycin+Syrup" },
  { id: 46, name: "Vitamin A Capsules", company: "Beacon Pharmaceuticals Ltd.", price: 18.00, unit: "1x30's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Vitamin+A" },
  { id: 47, name: "Saline Nasal Spray", company: "Square Pharmaceuticals Ltd.", price: 7.00, unit: "30 ml", discount: 0, image: "https://via.placeholder.com/150x120?text=Saline+Spray" },
  { id: 48, name: "Metformin XR 500 mg", company: "ACME Laboratories Ltd.", price: 18.00, unit: "1x30's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Metformin+XR" },
  { id: 49, name: "Vitamin B Complex", company: "HealthPlus", price: 20.00, unit: "1x30's box", discount: 5, image: "https://via.placeholder.com/150x120?text=Vitamin+B+Complex" },
  { id: 50, name: "Loperamide 2 mg", company: "Beacon Pharmaceuticals Ltd.", price: 6.00, unit: "1x10's box", discount: 10, image: "https://via.placeholder.com/150x120?text=Loperamide" }
];

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const cartItemsDiv = document.getElementById("cartItems");
const cartTotalDiv = document.getElementById("cartTotal");

let cart = {};

function renderProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm));

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#777;">No products found.</p>`;
    return;
  }

  productsGrid.innerHTML = filteredProducts.map(p => `
    <article class="product-card" tabindex="0" aria-label="${p.name} medicine">
      ${p.discount > 0 ? `<div class="discount-badge">${p.discount}% OFF</div>` : ""}
      <img src="${p.image}" alt="${p.name}" class="product-image" />
      <div class="product-name">${p.name}</div>
      <div class="product-company">${p.company}</div>
      <div class="product-price">৳ ${p.price.toFixed(2)}</div>
      <div class="product-unit">${p.unit}</div>
      <button class="btn-details" aria-label="Add ${p.name} to cart" onclick="addToCart(${p.id})">Add to Cart</button>
    </article>
  `).join("");
}

function addToCart(productId) {
  if (cart[productId]) {
    cart[productId].qty += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart[productId] = { ...product, qty: 1 };
  }
  renderCart();
}

function changeQty(productId, delta) {
  if (!cart[productId]) return;
  cart[productId].qty += delta;
  if (cart[productId].qty < 1) {
    delete cart[productId];
  }
  renderCart();
}

function removeFromCart(productId) {
  delete cart[productId];
  renderCart();
}

function renderCart() {
  const cartEntries = Object.values(cart);
  if (cartEntries.length === 0) {
    cartItemsDiv.innerHTML = `<p>Your cart is empty.</p>`;
    cartTotalDiv.textContent = "Total: ৳ 0.00";
    return;
  }

  cartItemsDiv.innerHTML = cartEntries.map(item => `
    <div class="cart-item" tabindex="0" aria-label="${item.name}, quantity ${item.qty}, price ৳${(item.price * item.qty).toFixed(2)}">
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-item-qty">
        <button class="qty-btn" aria-label="Decrease quantity of ${item.name}" onclick="changeQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" aria-label="Increase quantity of ${item.name}" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <div class="cart-item-price">৳ ${(item.price * item.qty).toFixed(2)}</div>
      <button class="cart-item-remove" aria-label="Remove ${item.name} from cart" onclick="removeFromCart(${item.id})">&times;</button>
    </div>
  `).join("");

  const total = cartEntries.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalDiv.textContent = `Total: ৳ ${total.toFixed(2)}`;
}

searchInput.addEventListener("input", renderProducts);

// Initial render
renderProducts();
renderCart();
