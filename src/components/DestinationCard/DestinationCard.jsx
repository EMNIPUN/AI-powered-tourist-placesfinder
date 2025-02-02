import React from 'react'
import { Button } from '../ui/button'

const DestinationCard = (props) => {
  return (
    <div
        // href={`/hotel/${props.hotel._id}`}
        // key={props.hotel._id}
        className="block group relative shadow-lg p-4 rounded-xl bg-white"
    >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img
                src={props.destination.image}
                alt={props.destination.name}
                className="object-cover w-full h-full absolute transition-transform group-hover:scale-105"
            />
        </div>

        <div className="mt-3 space-y-2">
            <h3 className="font-semibold text-base clamp-1">{props.destination.name}</h3>
            <div className="flex items-center text-muted-foreground">
                <span><i class="fa-solid fa-location-dot"></i> {props.destination.location}</span>
            </div>
            <div className="flex items-baseline space-x-2">
                <span className="text-xs font-light line-clamp-2 ">{props.destination.description}</span>
            </div>
            <div className="flex items-center space-x-1">
                <span className="font-medium"><i class="fa-solid fa-star"></i> {props.destination.rating}</span>
                <span className="text-muted-foreground">
                    ({props.destination.reviews})
                </span>
            </div>
            <button className='flex justify-center items-center gap-2 ml-28 mt-10'>
                <span className='font-semibold'>Read More</span>
                <img src="/assets/icons/next.png" alt="search" className="w-4 h-4 transition-transform group-hover:scale-105" />
            </button>

        </div>
    </div>
  )
}

export default DestinationCard