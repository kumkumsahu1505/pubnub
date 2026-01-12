import React from 'react'

function ExperienceCard({data}) {
  return (
   <div className=" rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      
      {/* Image Section */}
      <div className="relative h-44">
        <img
          src={data.image}
          alt={data.company}
          className="w-full h-full object-cover"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full font-medium">
          {data.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-900">
          {data.title}
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          {data.description}
        </p>

        <a
          href="#"
          className="text-blue-600 text-sm font-medium mt-2 hover:underline flex items-center gap-1"
        >
          {data.linkText}
          
        </a>
      </div>
    </div>

  )
}

export default ExperienceCard