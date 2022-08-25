import React from "react";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import Partner from "../section-element/Partner";

const links = {
  twitter: { icon: <FaTwitter className="text-6xl" />, link: "" },
  instagram: { icon: <FaInstagram className="text-6xl" />, link: "" },
  discord: { icon: <FaDiscord className="text-6xl" />, link: "" },
};

const AvailableOn = () => {
  {
    return (
      <div className="text-center min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center ">
          <h2 className='text-5xl text-center mb-16'>AVAILABLE ON</h2>

          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 self-center">
            <Partner
              classes="max-w-[14rem]"
              link="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8765b1a0eb57ca49be7eacd35b24a574d0203656"
              logo="/images/Logos/webp/uniswap.svg.webp"
            />
            <Partner
              classes="max-w-[14rem]"
              link="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc3c604f1943b8c619c5d65cd11a876e9c8edcf10"
              logo="/images/Logos/webp/quickswap.webp"
            />
            <Partner
              classes="max-w-[14rem]"
              link="https://bilaxy.com/trade/MGH_ETH"
              logo="/images/Logos/webp/bilaxy.webp"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default AvailableOn;
