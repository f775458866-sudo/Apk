// Arabic Book Store JavaScript

// Book Categories Data
const bookCategories = [
    {
        id: 'fiction',
        title: 'الأدب والروايات',
        description: 'مجموعة رائعة من الروايات العربية والعالمية المترجمة',
        icon: 'fas fa-book-open',
        count: 156,
        color: '#ff6b6b'
    },
    {
        id: 'science',
        title: 'العلوم والتكنولوجيا',
        description: 'كتب علمية متخصصة في مختلف المجالات العلمية',
        icon: 'fas fa-flask',
        count: 89,
        color: '#4ecdc4'
    },
    {
        id: 'history',
        title: 'التاريخ والحضارة',
        description: 'استكشف تاريخ الحضارات والثقافات المختلفة',
        icon: 'fas fa-landmark',
        count: 124,
        color: '#45b7d1'
    },
    {
        id: 'religion',
        title: 'الكتب الدينية',
        description: 'مراجع دينية وكتب إسلامية متنوعة',
        icon: 'fas fa-mosque',
        count: 203,
        color: '#96ceb4'
    },
    {
        id: 'philosophy',
        title: 'الفلسفة والفكر',
        description: 'كتب فلسفية وفكرية من مختلف المدارس',
        icon: 'fas fa-brain',
        count: 67,
        color: '#feca57'
    },
    {
        id: 'children',
        title: 'كتب الأطفال',
        description: 'قصص وحكايات مسلية وتعليمية للأطفال',
        icon: 'fas fa-child',
        count: 145,
        color: '#ff9ff3'
    },
    {
        id: 'business',
        title: 'الأعمال والاقتصاد',
        description: 'كتب في إدارة الأعمال والاقتصاد والتجارة',
        icon: 'fas fa-chart-line',
        count: 78,
        color: '#54a0ff'
    },
    {
        id: 'health',
        title: 'الصحة والطب',
        description: 'مراجع طبية وكتب الصحة العامة',
        icon: 'fas fa-heartbeat',
        count: 92,
        color: '#5f27cd'
    }
];

// Fake Books Data
const booksData = {
    fiction: [
        {
            id: 1,
            title: 'مئة عام من العزلة',
            author: 'غابرييل غارسيا ماركيز',
            price: '45 ريال',
            rating: 4.8,
            reviews: 234,
            description: 'رواية ملحمية تحكي قصة عائلة بوينديا عبر مئة عام من التاريخ',
            icon: 'fas fa-book'
        },
        {
            id: 2,
            title: 'الأسود يليق بك',
            author: 'أحلام مستغانمي',
            price: '38 ريال',
            rating: 4.6,
            reviews: 189,
            description: 'رواية عاطفية تتناول قصة حب معقدة في ظروف سياسية صعبة',
            icon: 'fas fa-heart'
        },
        {
            id: 3,
            title: 'مدن الملح',
            author: 'عبد الرحمن منيف',
            price: '52 ريال',
            rating: 4.7,
            reviews: 156,
            description: 'خماسية روائية تصور التحولات الاجتماعية في الخليج العربي',
            icon: 'fas fa-city'
        },
        {
            id: 4,
            title: 'موسم الهجرة إلى الشمال',
            author: 'الطيب صالح',
            price: '41 ريال',
            rating: 4.9,
            reviews: 298,
            description: 'رواية كلاسيكية تستكشف الهوية والاغتراب الثقافي',
            icon: 'fas fa-compass'
        },
        {
            id: 5,
            title: 'خمارة القط الأسود',
            author: 'يوسف زيدان',
            price: '36 ريال',
            rating: 4.4,
            reviews: 127,
            description: 'رواية تاريخية تدور أحداثها في القرون الوسطى',
            icon: 'fas fa-cat'
        },
        {
            id: 6,
            title: 'النبطي',
            author: 'يوسف زيدان',
            price: '43 ريال',
            rating: 4.5,
            reviews: 178,
            description: 'رواية تاريخية تحكي عن الحضارة النبطية القديمة',
            icon: 'fas fa-monument'
        }
    ],
    science: [
        {
            id: 7,
            title: 'تاريخ موجز للزمن',
            author: 'ستيفن هوكينغ',
            price: '55 ريال',
            rating: 4.7,
            reviews: 312,
            description: 'كتاب علمي يشرح نظريات الفيزياء الحديثة بطريقة مبسطة',
            icon: 'fas fa-clock'
        },
        {
            id: 8,
            title: 'الكون في قشرة جوز',
            author: 'ستيفن هوكينغ',
            price: '48 ريال',
            rating: 4.6,
            reviews: 267,
            description: 'استكشاف للنظريات العلمية حول طبيعة الكون والزمن',
            icon: 'fas fa-globe'
        },
        {
            id: 9,
            title: 'العلم والدين',
            author: 'ألبرت أينشتاين',
            price: '39 ريال',
            rating: 4.5,
            reviews: 189,
            description: 'مجموعة من المقالات حول العلاقة بين العلم والإيمان',
            icon: 'fas fa-atom'
        },
        {
            id: 10,
            title: 'الذكاء الاصطناعي',
            author: 'محمد الأحمدي',
            price: '62 ريال',
            rating: 4.8,
            reviews: 145,
            description: 'مقدمة شاملة لعلم الذكاء الاصطناعي وتطبيقاته',
            icon: 'fas fa-robot'
        },
        {
            id: 11,
            title: 'علم الوراثة الحديث',
            author: 'فاطمة السالم',
            price: '58 ريال',
            rating: 4.6,
            reviews: 98,
            description: 'دليل شامل لعلم الوراثة والهندسة الوراثية',
            icon: 'fas fa-dna'
        },
        {
            id: 12,
            title: 'الطاقة المتجددة',
            author: 'أحمد الخليفة',
            price: '51 ريال',
            rating: 4.4,
            reviews: 156,
            description: 'كتاب عن مصادر الطاقة المتجددة ومستقبل الطاقة',
            icon: 'fas fa-solar-panel'
        }
    ],
    history: [
        {
            id: 13,
            title: 'تاريخ الحضارة الإسلامية',
            author: 'جرجي زيدان',
            price: '47 ريال',
            rating: 4.8,
            reviews: 289,
            description: 'موسوعة شاملة عن تاريخ الحضارة الإسلامية عبر العصور',
            icon: 'fas fa-mosque'
        },
        {
            id: 14,
            title: 'الأندلس التاريخ المصور',
            author: 'طارق السويدان',
            price: '65 ريال',
            rating: 4.9,
            reviews: 234,
            description: 'تاريخ مصور للحضارة الإسلامية في الأندلس',
            icon: 'fas fa-image'
        },
        {
            id: 15,
            title: 'صلاح الدين الأيوبي',
            author: 'علي محمد الصلابي',
            price: '42 ريال',
            rating: 4.7,
            reviews: 198,
            description: 'سيرة شاملة للقائد العظيم صلاح الدين الأيوبي',
            icon: 'fas fa-crown'
        },
        {
            id: 16,
            title: 'تاريخ العرب قبل الإسلام',
            author: 'جواد علي',
            price: '89 ريال',
            rating: 4.6,
            reviews: 167,
            description: 'دراسة معمقة لتاريخ العرب في الجاهلية',
            icon: 'fas fa-scroll'
        },
        {
            id: 17,
            title: 'الحروب الصليبية',
            author: 'سعيد عاشور',
            price: '54 ريال',
            rating: 4.5,
            reviews: 145,
            description: 'تاريخ شامل للحروب الصليبية من المنظور العربي',
            icon: 'fas fa-sword'
        },
        {
            id: 18,
            title: 'تاريخ مصر الإسلامية',
            author: 'حسن إبراهيم حسن',
            price: '61 ريال',
            rating: 4.7,
            reviews: 178,
            description: 'تاريخ مفصل لمصر منذ الفتح الإسلامي',
            icon: 'fas fa-pyramid'
        }
    ],
    religion: [
        {
            id: 19,
            title: 'تفسير القرآن الكريم',
            author: 'ابن كثير',
            price: '95 ريال',
            rating: 4.9,
            reviews: 456,
            description: 'تفسير شامل ومعتمد للقرآن الكريم',
            icon: 'fas fa-book-open'
        },
        {
            id: 20,
            title: 'صحيح البخاري',
            author: 'الإمام البخاري',
            price: '78 ريال',
            rating: 4.9,
            reviews: 389,
            description: 'أصح كتاب بعد القرآن الكريم في الأحاديث النبوية',
            icon: 'fas fa-star-and-crescent'
        },
        {
            id: 21,
            title: 'السيرة النبوية',
            author: 'ابن هشام',
            price: '56 ريال',
            rating: 4.8,
            reviews: 278,
            description: 'سيرة شاملة لحياة الرسول صلى الله عليه وسلم',
            icon: 'fas fa-user'
        },
        {
            id: 22,
            title: 'الفقه الميسر',
            author: 'عبد الله الطيار',
            price: '43 ريال',
            rating: 4.6,
            reviews: 198,
            description: 'كتاب مبسط في الفقه الإسلامي للمبتدئين',
            icon: 'fas fa-balance-scale'
        },
        {
            id: 23,
            title: 'أسماء الله الحسنى',
            author: 'عبد الرزاق البدر',
            price: '38 ريال',
            rating: 4.7,
            reviews: 234,
            description: 'شرح مفصل لأسماء الله الحسنى ومعانيها',
            icon: 'fas fa-pray'
        },
        {
            id: 24,
            title: 'قصص الأنبياء',
            author: 'ابن كثير',
            price: '49 ريال',
            rating: 4.8,
            reviews: 345,
            description: 'قصص الأنبياء والمرسلين من القرآن والسنة',
            icon: 'fas fa-mountain'
        }
    ],
    philosophy: [
        {
            id: 25,
            title: 'مقدمة ابن خلدون',
            author: 'ابن خلدون',
            price: '67 ريال',
            rating: 4.8,
            reviews: 189,
            description: 'مؤسس علم الاجتماع وفلسفة التاريخ',
            icon: 'fas fa-users'
        },
        {
            id: 26,
            title: 'فلسفة الأخلاق',
            author: 'أحمد أمين',
            price: '41 ريال',
            rating: 4.6,
            reviews: 145,
            description: 'دراسة فلسفية معمقة في علم الأخلاق',
            icon: 'fas fa-heart'
        },
        {
            id: 27,
            title: 'الفلسفة الإسلامية',
            author: 'مصطفى عبد الرازق',
            price: '53 ريال',
            rating: 4.7,
            reviews: 167,
            description: 'تاريخ وتطور الفلسفة في الحضارة الإسلامية',
            icon: 'fas fa-lightbulb'
        },
        {
            id: 28,
            title: 'المنطق الحديث',
            author: 'زكي نجيب محمود',
            price: '45 ريال',
            rating: 4.5,
            reviews: 123,
            description: 'مقدمة في علم المنطق والتفكير النقدي',
            icon: 'fas fa-brain'
        },
        {
            id: 29,
            title: 'فلسفة الجمال',
            author: 'أميرة حلمي مطر',
            price: '39 ريال',
            rating: 4.4,
            reviews: 98,
            description: 'دراسة فلسفية في علم الجمال والفن',
            icon: 'fas fa-palette'
        },
        {
            id: 30,
            title: 'الوجودية',
            author: 'فؤاد زكريا',
            price: '47 ريال',
            rating: 4.6,
            reviews: 156,
            description: 'مقدمة شاملة للفلسفة الوجودية',
            icon: 'fas fa-question'
        }
    ],
    children: [
        {
            id: 31,
            title: 'حكايات جدتي',
            author: 'فاطمة المرنيسي',
            price: '28 ريال',
            rating: 4.7,
            reviews: 234,
            description: 'مجموعة من الحكايات الشعبية المسلية للأطفال',
            icon: 'fas fa-magic'
        },
        {
            id: 32,
            title: 'مغامرات سندباد',
            author: 'مجهول',
            price: '32 ريال',
            rating: 4.8,
            reviews: 298,
            description: 'قصص مغامرات سندباد البحري الشيقة',
            icon: 'fas fa-ship'
        },
        {
            id: 33,
            title: 'الأسد الملك',
            author: 'محمد عطية الإبراشي',
            price: '25 ريال',
            rating: 4.6,
            reviews: 189,
            description: 'قصة تعليمية عن الشجاعة والقيادة',
            icon: 'fas fa-crown'
        },
        {
            id: 34,
            title: 'حديقة الحروف',
            author: 'سلوى العضيدان',
            price: '35 ريال',
            rating: 4.9,
            reviews: 345,
            description: 'كتاب تعليمي ممتع لتعلم الحروف العربية',
            icon: 'fas fa-seedling'
        },
        {
            id: 35,
            title: 'الأرنب الذكي',
            author: 'كامل كيلاني',
            price: '22 ريال',
            rating: 4.5,
            reviews: 167,
            description: 'قصة مسلية تعلم الأطفال الذكاء والحكمة',
            icon: 'fas fa-rabbit-fast'
        },
        {
            id: 36,
            title: 'عالم الحيوانات',
            author: 'أحمد نجيب',
            price: '38 ريال',
            rating: 4.7,
            reviews: 213,
            description: 'كتاب تعليمي مصور عن عالم الحيوانات',
            icon: 'fas fa-paw'
        }
    ],
    business: [
        {
            id: 37,
            title: 'إدارة الأعمال الحديثة',
            author: 'طارق عبد العال',
            price: '58 ريال',
            rating: 4.6,
            reviews: 167,
            description: 'دليل شامل لإدارة الأعمال في العصر الحديث',
            icon: 'fas fa-briefcase'
        },
        {
            id: 38,
            title: 'التسويق الرقمي',
            author: 'سارة الحمادي',
            price: '52 ريال',
            rating: 4.7,
            reviews: 198,
            description: 'استراتيجيات التسويق الرقمي ووسائل التواصل الاجتماعي',
            icon: 'fas fa-mobile-alt'
        },
        {
            id: 39,
            title: 'ريادة الأعمال',
            author: 'محمد العريفي',
            price: '45 ريال',
            rating: 4.8,
            reviews: 234,
            description: 'دليل عملي لبدء وإدارة المشاريع الناشئة',
            icon: 'fas fa-rocket'
        },
        {
            id: 40,
            title: 'الاستثمار الذكي',
            author: 'عبد الله الراجحي',
            price: '61 ريال',
            rating: 4.5,
            reviews: 145,
            description: 'استراتيجيات الاستثمار الناجح في الأسواق المالية',
            icon: 'fas fa-chart-pie'
        },
        {
            id: 41,
            title: 'القيادة الفعالة',
            author: 'نبيل العوضي',
            price: '48 ريال',
            rating: 4.7,
            reviews: 189,
            description: 'مهارات القيادة وإدارة الفرق بفعالية',
            icon: 'fas fa-users-cog'
        },
        {
            id: 42,
            title: 'إدارة الوقت',
            author: 'إبراهيم الفقي',
            price: '36 ريال',
            rating: 4.6,
            reviews: 278,
            description: 'تقنيات فعالة لإدارة الوقت وزيادة الإنتاجية',
            icon: 'fas fa-clock'
        }
    ],
    health: [
        {
            id: 43,
            title: 'الطب النبوي',
            author: 'ابن القيم الجوزية',
            price: '44 ريال',
            rating: 4.8,
            reviews: 289,
            description: 'الطب والعلاج في السنة النبوية الشريفة',
            icon: 'fas fa-leaf'
        },
        {
            id: 44,
            title: 'التغذية الصحية',
            author: 'محمد الفايد',
            price: '41 ريال',
            rating: 4.6,
            reviews: 234,
            description: 'دليل شامل للتغذية السليمة والصحة العامة',
            icon: 'fas fa-apple-alt'
        },
        {
            id: 45,
            title: 'الصحة النفسية',
            author: 'مصطفى حجازي',
            price: '49 ريال',
            rating: 4.7,
            reviews: 198,
            description: 'دليل للحفاظ على الصحة النفسية والعقلية',
            icon: 'fas fa-brain'
        },
        {
            id: 46,
            title: 'الطب البديل',
            author: 'أحمد القاضي',
            price: '37 ريال',
            rating: 4.5,
            reviews: 156,
            description: 'العلاج بالأعشاب والطب التكميلي',
            icon: 'fas fa-seedling'
        },
        {
            id: 47,
            title: 'اللياقة البدنية',
            author: 'خالد المدني',
            price: '43 ريال',
            rating: 4.6,
            reviews: 167,
            description: 'برامج تمارين وتغذية للحصول على لياقة بدنية مثالية',
            icon: 'fas fa-dumbbell'
        },
        {
            id: 48,
            title: 'طب الأطفال',
            author: 'فاطمة الزهراء',
            price: '56 ريال',
            rating: 4.8,
            reviews: 213,
            description: 'دليل شامل لصحة ورعاية الأطفال',
            icon: 'fas fa-baby'
        }
    ]
};

// Global Variables
let currentCategory = null;
let cartItems = [];
let currentView = 'categories';

// DOM Elements
const categoriesGrid = document.getElementById('categoriesGrid');
const booksCollection = document.getElementById('booksCollection');
const booksGrid = document.getElementById('booksGrid');
const collectionTitle = document.getElementById('collectionTitle');
const backBtn = document.getElementById('backBtn');
const bookModal = document.getElementById('bookModal');
const modalClose = document.getElementById('modalClose');
const bookDetails = document.getElementById('bookDetails');
const cartCount = document.querySelector('.cart-count');
const categoriesSection = document.getElementById('categories');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    setupEventListeners();
    updateCartCount();
});

// Render book categories
function renderCategories() {
    categoriesGrid.innerHTML = '';
    
    bookCategories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card fade-in-up';
        categoryCard.style.animationDelay = `${index * 0.1}s`;
        
        categoryCard.innerHTML = `
            <i class="${category.icon} category-icon"></i>
            <h3 class="category-title">${category.title}</h3>
            <p class="category-description">${category.description}</p>
            <p class="category-count">${category.count} كتاب</p>
        `;
        
        categoryCard.addEventListener('click', () => showBooksCollection(category));
        categoriesGrid.appendChild(categoryCard);
    });
}

// Show books collection for a specific category
function showBooksCollection(category) {
    currentCategory = category;
    currentView = 'books';
    
    // Hide categories section
    categoriesSection.classList.add('hidden');
    
    // Show books collection
    booksCollection.classList.remove('hidden');
    
    // Update collection title
    collectionTitle.textContent = category.title;
    
    // Render books
    renderBooks(category.id);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render books for a specific category
function renderBooks(categoryId) {
    const books = booksData[categoryId] || [];
    booksGrid.innerHTML = '';
    
    books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card fade-in-up';
        bookCard.style.animationDelay = `${index * 0.1}s`;
        
        const stars = generateStars(book.rating);
        
        bookCard.innerHTML = `
            <div class="book-cover">
                <i class="${book.icon}"></i>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">بقلم: ${book.author}</p>
                <div class="book-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">(${book.reviews} تقييم)</span>
                </div>
                <p class="book-price">${book.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${book.id})">
                    <i class="fas fa-cart-plus"></i>
                    إضافة للسلة
                </button>
            </div>
        `;
        
        bookCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                showBookDetails(book);
            }
        });
        
        booksGrid.appendChild(bookCard);
    });
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Show book details in modal
function showBookDetails(book) {
    const stars = generateStars(book.rating);
    
    bookDetails.innerHTML = `
        <div style="padding: 2rem;">
            <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
                <div class="book-cover" style="min-width: 200px; height: 300px; flex-shrink: 0;">
                    <i class="${book.icon}"></i>
                </div>
                <div style="flex: 1;">
                    <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #ffd700;">${book.title}</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 1rem; opacity: 0.9;">بقلم: ${book.author}</p>
                    <div class="book-rating" style="margin-bottom: 1rem;">
                        <div class="stars">${stars}</div>
                        <span class="rating-text">${book.rating} (${book.reviews} تقييم)</span>
                    </div>
                    <p style="font-size: 2rem; font-weight: 700; color: #ffd700; margin-bottom: 1rem;">${book.price}</p>
                    <p style="line-height: 1.8; margin-bottom: 2rem; opacity: 0.9;">${book.description}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${book.id})" style="width: auto; padding: 1rem 2rem;">
                        <i class="fas fa-cart-plus"></i>
                        إضافة للسلة
                    </button>
                </div>
            </div>
        </div>
    `;
    
    bookModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Add book to cart
function addToCart(bookId) {
    // Find the book in all categories
    let book = null;
    for (const categoryBooks of Object.values(booksData)) {
        book = categoryBooks.find(b => b.id === bookId);
        if (book) break;
    }
    
    if (book) {
        const existingItem = cartItems.find(item => item.id === bookId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ ...book, quantity: 1 });
        }
        
        updateCartCount();
        showNotification(`تم إضافة "${book.title}" إلى السلة`);
    }
}

// Update cart count display
function updateCartCount() {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(255, 215, 0, 0.9);
        color: #333;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Back button
    backBtn.addEventListener('click', () => {
        currentView = 'categories';
        booksCollection.classList.add('hidden');
        categoriesSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Modal close
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    bookModal.addEventListener('click', (e) => {
        if (e.target === bookModal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bookModal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Cart button
    document.querySelector('.cart-btn').addEventListener('click', () => {
        showNotification('عذراً، صفحة السلة قيد التطوير');
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// Handle search
function handleSearch() {
    const searchTerm = document.querySelector('.search-box input').value.trim();
    if (searchTerm) {
        showNotification(`البحث عن: "${searchTerm}" - قيد التطوير`);
    }
}

// Close modal
function closeModal() {
    bookModal.classList.remove('show');
    document.body.style.overflow = '';
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.15)';
        header.style.backdropFilter = 'blur(25px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        header.style.backdropFilter = 'blur(20px)';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

// Initialize body styles
document.body.style.cssText += `
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
`;

console.log('مكتبة الكنوز - متجر الكتب الإلكتروني جاهز للاستخدام!');