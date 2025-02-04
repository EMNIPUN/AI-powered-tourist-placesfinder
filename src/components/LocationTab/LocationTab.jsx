import React from 'react'
import { Badge } from "@/components/ui/badge"

const LocationTab = ({ name, selectedLocation, onClick }) => {
  const isSelected = name === selectedLocation;
  
  return (
    <button
      onClick={() => onClick(name)}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 ease-in-out
        ${isSelected ? 
          'bg-primary text-white shadow-md shadow-primary/25 scale-105' : 
          'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }
        focus:outline-none focus:ring-2 focus:ring-primary/50
        active:scale-95
      `}
    >
      {name}
    </button>
  )
}

export default LocationTab