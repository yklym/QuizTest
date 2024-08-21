import React from "react";

interface GenderButtonProps {
    title: string,
    image: React.ReactElement,
    onClick: () => void,
}

export const GenderButton:React.FC<GenderButtonProps> = ({title, image, onClick}) => {
    return (
        <button
            className="flex flex-col items-center justify-center border-2 min-h-[200px] min-w-[48%] rounded hover:border-pink-300"
            onClick={onClick}
        >
            {image}
            <span className=''>{title}</span>
        </button>
    )
}