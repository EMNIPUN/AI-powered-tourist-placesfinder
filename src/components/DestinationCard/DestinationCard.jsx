import React from 'react'
import { Button } from '../ui/button'

const DestinationCard = (props) => {
  return (
    <div className="block group relative p-6 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img
                src={props.destination.image}
                alt={props.destination.name}
                className="object-cover w-full h-full absolute transition-transform duration-300 group-hover:scale-105"
            />
        </div>

        <div className="mt-4 space-y-3">
            <h3 className="font-semibold text-lg text-gray-800">{props.destination.name}</h3>
            <div className="flex items-center text-gray-600">
                <i className="fa-solid fa-location-dot mr-2"></i>
                <span>{props.destination.location}</span>
            </div>
            <div className="flex items-baseline">
                <p className="text-sm text-gray-600 line-clamp-2">{props.destination.description}</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <span className="font-medium">{props.destination.rating}</span>
                <span className="text-gray-500 text-sm">
                    ({props.destination.reviews} reviews)
                </span>
            </div>
            
            <button className="w-full mt-4 py-2.5 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300 flex items-center justify-center group">
                <span className="font-medium">Read More</span>
                <img 
                    src="/assets/icons/next.png" 
                    alt="arrow" 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                />
            </button>
        </div>
    </div>
  )
}

export default DestinationCard