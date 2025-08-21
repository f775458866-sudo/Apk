const categories = [
  {
    id: 'novels',
    name: 'روايات',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 'science',
    name: 'كتب علمية',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 'history',
    name: 'كتب تاريخية',
    cover: 'https://images.unsplash.com/photo-1522722727271-2647f0ff3f14?auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 'fantasy',
    name: 'خيال علمي',
    cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=60',
  }
];

const books = {
  novels: [
    { title: 'البؤساء', author: 'فيكتور هوغو', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=60' },
    { title: 'مائة عام من العزلة', author: 'غابرييل غارسيا ماركيز', img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=60' },
    { title: 'خان الخليلي', author: 'نجيب محفوظ', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=60' },
  ],
  science: [
    { title: 'نظرية كل شيء', author: 'ستيفن هوكينغ', img: 'https://images.unsplash.com/photo-1531985416010-7a5d12cfdf40?auto=format&fit=crop&w=400&q=60' },
    { title: 'العقل أولاً', author: 'دانيال كانيمان', img: 'https://images.unsplash.com/photo-1493246318656-5ecaa1b9da65?auto=format&fit=crop&w=400&q=60' },
    { title: 'كون من لا شيء', author: 'لورنس كراوس', img: 'https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=400&q=60' },
  ],
  history: [
    { title: 'تاريخ العرب', author: 'فيليب حتي', img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=60' },
    { title: 'سقوط الإمبراطورية الرومانية', author: 'إدوارد غيبون', img: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=400&q=60' },
    { title: 'القدس', author: 'سيمون سيباغ مونتفيوري', img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=60' },
  ],
  fantasy: [
    { title: 'هاري بوتر وحجر الفيلسوف', author: 'ج. ك. رولينغ', img: 'https://images.unsplash.com/photo-1590608897129-79de2104db53?auto=format&fit=crop&w=400&q=60' },
    { title: 'سلسلة نارنيا', author: 'سي. إس. لويس', img: 'https://images.unsplash.com/photo-1569428049192-5263e40855b5?auto=format&fit=crop&w=400&q=60' },
    { title: 'ملك الخواتم', author: 'ج. ر. ر. توكين', img: 'https://images.unsplash.com/photo-1496515303430-58a6af36ee7a?auto=format&fit=crop&w=400&q=60' },
  ],
};

const categoriesSection = document.getElementById('categoriesSection');
const booksSection = document.getElementById('booksSection');
const backBtn = document.getElementById('backBtn');
const booksGrid = document.getElementById('booksGrid');
const categoryTitle = document.getElementById('categoryTitle');

function renderCategories() {
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.innerHTML = `
      <img src="${cat.cover}" alt="${cat.name}" style="width:100%;height:160px;object-fit:cover;border-radius:12px;">
      <h3>${cat.name}</h3>
    `;
    card.addEventListener('click', () => openCategory(cat.id));
    categoriesSection.appendChild(card);
  });
}

function openCategory(catId) {
  categoriesSection.classList.add('hidden');
  booksSection.classList.remove('hidden');
  categoryTitle.textContent = categories.find(c => c.id === catId).name;
  booksGrid.innerHTML = '';
  books[catId].forEach(b => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
      <img src="${b.img}" alt="${b.title}">
      <div class="info">
        <h4 class="title">${b.title}</h4>
        <p class="author">${b.author}</p>
      </div>
    `;
    booksGrid.appendChild(bookCard);
  });
}

backBtn.addEventListener('click', () => {
  booksSection.classList.add('hidden');
  categoriesSection.classList.remove('hidden');
});

// Initialize
renderCategories();