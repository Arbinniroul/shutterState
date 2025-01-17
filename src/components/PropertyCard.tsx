import React from 'react';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {property.location.city}, {property.location.state}
          </span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.details.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.details.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.details.squareFeet} sqft</span>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;