import React from "react";
import {GrRestroomMen, GrRestroomWomen} from "react-icons/gr";
import {GenderButton} from "./ui/GenderButton.tsx";

interface GenderQuestionProps {
    handleAnswer: (answer: string) => void,
}

export const GenderQuestion: React.FC<GenderQuestionProps> = ({handleAnswer}) => (

    <div className="flex gap-4">
        <GenderButton
            title={'Male'}
            image={<GrRestroomMen fontSize={'120px'}/>}
            onClick={() => handleAnswer('male')}
        />
        <GenderButton
            title={'Female'}
            image={<GrRestroomWomen fontSize={'120px'}/>}
            onClick={() => handleAnswer('female')}
        />
    </div>

)