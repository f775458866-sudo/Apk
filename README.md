# مكتبة الكتب العربية | Arabic Bookstore

مكتبة كتب عربية متكاملة مع واجهة زجاجية حديثة ومتجاوبة

A comprehensive Arabic bookstore with a modern glass morphism interface and responsive design.

## ✨ المميزات | Features

### 🎨 التصميم | Design
- **واجهة زجاجية حديثة** | Modern glass morphism interface
- **تصميم متجاوب** | Fully responsive design
- **حركات سلسة** | Smooth animations with Framer Motion
- **دعم اللغة العربية** | Full Arabic language support
- **اتجاه RTL** | Right-to-left text direction

### 📚 المحتوى | Content
- **6 تصنيفات رئيسية** | 6 main book categories
- **12 كتاب عربي مميز** | 12 featured Arabic books
- **معلومات تفصيلية** | Detailed book information
- **تقييمات ومراجعات** | Ratings and reviews system

### 🛒 الوظائف | Functionality
- **سلة تسوق متكاملة** | Complete shopping cart
- **بحث وتصفية** | Search and filtering
- **عرض شبكي وقائمة** | Grid and list view modes
- **إدارة الكميات** | Quantity management
- **حفظ البيانات** | Local storage persistence

### 📱 التكنولوجيا | Technology
- **React 18** | Latest React version
- **Vite** | Fast build tool
- **Tailwind CSS** | Utility-first CSS framework
- **Framer Motion** | Animation library
- **React Router** | Client-side routing

## 🚀 التثبيت والتشغيل | Installation & Setup

### المتطلبات | Prerequisites
- Node.js 16+ 
- npm أو yarn

### خطوات التثبيت | Installation Steps

1. **استنساخ المشروع** | Clone the repository
```bash
git clone <repository-url>
cd arabic-bookstore
```

2. **تثبيت التبعيات** | Install dependencies
```bash
npm install
```

3. **تشغيل المشروع** | Run the project
```bash
npm run dev
```

4. **فتح المتصفح** | Open browser
```
http://localhost:3000
```

### أوامر إضافية | Additional Commands

```bash
# بناء المشروع للإنتاج | Build for production
npm run build

# معاينة البناء | Preview build
npm run preview
```

## 📁 هيكل المشروع | Project Structure

```
src/
├── components/          # المكونات | Components
│   └── Navbar.jsx     # شريط التنقل | Navigation bar
├── context/            # السياق | Context
│   └── CartContext.jsx # سياق سلة التسوق | Shopping cart context
├── data/               # البيانات | Data
│   └── books.js       # بيانات الكتب | Books data
├── pages/              # الصفحات | Pages
│   ├── Home.jsx       # الصفحة الرئيسية | Home page
│   ├── Category.jsx   # صفحة التصنيف | Category page
│   ├── BookDetail.jsx # تفاصيل الكتاب | Book details
│   └── Cart.jsx       # سلة التسوق | Shopping cart
├── App.jsx             # التطبيق الرئيسي | Main app
├── main.jsx            # نقطة الدخول | Entry point
└── index.css           # الأنماط الرئيسية | Main styles
```

## 🎯 التصنيفات | Categories

1. **الأدب العربي** | Arabic Literature - 📚
2. **التاريخ** | History - 🏛️
3. **الفلسفة** | Philosophy - 🤔
4. **العلوم** | Science - 🔬
5. **الدين** | Religion - 🕌
6. **الشعر** | Poetry - ✍️

## 📖 الكتب المتوفرة | Available Books

- ألف ليلة وليلة | One Thousand and One Nights
- كليلة ودمنة | Kalila and Dimna
- ديوان المتنبي | Al-Mutanabbi Diwan
- تاريخ الطبري | Tarikh al-Tabari
- إحياء علوم الدين | Revival of Religious Sciences
- تهافت الفلاسفة | The Incoherence of the Philosophers
- القانون في الطب | The Canon of Medicine
- تاريخ ابن خلدون | Ibn Khaldun History
- المنقذ من الضلال | The Deliverer from Error
- كتاب الحيوان | Book of Animals
- صحيح البخاري | Sahih al-Bukhari

## 🎨 التخصيص | Customization

### الألوان | Colors
يمكن تخصيص الألوان في ملف `tailwind.config.js`:
```javascript
colors: {
  'accent': '#6366f1',
  'accent-dark': '#4f46e5',
  'glass': 'rgba(255, 255, 255, 0.1)',
}
```

### الخطوط | Fonts
المشروع يستخدم خطوط Google Fonts:
- Cairo (العربية)
- Noto Sans Arabic

### الأنماط | Styles
جميع الأنماط مخصصة في `src/index.css` مع دعم Tailwind CSS.

## 📱 التجاوب | Responsiveness

- **Mobile First** | تصميم يبدأ من الهاتف
- **Tablet** | دعم الأجهزة اللوحية
- **Desktop** | دعم أجهزة الكمبيوتر
- **Large Screens** | دعم الشاشات الكبيرة

## 🚀 النشر | Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# رفع مجلد dist إلى Netlify
```

### GitHub Pages
```bash
npm run build
# رفع مجلد dist إلى GitHub Pages
```

## 🤝 المساهمة | Contributing

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة
3. Commit التغييرات
4. Push إلى الفرع
5. إنشاء Pull Request

## 📄 الترخيص | License

هذا المشروع مرخص تحت رخصة MIT.

## 📞 الدعم | Support

لأي استفسارات أو مشاكل:
- إنشاء Issue في GitHub
- التواصل عبر البريد الإلكتروني

## 🙏 الشكر | Acknowledgments

- React Team
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Google Fonts

---

**تم التطوير بحب ❤️ للكتب العربية**

**Developed with love ❤️ for Arabic literature**
