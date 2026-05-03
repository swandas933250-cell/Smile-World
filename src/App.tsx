/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Smile,
  Heart,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ darkMode }: { darkMode: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? (darkMode ? 'bg-slate-900 shadow-xl py-3 border-b border-slate-800' : 'bg-white shadow-md py-3') : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://lh3.googleusercontent.com/d/16khQwPLVcFG8XwMkPEkN7_ratLBcZQuv" alt="Smile World Logo" className="w-10 h-10 object-contain" />
            <span className={`font-display font-bold text-lg tracking-tight ${isScrolled ? (darkMode ? 'text-amber-500' : 'text-amber-600') : (darkMode ? 'text-amber-500 backdrop-blur-sm bg-black/20 px-2 rounded' : 'text-amber-600 backdrop-blur-sm px-2 rounded')}`}>
              Smile World
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${darkMode ? 'text-slate-300 hover:text-sky-400' : 'text-slate-600 hover:text-sky-600'}`}
              >
                {link.name}
              </a>
            ))}
            


            <a
              href="#appointment"
              className="bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-sky-700 transition-all shadow-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button + Dark Mode Toggle */}
          <div className="md:hidden flex items-center gap-2">

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none p-2 rounded-lg transition-all ${darkMode ? 'text-white hover:bg-slate-800' : 'text-gray-700 hover:bg-slate-100'}`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-[60] md:hidden ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/d/16khQwPLVcFG8XwMkPEkN7_ratLBcZQuv" alt="Smile World Logo" className="w-10 h-10 object-contain" />
                  <span className={`font-display font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Smile World
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-2 rounded-lg ${darkMode ? 'text-white hover:bg-slate-800' : 'text-gray-700 hover:bg-slate-100'}`}
                >
                  <X size={28} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-2xl font-bold transition-colors ${darkMode ? 'text-slate-300 hover:text-sky-400' : 'text-slate-800 hover:text-sky-600'}`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 dark:border-slate-800">
                <a
                  href="#appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-sky-600 text-white px-5 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-sky-200 dark:shadow-none"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-sky-900 dark:bg-slate-950 pt-20 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
            alt="Dental Clinic"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-sky-300 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-4 sm:mb-6"
          >
            Modern Dentistry Clinic
          </motion.span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tight mb-6 sm:mb-8">
            Your Smile,<br />
            Our <span className="text-sky-400 dark:text-sky-300 underline decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">Priority.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-sky-100/80 dark:text-sky-200/70 mb-8 sm:mb-10 leading-relaxed max-w-lg">
            Providing advanced and gentle dental care for the whole family with state-of-the-art technology and 15+ years of expertise.
          </p>
          <div className="flex flex-col items-start sm:flex-row gap-3 sm:gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#appointment"
              className="bg-white text-sky-900 px-4 py-2 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-lg text-center shadow-xl hover:bg-sky-50 transition-all flex items-center justify-center gap-2 w-auto"
            >
              Book Now <ArrowRight size={18} className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="border border-white/30 bg-white/10 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-lg text-center hover:bg-white/20 transition-all w-auto"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?u=smile${i}`}
                alt="Patient"
                className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex text-amber-400 gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={13} fill="currentColor" />)}
            </div>
            <p className="text-xs text-sky-200/80 font-medium">Trusted by 2,000+ Patients</p>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute right-[15%] top-[20%] z-20"
      >
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/50 dark:border-slate-700 transition-colors flex items-center gap-4">
          <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
            <ShieldCheck className="text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Certified Clinic</p>
            <p className="text-sm font-bold text-gray-800 dark:text-white">ISO 9001:2015</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:block absolute right-[10%] bottom-[20%] z-20"
      >
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/50 dark:border-slate-700 transition-colors flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
            <Heart className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Patients cared for</p>
            <p className="text-sm font-bold text-gray-800 dark:text-white">10,000+ per year</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://lh3.googleusercontent.com/d/15fwUEE1WLiy5rkE6ErNwDeXva4MsFvLp"
                alt="Clinic Interior"
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-100 rounded-3xl -z-0"></div>
            
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 border border-gray-100 dark:border-slate-700 transition-colors duration-300"
              >
              <p className="text-4xl font-bold text-brand-600">15+</p>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-tighter">Years Experience</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-4 block">About Our Clinic</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              Crafting Healthy Smiles <br /> with Precision.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
              At Smile World, we believe that a healthy smile is the foundation of overall wellness. Our state-of-the-art facility is designed to provide you with the highest level of care.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "State-of-the-art dental technology",
                "Compassionate & highly skilled staff",
                "Personalized treatment plans",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-sky-50 p-1.5 rounded-lg">
                    <CheckCircle2 className="text-sky-600 w-4 h-4" />
                  </div>
                  <span className="text-slate-800 dark:text-slate-200 font-bold text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-100 dark:border-slate-800">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Mission</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Excellence in oral health care.</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Vision</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Global leader in dental innovation.</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Values</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Integrity, Care & Precision.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "আপনার হাসিকে সুস্থ রাখতে নিয়মিত চেকআপ, ক্লিনিং এবং প্রতিরোধমূলক যত্ন।",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Teeth Whitening",
      description: "আরও উজ্জ্বল ও আত্মবিশ্বাসী হাসির জন্য উন্নত পেশাদারী দাঁত সাদা করার চিকিৎসা।",
      icon: <Smile className="w-8 h-8" />,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      title: "Dental Implants",
      description: "হারানো দাঁতের জন্য আধুনিক ও টেকসই সমাধান, যা দেখতে ও ব্যবহারে প্রাকৃতিক।",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Orthodontics",
      description: "আপনার দাঁত সোজা করতে এবং কামড়ের বিন্যাস উন্নত করতে ব্রেসেস ও ক্লিয়ার অ্যালাইনার ব্যবহার করা হয়।",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Root Canal",
      description: "ক্ষতিগ্রস্ত দাঁত বাঁচাতে ও ব্যথা উপশম করতে মৃদু ও কার্যকর চিকিৎসা।",
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Cosmetic Dentistry",
      description: "আপনার নান্দনিক লক্ষ্য অনুযায়ী ভেনিয়ার, বন্ডিং এবং সম্পূর্ণ স্মাইল মেকওভার।",
      icon: <Smile className="w-8 h-8" />,
      color: "bg-brand-50 text-brand-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Core Dental Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight tracking-tight"
          >
            Comprehensive Care <br /> for Your Smile
          </motion.h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-300 dark:hover:border-sky-700 transition-all group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 transition-transform group-hover:scale-110`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-2 tracking-tight">{service.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <a href="#appointment" className="text-sky-600 dark:text-sky-400 text-xs font-bold flex items-center gap-2">
              আরও জানুন →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Doctors = () => {
  const doctors = [
    {
      name: "DR. KUNAL KUMAR GHOSH",
      specialization: "Implant Specialist",
      qualifications: "(B.D.S.,M.D.S.)",
      image: "https://lh3.googleusercontent.com/d/1qNl1FPAx5eAP94jpAQJxK0Fjp5B_KWS_",
      bio: "Dr. Kunal is a pioneer in minimally invasive dental implants, ensuring patient comfort and lifelong results."
    }
  ];

  return (
    <section id="doctors" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-brand-600 dark:text-sky-400 font-bold uppercase tracking-widest text-sm mb-4 block">Our Experts</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Specialists</h2>
        <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Our team consists of highly qualified and passionate individuals dedicated to delivering exceptional care.
        </p>
      </div>

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-12">
        {doctors.map((doctor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full aspect-portrait object-cover md:group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-900/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all shadow-md">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all shadow-md">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{doctor.name}</h3>
              <p className="text-brand-600 dark:text-sky-400 font-semibold mb-3">{doctor.specialization}</p>
              <p className="text-gray-500 dark:text-slate-500 text-sm italic mb-4">{doctor.qualifications}</p>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                {doctor.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aparna Saha",
      role: "Corporate Executive",
      quote: "The team at Smile World transformed my smile and my confidence. The process was entirely pain-free and the results are stunning!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sophia"
    },
    {
      name: "Piyali Das",
      role: "Digital Designer",
      quote: "Finally a dentist that listens! Dr. Kunal was incredible in explaining my implant procedure. Professional and modern clinic.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Anwesha Das",
      role: "College Professor",
      quote: "Great experience with my Invisalign treatment. The staff is warm and the technology they use is truly next-level.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=olivia"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-brand-600 dark:bg-slate-950 overflow-hidden text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/30 dark:bg-sky-500/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/20 dark:bg-sky-400/5 rounded-full blur-3xl -z-0"></div>

        <div className="text-center mb-16 relative z-10">
          <span className="text-brand-200 dark:text-sky-300 font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">What Our Patients Say</h2>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20 dark:border-slate-800 text-center"
            >
              <div className="flex justify-center mb-8">
                <div className="flex text-amber-400 gap-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-medium italic mb-10 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-4 border-white/50 dark:border-slate-700 mb-4 object-cover"
                  referrerPolicy="no-referrer"
                />
                <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-brand-200 dark:text-sky-300 font-semibold">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col items-center mt-12 gap-6">
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft />
              </button>
              
              <div className="flex items-center gap-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className="p-2 -m-2 group outline-none"
                    aria-label={`Go to testimonial ${idx + 1}`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-white scale-125' : 'bg-white/30 border border-white/10 group-hover:bg-white/50'}`} />
                  </button>
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20"
                aria-label="Next Testimonial"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { src: "https://lh3.googleusercontent.com/d/1Dc8ZDHHXe-yr5mM8ihG66rz8jBlBar19", title: "Modern Treatment" },
    { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop", title: "Advanced Ortho" },
    { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", title: "Dental Implants" },
    { src: "https://lh3.googleusercontent.com/d/1gfR1P3_U0fQqgnRlRSpNO5sANg81vXIM", title: "Smile Makeover" },
    { src: "https://lh3.googleusercontent.com/d/1xai7k3w_tcKeNe21EABdQ41DK5vwAC1F", title: "New Patient Smile" },
    { src: "https://lh3.googleusercontent.com/d/1spuHp97r5kyO7j9sUgkaLHyf2YzHlSaE", title: "Professional Service" }
  ];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-brand-600 dark:text-sky-400 font-bold uppercase tracking-widest text-sm mb-4 block">Our Results</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Patient Transformations</h2>
        <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
          Experience the confidence of a healthy, radiant smile. Here are some of our successful transformations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl aspect-square shadow-md"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white font-bold text-xl">{img.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-gray-50 dark:bg-slate-950 overflow-hidden relative transition-colors duration-300">
      {/* Background Graphic */}
      <div className="absolute right-0 bottom-0 opacity-10 w-1/3 h-full pointer-events-none">
        <Smile size={600} className="text-brand-600 dark:text-sky-400 transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-600 dark:text-sky-400 font-bold uppercase tracking-widest text-sm mb-4 block">Booking</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Ready for a Glowing Smile? <br /> Book Your Visit Today.
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              Experience gentle, professional dental care in a welcoming atmosphere. Fill out the form, and our team will get back to you within 24 hours to confirm your slot.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-600 dark:text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Emergency Service</h4>
                  <p className="text-gray-600 dark:text-slate-400">+91 7795381663</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-600 dark:text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Send a Message</h4>
                  <p className="text-gray-600 dark:text-slate-400">info@smileworldhabra.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 transition-colors duration-300"
          >
            <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Calendar className="text-sky-500 w-5 h-5" /> Quick Appointment
            </h3>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                <p className="text-slate-500 text-sm">We'll contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your name"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 dark:text-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400 ml-1">Phone Number</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 flex items-center pr-3 border-r border-slate-200 dark:border-slate-700">
                      <span className="text-sm font-bold text-slate-600 dark:text-slate-400">+91</span>
                    </div>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="99999 99999"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-16 pr-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 dark:text-white outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400 ml-1">Service Type</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 dark:text-white outline-none appearance-none cursor-pointer">
                    <option>General Dentistry</option>
                    <option>Teeth Whitening</option>
                    <option>Dental Implants</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase text-slate-400 ml-1">Date</label>
                    <input type="date" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-sky-500 dark:text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase text-slate-400 ml-1">Time</label>
                    <input type="time" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-sky-500 dark:text-white" />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-sky-600 text-white font-extrabold py-4 rounded-xl mt-4 hover:bg-sky-700 shadow-md shadow-sky-200 transition-all active:scale-[0.98]"
                >
                  Confirm Appointment
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4">Free consultation for new patients.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Card */}
          <div className="bg-brand-900 text-white p-12 rounded-[40px] flex flex-col justify-between items-center text-center lg:items-start lg:text-left">
            <div className="w-full">
              <h3 className="text-3xl font-bold mb-8">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5 lg:items-start">
                  <MapPin className="text-brand-300 shrink-0" />
                  <p className="text-brand-100">HABRA, NORTH 24 PARGANAS, W.B</p>
                </div>
                <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5 lg:items-start">
                  <Phone className="text-brand-300 shrink-0" />
                  <p className="text-brand-100">+91 7795381663</p>
                </div>
                <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5 lg:items-start">
                  <Mail className="text-brand-300 shrink-0" />
                  <p className="text-brand-100">info@smileworldhabra.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 w-full flex flex-col items-center lg:items-start">
              <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-brand-300">Social Connect</h4>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-900 transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-900 transition-all"><Twitter size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-900 transition-all"><Instagram size={20} /></a>
              </div>
            </div>
          </div>

          {/* Map Area (Simplified Map Placeholder) */}
          <div className="lg:col-span-2 relative h-[500px] lg:h-auto rounded-[40px] overflow-hidden group shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58852.17937510744!2d88.61869811467433!3d22.84834898145266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bc37719f9f8f%3A0xe7a50787e914098c!2sHabra%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714732000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-950 pt-20 pb-10 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src="https://lh3.googleusercontent.com/d/16khQwPLVcFG8XwMkPEkN7_ratLBcZQuv" alt="Smile World Logo" className="w-12 h-12 object-contain" />
            <span className="font-display font-bold text-2xl text-gray-900 dark:text-white tracking-tight">
              Smile World 
            </span>
          </div>
          <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm mb-8">
            Providing high-quality dental care with a personalized touch. Visit our modern clinic and start your journey to a better smile today.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex items-center justify-center text-gray-400 hover:text-brand-600 hover:shadow-md transition-all"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex items-center justify-center text-gray-400 hover:text-brand-600 hover:shadow-md transition-all"><Twitter size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex items-center justify-center text-gray-400 hover:text-brand-600 hover:shadow-md transition-all"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4 text-gray-500 dark:text-slate-400">
            <li><a href="#home" className="hover:text-brand-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-brand-600 transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-brand-600 transition-colors">Services</a></li>
            <li><a href="#appointment" className="hover:text-brand-600 transition-colors">Appointment</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Our Location</h4>
          <p className="text-gray-500 dark:text-slate-400 mb-4">HABRA, NORTH 24 PARGANAS, W.B</p>
          <p className="text-gray-500 dark:text-slate-400">+91 7795381663</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-gray-400 text-sm text-center md:text-left">
        <p>© 2024 Smile World. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          <a 
            href="https://ai.studio/apps/dec62488-73b5-4024-8008-223ee557f68f" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-600 font-medium transition-colors"
          >
            View Project in AI Studio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark bg-slate-950 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Testimonials />
        <Gallery />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
