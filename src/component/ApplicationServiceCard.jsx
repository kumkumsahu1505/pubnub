import React from 'react'

const featuresData = [
    {
        heading: "Presence",
        data: "Track user and device activity in real time, with instant awareness of who’s online, offline, or active in a specific channel. Build richer experiences like live participant counters, activity indicators, or dynamic matchmaking with just a few lines of code.",
        img: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F15c8c1899b41420eb725706ebf12a853?format=webp&width=1600",
    },
    {
        heading: "App Context",
        data: "Store and access user or app metadata in a flexible, always-available data layer. This allows you to enrich message processing, personalize interactions, and drive intelligent automation across your application.",
        img: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fcd29055b554c4590a96fbfacc70e0c25?format=webp&width=1600",
    },
    {
        heading: "BizOps Workspace",
        data: "Get a full suite of admin tools to monitor, configure, and moderate users, channels, and interactions in real time. Easily tune live services like presence and content controls without needing to redeploy or write additional backend code.",
        img: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fcb25403276594aaea31f535e0546cd04?format=webp&width=1600",
    },
    {
        heading: "Functions",
        data: "Run custom logic at the edge to process, route, filter, or transform messages as they move through the network. Build event-driven features like moderation, sentiment analysis, and real-time alerts without scaling backend infrastructure.",
        img: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F9c77eb634a6b4fa990bb99f6b67bf323?format=webp&width=1600",
    },
    {
        heading: "PubNub Chat",
        data: "Launch rich, scalable chat experiences with prebuilt SDKs and UI kits for web, mobile, and gaming apps—complete with typing indicators, reactions, moderation, and AI-powered content filtering.",
        img: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fbcc7895f56064d0eaddf84a8d99c4b16?format=webp&width=1600",
    },
    {
        heading: "File Sharing",
        data: "Share large files like images, videos, documents, or firmware updates in real time between users or devices. Ideal for social, enterprise, and IoT use cases where seamless data delivery is critical.",
        img: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F65e4a6e8f8cc495eb43aa36387a0acb0?format=webp&width=1600",
    },
];
function ApplicationServiceCard() {
    return (
        <div className="md:w-3xl lg:w-6xl w-sm px-8 mx-auto grid 
                          grid-cols-1 
                          md:grid-cols-2 
                          lg:grid-cols-3 
                          gap-8">

            {featuresData.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl p-8  text-black  border border-gray-300 outline-none"
                >
                    <h3 className="text-xl font-semibold mb-4">
                        {item.heading}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        {item.data}
                    </p>

                    <img
                        className="pt-12"
                        src={item.img}
                        alt={item.heading}
                    />
                </div>
            ))}




        </div>
    )
}

export default ApplicationServiceCard