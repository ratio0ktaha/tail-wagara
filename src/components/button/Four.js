import React from "react";

export default function Four({ img2, title, desc, img, reverse }) {
  console.log(img2, reverse, desc, "checking reverse");
  return (

    <div className="mt-[40px] items-center" >


      <div
        className={`${reverse ? "sm:flex-row-reverse flex-col" : "sm:flex-row flex-col"
          } sm:mb-[50px] mb-auto flex   sm:text-left container justify-between `}
      >
        {/* defend */}
        <div className="sm:w-[40%] sm:mb-[10px]">
          <img className="mx-auto sm:mb-auto " src={img} />
        </div>
        <div className="sm:w-[50%] w-[100%]">

          <h2 className="text-[#191919] mb-5 heading-gradient-hero sm:text-left text-center leading-[140%] text-[48px] font-semibold">
            {title}
          </h2>
          <p className="text-[#8B8B8B] sm:text-left text-center leading-[29px] text-[20px] font-bold mb-[26px]">
            {desc}
          </p>

          <button className="sm:mb-[50px] sm:rounded-lg mt-[26px] bg-[#502FCF] text-[white] px-[16px] py-[15px] rounded-[20px] font-semibold sm:w-[40%] w-[100%]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

// font-style: normal;
// font-weight: 600;
// font-size: 16px;
// line-height: 24px;
// /* identical to box height, or 150% */

// display: flex;
// align-items: center;
// text-align: right;
{/* <p class="text-center font-bold text-[20px] leading-[25px] mt-[40px] mb-[10px] sm:text-left ">The way that your business can grow on your own terms and stay ahead - at speed.</p> */ }