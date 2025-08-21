import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, BookOpen, User, Calendar, Hash, Globe, Package } from 'lucide-react';
import { getBookById } from '../data/books';
import { useCart } from '../context/CartContext';

const BookDetail = () => {
  const { bookId } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const bookData = getBookById(bookId);
    setBook(bookData);
  }, [bookId]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(book);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? 'text-yellow-400 fill-current' : 'text-white/30'
          }`}
        />
      );
    }
    return stars;
  };

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to={`/category/${book.category}`}
            className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            العودة للتصنيف
          </Link>
        </motion.div>

        {/* Book Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="glass-card p-6">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-lg backdrop-blur-sm transition-colors duration-200 ${
                      isWishlisted
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-colors duration-200">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="number"
                    min="1"
                    max={book.stockCount}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="glass-input w-20 text-center"
                  />
                  <button
                    onClick={handleAddToCart}
                    disabled={!book.inStock}
                    className="flex-1 glass-button bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-5 h-5 ml-2" />
                    إضافة للسلة
                  </button>
                </div>
                
                {!book.inStock && (
                  <div className="text-center text-red-400 bg-red-400/10 p-3 rounded-lg">
                    نفذت الكمية
                  </div>
                )}
                
                <div className="text-center text-white/60 text-sm">
                  متوفر: {book.stockCount} نسخة
                </div>
              </div>
            </div>
          </motion.div>

          {/* Book Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                  {book.title}
                </h1>
                <p className="text-2xl text-white/70 mb-4">
                  {book.author}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    {renderStars(book.rating)}
                    <span className="text-white font-semibold">{book.rating}</span>
                  </div>
                  <span className="text-white/60">({book.reviews} تقييم)</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-white">
                      {book.price.toFixed(2)} د.ك
                    </span>
                    {book.originalPrice > book.price && (
                      <span className="text-xl text-white/60 line-through">
                        {book.originalPrice.toFixed(2)} د.ك
                      </span>
                    )}
                    {book.originalPrice > book.price && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        خصم {((book.originalPrice - book.price) / book.originalPrice * 100).toFixed(0)}%
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Book Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-white/80">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span>{book.pages} صفحة</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Globe className="w-5 h-5 text-accent" />
                  <span>{book.language}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <User className="w-5 h-5 text-accent" />
                  <span>{book.publisher}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>{book.publishYear}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Hash className="w-5 h-5 text-accent" />
                  <span>{book.isbn}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Package className="w-5 h-5 text-accent" />
                  <span className={book.inStock ? 'text-green-400' : 'text-red-400'}>
                    {book.inStock ? 'متوفر' : 'غير متوفر'}
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-white/90 text-lg leading-relaxed">
                {book.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-8"
        >
          {/* Tab Navigation */}
          <div className="flex border-b border-white/20 mb-8">
            {[
              { id: 'description', label: 'الوصف', icon: BookOpen },
              { id: 'reviews', label: 'التقييمات', icon: Star },
              { id: 'details', label: 'تفاصيل إضافية', icon: Hash }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'description' && (
              <div className="text-white/90 leading-relaxed text-lg">
                <p className="mb-6">{book.longDescription}</p>
                <div className="bg-white/5 p-6 rounded-xl">
                  <h4 className="text-white font-semibold mb-3 text-lg">مميزات الكتاب:</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>محتوى غني ومفيد</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>طباعة عالية الجودة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>غلاف فني متين</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>شحن سريع وآمن</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">⭐</div>
                  <div className="text-3xl font-bold text-white mb-2">{book.rating}/5</div>
                  <div className="text-white/70 mb-4">بناءً على {book.reviews} تقييم</div>
                  <div className="flex justify-center gap-1">
                    {renderStars(book.rating)}
                  </div>
                </div>
                
                <div className="text-center text-white/60">
                  <p>لا توجد تقييمات مفصلة متاحة حالياً</p>
                  <p className="text-sm mt-2">كن أول من يقيّم هذا الكتاب!</p>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-lg mb-4">معلومات النشر</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/70">الناشر:</span>
                      <span className="text-white">{book.publisher}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">سنة النشر:</span>
                      <span className="text-white">{book.publishYear}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">رقم ISBN:</span>
                      <span className="text-white font-mono">{book.isbn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">عدد الصفحات:</span>
                      <span className="text-white">{book.pages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">اللغة:</span>
                      <span className="text-white">{book.language}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-lg mb-4">معلومات التخزين</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/70">الحالة:</span>
                      <span className={book.inStock ? 'text-green-400' : 'text-red-400'}>
                        {book.inStock ? 'متوفر' : 'غير متوفر'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">الكمية المتوفرة:</span>
                      <span className="text-white">{book.stockCount} نسخة</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">نوع الغلاف:</span>
                      <span className="text-white">غلاف فني</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">الأبعاد:</span>
                      <span className="text-white">24 × 17 سم</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">الوزن:</span>
                      <span className="text-white">800 جرام</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Books Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">قد يعجبك أيضاً</h3>
          <p className="text-white/70 mb-6">
            اكتشف المزيد من الكتب المميزة في نفس التصنيف
          </p>
          <Link
            to={`/category/${book.category}`}
            className="glass-button inline-flex items-center"
          >
            <span>استكشف المزيد</span>
            <ArrowLeft className="mr-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BookDetail;