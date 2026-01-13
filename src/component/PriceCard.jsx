import React from "react";

const plans = [
  {
    id: 1,
    title: "Free Plan",
    price: "Free",
    subtitle: "Forever free • No credit card required",
    highlight: "200 MAU or 1M transactions",
    description: "Usage Allowance: Best for testing and prototypes.",
    buttonText: "Start Building Free",
    buttonStyle: "border border-gray-500 text-black",
    features: [
      "1GB data storage (7 days)",
      "Community support",
      "Up to 1M transactions monthly",
    ],
  },
  {
    id: 2,
    title: "Starter Plan",
    price: "$98/month",
    subtitle: "Pay as you grow",
    highlight: "1,000 MAU included",
    description: "Usage Allowance: Ideal for launching apps.",
    buttonText: "Create Starter Account",
    buttonStyle: "bg-red-600 text-white",
    featured: true,
    features: [
      "Includes add-on Bizops Workspace",
      "Up to 6 months data storage",
      "Standard support (24/5)",
      "Insights into users, channels & messages",
    ],
  },
  {
    id: 3,
    title: "Pro Plan",
    price: "Custom",
    subtitle: "The more you grow, the more you save",
    highlight: "Custom MAU packages • Significant volume discounts",
    description: "Usage Allowance: Built for production apps.",
    buttonText: "Contact Sales",
    buttonStyle: "border border-gray-500 text-black",
    features: [
      "Unlimited data storage",
      "Dedicated support team",
      "Advanced analytics & monitoring",
      "99.999% uptime SLA",
      "Custom integrations",
    ],
  },
];

function PriceCard() {
  return (
    <div className="max-w-7xl mx-auto px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-2xl bg-white p-8  border 
               border-gray-300 shadow-lg" 
            
          >
            {/* Header */}
            <h3 className="text-2xl font-semibold">{plan.title}</h3>
            <p className="text-xl font-bold mt-4">{plan.price}</p>
            <p className="text-sm text-gray-600 mt-1">{plan.subtitle}</p>

            {/* Highlight */}
            <div className="mt-6 border-l-4 border-red-500 pl-4 text-sm">
              <p className="font-medium">{plan.highlight}</p>
              <p className="text-gray-600 mt-1">{plan.description}</p>
            </div>

            {/* Button */}
            <button
              className={`w-full mt-6 py-3 rounded-md font-medium ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>

            {/* Features */}
            <div className="mt-8">
              <p className="font-medium mb-4">What's included</p>
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer link */}
            <a
              href="#"
              className="block mt-8 text-sm text-gray-600 underline "
            >
              Full Feature Breakdown
            </a>
          </div>
        ))}
      </div>

      <div className="my-10 ">
        <h1 className="text-3xl font-bold text-center pb-10">Pay-As-You-Go Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className=" rounded-2xl bg-white p-8  border 
               border-gray-300 shadow-lg text-center">
            <h3 className="text-gray-500 text-sm">Free plan</h3>
            <h1 className="text-2xl font-bold">$0/month</h1>
            <h3 className="text-gray-500 text-sm">for up to 200 MAU</h3>
        </div>
         <div className="rounded-2xl bg-white p-8  border 
               border-gray-300 shadow-lg text-center">
            <h3  className="text-gray-500 text-sm">Starter plan</h3>
            <h1 className="text-2xl font-bold">$98/month</h1>
            <h3 className="text-gray-500 text-sm">for 1,000 MAU</h3>
        </div>
         <div className="rounded-2xl bg-white p-8  border 
               border-gray-300 shadow-lg text-center">
            <h3  className="text-gray-500 text-sm">Pro Plan</h3>
            <h1 className="text-2xl font-bold">Volume Discounts</h1>
            <h3 className="text-gray-500 text-sm">for 10,000+ MAU</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
