import React from 'react'
import ExperienceCard from './ExperienceCard';
import { Link } from 'react-router-dom';
function Experience() {
    const useCaseData = [
  {
    category: "Sports, Media, Entertainment",
    company: "DAZN",
    title: "Increase Fan Engagement",
    description:
      "through real-time fan interactions with chat, notifications, alerts, and more",
    linkText: "Read their story →",
    image:'https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F398b9a3037bc4e9d97807196fff91dc6?quality=80&width=750'
  },
  {
    category: "Digital Health",
    company: "mana@DR",
    title: "Enhance patient care",
    description:
      "with user status, full-featured chat and push notifications, all with HIPAA compliance",
    linkText: "Read their story →",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F878a3b9677ed4373ac422cb7749f8a8b?quality=80&width=750"
  },
  {
    category: "Digital Commerce",
    company: "StagetTen",
    title: "Elevate buyer experiences",
    description:
      "with instant user status, chat, and automated push notifications",
    linkText: "Read their story →",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1b70097ddce5434da2f6b81e3d08441c?quality=80&width=750"
  },
  {
    category: "Gaming",
    company: "Pocket Gems",
    title: "Improve retention and engagement",
    description:
      "through in-game updates, chat and all types of player interactions",
    linkText: "Read their story →",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fb39574bee6f14a88b3e380761b20c4bb?quality=80&width=750"
  },
  {
    category: "Contact & Control Centers",
    company: "Kustomer",
    title: "Boost customer delight",
    description:
      "through real-time user collaboration and server notifications and events",
    linkText: "Read their story →",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fe0c8f914d5e34ba2a6d39149fe1c34eb?quality=80&width=750"
  },
  {
    category: "Transportation & Logistics",
    company: "Mothership",
    title: "Optimize driver logistics",
    description:
      "for trucking telemetry, driver communication, and process improvement",
    linkText: "Read their story →",
    image: "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fbddae40ac331428ea09c62124218b5e9?quality=80&width=750"
  }
];

  return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className='pb-20 text-4xl font-bold'>Powering global real-time interactive experiences in 40+ Industries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCaseData.map((item, index) => (
          <ExperienceCard key={index} data={item} />
        ))}
      </div>
        <div className='flex justify-center'>
          <Link to='/discover'><button className='text-white bg-red-700 px-4 py-2 rounded-xl text-xl mt-6'>Discover More</button></Link>
        
      </div>
    </div>
  )
}

export default Experience