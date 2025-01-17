import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PropertyCard from './components/PropertyCard';
import { Search, ArrowRight } from 'lucide-react';
import { Property } from './types';

function App() {
  // Sample featured properties
  const featuredProperties: Property[] = [
    {
      id: "1",
      title: "Modern Waterfront Villa",
      price: 1250000,
      location: {
        address: "123 Oceanview Drive",
        city: "Miami",
        state: "FL",
        zipCode: "33101"
      },
      details: {
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 3200,
        yearBuilt: 2020
      },
      description: "Stunning modern villa with direct ocean access",
      images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600"],
      features: ["Waterfront", "Pool", "Smart Home", "Wine Cellar"],
      agent: {
        name: "John Smith",
        phone: "(305) 555-0123",
        email: "john@shutterstate.com",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
      }
    },
    {
      id: "2",
      title: "Downtown Luxury Penthouse",
      price: 2100000,
      location: {
        address: "456 City Center Blvd",
        city: "Miami",
        state: "FL",
        zipCode: "33130"
      },
      details: {
        bedrooms: 3,
        bathrooms: 3.5,
        squareFeet: 2800,
        yearBuilt: 2019
      },
      description: "Exclusive penthouse with panoramic city views",
      images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600"],
      features: ["City View", "Private Elevator", "Concierge", "Gym"],
      agent: {
        name: "Sarah Johnson",
        phone: "(305) 555-0124",
        email: "sarah@shutterstate.com",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
      }
    },
    {
      id: "3",
      title: "Tropical Paradise Estate",
      price: 1750000,
      location: {
        address: "789 Palm Avenue",
        city: "Coral Gables",
        state: "FL",
        zipCode: "33134"
      },
      details: {
        bedrooms: 5,
        bathrooms: 4,
        squareFeet: 4100,
        yearBuilt: 2018
      },
      description: "Mediterranean-style estate with lush gardens",
      images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"],
      features: ["Pool", "Guest House", "Garden", "Tennis Court"],
      agent: {
        name: "Michael Brown",
        phone: "(305) 555-0125",
        email: "michael@shutterstate.com",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover the perfect property in your ideal location
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
                <Search className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Enter city, neighborhood, or address"
                  className="flex-1 px-4 py-2 focus:outline-none"
                />
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <a
              href="/properties"
              className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              View All
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;