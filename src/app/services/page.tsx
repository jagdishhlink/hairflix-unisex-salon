"use client";


import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { 
  Menu, 
  X, 
  Scissors, 
  Palette, 
  Sparkles, 
  Crown, 
  Phone, 
  MapPin, 
  Clock, 
  Star,
  ChevronRight,
  Heart,
  Users,
  Award
} from 'lucide-react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    {
      icon: Scissors,
      title: "Precision Cuts & Styling",
      description: "Expert haircuts tailored to your face shape and lifestyle. From classic to contemporary, we create the perfect look for you.",
      features: ["Consultation included", "Style maintenance tips", "Face shape analysis", "Personalized recommendations"],
      price: "Starting from ₹500"
    },
    {
      icon: Palette,
      title: "Color Artistry",
      description: "Transform your look with our professional coloring services. From subtle highlights to bold transformations.",
      features: ["Color consultation", "Premium products", "Damage-free techniques", "Color maintenance guide"],
      price: "Starting from ₹1500"
    },
    {
      icon: Sparkles,
      title: "Hair Treatments",
      description: "Revitalize and restore your hair with our nourishing treatments designed for all hair types and concerns.",
      features: ["Deep conditioning", "Scalp treatments", "Protein therapy", "Keratin smoothing"],
      price: "Starting from ₹800"
    },
    {
      icon: Crown,
      title: "Bridal & Special Occasions",
      description: "Make your special day unforgettable with our elegant bridal and event styling services.",
      features: ["Trial sessions", "On-location service", "Complete styling", "Photography ready"],
      price: "Starting from ₹2000"
    }
  ];

  const additionalServices = [
    { name: "Beard Trimming & Styling", price: "₹300" },
    { name: "Eyebrow Threading", price: "₹150" },
    { name: "Hair Wash & Blow Dry", price: "₹400" },
    { name: "Scalp Massage", price: "₹250" },
    { name: "Hair Straightening", price: "₹2500" },
    { name: "Hair Extensions", price: "₹3000" }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Stylists",
      description: "Our team consists of certified professionals with years of experience in the latest trends and techniques."
    },
    {
      icon: Heart,
      title: "Premium Products",
      description: "We use only the finest quality products from renowned brands to ensure the best results for your hair."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Every client receives individual attention and customized treatments based on their unique needs and preferences."
    }
  ];

  return (
    <div style={{ '--color-primary': '#be185d', '--color-bg': '#fdf2f8' }} className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-[var(--color-primary)]" />
              <span className="font-bold text-xl text-gray-900">HairFlix</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-[var(--color-primary)] transition-colors ${
                    item.href === '/services' ? 'text-[var(--color-primary)] font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="tel:09376807777"
                className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-gray-700 hover:text-[var(--color-primary)] transition-colors ${
                    item.href === '/services' ? 'text-[var(--color-primary)] font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="tel:09376807777"
                className="block w-full bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-center mt-4"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[var(--color-bg)] via-pink-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Complete
                <span className="text-[var(--color-primary)] block">Style Journey</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive range of professional hair and beauty services designed to bring out your best self
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a 
                  href="tel:09376807777"
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-2 text-lg font-medium"
                >
                  <Phone className="h-5 w-5" />
                  <span>Book Your Appointment</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>093768 07777</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience excellence in every service with our skilled professionals and premium products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--color-primary)] text-white p-3 rounded-xl mr-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-[var(--color-primary)] font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ChevronRight className="h-4 w-4 text-[var(--color-primary)] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete your look with our range of complementary services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 text-lg">{service.name}</h3>
                  <span className="text-[var(--color-primary)] font-bold text-lg">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HairFlix?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your style story begins at HairFlix with our commitment to excellence and personalized service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-[var(--color-bg)] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-10 w-10 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--color-primary)] to-pink-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Book your appointment today and let our expert stylists create the perfect look for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:09376807777"
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 text-lg font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now - 093768 07777</span>
              </a>
              <div className="flex items-center space-x-2 text-pink-100">
                <Clock className="h-4 w-4" />
                <span>Open 7 days a week</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-8 w-8 text-[var(--color-primary)]" />
                <span className="font-bold text-xl">HairFlix Unisex Salon</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your premier destination for professional hair and beauty services in Ahmedabad.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>093768 07777</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Visit Us</h3>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p>
                  First Floor 108, Silver Oak College Of Engineering And Technology Class Room, 
                  Rudram SkyVue, University Road, opposite Lambda Research, 
                  Gota, Ahmedabad, Gujarat 382481
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HairFlix Unisex Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}