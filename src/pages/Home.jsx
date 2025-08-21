import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingCart, Eye } from 'lucide-react';
import { categories, books } from '../data/books';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  
  // Get featured books (first 6 books)
  const featuredBooks = books.slice(0, 6);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-dark/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              اكتشف عالم
              <span className="block bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                الكتب العربية
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              مكتبة شاملة تضم أفضل الكتب العربية في الأدب والتاريخ والفلسفة والعلوم والدين
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/category/literature"
                className="glass-button text-lg px-8 py-4 inline-flex items-center justify-center group"
              >
                <span>استكشف الكتب</span>
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="glass-button text-lg px-8 py-4 bg-white/10 hover:bg-white/20">
                تعرف علينا
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              تصنيفات الكتب
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              اختر من بين مجموعة متنوعة من التصنيفات التي تغطي جميع جوانب المعرفة العربية
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link to={`/category/${category.id}`}>
                  <div className={`category-card bg-gradient-to-br ${category.color} hover:shadow-2xl transition-all duration-500`}>
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mb-4">
                      {category.description}
                    </p>
                    <div className="text-white/70 text-sm">
                      {category.nameEn}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              كتب مميزة
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              مجموعة مختارة من أفضل الكتب العربية التي نوصي بها
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredBooks.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="book-card h-full flex flex-col">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Link
                          to={`/book/${book.id}`}
                          className="flex-1 bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        >
                          <Eye className="w-4 h-4 ml-1" />
                          عرض التفاصيل
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
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-white/70 mb-3 text-sm">
                      {book.author}
                    </p>
                    <p className="text-white/80 mb-4 text-sm line-clamp-3 flex-1">
                      {book.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{book.rating}</span>
                        <span className="text-white/60 text-sm">({book.reviews})</span>
                      </div>
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/category/literature"
              className="glass-button text-lg px-8 py-4 inline-flex items-center justify-center group"
            >
              <span>عرض جميع الكتب</span>
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '1000+', label: 'كتاب', icon: '📚' },
              { number: '50+', label: 'مؤلف', icon: '✍️' },
              { number: '6', label: 'تصنيفات', icon: '🏷️' },
              { number: '24/7', label: 'دعم', icon: '🔄' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;