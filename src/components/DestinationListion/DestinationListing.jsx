import React, { useState } from 'react'
import DestinationCard from '../DestinationCard/DestinationCard'
import LocationTab from '../LocationTab/LocationTab'

function DestinationListing() { 
  
  const destinations = [
    {
      "_id": "6755d5f49a1ea956f3ce2475",
      "name": "Sri Dalada Maligawa",
      "location": "Kandy, Central Province, Sri Lanka",
      "rating": 4.7,
      "reviews": 2578,
      "image": "https://media.istockphoto.com/id/502631824/photo/temple-of-the-tooth-kandy-sri-lanka.jpg?s=612x612&w=0&k=20&c=2ltjIh94gedLEJ0rgu8djEXhrfatIcVBZCH6WVr3z0k=",
      "price": "Free",
      "description": "Stay in the heart of Paris, France, at the Montmartre Majesty Hotel, where elegance meets charm. Perfect for exploring iconic landmarks like the Eiffel Tower and the Louvre, this hotel offers a tranquil escape from the bustling city. With luxurious rooms starting at $160 per night, enjoy breathtaking rooftop views, exquisite French cuisine, and the romantic ambiance of Montmartre. Ideal for a dreamy city getaway.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce2478",
      "name": "Sigiriya Rock & Forest",
      "location": "Sigiriya, Central Province, Sri Lanka",
      "rating": 4.9,
      "reviews": 985,
      "image": "https://media.istockphoto.com/id/175227357/photo/lions-rock-sigiriya.jpg?s=612x612&w=0&k=20&c=DmWkoPAnxtYoavRUO4FLw__QLqNlzmg-k50CNJ4xdEA=",
      "price": 350,
      "description": "Overlooking Sydney Harbour, Loire Luxury Lodge provides unmatched waterfront views and a vibrant city experience. From $350 per night, relax in modern luxury while enjoying proximity to Sydney Opera House and Bondi Beach. Whether you’re seeking adventure or relaxation, this hotel offers a harmonious blend of urban excitement and tranquil sophistication.",
      "__v": 0
    }, 
    {
      "_id": "6755d5f49a1ea956f3ce2479",
      "name": "Dambulla Royal Cave Temple and Golden Temple",
      "location": "Dambulla, Central Province, Sri Lanka",
      "rating": 4.6,
      "reviews": 875,
      "image": "https://media.istockphoto.com/id/1293526265/photo/golden-buddha-statue-in-dambulla-temple-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=h9qAcMpxKUk_sCBdn0VlXvADcKP3okSNACF2ICDlHDM=",
      "price": 180,
      "description": "Discover the vibrant energy of Tokyo at Tokyo Tower Inn, located in the heart of Japan’s bustling capital. For $180 per night, guests can enjoy modern comforts, panoramic city views, and access to iconic attractions like Shibuya Crossing and the Imperial Palace. Ideal for foodies, tech enthusiasts, and urban explorers.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce247a",
      "name": "Thirukoneswaram Kovil - Shakti Peetha",
      "location": "Trincomalee,Eastern Province, Sri Lanka",
      "rating": 4.8,
      "reviews": 1023,
      "image": "https://media.istockphoto.com/id/660409102/photo/the-giant-statue-of-god-shiva-at-koneswaram-temple-of-trincomalee-sri-lanka.jpg?s=612x612&w=0&k=20&c=EFQe423k7r0kUXZ4OrU6P8iZLXHFbXjS7hwQ8vBVkXU=",
      "price": 200,
      "description": "Stay at Sydney Harbour Hotel and wake up to stunning harbour views in one of Australia’s most iconic destinations. Starting at $200 per night, enjoy rooftop dining, modern facilities, and close proximity to Darling Harbour and Sydney’s vibrant nightlife. Ideal for couples and city adventurers.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce247b",
      "name": "Marble Beach",
      "location": "Trincomalee,Eastern Province, Sri Lanka",
      "rating": 4.5,
      "reviews": 670,
      "image": "https://media.istockphoto.com/id/1131884277/photo/aerial-surf-beach-hiriketiya-dikwella-sri-lanka.jpg?s=612x612&w=0&k=20&c=Xe4sGBrU5q7lqS8I-BvsFGSiVo8isyl6Mr5l09G3djo=",
      "price": 140,
      "description": "Nestled in the fashion capital of Milan, Italy, Milan Central Suites combines style and comfort for an unforgettable stay. At $140 per night, enjoy proximity to the Duomo and Galleria Vittorio Emanuele II, making it perfect for shoppers and culture enthusiasts alike.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce2476",
      "name": "Pasikuda Beach",
      "location": "Trincomalee,Eastern Province, Sri Lanka",
      "rating": 4.8,
      "reviews": 1236,
      "image": "https://media.istockphoto.com/id/2170855359/photo/aerial-view-of-beach-clear-ocean-and-palm-trees-in-pasikuda-sri-lanka.jpg?s=612x612&w=0&k=20&c=RrmPkuOoplg7ebBOa7_mrSCUkLuV4fQ0aAEuQ0ujcOM=",
      "price": 150,
      "description": "Immerse yourself in Kyoto’s serene beauty at Elysée Retreat, a sanctuary of peace and tradition. Discover the charm of Japanese gardens, historic temples, and tea ceremonies, all just steps away. For $150 per night, indulge in authentic Kyoto hospitality, minimalistic elegance, and an unforgettable cultural experience tailored for nature lovers and tranquility seekers.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce2477",
      "name": "Nallur Kandaswamy Devasthanam",
      "location": "Jaafna, Northern Province, Sri Lanka",
      "rating": 4.7,
      "reviews": 1356,
      "image": "https://media.istockphoto.com/id/1197155454/photo/nallur-kovil-jaffna.jpg?s=612x612&w=0&k=20&c=yXzVrH9HwxML5IPLgrsr4MRXgkl1Q2toWYrky8jfFKA=",
      "price": 220,
      "description": "Located in the historic heart of Rome, Italy, Versailles Vista Inn offers a touch of Renaissance luxury. Explore the Colosseum and Vatican City by day and retreat to opulent comfort at night. Starting at $220 per night, guests enjoy fine Italian dining, elegant interiors, and a prime location for experiencing Rome’s timeless culture. Ideal for history buffs and luxury seekers.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce247c",
      "name": "Fort Jaffna",
      "location": "Jaffna, Northern Province, Sri Lanka",
      "rating": 4.9,
      "reviews": 2135,
      "image": "https://media.istockphoto.com/id/1733655529/photo/the-ancient-fort-of-jaffna-sri-lanka.jpg?s=612x612&w=0&k=20&c=VUcTLhpOEUnpowl924akTbMX_e8Mx8JdpWMefDOHSFw=",
      "price": 320,
      "description": "Experience ultimate luxury at Parisian Palace, a gem in the heart of Paris, France. For $320 per night, immerse yourself in timeless elegance with grand interiors, Michelin-star dining, and breathtaking views of the Seine. Perfect for a romantic escape or a refined city retreat.",
      "__v": 0
    }
  ]
    
const Location = ["ALL","Central Province", "Eastern Province", "Northern Province", "Southern Province", "Western Province", "North Western Province ", "North Central Province", "Uva Province", "Sabaragamuwa Province"]

const [selectedLocation, setSelectedLocation] = useState("ALL")

const handleLocationChange = (Location) => {
    setSelectedLocation(Location)
}

const filteredDestination = selectedLocation === "ALL" ? destinations : destinations.filter((destination) => {
  return destination.location.toLowerCase().includes(selectedLocation.toLowerCase());
})

  return (
    <section className=' mx-auto px-8 py-8 lg:px-16 mt-40'>
        <div>
            <h1 className='text-3xl font-bold text-balck'>
                Top trending Place in Sri Lanka
            </h1>
            <p className='text-lg text-black/70 '>
                Here you can see all the destinations that are available for 
                you to choose from.
            </p>
            <div className='flex flex-wrap gap-2 mt-7 justify-center items-center'>
                {
                    Location.map((location) => {
                        return <LocationTab name={location} selectedLocation={selectedLocation} onClick={handleLocationChange}/>
                    })
                }
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            {
              filteredDestination.map((destination) => {
                    return <DestinationCard key={destination._id} destination={destination} />
                })
            }
        </div>

    </section>
  )
}

export default DestinationListing