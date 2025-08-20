import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://t.me/HSNINC",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://x.com/cxrpseDFS",
    title: "x",
    icon: "X",
  },
  {
    link: "",
    title: "Instagram",
    icon: "Instagram",
  },
  {
    link: "",
    title: "Youtube",
    icon: "Youtube",
  },
  {
    link: "",
    title: "Tiktok",
    icon: "Tiktok",
  },
  {
    link: "i",
    title: "Facebook",
    icon: "Facebook",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="hidden">
        <h2 className="font-stopbuck text-6xl text-HSN text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
