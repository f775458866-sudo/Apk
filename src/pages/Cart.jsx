import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(bookId);
    } else {
      updateQuantity(bookId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('تم إتمام الطلب بنجاح! شكراً لك');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-8xl mb-8">🛒</div>
            <h1 className="text-4xl font-bold text-white mb-6">سلة التسوق فارغة</h1>
            <p className="text-xl text-white/80 mb-8">
              لم تقم بإضافة أي كتب إلى سلة التسوق بعد
            </p>
            <Link
              to="/"
              className="glass-button text-lg px-8 py-4 inline-flex items-center"
            >
              <ShoppingBag className="w-6 h-6 ml-2" />
              تصفح الكتب
            </Link>
          </motion.div>
        </div>
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
          transition={{ duration: 0.5 }}
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
            <h1 className="text-4xl font-bold text-white mb-4">سلة التسوق</h1>
            <p className="text-xl text-white/80">
              لديك {items.length} كتاب في السلة
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">الكتب المختارة</h2>
                <button
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 transition-colors duration-200 text-sm"
                >
                  إفراغ السلة
                </button>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="glass-card p-4 border border-white/10"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/70 mb-2">{item.author}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-white font-semibold w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-white font-bold">
                                {(item.price * item.quantity).toFixed(2)} د.ك
                              </div>
                              <div className="text-white/60 text-sm">
                                {item.price.toFixed(2)} د.ك لكل نسخة
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 transition-colors duration-200 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="glass-card p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">ملخص الطلب</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white/80">
                  <span>عدد الكتب:</span>
                  <span>{items.reduce((total, item) => total + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>المجموع الفرعي:</span>
                  <span>{getTotalPrice().toFixed(2)} د.ك</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>الشحن:</span>
                  <span className="text-green-400">مجاني</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-white font-bold text-xl">
                    <span>المجموع الكلي:</span>
                    <span>{getTotalPrice().toFixed(2)} د.ك</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full glass-button bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {isCheckingOut ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                    جاري إتمام الطلب...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <CreditCard className="w-5 h-5 ml-2" />
                    إتمام الطلب
                  </div>
                )}
              </button>

              <div className="text-center text-white/60 text-sm">
                أو
              </div>

              <Link
                to="/"
                className="w-full glass-button bg-white/10 hover:bg-white/20 mt-4 inline-block text-center"
              >
                <ShoppingBag className="w-5 h-5 ml-2 inline" />
                متابعة التسوق
              </Link>

              {/* Features */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Truck className="w-5 h-5 text-accent" />
                  <span>شحن مجاني للطلبات فوق 50 د.ك</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>ضمان استرداد الأموال خلال 30 يوم</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              معلومات إضافية
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h4 className="text-white font-semibold mb-2">شحن سريع</h4>
                <p className="text-white/70 text-sm">
                  توصيل خلال 2-3 أيام عمل
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-white font-semibold mb-2">إرجاع سهل</h4>
                <p className="text-white/70 text-sm">
                  إمكانية الإرجاع خلال 30 يوم
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💳</div>
                <h4 className="text-white font-semibold mb-2">دفع آمن</h4>
                <p className="text-white/70 text-sm">
                  حماية كاملة لبيانات الدفع
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;