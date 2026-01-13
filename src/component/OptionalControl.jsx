import React from "react";

function OptionalControl() {
  return (
    <div className="w-full bg-[#001143] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 ">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-8 justify-between">
          <div className="pt-40">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Operational Control at Scale
            </h1>
            <p className="text-gray-300 text-lg">
              Simplify the complexity of running secure, reliable chat at scale.
            </p>
          </div>

          <div className="bg-blue-950 rounded-2xl p-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fb6ace92572a544c6866ae36e1b00b999?format=webp&width=1200"
              alt=""
              className="rounded-xl mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">
              Moderation & Role-Based Permissions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Enforce chat policies with profanity filtering, user bans, message
              deletion, fine-grained access control, and security features built
              for compliance and user safety.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-8">
          <div className="bg-blue-950 rounded-2xl p-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Ff8633b0902294dc6b077a0f901110335?format=webp&width=1200"
              alt=""
              className="rounded-xl mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">
              Real-Time Channel Monitoring
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Inspect live message flow, monitor user activity, and debug issues
              in real time to stay ahead of disruptions.
            </p>
          </div>

          <div className="bg-blue-950 rounded-2xl p-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1cd2afb7400f483eb543e627876f5767?format=webp&width=1200"
              alt=""
              className="rounded-xl mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">
              Presence & Typing Indicators
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Drive real-time engagement with online status, session tracking,
              and typing events—all without extra engineering effort.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OptionalControl;
