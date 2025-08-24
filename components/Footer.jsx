import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#2563EB' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Your Company</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Building innovative solutions that empower businesses and individuals to achieve their goals in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-200 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  123 Business Ave, Suite 100<br />
                  City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-200 flex-shrink-0" />
                <span className="text-blue-100 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-200 flex-shrink-0" />
                <span className="text-blue-100 text-sm">hello@company.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-blue-400">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-blue-100 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-white border border-blue-300 bg-blue-700 text-sm focus:outline-none focus:ring-2 focus:ring-white placeholder-blue-200"
              />
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
                Terms
              </Link>
              <Link href="/cookies" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}