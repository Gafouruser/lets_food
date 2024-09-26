import React from "react";
import Image from "next/image";

export default function Accueil() {
  return (
    <div>
      <div className="flex gap-96 mb-4">
        <div className="pt-32">
            <p className="ml-32 font-bold text-4xl">Be The Fastest In</p>
            <p className="ml-32 font-bold mb-4 text-4xl">Delivery Your <span className="text-[#FFCB45]">Food</span></p>
            <p className="ml-32">Lorem ipsum dolor sit amet, consectetur</p>
            <p className="ml-32 mb-4">adipiscing elit ut aliquam, purus sit amet</p>
            <div className="ml-32 mb-16 w-28 pt-1 pl-4 pr-4 pb-1 flex gap-3 justify-center items-center bg-[#FFCB45] rounded-full">
                <p className="font-bold text-sm">Get Started</p>
            </div>
            <div>
                <Image src="/Images/designTrait.png" width={150} height={150} alt="Search" />
                <Image src="/Images/designTrait.png" width={150} height={150} alt="Search" />
            </div>
        </div>
        <Image src="/Images/menu.png" width={400} height={100} alt="Search" />
      </div>
      <div>
        <p className="text-[#FFCB45] text-center">How it works</p>
        <p className="font-bold text-center text-xl mb-4">What We Serve</p>
        <p className="text-center text-[#1D1D1DB2]">Product Quality Is Our Priority, And Always Guarantees </p>
        <p className="text-center text-[#1D1D1DB2] mb-4">Halal And Safety Until It Is In Your Hands.</p>
        <div className="ml-32 mb-8 flex gap-80 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
          <Image src="/Images/phone.png" width={100} height={100} alt="Search" className="mb-4 text-center" />
          <p className="font-bold text-center text-xl mb-4">Easy To Order</p>
          <p className="text-center text-[#1D1D1DB2]">You only order through</p>
          <p className="text-center text-[#1D1D1DB2]">the app</p>
          </div>
          <div className="flex flex-col justify-center items-center">
          <Image src="/Images/transport.png" width={100} height={100} alt="Search" className="mb-4 text-center" />
          <p className="font-bold text-center text-xl mb-4">Easy To Order</p>
          <p className="text-center text-[#1D1D1DB2]">You only order through</p>
          <p className="text-center text-[#1D1D1DB2]">the app</p>
          </div>
          <div className="flex flex-col justify-center items-center">
          <Image src="/Images/person.png" width={100} height={100} alt="Search" className="mb-4 text-center" />
          <p className="font-bold text-center text-xl mb-4">Easy To Order</p>
          <p className="text-center text-[#1D1D1DB2]">You only order through</p>
          <p className="text-center text-[#1D1D1DB2]">the app</p>
          </div>
        </div>
      </div>
    </div>
  );
}
