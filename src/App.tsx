import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, CheckCircle, Star, Users, Shield, Leaf, Clock, Home, Building, Sparkles, Camera, X, Calendar, User, MessageSquare } from 'lucide-react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  propertyType: string;
  rooms: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    propertyType: '',
    rooms: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowBookingModal(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        propertyType: '',
        rooms: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    }, 3000);
  };

  const openBookingModal = () => {
    setShowBookingModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Menders</h1>
                <p className="text-sm text-gray-600">Cleaning Services</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button 
                onClick={openBookingModal}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Free Clean
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Fixing Your Space.<br />
              <span className="text-blue-600">Refreshing Your World.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We don't just clean, we mend. Professional cleaning services in Abuja and Lagos 
              that bring comfort, hygiene, and shine back to your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openBookingModal}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                Get Free Mini Clean
              </button>
              <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Menders</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Whether it's your home, office, event venue, or post-construction site, our trained teams 
              in Abuja and Lagos are ready to deliver spotless results with a professional touch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dual-City Advantage</h3>
              <p className="text-gray-600">Operating in both Abuja and Lagos with consistent service quality</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Teams</h3>
              <p className="text-gray-600">Trained on-demand cleaners coordinated by experienced local managers</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Hourly, per-room, or square footage plans with no hidden fees</p>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
              <Leaf className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable cleaning options for environmentally conscious clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive cleaning solutions tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Home className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Home Cleaning</h3>
              <p className="text-gray-600 mb-4">Regular, deep, and move-in/move-out cleaning services to keep your home spotless and comfortable.</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Weekly/Monthly schedules</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Deep cleaning packages</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Move-in/out cleaning</li>
              </ul>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Starting from:</p>
                <p>₦15,000 - ₦35,000 per session</p>
                <p className="text-xs mt-1">*Pricing varies by room count and service type</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Building className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Office & Boutique Cleaning</h3>
              <p className="text-gray-600 mb-4">Keep your workspace fresh, neat, and client-ready with our professional business cleaning services.</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Daily office maintenance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Boutique deep cleaning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />After-hours service</li>
              </ul>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Starting from:</p>
                <p>₦25,000 - ₦75,000 per session</p>
                <p className="text-xs mt-1">*Pricing based on square footage and frequency</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Sparkles className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Event & After-Party Cleaning</h3>
              <p className="text-gray-600 mb-4">Before, during, or after your event, we've got it covered with comprehensive event cleaning services.</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Pre-event preparation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />During event maintenance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Complete post-party cleanup</li>
              </ul>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Starting from:</p>
                <p>₦40,000 - ₦150,000 per event</p>
                <p className="text-xs mt-1">*Pricing depends on event size and duration</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Post-Construction Cleaning</h3>
              <p className="text-gray-600 mb-4">We'll take care of the construction mess so you can enjoy your new space immediately.</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Dust and debris removal</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Final polish cleaning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Ready-to-move-in service</li>
              </ul>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Starting from:</p>
                <p>₦50,000 - ₦200,000 per project</p>
                <p className="text-xs mt-1">*Pricing based on construction scope and area</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">Need something custom? Let's talk.</p>
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Free Mini Clean Section */}
      <section id="free-clean" className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Get a Free Mini Clean!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Launching in Abuja and Lagos? We're offering free mini cleaning sessions (1–2 rooms or 45 minutes) 
              to help you experience our magic firsthand.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-300" />
                <span className="text-lg">Limited slots weekly</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-300" />
                <span className="text-lg">Only for new clients</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Camera className="h-8 w-8 text-green-300" />
                <span className="text-lg">Before & after photos</span>
              </div>
            </div>
            
            <button 
              onClick={openBookingModal}
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book My Free Clean
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Clients Are Saying</h2>
            <p className="text-xl text-gray-600">Real experiences from our satisfied customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-lg">
                "The Menders team transformed my apartment after a party weekend. Super professional!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Amanda</p>
                  <p className="text-gray-600">Abuja</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-lg">
                "Post-construction dust was gone in no time. Highly recommend."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  T
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Tunde</p>
                  <p className="text-gray-600">Lekki</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-lg">
                "They cleaned our office weekly for 6 months. Always punctual and thorough."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah</p>
                  <p className="text-gray-600">Victoria Island</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Are you a property manager, event planner, or real estate agent? 
              Let's collaborate. We offer exclusive rates and bundle deals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Managers</h3>
                <p className="text-gray-600">Bulk cleaning packages for multiple properties</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Sparkles className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Planners</h3>
                <p className="text-gray-600">Comprehensive event cleaning partnerships</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Home className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Estate Agents</h3>
                <p className="text-gray-600">Move-in ready cleaning for property sales</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office Locations</h3>
                    <p className="text-gray-300">Abuja Office – Jikwoyi, FCT</p>
                    <p className="text-gray-300">Lagos Office – Coming Soon</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-300">Call/WhatsApp: 080X XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">hello@menderscleaning.ng</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-pink-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                    <p className="text-gray-300">@menderscleaning</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Whether you need a one-time deep clean or regular maintenance, 
                  we're here to help. Contact us today for a free quote!
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={openBookingModal}
                    className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
                  >
                    Book Free Mini Clean
                  </button>
                  <a href="mailto:hello@menderscleaning.ng" className="block w-full border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg text-center font-semibold hover:bg-blue-400 hover:text-white transition-colors">
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold">Menders Cleaning Services</h3>
                <p className="text-gray-400">We fix your space—so you can focus on what matters.</p>
              </div>
            </div>
            <p className="text-gray-400 mt-8">
              © 2024 Menders Cleaning Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-8 w-8 text-green-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Book Your Free Mini Clean</h2>
                    <p className="text-gray-600">1-2 rooms or 45 minutes • New clients only</p>
                  </div>
                </div>
                <button 
                  onClick={closeBookingModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {submitSuccess ? (
              <div className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Submitted!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for booking with Menders! We'll contact you within 24 hours to confirm your free mini clean appointment.
                </p>
                <p className="text-sm text-gray-500">
                  Don't forget to follow us on Instagram @menderscleaning for before & after photos!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="080X XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      City *
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select your city</option>
                      <option value="abuja">Abuja</option>
                      <option value="lagos">Lagos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Home className="h-4 w-4 inline mr-1" />
                    Property Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="h-4 w-4 inline mr-1" />
                      Property Type *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="office">Office</option>
                      <option value="boutique">Boutique</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rooms to Clean *
                    </label>
                    <select
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select rooms</option>
                      <option value="1">1 Room</option>
                      <option value="2">2 Rooms</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="h-4 w-4 inline mr-1" />
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any specific areas you'd like us to focus on or special instructions..."
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Free Mini Clean Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Professional cleaning of 1-2 rooms (your choice)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Before & after photos for our Instagram</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Free consultation for future cleaning needs</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />45-minute time limit</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="instagram-follow"
                    required
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="instagram-follow" className="text-sm text-gray-700">
                    I agree to follow @menderscleaning on Instagram and allow before/after photos *
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={closeBookingModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Free Clean'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;