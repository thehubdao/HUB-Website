import React from "react";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const links = {
  twitter: { icon: <FaTwitter className="text-6xl" />, link: "" },
  instagram: { icon: <FaInstagram className="text-6xl" />, link: "" },
  discord: { icon: <FaDiscord className="text-6xl" />, link: "" },
};

const AvailableOn = () => {
  {
    return (
      <div className="text-center min-h-screen flex items-center justify-center">
        <div>
          <h2 className="text-5xl mb-8">AVAILABLE ON:</h2>
          <div className="flex justify-center gap-4">
            {Object.keys(links).map((key) => (
              <a
                key={key}
                className="py-6 px-14 bg-[#292929] transition-all hover:scale-110"
                href={links[key as keyof typeof links].link}
              >
                {links[key as keyof typeof links].icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default AvailableOn;
