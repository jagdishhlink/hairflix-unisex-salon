"use client";


import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock, Mail, Scissors, Palette, Sparkles, Crown, Star } from 'lucide-react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const salonInfo = {
    name: "HairFlix Unisex Salon",
    address: "First Floor 108, Silver Oak College Of Engineering And Technology Class Room, Rudram SkyVue, University Road, opposite Lambda Research, Gota, Ahmedabad, Gujarat 382481",
    phone: "093768 07777",
    primaryColor: "#be185d"
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Precision Cuts & Styling", icon: Scissors },
    { name: "Color Artistry", icon: Palette },
    { name: "Hair Treatments", icon: Sparkles },
    { name: "Bridal & Special Occasions", icon: Crown }
  ];

  const storyPoints = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Started with a vision to transform beauty experiences in Ahmedabad",
      image: "/api/placeholder/300/200"
    },
    {
      year: "2018",
      title: "Excellence Recognition",
      description: "Awarded Best Unisex Salon for innovative styling techniques",
      image: "/api/placeholder/300/200"
    },
    {
      year: "2020",
      title: "Premium Services",
      description: "Expanded to offer luxury bridal packages and color artistry",
      image: "/api/placeholder/300/200"
    },
    {
      year: "2024",
      title: "Modern Innovation",
      description: "Embracing latest trends while maintaining our signature touch",
      image: "/api/placeholder/300/200"
    }
  ];

  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Senior Stylist & Color Expert",
      experience: "8+ years",
      image: "/api/placeholder/250/300"
    },
    {
      name: "Raj Patel",
      role: "Hair Treatment Specialist",
      experience: "6+ years", 
      image: "/api/placeholder/250/300"
    },
    {
      name: "Meera Singh",
      role: "Bridal & Makeup Artist",
      experience: "5+ years",
      image: "/api/placeholder/250/300"
    }
  ];

  return (
    <div style={{ '--color-primary': salonInfo.primaryColor, '--color-bg': '#fdf2f8' }} className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-[var(--color-primary)]" />
              <span className="text-xl font-bold text-gray-900">{salonInfo.name}</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${salonInfo.phone}`}
                className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Book Now
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${salonInfo.phone}`}
                className="block w-full text-center bg-[var(--color-primary)] text-white px-3 py-2 rounded-lg mt-2"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-[var(--color-primary)] to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Crafting Beauty Stories Since Day One
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
          >
            Your Style Story Begins at HairFlix
          </motion.p>
        </div>
      </section>

      {/* Our Story Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At HairFlix Unisex Salon, we believe that every person has a unique beauty story waiting to be told. 
              Since our inception, we've been dedicated to helping our clients discover and express their individual style 
              through expert hair care, innovative treatments, and personalized service that goes beyond expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[var(--color-bg)] rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Located in the heart of Ahmedabad's Gota area, HairFlix has become more than just a salon – 
              we're a destination where artistry meets expertise. Our team of skilled professionals combines 
              years of experience with the latest trends and techniques to deliver results that not only 
              look amazing but make you feel confident and beautiful.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From precision cuts and vibrant color artistry to rejuvenating treatments and stunning bridal 
              transformations, we approach each service as an opportunity to create something extraordinary. 
              Your hair is our canvas, and your satisfaction is our masterpiece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600">Milestones that shaped our story</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {point.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Artists</h2>
            <p className="text-lg text-gray-600">Skilled professionals dedicated to your beauty journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-lg text-gray-600">Comprehensive beauty services tailored to you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-[var(--color-primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Beauty Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied clients who trust HairFlix for their beauty needs
            </p>
            <a
              href={`tel:${salonInfo.phone}`}
              className="inline-flex items-center bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Phone className="h-5 w-5 mr-2" />
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Scissors className="h-8 w-8 text-[var(--color-primary)]" />
                <span className="text-xl font-bold">{salonInfo.name}</span>
              </div>
              <p className="text-gray-400 mb-4">
                Crafting beauty stories with precision, artistry, and care since day one.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <span>Premium Unisex Salon</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{salonInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[var(--color-primary)]" />
                  <a href={`tel:${salonInfo.phone}`} className="text-gray-400 hover:text-white transition-colors">
                    {salonInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-[var(--color-primary)]" />
                  <span className="text-gray-400">Open Daily 10 AM - 8 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {salonInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}