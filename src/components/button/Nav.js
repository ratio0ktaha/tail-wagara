import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/Im"
export default function Navbar() {
    const [click, setClick] = useState()

    return (
        <div className=' mt-[30px] flex justify-between max-w-full w-[1200px] mx-auto items-center p-2 '>
            <div>
                <img className='w-auto h-auto' src="/images/ppc.nav.png" />
            </div>


            <div className='sm:flex hidden  items-center '>

                <a href="#" className="   hover:text-[#600CED]  hover:underline text-[16px] text-[#393939] mr-[50px]  font-semibold flex items-center mx-auto transition duration-300 ">Pricing</a>
                <a href="#" className="   hover:text-[#600CED]  hover:underline text-[16px] text-[#393939] mr-[50px]  font-semibold flex items-center mx-auto transition duration-300 ">Defend</a>
                <a href="#" className="   hover:text-[#600CED]  hover:underline text-[16px] text-[#393939] mr-[50px]  font-semibold flex items-center mx-auto transition duration-300 ">Optimize </a>
                <a href="#" className="     hover:text-[#600CED]  hover:underline text-[16px] text-[#393939] mr-[50px]   font-semibold flex items-center mx-auto transition duration-300 ">Adspy </a>


                
            </div>
            <button className='sm:hidden' onClick={() => setClick(!click)}> <GiHamburgerMenu /></button>

            {click === true ?


                <div className='bg-black  pt-12 pb-16 px-5 flex  flex-col absolute left-[0px]  top-[-1px] w-[50vh] h-screen z-50'>

                    <button className='rounded-[100px] bg-white sm:hidden w-fit p-2' onClick={() => setClick(!click)}> <ImCross fill={"#000"} /></button>
                    <a href="#" className="hover:text-[#600CED]  hover:underline text-[16px] text-[white]   font-semibold  transition duration-300  py-10 ">Pricing</a>
                    <a href="#" className="hover:text-[#600CED] hover:underline text-[16px] text-[white]   font-semibold  transition duration-300  pb-6 ">Defend</a>
                    <a href="#" className="hover:text-[#600CED] hover:underline text-[16px] text-[white]   font-semibold   transition duration-300  pb-6 ">Optimize </a>
                    <a href="#" className="hover:text-[#600CED] hover:underline text-[16px] text-[white]    font-semibold  transition duration-300  ">Adspy </a>
                    <button className='bg-purple-700 text-white p-3 mt-[430px] w-[100%] rounded-[15px]  '>Try For Free</button>
                    <button className='bg-white  text-black p-3 mt-[20px] w-[100%] rounded-[15px]  '>login</button>

                </div>
                : click === false ? "" : ""}

            <div className='sm:flex hidden items-center justify-center  '>
                <a href="#" className=" hover:text-[#600CED]  hover:underline text-[16px] text-[#393939]  font-semibold  items-center transition duration-300 ">Blog </a>
                <button className='ml-6 px-6 font-bold  py-4   hover:bg-primary-hover hover:text-[#fff] text-[16px] text-[#fff] bg-[#502FCF] rounded-[8px] transition duration-300 block text-center leading-none undefined'> Start now </button>
            </div>


        </div>
    )
}




// import React, { useState } from 'react'

// export default function index() {
//   const [toggle, setToggle] = useState()
//   return (
//     <div className='flex flex-col'>
//       <button onClick={() => setToggle(!toggle)}>click me</button>

//       {toggle === true ?
//         <div className='mr-10 '>show</div>
//        : toggle === false ? "else" : ""}
//     </div>
//   )
// }






