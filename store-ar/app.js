/*
  مكتبة الزجاج — متجر كتب عربي تجريبي بواجهة زجاجية
  - تطبيق واجهة واحدة (SPA) بدون أي أدوات بناء
  - اتجاه RTL بالكامل، مع تصنيفات وبطاقات كتب وسلة مبسطة
*/

// ----------------------- بيانات وهمية -----------------------
const categories = [
  { id: "novels", name: "روايات", desc: "أعمال خيالية وسردية ملهمة", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" },
  { id: "self", name: "تطوير الذات", desc: "نمِّ نفسك وعاداتك", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1600&auto=format&fit=crop" },
  { id: "history", name: "تاريخ", desc: "قصص الأمم والحضارات", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop" },
  { id: "tech", name: "تقنية", desc: "برمجة وذكاء اصطناعي", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" },
  { id: "business", name: "أعمال", desc: "ريادة وإدارة ومال", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" },
  { id: "kids", name: "أطفال", desc: "قصص ممتعة للصغار", image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=1600&auto=format&fit=crop" }
];

const fakeBooks = [
  // روايات
  { id: "n1", categoryId: "novels", title: "ظلال المدينة", author: "سلمى الراوي", price: 39, cover: seedImg("novel1") },
  { id: "n2", categoryId: "novels", title: "عطر الأمس", author: "ليث الكرمي", price: 44, cover: seedImg("novel2") },
  { id: "n3", categoryId: "novels", title: "قمر على الطاولة", author: "مي عبدالنور", price: 41, cover: seedImg("novel3") },
  { id: "n4", categoryId: "novels", title: "البيت الأزرق", author: "ياسر بدوي", price: 48, cover: seedImg("novel4") },
  { id: "n5", categoryId: "novels", title: "نهايات سعيدة", author: "هبة علوان", price: 36, cover: seedImg("novel5") },
  { id: "n6", categoryId: "novels", title: "الممر الضيق", author: "عماد سرحان", price: 42, cover: seedImg("novel6") },

  // تطوير الذات
  { id: "s1", categoryId: "self", title: "قوة العادات", author: "عمر أبو زيد", price: 49, cover: seedImg("self1") },
  { id: "s2", categoryId: "self", title: "صباحات منتجة", author: "هند عارف", price: 37, cover: seedImg("self2") },
  { id: "s3", categoryId: "self", title: "أفكار واضحة", author: "رامي ثابت", price: 45, cover: seedImg("self3") },
  { id: "s4", categoryId: "self", title: "اتزان", author: "رنا شهاب", price: 35, cover: seedImg("self4") },
  { id: "s5", categoryId: "self", title: "فنون التركيز", author: "محمود عز", price: 40, cover: seedImg("self5") },
  { id: "s6", categoryId: "self", title: "حياة بسيطة", author: "ميساء فخري", price: 32, cover: seedImg("self6") },

  // تاريخ
  { id: "h1", categoryId: "history", title: "مدن منسية", author: "طارق نصار", price: 55, cover: seedImg("hist1") },
  { id: "h2", categoryId: "history", title: "أبطال من الشرق", author: "ندى الخطيب", price: 52, cover: seedImg("hist2") },
  { id: "h3", categoryId: "history", title: "خرائط قديمة", author: "غسان سمير", price: 50, cover: seedImg("hist3") },
  { id: "h4", categoryId: "history", title: "الطريق إلى الإمبراطورية", author: "بسام ورد", price: 58, cover: seedImg("hist4") },
  { id: "h5", categoryId: "history", title: "حوليات القرن", author: "صفية زيدان", price: 47, cover: seedImg("hist5") },
  { id: "h6", categoryId: "history", title: "سفر الذاكرة", author: "نادر خالد", price: 46, cover: seedImg("hist6") },

  // تقنية
  { id: "t1", categoryId: "tech", title: "مدخل إلى البرمجة", author: "ليلى حاتم", price: 60, cover: seedImg("tech1") },
  { id: "t2", categoryId: "tech", title: "ذكاء اصطناعي عملي", author: "هادي عمران", price: 72, cover: seedImg("tech2") },
  { id: "t3", categoryId: "tech", title: "هندسة البرمجيات", author: "رنا صالح", price: 68, cover: seedImg("tech3") },
  { id: "t4", categoryId: "tech", title: "تعلّم الآلة", author: "حسام عمر", price: 74, cover: seedImg("tech4") },
  { id: "t5", categoryId: "tech", title: "ويب عصري", author: "فارس جودت", price: 63, cover: seedImg("tech5") },
  { id: "t6", categoryId: "tech", title: "نظم المعلومات", author: "مها رافت", price: 59, cover: seedImg("tech6") },

  // أعمال
  { id: "b1", categoryId: "business", title: "خطط فعّالة", author: "أكرم توفيق", price: 53, cover: seedImg("biz1") },
  { id: "b2", categoryId: "business", title: "ريادة بلا تعقيد", author: "شذى ربيع", price: 57, cover: seedImg("biz2") },
  { id: "b3", categoryId: "business", title: "قرارات سريعة", author: "حازم فهد", price: 51, cover: seedImg("biz3") },
  { id: "b4", categoryId: "business", title: "سحر التسويق", author: "مازن حيدر", price: 62, cover: seedImg("biz4") },
  { id: "b5", categoryId: "business", title: "إدارة الفرق", author: "فاتن نعيم", price: 55, cover: seedImg("biz5") },
  { id: "b6", categoryId: "business", title: "المالية للجميع", author: "كريم عادل", price: 58, cover: seedImg("biz6") },

  // أطفال
  { id: "k1", categoryId: "kids", title: "حكايات النجوم", author: "رِنا بلال", price: 28, cover: seedImg("kids1") },
  { id: "k2", categoryId: "kids", title: "القط المشاكس", author: "جود باسم", price: 25, cover: seedImg("kids2") },
  { id: "k3", categoryId: "kids", title: "رحلة الفراشة", author: "تقى نصيف", price: 23, cover: seedImg("kids3") },
  { id: "k4", categoryId: "kids", title: "لون العالم", author: "ليان ماهر", price: 26, cover: seedImg("kids4") },
  { id: "k5", categoryId: "kids", title: "مغامرات سليم", author: "سليم فؤاد", price: 29, cover: seedImg("kids5") },
  { id: "k6", categoryId: "kids", title: "حديقة الأسرار", author: "هيا رؤوف", price: 27, cover: seedImg("kids6") }
];

function seedImg(seed) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/400/600`;
}

// ----------------------- أدوات مساعدة -----------------------
const formatPrice = (amount) => `${amount.toLocaleString("ar-EG") } ر.س`;

const byCategory = (categoryId) => fakeBooks.filter(b => b.categoryId === categoryId);

const findCategory = (categoryId) => categories.find(c => c.id === categoryId);

// ----------------------- حالة السلة -----------------------
const CART_KEY = "glass_store_cart";

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount(cart);
}

let cart = loadCart();

function updateCartCount(c = cart) {
  const count = c.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = String(count);
}

function addToCart(bookId) {
  const found = cart.find(i => i.bookId === bookId);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ bookId, qty: 1 });
  }
  saveCart(cart);
  showToast("تمت الإضافة إلى السلة");
}

function setQty(bookId, qty) {
  cart = cart.map(i => i.bookId === bookId ? { ...i, qty: Math.max(1, qty) } : i);
  saveCart(cart);
}

function removeFromCart(bookId) {
  cart = cart.filter(i => i.bookId !== bookId);
  saveCart(cart);
}

function cartTotal(c = cart) {
  return c.reduce((sum, item) => {
    const b = fakeBooks.find(b => b.id === item.bookId);
    return sum + (b ? b.price * item.qty : 0);
  }, 0);
}

// ----------------------- واجهة المستخدم -----------------------
const appEl = document.getElementById("app");
const searchInput = document.getElementById("searchInput");
const modalRoot = document.getElementById("modalRoot");
const yearEl = document.getElementById("year");
yearEl.textContent = String(new Date().getFullYear());

document.getElementById("cartButton").addEventListener("click", () => openCartModal());
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (location.hash.startsWith("#/category/")) {
    // إعادة الرسم ضمن نفس التصنيف
    const categoryId = location.hash.split("/" )[2];
    renderCategory(categoryId, query);
  } else {
    renderHome(query);
  }
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ----------------------- الراوتر -----------------------
window.addEventListener("hashchange", handleRoute);

function handleRoute() {
  const hash = location.hash || "#/home";
  if (hash === "#/home" || hash === "#/categories") {
    renderHome();
    return;
  }
  if (hash.startsWith("#/category/")) {
    const categoryId = hash.split("/" )[2];
    renderCategory(categoryId);
    return;
  }
  if (hash === "#/cart") {
    openCartModal();
    // العودة لآخر شاشة بعد إغلاق المودال
    history.replaceState(null, "", "#/home");
    return;
  }
  // افتراضي
  renderHome();
}

// ----------------------- الشاشات -----------------------
function renderHome(query = "") {
  const q = query.toLowerCase();
  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
  );

  appEl.innerHTML = `
    <section class="section-title">
      <div class="title-text">التصنيفات</div>
      <div class="row gap-12">
        <a class="button secondary" href="#/home">الرئيسية</a>
        <a class="button" href="#/cart">عرض السلة</a>
      </div>
    </section>

    <div class="grid">
      ${filteredCategories.map(cat => categoryCard(cat)).join("")}
    </div>
  `;
}

function categoryCard(cat) {
  return `
    <article class="glass-card category-card col-4">
      <div class="category-bg" style="background-image: url('${cat.image}')"></div>
      <div class="card-content">
        <div class="category-name">${cat.name}</div>
        <div class="category-desc">${cat.desc}</div>
        <div class="row mt-14">
          <a class="button" href="#/category/${cat.id}">استكشف المجموعة</a>
        </div>
      </div>
    </article>
  `;
}

function renderCategory(categoryId, query = "") {
  const category = findCategory(categoryId);
  if (!category) {
    appEl.innerHTML = `<div class="empty-state">التصنيف غير موجود</div>`;
    return;
  }

  const q = query.toLowerCase();
  const books = byCategory(categoryId).filter(b =>
    b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
  );

  appEl.innerHTML = `
    <section class="section-title">
      <div class="title-text">${category.name}</div>
      <div class="row gap-12">
        <a class="button secondary" href="#/home">عودة للتصنيفات</a>
        <a class="button" href="#/cart">السلة (${cart.reduce((s,i)=>s+i.qty,0)})</a>
      </div>
    </section>

    <div class="grid">
      ${books.map(b => bookCard(b)).join("")}
    </div>
  `;

  // ربط أحداث أزرار الإضافة
  books.forEach(b => {
    const btn = document.getElementById(`add-${b.id}`);
    if (btn) {
      btn.addEventListener("click", () => addToCart(b.id));
    }
  });
}

function bookCard(book) {
  return `
    <article class="glass-card col-6">
      <div class="card-content book-card">
        <img class="book-cover" src="${book.cover}" alt="${book.title}" loading="lazy" />
        <div>
          <div class="book-title">${book.title}</div>
          <div class="book-meta">${book.author}</div>
          <div class="row wrap gap-12 mt-14">
            <span class="price-tag">${formatPrice(book.price)}</span>
            <button id="add-${book.id}" class="button">أضف إلى السلة</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ----------------------- المودال: السلة -----------------------
function openCartModal() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  const card = document.createElement("div");
  card.className = "modal-card";
  card.innerHTML = `
    <div class="modal-header row">
      <div class="title-text">سلة المشتريات</div>
      <button class="button secondary" id="closeModal">إغلاق</button>
    </div>
    <div class="modal-body" id="cartBody"></div>
    <div class="modal-footer row">
      <div class="row gap-12">
        <strong>الإجمالي:</strong>
        <span id="cartTotal"></span>
      </div>
      <div class="row gap-12">
        <button class="button" id="checkoutBtn">إتمام الشراء</button>
      </div>
    </div>
  `;

  overlay.appendChild(card);
  modalRoot.appendChild(overlay);
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("checkoutBtn").addEventListener("click", fakeCheckout);
  renderCartBody();

  function closeModal() {
    modalRoot.removeChild(overlay);
  }
}

function renderCartBody() {
  const body = document.getElementById("cartBody");
  const items = cart.map(item => {
    const book = fakeBooks.find(b => b.id === item.bookId);
    if (!book) return null;
    return { ...item, book };
  }).filter(Boolean);

  if (items.length === 0) {
    body.innerHTML = `<div class="empty-state">سلتك فارغة.</div>`;
  } else {
    body.innerHTML = items.map(({ book, qty }) => `
      <div class="glass-card card-content mt-10">
        <div class="row wrap gap-12">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="${book.cover}" alt="${book.title}" width="52" height="72" style="border-radius:8px; border:1px solid rgba(255,255,255,0.1)" />
            <div>
              <div class="book-title">${book.title}</div>
              <div class="book-meta">${book.author}</div>
            </div>
          </div>
          <span class="price-tag">${formatPrice(book.price * qty)}</span>
          <div class="qty">
            <button aria-label="نقصان" data-action="dec" data-id="${book.id}">−</button>
            <span>${qty}</span>
            <button aria-label="زيادة" data-action="inc" data-id="${book.id}">+</button>
          </div>
          <button class="button secondary" data-action="remove" data-id="${book.id}">إزالة</button>
        </div>
      </div>
    `).join("");
  }

  document.getElementById("cartTotal").textContent = formatPrice(cartTotal());

  body.querySelectorAll("button[data-action]").forEach(btn => {
    const id = btn.getAttribute("data-id");
    const action = btn.getAttribute("data-action");
    btn.addEventListener("click", () => {
      if (action === "inc") {
        const current = cart.find(i => i.bookId === id)?.qty ?? 1;
        setQty(id, current + 1);
      } else if (action === "dec") {
        const current = cart.find(i => i.bookId === id)?.qty ?? 1;
        setQty(id, Math.max(1, current - 1));
      } else if (action === "remove") {
        removeFromCart(id);
      }
      renderCartBody();
    });
  });
}

function fakeCheckout() {
  if (cart.length === 0) {
    showToast("السلة فارغة");
    return;
  }
  showToast("تم تنفيذ طلب تجريبي — شكراً لك!");
  cart = [];
  saveCart(cart);
  renderCartBody();
}

// ----------------------- بداية التطبيق -----------------------
updateCartCount();
handleRoute();

