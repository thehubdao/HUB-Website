import Image from "next/image"


interface AssetImageProps {
    link: string;
    position: string;
    size: string;
}

const AssetImage = ({ link, position, size }: AssetImageProps) => {
    return (
        <div className={`absolute ${position} ${size}`}>
            <Image
                placeholder='blur'
                blurDataURL={link}
                src={link}
                layout='fill'
                loading='lazy'
                objectFit='contain'
                className=''
            />
        </div>
    )
}

export default AssetImage