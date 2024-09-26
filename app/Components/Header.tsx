import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center pt-4 pl-32 pr-32 pb-4 w-full h-16">
      <div className="w-32 flex gap-1 justify-center items-center mr-52">
        <p className="font-bold">Let's Food</p>
        <Image src="/Images/logoIcone.png" width={30} height={30} alt="Let's Food Logo" />
      </div>
      <div className="flex gap-16 justify-center items-center mr-32">
        <p className="font-bold border-b-2 border-[#FFCB45]">Home</p>
        <p className="text-[#1D1D1DB2]">Menu</p>
        <p className="text-[#1D1D1DB2]">How it works</p>
        <p className="text-[#1D1D1DB2]">About</p>
        <p className="text-[#1D1D1DB2]">Contact</p>
      </div>
      <div className="flex gap-5 justify-center items-center border-4 mr-20">
      <Image src="/Images/search.png" width={20} height={20} alt="Search" />
      <Image src="/Images/buy.png" width={20} height={20} alt="Search" />
      </div>
      <div className="pt-1 pl-4 pr-4 pb-1 flex gap-3 justify-center items-center bg-[#FFCB45] rounded-full">
      <Image src="/Images/signIn.png" width={13} height={13} alt="Search" />
      <p className="font-bold text-sm">Sign in</p>
      </div>
    </div>
  );
}
