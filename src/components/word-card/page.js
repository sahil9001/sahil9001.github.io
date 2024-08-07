import ArrowIcon from "@/assets/arrow-icon";
import { inter } from "@/fonts/page";
import Image from "next/image";

const TextComponent = ({ heading, caption, linkText, color }) => {
    return <div className="aspect-w-1 aspect-h-1 w-full bg-white flex items-center justify-center">
        <div className="flex flex-col justify-center gap-8 px-36">
            <div className={`text-black font-semibold ${inter.className} text-2xl`}>{heading}</div>
            <div className={`font-normal text-lg ${inter.className} text-slate-500`}>{caption}</div>
            <div style={{
                color: color,
                cursor: 'pointer'
            }} className="flex flex-row items-center gap-2">
                <ArrowIcon currentColor={color} width="14" height="14"/>
                <div className={`text-lg font-semibold ${inter.className}`}>{linkText}</div></div>
        </div>
    </div>
}


export default function WorkCard(props) {
    const {
        side, imgSrc
    } = props;
    const rightSide = side === 'right' ? true : false;
    if (rightSide) {
        return <>
            <div className="w-full bg-white flex items-center justify-center">
                <TextComponent {...props} />
            </div>
            <div className="w-full bg-white flex items-center justify-center">
                <div className="aspect-w-1 aspect-h-1 w-full bg-white flex items-center justify-center">
                    <div className="flex flex-col justify-center items-center text-center w-full h-full">
                        <div className="relative w-full h-full">
                        <div className="absolute bottom-0 left-0 m-4"> {/* Adjust margins as needed */}
                <Image
                    src={imgSrc}
                    layout="fill"
                    objectFit="contain" // Or use "cover" based on your requirement
                    alt="Description of image"
                />
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
    return <><div className="w-full bg-white flex items-center justify-center">
        <div className="aspect-w-1 aspect-h-1 w-full bg-white flex items-center justify-center">
            <div className="flex flex-col justify-center">
                <Image
                    src={imgSrc}
                    layout="fill"
                    objectFit="contain"  // Or use "cover" based on your requirement
                    alt="Description of image"
                />
            </div>
        </div>
    </div>
        <div className="w-full bg-white flex items-center justify-center">
            <TextComponent {...props} />
        </div></>;
}