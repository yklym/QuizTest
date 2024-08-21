import React from "react";
import {SingleButton} from "./ui/SingleButton.tsx";
import {Question} from "../../../types/types.ts";

interface SingleVariantProps {
    currentQuestion: Question,
    handleAnswer: (answer: string) => void,
}

export const SingleVariant: React.FC<SingleVariantProps> = ({currentQuestion, handleAnswer}) => {
    const options = currentQuestion.options || ['yes', 'no'];

    return (
        <div className="flex flex-col gap-4 w-full">
            {
                options.map((option, index) => (
                    <SingleButton
                        key={option}
                        option={option}
                        checked={index === 0}
                        handleAnswer={handleAnswer}
                    />

                ))}
        </div>
    )
}