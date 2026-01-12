import React, { useRef } from "react";
import arrow from '../assets/arrow-right-long-line (1).svg'
import { Link } from "react-router-dom";
function Brand() {
    const brandName = [
        "SWIGGY", "GAMELOFT", "RINGCENTRAL", "FAN HUB",
        "YELP", "SERVICEMAX", "DAZN", "ADOBE",
        "UNITY", "LIVELIKE", "LOGITECH", "LIFECHURCH"
    ];

    const brandBody = [
        {
            "h1": "Unleash creativity",
            "pera": "Focus on value creation leveraging real-time APIs, SDKs and software to accelerate development and management while retaining control and flexibility.",
            "link": "Read the Docs"
        }
        , {
            "h1": "Scale infinitely",
            "pera": "Scalable infrastructure that provides flexible options to reach millions of concurrent users and devices safely, securely, and with no additional fees.",
            "link": "Explore the platform"
        }, {
            "h1": "Surpass your KPIs",
            "pera": "Increase engagement and retention with real-time data analysis and automated decisioning for continuous optimization.",
            "link": "Discover Illuminate"
        }]
    const marqueeRef = useRef(null);
    let timeoutId = null;

    const handleMouseEnter = () => {
        marqueeRef.current.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            marqueeRef.current.style.animationPlayState = "running";
        }, 3000); // resume after 3 seconds
    };

    return (
        <>
            <div className="bg-white   overflow-hidden w-full py-8 ">
                <ul
                    ref={marqueeRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="flex gap-16 marquee "
                >
                    {brandName.map((brand, index) => (
                        <li
                            key={index}
                            className="list-none text-black font-bold text-2xl whitespace-nowrap cursor-pointer"
                        >
                            {brand}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white shadow-2xl shadow-blue-300 flex justify-between border border-blue-500 p-5 w-[90%] h-auto mt-20 my-30 mx-auto 

            ">
                {brandBody.map((body, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col justify-around gap-5 p-6"
                        >
                            <h1 className="text-2xl ">{body.h1}</h1>
                            <h3 className="text-lg text-gray-600">{body.pera}</h3>
                            <Link to={
                                body.link === "Read the Docs"
                                    ? "/doc"
                                    : body.link === "Contact us"
                                    ? "/contactForm"
                                    : "/"
                            }
                                href={body.link}
                                className="flex items-center gap-2 text-md hover:underline"
                            >
                                {body.link}
                                <img src={arrow} alt="arrow" className="h-3 w-3" />
                            </Link>
                        </div>
                    );
                })}
            </div>

        </>
    );
}

export default Brand;
