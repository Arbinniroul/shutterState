import React, { useState } from 'react';
import { Menu, X, Home, Building2, Users, Phone, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', icon: <Home className="w-5 h-5" />, href: '/' },
    { label: 'Properties', icon: <Building2 className="w-5 h-5" />, href: '/properties' },
    { label: 'About Us', icon: <Users className="w-5 h-5" />, href: '/about' },
    { label: 'Contact', icon: <Phone className="w-5 h-5" />, href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">ShutterState</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-indigo-700 transition-colors">
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <button className="w-full bg-indigo-600 text-white px-3 py-2 rounded-md flex items-center space-x-2 hover:bg-indigo-700 transition-colors">
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;