import React from "react";

export default function Four({ img2, title, desc, img, reverse }) {
    console.log(img2, reverse, desc, "checking reverse");
    return (
        <div className="mt-[100px]">


            <div
                className={`${reverse ? "sm:flex-row flex-col" : "sm:flex-row-reverse flex-col"
                    } mb-10 sm: flex  items-center container justify-between `}
            >
                <div className="sm:w-[50%] w-[100%] mt-[-100px]">
                    <img src="/images/ball.png" />
                </div>
                <div className="sm:w-[40%] w-[100%]">

                    <h2 className=" text-center text-transparent bg-clip-text bg-gradient-to-r
                     from-purple-400 to-pink-600 text-[50px]  sm:text-[70px] leading-[70px] font-bold  font-mono  sm:w-[600px] sm:text-left ">
                        Everything you need to dominate PPC
                    </h2>
                    <p className="text-center  font-bold text-[20px] leading-[25px] mt-[40px] mb-[10px] sm:text-left  ">
                        The way that your business can grow on your own terms and stay ahead - at speed.
                    </p>

                    <button className="rounded-[20px] sm:rounded-[20px] mt-[26px] bg-[#502FCF] text-[white] px-[20px] py-[19px] font-semibold sm:w-[40%] w-[100%]">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
