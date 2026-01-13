import React from "react";

function WhyPubnub() {
  return (
    <div className="w-full flex justify-center py-16 px-4">
      <div className="w-full max-w-6xl bg-blue-950 text-white rounded-2xl border border-blue-200 p-8 md:p-12">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why PubNub?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                ⚡
              </div>
              <p className="text-lg">
                Accelerate development with prebuilt SDKs, components, and integrations
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                🛡️
              </div>
              <p className="text-lg">
                Maintain control with built-in moderation, observability, and permissions
              </p>
            </div>
          </div>

         
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                📈
              </div>
              <p className="text-lg">
                Confidently scale from MVP to millions of concurrent users
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                ⚙️
              </div>
              <p className="text-lg">
                Simplify operations with built-in security, moderation, and observability
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-900  rounded-lg flex items-center justify-center">
                📚
              </div>
              <p className="text-lg  px-3 py-1 rounded-md inline-block">
                Backed by demos, tutorials, and a proven track record powering chat at global scale
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhyPubnub;
