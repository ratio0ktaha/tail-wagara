import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
 < div >

      <div className='flex justify-between  m-auto  rounded-[9px] bg-[#ffffff] p-10'>

        <div className=' flex justify-between m-auto' >
          <div className='w-[397px] h-[auto] text-[48px]   '>Cut the invalid traffic</div>
          <img
            src="/images/banner_img.png" className='w-[421px] h-[165px] '
          />
        </div>
      </div>

      <div className='flex m-[auto]'>
        <img
          src="/images/target_img.png" className='m-[auto] container' />
        <div className='m-[-110px] h-[4px] text-[48px] '>Look for any invalid Ads targeting your keywords
          <div className=' 2xl:font-bold text-[20px]'>The way that your business can grow on your own terms and stay ahead - at speed.</div>
          <button className='bg-black text-white wrap text-[15px] sm:rounded-xl p-[10px] '>Get Started</button>
        </div>
        </div>
      </div>


    </>
  )
}

