import React from "react";
import {ProgressBar} from "./ProgressBar.tsx";

interface TopBarProps {
    total: number,
    current: number,
    handleGoBack: () => void,
}
export const TopBar:React.FC<TopBarProps> = ({ total, current, handleGoBack }) => {
    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <button
                        className="text-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-105 disabled:text-transparent"
                        disabled={current < 1}
                        onClick={handleGoBack}
                    >
                        ← Back
                    </button>
                    <p className="text-gray-500 font-bold">GOALS</p>
                    <span className="text-xs text-gray-600">{current} / {total}</span>
                </div>
               <ProgressBar current={current} total={total}  />
            </div>
        </div>
    );
};
