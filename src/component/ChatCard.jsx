import React from 'react'

function ChatCard() {
    return (
        <div className='text-center mx-auto text-white pt-10'>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Launch Faster with Production-Ready Chat Infrastructure
            </h2>
            <p className="text-white text-lg max-w-lg mx-auto mb-20">
                Skip the boilerplate and build fast, reliable chat with a backend that lets you focus on core functionality.
            </p>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                {/* CARD 1 */}
                <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        Integrate with AI, Analytics & Business Systems
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                       Use PubNub Functions or third-party APIs to plug in bots, CRMs, analytics platforms, transcription, and translation tools.
                    </p>
                    <img className="mt-6 w-full object-contain" src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Ffd23473fa0974f7cb69829bdcb081fd8?format=webp&width=1200" />
                </div>

                {/* CARD 2 */}
                <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                       Infrastructure You Don’t Have to Think About
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                      No sharding, no message brokers, no server maintenance—just a globally distributed pub/sub network trusted by mission-critical apps.
                    </p>
                    <img className="mt-6 w-full object-contain" src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F3375d1c32463459aa97eb634085fedbe?format=webp&width=1200" alt="In App Messaging" />
                </div>

                {/* CARD 3 */}
                <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        Push Notifications
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                        A straightforward push system with support for FCM, APNs, and fallback delivery—built to handle the majority of use cases without added complexity.
                    </p>
                    <img className="mt-6 w-full object-contain" src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fa518ba66cc6a4916a035bd2e2789be15?format=webp&width=1200" alt="Event Hub" />
                </div>
            </div>
        </div>
    )
}

export default ChatCard