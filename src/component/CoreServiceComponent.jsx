import React from "react";
import CoreService from "../assets/coreService.webp";
import msg1 from "../assets/msg1.webp";
import msg2 from "../assets/msg2.webp";
import msg3 from "../assets/msg3.webp";

function CoreServiceComponent() {
  return (
    <div className="bg-[#031143] w-full py-20">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center text-white px-4 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          PubNub Core Services
        </h1>
        <p className="text-base md:text-xl text-gray-300 leading-relaxed">
          Enable real-time communication and power low-latency, event-driven
          logic across your entire application architecture.
        </p>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-10 px-4">
        <img
          src={CoreService}
          alt="PubNub Core Services"
          className="w-full max-w-6xl object-contain"
        />
      </div>

      {/* MESSAGE HEADER */}
      <div className="text-center max-w-4xl mx-auto text-white mt-20 mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Messaging Services
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Power real-time, event-driven experiences with messaging tools built
          for scale, speed, and seamless integration.
        </p>
      </div>

      {/* MESSAGE CARDS */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* CARD 1 */}
        <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            In App Messaging
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed flex-grow">
            Deliver real-time updates across devices and servers in under
            100ms using a pub/sub model built for scale. Perfect for sending
            messages, signals, or notifications where speed matters.
          </p>
          <img className="mt-6 w-full object-contain" src={msg1} alt="In App Messaging" />
        </div>

        {/* CARD 2 */}
        <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Mobile Push Notifications
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed flex-grow">
            Ensure critical communications always reach users—even when
            they’re offline—with built-in push fallback via FCM and APNS.
          </p>
          <img className="mt-6 w-full object-contain" src={msg2} alt="Mobile Push Notifications" />
        </div>

        {/* CARD 3 */}
        <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Event Hub
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed flex-grow">
            Streamline integrations that filter, process, and trigger
            actions from user or device events directly to your backend.
          </p>
          <img className="mt-6 w-full object-contain" src={msg3} alt="Event Hub" />
        </div>
      </div>
    </div>
  );
}

export default CoreServiceComponent;
