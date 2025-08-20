import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-HSN text-shadow text-center mt-14">
            About $HSN
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`(The New world Order)`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">The New world Order</span>
                {" "}
          
                We are HSN Incorporated, working on revolutionizing the globe by interconnecting global infrastructures and 
                industries to begin an era of advancement, innovation, love, and camaraderie.{" "}
              </p>
              <p className="indent-12 mt-3">
                We are preparing the facilities to operate off the grid through the decentralized blockchain,
                ensuring the absolute protection of our mission. Websites, roadmaps, and everything in between
                are in the works as we speak.{" "}
    
              </p>
              <p className="indent-12 mt-3">
                We have a compound being built, mobile bases of operations, and the ability to create strategic hubs all over the world. We are planning multiple charities to assist in our mission and are also recruiting like-minded people to help them create their own global corporations capable of existing outside the traditional boundaries of monetary limits and arbitrary resource limits.

Welcome to the Revolution.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            fortunately , <span className="text-3xl font-bold">our first </span>{" "}
            prototype facility {" "}
            <span className="italic font-semibold">has completed its</span>,
            journey and evolved✨.
          </p>
          <p className="text-4xl p-10">
            But now{" "}
            <span className="text-5xl font-bold underline decoration-HSN">
              HSN
            </span>{" "}
            is forever on{" "}
            <span className="text-5xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
