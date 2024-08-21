import React from "react";

interface SingleButtonProps {
    option: string,
    handleAnswer: (answer: string) => void,
    checked?: boolean,
}
export const SingleButton:React.FC<SingleButtonProps> = ({option, handleAnswer, checked = false}) => (
    <button
        key={option}
        className="flex items-center px-4 py-2 h-20 rounded hover:border-pink-300 w-full border-2 gap-4"
        onClick={() => handleAnswer(option)}
    >
        <input type="radio" defaultChecked={checked}/>
        {option}
    </button>
);
