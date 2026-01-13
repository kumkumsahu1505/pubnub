import React from 'react'

function ScaleChatCard() {
  return (
     <div className='text-center mx-auto text-white pt-10'>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Scale Without Re-Engineering
            </h2>
            <p className="text-white text-lg max-w-lg mx-auto mb-20">
                PubNub is built for scale, so you don’t have to re-architect when your user base grows or your requirements evolve.
            </p>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                {/* CARD 1 */}
                <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        Simple APIs, SDKs & Quickstarts
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                        Build your MVP fast with simple SDKs for JavaScript, Kotlin, Swift, Unity, and more. Our Quickstarts help you validate ideas and iterate in minutes.
                    </p>
                    <img className="mt-6 w-full object-contain" src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F0dcfa0c5260b4a16b62a4d789b079a70?format=webp&width=1600" alt="Mobile Push Notifications" />
                </div>

                {/* CARD 2 */}
                <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        Live Chat Building Blocks
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                        Leverage production-ready features, typing indicators, presence, message history, read receipts, reactions, and threads, which are all available out of the box in our SDKs.
                    </p>
                    <img className="mt-6 w-full object-contain" src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F5538417d48ab4b76a1806d3c27618642?format=webp&width=1600" alt="In App Messaging" />
                </div>

                {/* CARD 3 */}
                <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        Push Notifications
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                        A straightforward push system with support for FCM, APNs, and fallback delivery—built to handle the majority of use cases without added complexity.
                    </p>
                    <img className="mt-6 w-full object-contain" src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fd13f111470b240e4afaaefd0a6d07799?format=webp&width=1600" alt="Event Hub" />
                </div>
            </div>
        </div>
  )
}

export default ScaleChatCard