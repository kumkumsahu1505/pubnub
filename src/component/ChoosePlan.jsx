import React from 'react'
import PriceCard from './PriceCard'

function ChoosePlan() {
    return (
        <>
            <div className='max-w-3xl mx-auto py-20 mt-20 text-center'>
                <h1 className='text-4xl font-bold pb-4'>Simple, Transparent Pricing</h1>
                <h3 className='text-xl text-gray-500 pb-8'>Start building for free, then scale with confidence. Our pay-as-you-grow pricing is based on one simple metric: Monthly Active Users. No hidden fees, no surprises.</h3>
                <div className=' flex  md:gap-8 gap-y-8 justify-center'>
                    <button className='bg-red-700 text-white text-md rounded-lg px-5 py-2'>Start Free - No Credit Card</button>
                    <button className='text-black text-md rounded-lg border border-gray-300 px-5 py-2'>Calculate Your Costs</button>
                </div>
            </div>

            <div className='bg-gray-50 '>
                <div className='max-w-3xl mx-auto py-20  text-center'>
                    <h1 className='text-4xl font-bold pb-4'>Choose Your Plan</h1>
                    <h3 className='text-xl text-gray-500 pb-8'>All plans include unlimited channels, and all our core features. You only pay for what you use: MAU.

                    </h3>
                    <div className='flex md:flex-row gap-8'>

                    </div>
                </div>


                {/* Price card  */}
                <PriceCard/>
            </div>

        </>
    )
}

export default ChoosePlan