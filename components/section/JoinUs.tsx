import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const links = {
  twitter: {
    icon: <FaTwitter className="text-6xl" />,
    link: "https://twitter.com/MGH_DAO",
  },
  instagram: {
    icon: <FaInstagram className="text-6xl" />,
    link: "https://www.instagram.com/metagamehub_dao/",
  },
  discord: {
    icon: <FaDiscord className="text-6xl" />,
    link: "https://discord.gg/KjMkxyYh",
  },
  linkedin: {
    icon: <FaLinkedin className="text-6xl" />,
    link: "https://www.linkedin.com/company/metagamehub-dao/",
  },
  telegram: {
    icon: <FaTelegram className="text-6xl" />,
    link: "https://web.telegram.org/z/#-1458226801",
  },
};

const JoinUs = () => {
  return (
    <div className="text-center min-h-screen flex items-center justify-center">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 justify-items-center gap-4 mb-8">
          {Object.keys(links).map((key) => (
            <a
              key={key}
              className=" w-28 p-6 bg-[#292929] transition-all hover:scale-110"
              href={links[key as keyof typeof links].link}
            >
              {links[key as keyof typeof links].icon}
            </a>
          ))}
        </div>
        <a href="/contribute"><h2 className="text-8xl">JOIN US!</h2></a>
      </div>
    </div>
  );
};

export default JoinUs;
