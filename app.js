import { categories, books, getBooksByCategory, searchBooks } from './data.js';

// Router state
const routes = {
  home: '#/',
  category: '#/category/',
  product: '#/product/',
  checkout: '#/checkout'
};

// Cart state in localStorage
const storageKey = 'glass-store-cart-v1';
const cart = {
  items: loadCart(),
  add(productId) {
    const item = this.items.find((i) => i.id === productId);
    if (item) item.qty += 1; else this.items.push({ id: productId, qty: 1 });
    saveCart(this.items);
    renderCartBadge();
    showToast('تمت إضافة الكتاب إلى السلة');
  },
  remove(productId) {
    const idx = this.items.findIndex((i) => i.id === productId);
    if (idx >= 0) this.items.splice(idx, 1);
    saveCart(this.items); renderCartBadge();
  },
  setQty(productId, qty) {
    const item = this.items.find((i) => i.id === productId);
    if (!item) return;
    item.qty = Math.max(1, qty);
    saveCart(this.items); renderCartBadge();
  },
  clear() {
    this.items = []; saveCart(this.items); renderCartBadge();
  }
};

function loadCart() {
  try { return JSON.parse(localStorage.getItem(storageKey)) || []; }
  catch { return []; }
}
function saveCart(items) { localStorage.setItem(storageKey, JSON.stringify(items)); }

// DOM refs
const app = document.getElementById('app');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const searchInput = document.getElementById('searchInput');
const brandLink = document.getElementById('brandLink');
const checkoutNav = document.getElementById('checkoutNav');

document.getElementById('year').textContent = new Date().getFullYear();

// Navigation
window.addEventListener('hashchange', handleRoute);
brandLink.addEventListener('click', () => navigate(routes.home));
checkoutNav.addEventListener('click', () => navigate(routes.checkout));
searchInput.addEventListener('input', handleSearch);

// Cart drawer
document.getElementById('cartButton').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('clearCart').addEventListener('click', () => { cart.clear(); renderCart(); });
document.getElementById('goCheckout').addEventListener('click', () => { closeCart(); navigate(routes.checkout); });
cartOverlay.addEventListener('click', closeCart);

function navigate(hash) { location.hash = hash; }

function handleRoute() {
  const hash = location.hash || routes.home;
  if (hash.startsWith(routes.category)) {
    const id = decodeURIComponent(hash.substring(routes.category.length));
    renderCategory(id);
  } else if (hash.startsWith(routes.product)) {
    const id = decodeURIComponent(hash.substring(routes.product.length));
    renderProduct(id);
  } else if (hash === routes.checkout) {
    renderCheckout();
  } else {
    renderHome();
  }
}

// Rendering
function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="breadcrumbs"><span>الرئيسية</span></div>
      <h1 class="hero__title">اكتشف مجموعات الكتب</h1>
      <p class="hero__subtitle">واجهة زجاجية عصرية مع تنقل سهل وسلة مشتريات.</p>
    </section>
    <section>
      <h2 class="section-title">التصنيفات</h2>
      <div class="grid">
        ${categories.map(cat => categoryCard(cat)).join('')}
      </div>
    </section>
    <section style="margin-top:24px">
      <h2 class="section-title">الأحدث</h2>
      <div class="book-grid">
        ${books.slice(0, 12).map(b => bookCard(b)).join('')}
      </div>
    </section>
  `;
  wireProductButtons();
}

function renderCategory(categoryId) {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) {
    app.innerHTML = `<div class="empty">لم يتم العثور على التصنيف المطلوب.</div>`;
    return;
  }
  const list = getBooksByCategory(categoryId);
  app.innerHTML = `
    <div class="breadcrumbs"><a href="#/">الرئيسية</a><span>/</span><span>${category.name}</span></div>
    <h2 class="section-title">${category.name}</h2>
    <p class="category-card__desc">${category.description}</p>
    <div class="book-grid" style="margin-top:14px">${list.map(b => bookCard(b)).join('')}</div>
  `;
  wireProductButtons();
}

function renderProduct(productId) {
  const product = books.find((b) => b.id === productId);
  if (!product) { app.innerHTML = `<div class="empty">الكتاب غير موجود.</div>`; return; }
  const category = categories.find((c) => c.id === product.categoryId);
  app.innerHTML = `
    <div class="breadcrumbs"><a href="#/">الرئيسية</a><span>/</span><a href="#/category/${category.id}">${category.name}</a><span>/</span><span>${product.title}</span></div>
    <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 24px; align-items: start;">
      <div class="glass" style="border-radius: 18px; overflow: hidden;">
        <img alt="${product.title}" src="${product.cover}" style="width:100%; display:block; aspect-ratio:3/4; object-fit:cover" />
      </div>
      <div>
        <h1 class="hero__title">${product.title}</h1>
        <div class="book-meta">${product.author}</div>
        <p style="margin: 10px 0 16px">${product.description}</p>
        <div style="display:flex; align-items:center; gap:10px; margin-bottom: 14px;">
          <span class="price">${product.price.toFixed(2)} ر.س</span>
        </div>
        <button class="btn btn-primary add-to-cart" data-id="${product.id}">أضف إلى السلة</button>
      </div>
    </div>
  `;
  wireProductButtons();
}

function renderCheckout() {
  const cartProducts = cart.items.map((i) => ({
    product: books.find((b) => b.id === i.id), qty: i.qty
  })).filter((p) => p.product);

  const subtotal = cartProducts.reduce((sum, p) => sum + p.product.price * p.qty, 0);
  const shipping = cartProducts.length ? 15 : 0;
  const total = subtotal + shipping;

  app.innerHTML = `
    <div class="breadcrumbs"><a href="#/">الرئيسية</a><span>/</span><span>الدفع</span></div>
    <div class="grid" style="grid-template-columns: 1.2fr .8fr; gap: 20px; align-items:start;">
      <form class="glass" style="padding:16px; border-radius:16px; display:grid; gap:10px;">
        <h2 class="section-title">معلومات الشحن</h2>
        <input class="input" placeholder="الاسم الكامل" required />
        <input class="input" placeholder="البريد الإلكتروني" type="email" required />
        <input class="input" placeholder="رقم الجوال" type="tel" required />
        <input class="input" placeholder="العنوان" required />
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
          <input class="input" placeholder="المدينة" required />
          <input class="input" placeholder="الرمز البريدي" required />
        </div>
        <button type="button" id="placeOrder" class="btn btn-primary">إتمام الطلب</button>
      </form>
      <aside class="glass" style="padding:16px; border-radius:16px; display:grid; gap:10px;">
        <h2 class="section-title">ملخص الطلب</h2>
        <div>${cartProducts.length ? cartProducts.map(({product, qty}) => `
          <div style="display:flex; justify-content:space-between; gap:10px">
            <span>${product.title} × ${qty}</span>
            <strong>${(product.price * qty).toFixed(2)} ر.س</strong>
          </div>
        `).join('') : '<div class="empty-state">سلتك فارغة</div>'}</div>
        <hr style="border: none; border-top: 1px solid var(--border);" />
        <div style="display:grid; gap:6px">
          <div style="display:flex; justify-content:space-between"><span>المجموع</span><span>${subtotal.toFixed(2)} ر.س</span></div>
          <div style="display:flex; justify-content:space-between"><span>الشحن</span><span>${shipping.toFixed(2)} ر.س</span></div>
          <div style="display:flex; justify-content:space-between; font-weight:800"><span>الإجمالي</span><span>${total.toFixed(2)} ر.س</span></div>
        </div>
      </aside>
    </div>
  `;

  const btn = document.getElementById('placeOrder');
  if (btn) btn.addEventListener('click', () => {
    if (!cartProducts.length) { showToast('السلة فارغة'); return; }
    showToast('تم استلام طلبك! (وهمي)');
    cart.clear();
    renderCheckout();
  });
}

function categoryCard(cat) {
  return `
    <article class="category-card glass" style="border-color:${cat.accent}">
      <h3 class="category-card__title">${cat.name}</h3>
      <p class="category-card__desc">${cat.description}</p>
      <div class="category-card__cta">
        <button class="btn btn-primary" onclick="location.hash='${routes.category}${encodeURIComponent(cat.id)}'">تصفح</button>
        <a class="link" href="${routes.category}${encodeURIComponent(cat.id)}">عرض المزيد →</a>
      </div>
    </article>
  `;
}

function bookCard(b) {
  return `
    <article class="book-card glass">
      <img class="book-card__cover" src="${b.cover}" alt="${b.title}" />
      <div class="book-card__body">
        <div class="book-title">${b.title}</div>
        <div class="book-meta">${b.author}</div>
        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-top:6px;">
          <span class="price">${b.price.toFixed(2)} ر.س</span>
          <div style="display:flex; gap:8px">
            <button class="btn btn-ghost" onclick="location.hash='${routes.product}${encodeURIComponent(b.id)}'">تفاصيل</button>
            <button class="btn btn-primary add-to-cart" data-id="${b.id}">أضف</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function wireProductButtons() {
  document.querySelectorAll('.add-to-cart').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      cart.add(id);
      renderCart();
    });
  });
}

function handleSearch(e) {
  const q = e.target.value;
  if (!q) { handleRoute(); return; }
  const results = searchBooks(q);
  app.innerHTML = `
    <div class="breadcrumbs"><a href="#/">الرئيسية</a><span>/</span><span>نتائج البحث</span></div>
    <h2 class="section-title">نتائج البحث عن: "${escapeHtml(q)}"</h2>
    ${results.length ? `<div class="book-grid">${results.map(b => bookCard(b)).join('')}</div>` : `<div class="empty-state">لا توجد نتائج</div>`}
  `;
  wireProductButtons();
}

function renderCart() {
  const items = cart.items.map((i) => ({ item: i, product: books.find((b) => b.id === i.id) })).filter(({product}) => product);
  cartItemsEl.innerHTML = items.map(({ item, product }) => `
    <div class="cart-item">
      <img src="${product.cover}" alt="${product.title}" />
      <div>
        <div class="cart-item__title">${product.title}</div>
        <div class="cart-item__meta">${product.author}</div>
        <div class="qty" style="margin-top:6px">
          <button class="btn" data-act="dec" data-id="${product.id}">-</button>
          <span>${item.qty}</span>
          <button class="btn" data-act="inc" data-id="${product.id}">+</button>
          <button class="btn btn-ghost" data-act="rm" data-id="${product.id}">إزالة</button>
        </div>
      </div>
      <div><strong>${(product.price * item.qty).toFixed(2)} ر.س</strong></div>
    </div>
  `).join('');

  const total = items.reduce((s, { item, product }) => s + product.price * item.qty, 0);
  cartTotalEl.textContent = `${total.toFixed(2)} ر.س`;

  cartItemsEl.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const act = btn.getAttribute('data-act');
      if (act === 'inc') cart.setQty(id, (cart.items.find(i => i.id === id)?.qty || 1) + 1);
      if (act === 'dec') cart.setQty(id, (cart.items.find(i => i.id === id)?.qty || 1) - 1);
      if (act === 'rm') cart.remove(id);
      renderCart();
    });
  });
}

function renderCartBadge() {
  const count = cart.items.reduce((s, i) => s + i.qty, 0);
  cartCountEl.textContent = String(count);
}

function openCart() {
  cartOverlay.classList.remove('hidden');
  cartDrawer.classList.remove('hidden');
  // trigger transition
  requestAnimationFrame(() => cartDrawer.classList.add('open'));
  renderCart();
}
function closeCart() { cartOverlay.classList.add('hidden'); cartDrawer.classList.remove('open'); setTimeout(() => cartDrawer.classList.add('hidden'), 200); }

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove('show'), 1800);
}

function escapeHtml(s) { return s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// initial
renderCartBadge();
handleRoute();
