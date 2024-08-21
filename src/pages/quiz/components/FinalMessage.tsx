import React from "react";
import {SingleButton} from "./ui/SingleButton.tsx";

interface FinalMessageProps {
    handleReset: () => void,
}

export const FinalMessage: React.FC<FinalMessageProps> = ({handleReset}) => (
    <div className="flex flex-col items-center">
        <SingleButton option={'Reset Quiz'} handleAnswer={handleReset}/>
    </div>
)