import React from 'react'
import {
  Radio,
  FileText,
  ClipboardList,
  Play,
  Code,
  Server,
  MessageSquare,
  Shield,
  Link as LinkIcon,
  BarChart3,
  Users,
  Lightbulb,
  Settings,
  FunctionSquare,
  Calendar,
} from "lucide-react";

const Card = ({ icon: Icon, title, desc }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
    <Icon className="w-8 h-8 text-gray-600 mb-3" />
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-md text-gray-500 mt-1">{desc}</p>
  </div>
);
const data = [
  {
    title: "Demos",
    desc: "Explore real-time demos for Chat, IoT, Geolocation, and more",
    image:
      "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F878a3b9677ed4373ac422cb7749f8a8b?quality=80&width=750",
  },
  {
    title: "Tutorials",
    desc: "Explore our step-by-step tutorials",
    image:
      "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1b70097ddce5434da2f6b81e3d08441c?quality=80&width=750",
  },
  {
    title: "Live code tour",
    desc:
      "Get to know PubNub's core features in our interactive live coding tour",
    image:
      "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fb39574bee6f14a88b3e380761b20c4bb?quality=80&width=750",
  },
];
function WhatNew() {
  return (
    <>
     <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

      {/* WHAT'S NEW */}
      <section>
        <h2 className="text-center text-4xl font-bold mb-6">
          What's new?
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          <Card
            icon={Radio}
            title="Sports, Media, and Entertainment"
            desc="Build engaging live experiences with real-time chat, polls, and synchronized content."
          />
          <Card
            icon={ClipboardList}
            title="Postman collection"
            desc="Test all PubNub REST endpoints instantly with pre-built examples and collections."
          />
          <Card
            icon={FileText}
            title="Release notes"
            desc="Monthly updates covering product changes, SDK updates, and documentation improvements."
          />
        </div>
      </section>

      {/* GET STARTED */}
      <section>
        <h2 className="text-center text-4xl font-bold mb-6">
          Get started
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={Play}
            title="Start here"
            desc="Connect the world in one-tenth of a second."
          />
          <Card
            icon={Code}
            title="SDKs"
            desc="Build real-time apps with PubNub Chat and Core SDKs."
          />
          <Card
            icon={Server}
            title="PubNub MCP Server"
            desc="Write code your way into real-time apps with AI."
          />
          <Card
            icon={MessageSquare}
            title="Messaging"
            desc="Learn how to send and receive messages in real time."
          />
          <Card
            icon={Shield}
            title="Moderation"
            desc="Protect users with AI filtering, manual review, and SDK-level controls."
          />
          <Card
            icon={LinkIcon}
            title="REST APIs"
            desc="Access PubNub via HTTP endpoints for messaging and account management."
          />
        </div>
      </section>

      {/* PRODUCTS */}
      <section>
        <h2 className="text-center text-4xl font-bold mb-6">
          Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={BarChart3}
            title="PubNub Insights"
            desc="Dive into your app’s metrics and analytics."
          />
          <Card
            icon={Users}
            title="BizOps Workspace"
            desc="Moderate your apps and manage users, channels, and memberships."
          />
          <Card
            icon={Lightbulb}
            title="PubNub Illuminate"
            desc="Make decisions and influence your app’s users in real time."
          />
          <Card
            icon={Settings}
            title="Admin Portal"
            desc="Configure, manage, and inspect your apps."
          />
          <Card
            icon={FunctionSquare}
            title="Functions"
            desc="Transform, re-route, augment, and filter captured events."
          />
          <Card
            icon={Calendar}
            title="Events & Actions"
            desc="Manage user actions and send real-time data to third-party systems."
          />
        </div>
      </section>
    </div>

     <div className="bg-gradient-to-b from-[#0f172a] to-[#050c2d] py-20">
      <h2 className="text-center text-white text-3xl font-semibold mb-12">
        Learn more
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
          >
            <div className="bg-gray-600">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-52 object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
   
  )
}

export default WhatNew