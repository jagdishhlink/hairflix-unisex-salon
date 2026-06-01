"use client";


import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Star, Scissors, Palette, Sparkles, Crown, Phone, MapPin, Clock, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: "Precision Cuts & Styling",
    description: "Expert cuts tailored to your face shape and lifestyle"
  },
  {
    icon: Palette,
    title: "Color Artistry",
    description: "Transform your look with our professional coloring services"
  },
  {
    icon: Sparkles,
    title: "Hair Treatments",
    description: "Nourishing treatments for healthy, beautiful hair"
  },
  {
    icon: Crown,
    title: "Bridal & Special Occasions",
    description: "Make your special day unforgettable with stunning styles"
  }
];

const galleryImages = [
  "/api/placeholder/300/300",
  "/api/placeholder/300/300", 
  "/api/placeholder/300/300",
  "/api/placeholder/300/300",
  "/api/placeholder/300/300",
  "/api/placeholder/300/300"
];

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Amazing service! The stylists really understand what looks best on you.",
    rating: 5
  },
  {
    name: "Rahul Patel",
    text: "Professional team and great atmosphere. Highly recommended!",
    rating: 5
  },
  {
    name: "Neha Singh",
    text: "My go-to salon for all occasions. They never disappoint!",
    rating: 5
  }
];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{'--color-primary': '#be185d', '--color-bg': '#fdf2f8'}}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">
              HairFlix
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Services</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">About</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">Services</Link>
              <Link href="/gallery" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">Gallery</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] to-white flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">Trusted by 500+ clients</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Your Style Story Begins at{" "}
                <span className="text-[var(--color-primary)]">HairFlix</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 max-w-lg"
              >
                Experience premium hair care and styling at Ahmedabad's premier unisex salon. Where every cut tells a story and every style makes a statement.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                  Book Your Appointment
                </button>
                <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  View Gallery
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)] to-pink-700 rounded-2xl overflow-hidden">
                <img
                  src="/api/placeholder/600/600"
                  alt="HairFlix Salon"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From precision cuts to stunning color transformations, we offer comprehensive hair care services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--color-bg)] p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-lg text-gray-600">
              See the transformations that speak for themselves
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from our satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--color-bg)] p-8 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for Your Hair Transformation?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Book your appointment today and let our expert stylists create the perfect look for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Your Appointment
              </button>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-semibold">093768 07777</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">HairFlix</h3>
              <p className="text-gray-400 mb-6">
                Your premier destination for professional hair care and styling in Ahmedabad.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <p className="text-gray-400">
                    First Floor 108, Silver Oak College Of Engineering And Technology Class Room, 
                    Rudram SkyVue, University Road, opposite Lambda Research, Gota, Ahmedabad, Gujarat 382481
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                  <p className="text-gray-400">093768 07777</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  <p className="text-gray-400">Mon-Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-[var(--color-primary)] transition-colors">About Us</Link>
                <Link href="/services" className="block text-gray-400 hover:text-[var(--color-primary)] transition-colors">Services</Link>
                <Link href="/gallery" className="block text-gray-400 hover:text-[var(--color-primary)] transition-colors">Gallery</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-[var(--color-primary)] transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 HairFlix Unisex Salon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}