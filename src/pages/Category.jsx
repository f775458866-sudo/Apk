import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingCart, Eye, Filter, Search, Grid, List } from 'lucide-react';
import { getBooksByCategory, getCategoryById } from '../data/books';
import { useCart } from '../context/CartContext';

const Category = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    const categoryData = getCategoryById(categoryId);
    const categoryBooks = getBooksByCategory(categoryId);
    setCategory(categoryData);
    setBooks(categoryBooks);
  }, [categoryId]);

  const filteredBooks = books
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => book.price >= priceRange.min && book.price <= priceRange.max)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'title':
        default:
          return a.title.localeCompare(b.title, 'ar');
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            العودة للرئيسية
          </Link>
          
          <div className="text-center">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              {category.description}
            </p>
            <div className="text-white/60">
              {filteredBooks.length} كتاب متوفر
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث في الكتب..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full glass-input pr-10"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass-input"
            >
              <option value="title">ترتيب حسب العنوان</option>
              <option value="price-low">السعر: من الأقل للأعلى</option>
              <option value="price-high">السعر: من الأعلى للأقل</option>
              <option value="rating">التقييم</option>
              <option value="reviews">عدد التقييمات</option>
            </select>

            {/* Price Range */}
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="من"
                value={priceRange.min}
                onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                className="glass-input w-20 text-center"
              />
              <span className="text-white self-center">-</span>
              <input
                type="number"
                placeholder="إلى"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                className="glass-input w-20 text-center"
              />
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-accent text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-accent text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Books Grid/List */}
        {filteredBooks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-white mb-4">لا توجد كتب</h3>
            <p className="text-white/70 mb-6">
              لم نتمكن من العثور على كتب تطابق معايير البحث الخاصة بك
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceRange({ min: 0, max: 1000 });
              }}
              className="glass-button"
            >
              إعادة تعيين الفلاتر
            </button>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
            }
          >
            {filteredBooks.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={viewMode === 'grid' ? 'group' : 'glass-card p-6'}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="book-card h-full flex flex-col">
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <Link
                            to={`/book/${book.id}`}
                            className="flex-1 bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200 text-sm"
                          >
                            <Eye className="w-4 h-4 ml-1" />
                            عرض
                          </Link>
                          <button
                            onClick={() => addToCart(book)}
                            className="bg-accent text-white p-2 rounded-lg hover:bg-accent-dark transition-colors duration-200"
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-white/70 mb-3 text-sm">
                        {book.author}
                      </p>
                      <p className="text-white/80 mb-4 text-sm line-clamp-2 flex-1">
                        {book.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{book.rating}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold">
                            {book.price.toFixed(2)} د.ك
                          </div>
                          {book.originalPrice > book.price && (
                            <div className="text-white/60 text-sm line-through">
                              {book.originalPrice.toFixed(2)} د.ك
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex gap-6">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-24 h-32 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
                      <p className="text-white/70 mb-2">{book.author}</p>
                      <p className="text-white/80 mb-4 line-clamp-2">{book.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{book.rating}</span>
                            <span className="text-white/60">({book.reviews})</span>
                          </div>
                          <span className="text-white/60">{book.pages} صفحة</span>
                        </div>
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <div className="text-right">
                            <div className="text-white font-bold text-lg">
                              {book.price.toFixed(2)} د.ك
                            </div>
                            {book.originalPrice > book.price && (
                              <div className="text-white/60 text-sm line-through">
                                {book.originalPrice.toFixed(2)} د.ك
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Link
                              to={`/book/${book.id}`}
                              className="glass-button px-4 py-2 text-sm"
                            >
                              <Eye className="w-4 h-4 ml-1" />
                              عرض التفاصيل
                            </Link>
                            <button
                              onClick={() => addToCart(book)}
                              className="bg-accent text-white px-4 py-2 rounded-xl hover:bg-accent-dark transition-colors duration-200 text-sm"
                            >
                              <ShoppingCart className="w-4 h-4 ml-1" />
                              إضافة للسلة
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Category;