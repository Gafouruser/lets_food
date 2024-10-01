import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#FFF9EA]'>
    <Image src="/Images/img2Footer.png" width={70} height={70} alt="Let's Food Logo" className='relative top-14 left-[32rem] z-10'/>
    <Image src="/Images/img1Footer.png" width={28} height={28} alt="Let's Food Logo" className='relative top-6 -left-[5.5rem] z-10'/>
      <div className='flex justify-center gap-44 mb-10'>
        <div className='flex flex-col gap-5'>
            <div className="w-32 flex gap-1 justify-center items-center">
                <p className="font-bold">Let's Food</p>
                <Image src="/Images/logoIcone.png" width={30} height={30} alt="Let's Food Logo" />
            </div>
            <p className='text-[#1D1D1DB2] text-sm'>Jalan Semangka Raya, <br /> Telaga Murni,Cikarang Barat, Kab. Bekasi</p>
            <div className="flex gap-5">
                <a href="" title="Network link" className='w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-black/15 shadow-md'>
                    <Image src="/Images/insta.png" width={18} height={18} alt="Let's Food Logo"/>
                </a>
               <a href="" title="Network link" className='w-8 h-8 flex items-center justify-center bg-[#FFCB45] rounded-full shadow-black/15 shadow-md'>
                    <Image src="/Images/facebook.png" width={8} height={8} alt="Let's Food Logo"/>
                </a>
                <a href="" title="Network link" className='w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-black/15 shadow-md'>
                    <Image src="/Images/twitter.png" width={18} height={18} alt="Let's Food Logo"/>
                </a>
            </div>
        </div>
        <div className='flex flex-col gap-5 z-20'>
            <p className="font-bold">Company</p>
            <div className="flex flex-col gap-3">
                <a href="" className='text-sm text-[#1D1D1DB2]'>About Us</a>
                <a href="" className='text-sm text-[#1D1D1DB2]'>Career</a>
                <a href="" className='text-sm text-[#1D1D1DB2]'>How It Work</a>
            </div>
        </div>
        <div className='flex flex-col gap-5 z-20'>
            <p className="font-bold">Policy</p>
            <div className="flex flex-col gap-3">
                <a href="" className='text-sm text-[#1D1D1DB2]'>FAQ</a>
                <a href="" className='text-sm text-[#1D1D1DB2]'>Privacy</a>
                <a href="" className='text-sm text-[#1D1D1DB2]'>Shipping</a>
            </div>
        </div>
        <div className='flex flex-col gap-5 z-20'>
            <p className="font-bold">Get In Touch</p>
            <div className="flex flex-col gap-3">
                <a href="" className='text-sm text-[#1D1D1DB2]'>+62 896 7311 2766</a>
                <a href="" className='text-sm text-[#1D1D1DB2]'>food@example.com</a>
            </div>
        </div>
      </div>
      <Image src="/Images/img3Footer.png" width={45} height={45} alt="Let's Food Logo" className='relative -top-[4.5rem] left-[10.5rem] z-10'/>
      <hr className='border-black mb-8 w-3/4' />
      <p className='text-sm mb-8'>© 2022 Let’s Food. ALL RIGHT RESERVED.</p>
    </div>
  )
}

export default Footer
