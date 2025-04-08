import {socialMedia} from "@/data";
import Image from 'next/image';

export default function Footer() {
  return (
    <div id="contact" className="text-white md:mt-26 mt-9 md:mb-8 mb-3 max-w-7xl mx-auto p-4">
      <hr className="border-t border-white/[0.1] w-full"/>
      
      <div className="flex items-center justify-between">
        <div className="md:mt-14 mt-5">
          <div className="font-normal md:text-2xl text-lg">
            <p>kamilpotocki.net@gmail.com</p>
            <p className="mt-2">+48 504 724 105</p>
          </div>
          
          <p className="md:text-base text-xs md:font-normal font-light text-[#737373] md:mt-10 mt-7">
            Copyright © 2025 Kamil Potocki
          </p>
        </div>
        
        <div className="border-l border-white/[0.1] mt-9 md:h-42 h-38 w-3 md:mr-[26vw]"></div>

        <div className="flex items-end flex-col md:gap-3 gap-2 mt-9">
          {socialMedia.map((info) => (
            <div key={info.id}>
              <a href={info.link} target="_blank" className="flex justify-center items-center">
                <p className="mr-4 hidden md:flex">{info.name}</p>
                <div
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#050505] rounded-lg border border-white/[0.1]"
                >
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}