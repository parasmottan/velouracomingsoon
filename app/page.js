import React from "react";
import Image from "next/image";
import { Montserrat, Bodoni_Moda } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodoni-moda",
});

function page() {
  return (
    <div
      style={{
        background: "url('bgforcoming.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-[100dvh] flex justify-center items-center "
     
    >
      <div className="w-full h-[100dvh] flex flex-col justify-evenly items-center ">
        <h1
          style={montserrat.style}
          className="uppercase text-center font-bold leading-4 md:mt-0 mb-10  text-[#5e3b31] drop-shadow-4xl"
        >
          ITZ <br />
          VELOURA{" "}
        </h1>
        <h1
          style={bodoniModa.style}
          className="text-6xl md:text-[8vw]  md:leading-28 md:mb-0 -mb-1 text-center text-[#5e3b31] drop-shadow-4xl"
        >
          Launching <br /> soon!
        </h1>
        <h2
          style={montserrat.style}
          className="text-center text-[#5e3b31] drop-shadow-4xl md:mt-0 -mt-4 "
        >
          We are currently working on our <br />
          NEW official website!{" "}
        </h2>
        <div className="text-center text-[#010101] bg-[#ffffff] p-2 px-9 rounded-full drop-shadow-4xl md:mt-0 -mt-10">
          STAY TUNED
        </div>
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="ri-instagram-fill text-3xl text-[#5e3b31]"></i>
          </a>

          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-whatsapp-fill text-3xl text-[#5e3b31]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
