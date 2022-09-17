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
    icon: <FaTwitter className="text-[74px]" />,
    link: "https://twitter.com/MGH_DAO",
  },
  instagram: {
    icon: <FaInstagram className="text-[74px]" />,
    link: "https://www.instagram.com/metagamehub_dao/",
  },
  discord: {
    icon: <FaDiscord className="text-[74px]" />,
    link: "https://discord.gg/uG5XaP6ms3",
  },
  linkedin: {
    icon: <FaLinkedin className="text-[74px]" />,
    link: "https://www.linkedin.com/company/metagamehub-dao/",
  },
  telegram: {
    icon: <FaTelegram className="text-[74px]" />,
    link: "https://web.telegram.org/z/#-1458226801",
  },
};

const JoinUs = () => {
  return (
    <div className="text-center min-h-screen flex sm:items-center md:justify-center mb-20">
      <div>
        <div className="flex sm:flex-row gap-1 justify-center items-center xs:gap-5 flex-wrap mb-10">
          {Object.keys(links).map((key) => (
            <a
              key={key}
              className="w-38 p-6 bg-[#292929] transition-all hover:scale-110"
              href={links[key as keyof typeof links].link}
              target="_blank"
            >
              {links[key as keyof typeof links].icon}
            </a>
          ))}
        </div>
        <a href="/contribute"><h2 className="lg:text-8xl">JOIN US!</h2></a>
      </div>
    </div>
  );
};

export default JoinUs;
