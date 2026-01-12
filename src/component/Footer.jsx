import React from "react";

function Footer() {
  return (
    <footer className="bg-[#071a4a] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        
          <div>
            <h3 className="font-semibold mb-4">PUBNUB PLATFORM</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Overview</li>
              <li>Core Services</li>
              <li>Decision Intelligence</li>
              <li>Global Network</li>
              <li>Integrations</li>
              <li>Generative AI</li>
              <li>AI MCP Server</li>
              <li>Security & Compliance</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">USE CASE</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Chat</li>
              <li>Live Audience Engagement</li>
              <li>Multi-User Collaboration</li>
              <li>IoT Device Control</li>
              <li>Real-Time Workflows</li>
              <li>Geolocation & Dispatch</li>
              <li>Edge Messaging</li>
              <li>Event Driven Architecture</li>
              <li>LiveOps</li>
              <li>Gamification</li>
              <li>Auto-Moderation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">INDUSTRY</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Sports, Media & Entertainment</li>
              <li>Digital Healthcare</li>
              <li>iGaming, Betting & Casino</li>
              <li>Gaming</li>
              <li>Enterprise SaaS</li>
              <li>Transport, Delivery & Logistics</li>
              <li>eCommerce</li>
              <li>Push Notifications</li>
              <li>Call Centers & Customer Care</li>
              <li>Social & Lifestyle</li>
              <li>FinTech</li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Blog</li>
              <li>Customers</li>
              <li>Demos</li>
              <li>Tutorials</li>
              <li>eBook</li>
              <li>Glossary</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Our Company</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Partners</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Bug Bounty Policy</li>
              <li>Contact Us</li>
              <li>Trust Center</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
        </div>

        
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/20 pt-8">

          <p className="text-sm text-gray-300 max-w-3xl">
            © 2010 - 2026 PubNub Inc. All Rights Reserved. PUBNUB and the
            PUBNUB logo are trademarks or registered trademarks of PubNub
            Inc. in the U.S. and other countries.
          </p>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">f</div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">X</div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">in</div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">▶</div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">v</div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">◎</div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
