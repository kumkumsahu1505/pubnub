import React,{useState} from 'react'
import ExperienceCard from './ExperienceCard';
import { Link } from 'react-router-dom';
function Discover() {
    const data = [
  {
    id: 1,
    name: "17LIVE",
    tags: ["In-App Chat", "Push Notifications", "Live Entertainment"],
    description:
      "17LIVE leverages PubNub for chat, creating an engaging live stream experience between creators and fans.",
    image: 'https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F398b9a3037bc4e9d97807196fff91dc6?quality=80&width=750',
  },
  {
    id: 2,
    name: "Ayoa",
    tags: ["Virtual Events", "E-Learning"],
    description:
      "Ayoa creates a collaborative task management environment with real-time syncing using PubNub.",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F878a3b9677ed4373ac422cb7749f8a8b?quality=80&width=750",
  },
  {
    id: 3,
    name: "Beamable",
    tags: ["In-App Chat", "Gaming"],
    description:
      "Beamable partners with PubNub to help developers build highly engaging and interactive games.",
    image:"https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F878a3b9677ed4373ac422cb7749f8a8b?quality=80&width=750",
  },
   {
    id: 5,
    name: "ClassDojo",
    tags: ["Virtual Events", "E-Learning", "Real-Time Dashboard"],
    description:
      "ClassDojo is a classroom management tool built with PubNub for real-time communication.",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1b70097ddce5434da2f6b81e3d08441c?quality=80&width=750",
  },
  {
    id: 6,
    name: "Climate LLC",
    tags: ["IoT", "Real-Time Data", "Dashboard"],
    description:
      "Climate LLC uses PubNub to deliver real-time updates for digital farming solutions.",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fe0c8f914d5e34ba2a6d39149fe1c34eb?quality=80&width=750",
  },
  {
    id: 4,
    name: "BusWhere",
    tags: ["Push Notifications", "Geolocation", "Fleet Transportation"],
    description:
      "BusWhere helps parents track school buses using real-time location updates powered by PubNub.",
    image: 'https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F398b9a3037bc4e9d97807196fff91dc6?quality=80&width=750',
  },
 
  {
    id: 7,
    name: "Clubhouse",
    tags: ["In-App Chat", "Live Entertainment"],
    description:
      "PubNub empowers Clubhouse to deliver seamless, real-time audio interactions.",
    image: 'https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F398b9a3037bc4e9d97807196fff91dc6?quality=80&width=750',
  },
  {
    id: 1,
    name: "17LIVE",
    tags: ["In-App Chat", "Push Notifications", "Live Entertainment"],
    description:
      "17LIVE leverages PubNub for chat, creating an engaging live stream experience between creators and fans.",
    image: 'https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F398b9a3037bc4e9d97807196fff91dc6?quality=80&width=750',
  },
  {
    id: 2,
    name: "Ayoa",
    tags: ["Virtual Events", "E-Learning"],
    description:
      "Ayoa creates a collaborative task management environment with real-time syncing using PubNub.",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F878a3b9677ed4373ac422cb7749f8a8b?quality=80&width=750",
  },
  {
    id: 3,
    name: "Beamable",
    tags: ["In-App Chat", "Gaming"],
    description:
      "Beamable partners with PubNub to help developers build highly engaging and interactive games.",
    image:"https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F878a3b9677ed4373ac422cb7749f8a8b?quality=80&width=750",
  },
   {
    id: 5,
    name: "ClassDojo",
    tags: ["Virtual Events", "E-Learning", "Real-Time Dashboard"],
    description:
      "ClassDojo is a classroom management tool built with PubNub for real-time communication.",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1b70097ddce5434da2f6b81e3d08441c?quality=80&width=750",
  },
  {
    id: 6,
    name: "Climate LLC",
    tags: ["IoT", "Real-Time Data", "Dashboard"],
    description:
      "Climate LLC uses PubNub to deliver real-time updates for digital farming solutions.",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fe0c8f914d5e34ba2a6d39149fe1c34eb?quality=80&width=750",
  },
  {
    id: 4,
    name: "BusWhere",
    tags: ["Push Notifications", "Geolocation", "Fleet Transportation"],
    description:
      "BusWhere helps parents track school buses using real-time location updates powered by PubNub.",
    image: 'https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F398b9a3037bc4e9d97807196fff91dc6?quality=80&width=750',
  },
 
  {
    id: 7,
    name: "Clubhouse",
    tags: ["In-App Chat", "Live Entertainment"],
    description:
      "PubNub empowers Clubhouse to deliver seamless, real-time audio interactions.",
    image: 'https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F398b9a3037bc4e9d97807196fff91dc6?quality=80&width=750',
  },
  {
    id: 8,
    name: "CrowdComfort",
    tags: ["Push Notifications", "Virtual Events", "Real-Time Dashboard"],
    description:
      "CrowdComfort built a reliable and secure building management platform using PubNub.",
    image:"https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fe0c8f914d5e34ba2a6d39149fe1c34eb?quality=80&width=750",
  },
  {
    id: 9,
    name: "DAZN",
    tags: ["In-App Chat", "Push Notifications", "Live Entertainment"],
    description:
      "DAZN partners with PubNub to deliver chat and push notifications to millions of fans globally.",
    image:  "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1b70097ddce5434da2f6b81e3d08441c?quality=80&width=750",
  },
  {
    id: 10,
    name: "DISPRZ",
    tags: ["Virtual Events", "E-Learning"],
    description:
      "DISPRZ enables distributed workforce learning through real-time interactive experiences.",
    image:"https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fb39574bee6f14a88b3e380761b20c4bb?quality=80&width=750",
  },
  {
    id: 11,
    name: "Decisiv",
    tags: ["Geolocation", "Real-Time Dashboard", "Fleet Transportation"],
    description:
      "Decisiv streams real-time data dashboards for managing vehicle fleets using PubNub.",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fb39574bee6f14a88b3e380761b20c4bb?quality=80&width=750",
  },
  {
    id: 12,
    name: "Gameloft",
    tags: ["In-App Chat", "Gaming"],
    description:
      "Gameloft uses PubNub to power multiplayer chat in RPG games like Heroes of the Dark.",
    image:  "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1b70097ddce5434da2f6b81e3d08441c?quality=80&width=750",
  },
];


  return (
  <div className="max-w-7xl mx-auto px-6 py-12">
     <h1 className=' text-4xl font-bold'>The world runs on PubNub</h1>
     <p className='text-gray-500 text-md pb-4'>See how over 2000 companies are building digital products — websites, apps, devices — with real-time communication at their core.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <ExperienceCard key={index} data={item} />
        ))}
      </div>
        <div className='flex justify-center'>
          <Link to='/'><button className='text-white bg-red-700 px-4 py-2 rounded-xl text-xl mt-6'>Home</button></Link>
        
      </div>
    </div>
  )
}

export default Discover