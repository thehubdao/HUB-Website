import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Toolbar = ({ dark }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`text-xl absolute top-0 left-0 justify-center text-center w-full p-0 lg:p-5 flex z-50 ${
        dark ? "text-gray-200" : "text-black text-opacity-80"
      }`}
    >
      <div className="z-20 p-5 pr-5 lg:pr-0 xl:pr-5 w-full flex justify-between items-center font-medium">
        <a
          href="/"
          className="block lg:hidden transform hover:scale-110 transition-all duration-500 ease-in-out"
        >
          <img
            src="/images/Logos/MGH/webp/mgh_logo.webp"
            className={`h-10 w-10`}
          />
        </a>

        <nav
          className={`hidden lg:flex flex-row justify-between w-full items-center`}
        >
          {/* Logo Home Link */}
          <Link href="/">
            <a className="hidden lg:block mr-5 transform hover:scale-110 transition-all duration-500 ease-in-out">
              <Image
                height={80}
                width={80}
                placeholder="blur"
                blurDataURL="/images/Logos/MGH/webp/mgh_logo.webp"
                src="/images/Logos/MGH/webp/mgh_logo.webp"
                loading="lazy"
                objectFit="cover"
                className="rounded"
              />
            </a>
          </Link>

          {/* Rest of Links */}
          <div className="flex gap-16">
            <Link href="/tools">
              <a className="nav-item pt-1 hover:text-pink-reco">Use Tools</a>
            </Link>
            <Link href="/token">
              <a className="nav-item pt-1 hover:text-pink-reco">Token</a>
            </Link>
            <Link href="/build">
              <a className="nav-item pt-1 hover:text-pink-reco">Metaverse Dev.</a>
            </Link>
            <Link href="/treasury">
              <a className="nav-item pt-1 hover:text-pink-reco">Treasury</a>
            </Link>
            <Link href="/team">
              <a className="nav-item pt-1 hover:text-pink-reco">Contributors</a>
            </Link>
          </div>
        </nav>
        <button
          className={`block float-right ${
            dark ? "text-gray-200" : "text-black text-opacity-80"
          } lg:hidden transform hover:scale-110 transition duration-300 ease-in-out`}
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose size={34} /> : <HiMenuAlt4 size={34} />}
        </button>
      </div>
      <nav
        onClick={() => setOpen(!open)}
        className={`${
          open
            ? "animate__animated animate__fadeInDown"
            : "animate__animated animate__fadeOutUp hidden"
        } p-5 top-0 fixed w-full backdrop-filter backdrop-blur-2xl bg-black bg-opacity-10 flex flex-col space-y-5 items-center pt-20`}
      >
        <Link href="/treasury">
          <a className="nav-item hover:text-pink-reco">Treasury</a>
        </Link>
        <Link href="/tools">
          <a className="nav-item hover:text-pink-reco">Tools</a>
        </Link>
        <Link href="/token">
          <a className="nav-item hover:text-pink-reco">Token</a>
        </Link>
        <Link href="/team">
          <a className="nav-item hover:text-pink-reco">Contributors</a>
        </Link>
        <a
          href="https://docs.metagamehub.io"
          target="_blank"
          className="nav-item hover:text-pink-reco"
        >
          Learn more
        </a>
        <a
          href="https://snapshot.org/#/metagamehub.eth"
          target="_blank"
          className="nav-item hover:text-pink-reco"
        >
          Voting
        </a>
        <a
          href="https://app.metagamehub.io"
          target="_blank"
          className="nav-item hover:text-pink-reco"
        >
          Launch App
        </a>
      </nav>
    </div>
  );
};

export default Toolbar;
