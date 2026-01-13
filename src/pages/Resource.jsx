import React from "react";
import img from '../assets/msg1.webp'
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
const data = [
  {
    id: 1,
    title: "17LIVE",
    description:
      "See how 17LIVE leverages PubNub for chat, creating an engaging live stream experience between creators and fans.",
    tags: ["In App chat", "Push notifications", "Live entertainment"],
    image: "/images/17live.png",
  },
  {
    id: 2,
    title: "Ayoa",
    description:
      "Ayoa creates a collaborative task management environment with real-time syncing using PubNub.",
    tags: ["Virtual events", "E-Learning"],
    image: "/images/ayoa.png",
  },
  {
    id: 3,
    title: "Beamable",
    description:
      "Beamable partners with PubNub to enable developers to quickly build highly engaging and interactive games.",
    tags: ["In App chat", "Gaming"],
    image: "/images/beamable.png",
  },
  {
    id: 4,
    title: "BusWhere",
    description:
      "BusWhere is a service to make it easier for parents to plan their mornings and afternoons according to when their child’s school bus arrives.",
    tags: ["Push notifications", "Geolocation", "Fleet transportation/delivery"],
    image: "/images/buswhere.png",
  },
  {
    id: 5,
    title: "ClassDojo",
    description:
      "ClassDojo: classroom management tool built with PubNub.",
    tags: ["Virtual events", "E-Learning", "Real-Time data & dashboard"],
    image: "/images/classdojo.png",
  },
  {
    id: 6,
    title: "Climate LLC",
    description:
      "Engineering teams at Climate LLC use PubNub to deliver real-time updates at scale.",
    tags: ["IoT", "Real-Time data & dashboard"],
    image: "/images/climate.png",
  },
  {
    id: 7,
    title: "Clubhouse",
    description:
      "PubNub empowers Clubhouse to deliver seamless, real-time interactions.",
    tags: ["In App chat", "Live entertainment"],
    image: "/images/clubhouse.png",
  },
  {
    id: 8,
    title: "CrowdComfort",
    description:
      "CrowdComfort built a reliable, secure, and scalable building management platform using PubNub.",
    tags: ["Push notifications", "Virtual events", "Real-Time data & dashboard"],
    image: "/images/crowdcomfort.png",
  },
  {
    id: 9,
    title: "DAZN",
    description:
      "DAZN partners with PubNub to deliver chat and push notifications for millions of fans globally.",
    tags: ["In App chat", "Push notifications", "Live entertainment"],
    image: "/images/dazn.png",
  },
];

function Resource() {
  return (
    <div className="overflow-hidden">
    <NavBar/>
    <div className="">
    <div className="pt-30 px-10 md:px-30">
        <h1 className="text-3xl font-bold pb-4">The world runs on PubNub</h1>
        <h3 className="text-lg text-gray-500">See how over 2000 companies are building digital products — websites, apps, devices — with real-time communication at their core.</h3>
    </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-30 py-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="rounded-xl mx-w-4xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image */}
          <div className="h-44">
            <img
              src={img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-3">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>

            
          </div>
        </div>
      ))}
    </div>
   </div>

   <Footer/>
    </div>
   
  );
}

export default Resource;
