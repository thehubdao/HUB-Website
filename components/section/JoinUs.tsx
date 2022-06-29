import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const links = {
  twitter: { icon: <FaTwitter className="text-6xl" />, link: "" },
  instagram: { icon: <FaInstagram className="text-6xl" />, link: "" },
  discord: { icon: <FaDiscord className="text-6xl" />, link: "" },
  linkedin: { icon: <FaLinkedin className="text-6xl" />, link: "" },
  telegram: { icon: <FaTelegram className="text-6xl" />, link: "" },
};

const JoinUs = () => {
  return (
    <div className="text-center min-h-screen flex items-center justify-center">
      <div>
        <h3 className="mb-8 text-xl text-pink-reco">Working Groups</h3>
        <div className="flex justify-center gap-4 mb-8">
          {Object.keys(links).map((key) => (
            <a
              key={key}
              className="p-6 bg-[#292929] transition-all hover:scale-110"
              href={links[key as keyof typeof links].link}
            >
              {links[key as keyof typeof links].icon}
            </a>
          ))}
        </div>
        <h2 className="text-8xl">JOIN US!</h2>
      </div>
    </div>
  );
};

export default JoinUs;
