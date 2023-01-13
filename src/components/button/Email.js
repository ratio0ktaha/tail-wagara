import React from "react";

export default function email() {
    return (
        <div className=" sm:w-[80%]  flex container text-center justify-center mt-[100px] ">
            <div className="bg-[url('http://localhost:3000/images/second.png')] bg-cover mb-[158px] flex flex-col items-center pb-[100px] pt-[80px] sm:pr-[100px] sm:pl-[100px]">
                <div className="my-20">
                    <div className="font-bold text-3xl mt-[60px]">
                        Your journey starts here
                    </div>
                    <div className="font-semibold text-[20px]  mt-[10px]">
                        Join us on our monthly newsletter to stay updated about all the
                        magic. about all
                    </div>
                    <div
                        className="mt-[50px]   bg-white-500"
                    >



                        <div className=" bg-white border rounded-[10px] lg:w-[55%] sm:w-[60%] m-auto flex
                          p-2
                          justify-between items-center flex-wrap">
                            <input className="font-bold focus:outline-none" type='text' placeholder="Email here " />
                            <button className="bg-[#502FCF] text-[white] text- p-3  rounded-[8px]  leading-2"> Search </button>
                        </div>




                    </div>
                </div>
            </div>
        </div>










    );
}
