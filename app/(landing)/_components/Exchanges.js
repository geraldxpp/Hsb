import React from "react";
import Flag from "@/components/Flag";

const exchanges = [
  {
    flag: "PumpFun",
    title: "PUMPFUN",
    link: "https://pump.fun/coin/FG9DdpYuCbmg3HW9rXuYVTY5h4rWvtF4RT6q1D93pump",
  },
  // {
  //   flag: "Binance",
  //   title: "Binance",
  //   link: "https://pump.fun/coin/99b83VR35uBkxkq3XmFhyEvSFfuQKZeXPwNzG4wxpump",
  // },
];

const Exchanges = () => {
  return (
    <div id="exchanges" className="max-w-[85rem] mx-auto py-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-HSN text-shadow text-center">
          Exchanges
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          WONDERING? 🤔
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-flow-col gap-5 gap-y-20 justify-center justify-items-center">
        {exchanges.map((ex, idx) => (
          <div key={idx} className="shrink-0">
            <Flag props={ex} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
