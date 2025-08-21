import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categories } from '../data/books';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent-dark rounded-xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
              📚
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">مكتبة الكتب العربية</h1>
              <p className="text-xs text-white/70">Arabic Bookstore</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link
              to="/"
              className={`text-white hover:text-accent transition-colors duration-300 ${
                isActive('/') ? 'text-accent font-semibold' : ''
              }`}
            >
              الرئيسية
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-accent transition-colors duration-300 flex items-center space-x-2 space-x-reverse">
                <span>التصنيفات</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-64 glass-card backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-3 text-center">تصنيفات الكتب</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      >
                        <span className="text-2xl">{category.icon}</span>
                        <div className="text-right">
                          <div className="text-white font-medium">{category.name}</div>
                          <div className="text-xs text-white/70">{category.nameEn}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              من نحن
            </Link>
            
            <Link
              to="/contact"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              اتصل بنا
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Search */}
            <button
              onClick={toggleSearch}
              className="p-2 text-white hover:text-accent transition-colors duration-300"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button className="p-2 text-white hover:text-accent transition-colors duration-300">
              <Heart className="w-5 h-5" />
            </button>

            {/* User */}
            <button className="p-2 text-white hover:text-accent transition-colors duration-300">
              <User className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-white hover:text-accent transition-colors duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-white hover:text-accent transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن كتاب أو مؤلف..."
                className="w-full glass-input pr-12 pl-4"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card backdrop-blur-xl border-t border-white/20">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/"
              className={`block text-white hover:text-accent transition-colors duration-300 ${
                isActive('/') ? 'text-accent font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            
            <div className="space-y-2">
              <div className="text-white font-semibold mb-3">التصنيفات</div>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-white">{category.name}</span>
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              className="block text-white hover:text-accent transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </Link>
            
            <Link
              to="/contact"
              className="block text-white hover:text-accent transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;