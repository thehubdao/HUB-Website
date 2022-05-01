import Link from 'next/link'

import Button from '../elements/Button'
import Partner from '../section-element/Partner'


const Token = () => {

    return (

        <div className="relative w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">

            <h3 className={`font-normal`}>Available on:</h3>

            <div className="mt-10 flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 self-center">
                <Partner classes="max-w-[14rem]" link="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8765b1a0eb57ca49be7eacd35b24a574d0203656" logo="/images/Logos/webp/uniswap.svg.webp" />
                <Partner classes="max-w-[14rem]" link="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc3c604f1943b8c619c5d65cd11a876e9c8edcf10" logo="/images/Logos/webp/quickswap.webp" />
                <Partner classes="max-w-[14rem]" link="https://bilaxy.com/trade/MGH_ETH" logo="/images/Logos/webp/bilaxy.webp" />
            </div>

        </div>
    )
}

export default Token
