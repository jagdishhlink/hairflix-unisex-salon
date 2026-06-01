"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock, Star, Scissors, Palette, Sparkles, Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Precision haircut styling",
      category: "Cuts & Styling"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Hair color transformation",
      category: "Color Artistry"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Bridal hairstyling",
      category: "Bridal & Special"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Hair treatment therapy",
      category: "Hair Treatments"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern haircut design",
      category: "Cuts & Styling"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Hair coloring process",
      category: "Color Artistry"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Salon interior view",
      category: "Salon"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Special occasion styling",
      category: "Bridal & Special"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Hair care treatment",
      category: "Hair Treatments"
    }
  ];

  const categories = ["All", "Cuts & Styling", "Color Artistry", "Hair Treatments", "Bridal & Special", "Salon"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });

  return (
    <div style={{"--color-primary": "#be185d", "--color-bg": "#ffffff"}}>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-[var(--color-primary)]" />
              <span className="font-bold text-xl text-gray-900">HairFlix</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Services</Link>
              <Link href="/gallery" className="text-[var(--color-primary)] font-semibold">Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Contact</Link>
              <a href="tel:09376807777" className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">Home</Link>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">About</Link>
                <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">Services</Link>
                <Link href="/gallery" className="block px-3 py-2 text-[var(--color-primary)] font-semibold">Gallery</Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">Contact</Link>
                <a href="tel:09376807777" className="block px-3 py-2 bg-[var(--color-primary)] text-white rounded-lg text-center">Book Now</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-[var(--color-primary)] to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Discover the artistry behind every transformation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-2 text-lg"
          >
            <Sparkles className="h-6 w-6" />
            <span>Your Style Story Begins at HairFlix</span>
            <Sparkles className="h-6 w-6" />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Showcasing Our <span className="text-[var(--color-primary)]">Masterpieces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every cut, color, and style tells a unique story of transformation and beauty
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[var(--color-primary)] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready for Your <span className="text-[var(--color-primary)]">Transformation?</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Let our expert stylists create your perfect look. Book your appointment today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:09376807777"
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  <span>Book Your Appointment</span>
                </a>
                <Link
                  href="/services"
                  className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Scissors className="h-5 w-5" />
                  <span>View Services</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-8 w-8 text-[var(--color-primary)]" />
                <span className="font-bold text-xl">HairFlix Unisex Salon</span>
              </div>
              <p className="text-gray-300 mb-4">
                Your Style Story Begins at HairFlix
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    First Floor 108, Silver Oak College Of Engineering And Technology Class Room, Rudram SkyVue, University Road, opposite Lambda Research, Gota, Ahmedabad, Gujarat 382481
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[var(--color-primary)]" />
                  <span className="text-gray-300">093768 07777</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-[var(--color-primary)]" />
                  <span className="text-gray-300">Open Daily 10 AM - 8 PM</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Scissors className="h-4 w-4 text-[var(--color-primary)]" />
                  <span>Precision Cuts & Styling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Palette className="h-4 w-4 text-[var(--color-primary)]" />
                  <span>Color Artistry</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-[var(--color-primary)]" />
                  <span>Hair Treatments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-[var(--color-primary)]" />
                  <span>Bridal & Special Occasions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HairFlix Unisex Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}