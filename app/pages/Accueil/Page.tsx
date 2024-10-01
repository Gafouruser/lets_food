import React from "react";
import Image from "next/image";

export default function Accueil() {
  return (
    <div>
      <div className="flex gap-[30rem] justify-center mb-16 bg-[#FFF9EA] pt-4 pb-4">
        <div className="pt-32">
            <p className="font-bold text-4xl">Be The Fastest In <br /> Delivery Your <span className="text-[#FFCB45]">Food</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet</p>
            <a className="mb-16 w-32 pt-1 pl-4 pr-4 pb-1 flex gap-3 justify-center items-center font-bold bg-[#FFCB45] rounded-full" href="" title="Get Started link">Get Started</a>
        </div>
        <Image src="/Images/menu.png" width={400} height={100} alt="Search" />
      </div>
      <Image src="/Images/cercle1.png" width={50} height={50} className="w-9 h-9 absolute right-[36rem] top-28" alt="Search" />
      <Image src="/Images/cercle2.png" width={50} height={50} className="w-4 h-4 absolute right-[32rem] top-64" alt="Search" />
      <Image src="/Images/cercle3.png" width={50} height={50} className="w-13 h-13 absolute right-40 top-[18rem]" alt="Search" />
      <Image src="/Images/cercle4.png" width={50} height={50} className="w-8 h-8 absolute right-[40rem] top-[30rem]" alt="Search" />
      <div className="absolute top-[30rem]">
      <Image src="/Images/designTrait.png" width={150} height={150} alt="Search" />
      <Image src="/Images/designTrait.png" width={150} height={150} alt="Search" />
      </div>
      <div className="mb-16">
        <p className="text-[#FFCB45] text-center">How it works</p>
        <p className="font-bold text-center text-xl mb-4">What We Serve</p>
        <p className="text-center text-[#1D1D1DB2] mb-4">Product Quality Is Our Priority, And Always Guarantees <br /> Halal And Safety Until It Is In Your Hands.</p>
        <div className="mb-8 flex gap-64 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Image src="/Images/phone.png" width={100} height={100} alt="Search" className="mb-4 text-center" />
            <p className="font-bold text-center text-xl mb-4">Easy To Order</p>
            <p className="text-center text-[#1D1D1DB2]">You only order through <br /> the app</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/Images/transport.png" width={100} height={100} alt="Search" className="mb-4 text-center" />
            <p className="font-bold text-center text-xl mb-4">Fastest Delivery</p>
            <p className="text-center text-[#1D1D1DB2]">Delivery will be on <br /> time</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/Images/person.png" width={100} height={100} alt="Search" className="mb-4 text-center" />
            <p className="font-bold text-center text-xl mb-4">Best Quality</p>
            <p className="text-center text-[#1D1D1DB2]">The best quality of food <br /> of you</p>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <p className="text-[#FFCB45] text-center">Our menu</p>
        <p className="font-bold text-center text-xl mb-4">Our Popular Menu</p>
        <p className="text-center text-[#1D1D1DB2] mb-8">Lorem ipsum dolor sit amet, consectetur  <br /> adipiscing elit ut aliquam.</p>
        <div className="mb-8 flex gap-10 justify-center">
          <div className="bg-[#F1F1F1] flex flex-col justify-center items-center shadow-black/70 shadow-md rounded-xl">
              <Image src="/Images/met1.png" width={150} height={150} alt="Search"/>
              <div className="bg-white mt-4 p-4 rounded-t-3xl rounded-b-xl">
                <p className="font-bold text-center">Mie Ramen</p>
                <p className="text-center mb-2">lorem ipsum</p>
                <div className="flex gap-32 justify-center items-center">
                  <p className="font-bold">$ 20.2</p>
                  <Image src="/Images/yellowHealth.png" width={100} height={100} alt="Search" className="w-5 h-5"/> 
                </div>
              </div>
          </div>
          <div className="bg-[#F1F1F1] flex flex-col justify-center items-center shadow-black/70 shadow-md rounded-xl">
              <Image src="/Images/met2.png" width={150} height={150} alt="Search"/>
              <div className="bg-white mt-4 p-4 rounded-t-3xl rounded-b-xl">
                <p className="font-bold text-center">Salad Tahu</p>
                <p className="text-center mb-2">lorem ipsum</p>
                <div className="flex gap-32 justify-center items-center">
                  <p className="font-bold">$ 20.2</p>
                  <Image src="/Images/blackHealth.png" width={100} height={100} alt="Search" className="w-5 h-5"/> 
                </div>
              </div>
          </div>
          <div className="bg-[#F1F1F1] flex flex-col justify-center items-center shadow-black/70 shadow-md rounded-xl">
              <Image src="/Images/met3.png" width={150} height={150} alt="Search"/>
              <div className="bg-white mt-4 p-4 rounded-t-3xl rounded-b-xl">
                <p className="font-bold text-center">Roti Bakar</p>
                <p className="text-center mb-2">lorem ipsum</p>
                <div className="flex gap-32 justify-center items-center">
                  <p className="font-bold">$ 20.2</p>
                  <Image src="/Images/blackHealth.png" width={100} height={100} alt="Search" className="w-5 h-5"/> 
                </div>
              </div>
          </div>
          <div className="bg-[#F1F1F1] flex flex-col justify-center items-center shadow-black/70 shadow-md rounded-xl">
              <Image src="/Images/met4.png" width={150} height={150} alt="Search"/>
              <div className="bg-white mt-4 p-4 rounded-t-3xl rounded-b-xl">
                <p className="font-bold text-center">Spaghetti</p>
                <p className="text-center mb-2">lorem ipsum</p>
                <div className="flex gap-32 justify-center items-center">
                  <p className="font-bold">$ 20.2</p>
                  <Image src="/Images/blackHealth.png" width={100} height={100} alt="Search" className="w-5 h-5"/> 
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <div className="w-3/4 h-72 rounded-xl bg-[url('/Images/imgavf.png')] bg-center bg-no-repeat flex flex-col justify-center items-center">
          <p className="font-bold text-center text-2xl mb-4 text-white">Join our member and get <br /> discount up to 50%</p>
          <a className="w-24 pt-1 pl-2 pr-2 pb-1 flex gap-3 justify-center items-center font-bold text-sm bg-[#FFCB45] rounded-full" href="" title="Get Started link">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
