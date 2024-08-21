import React from "react";

interface ProgressBarProps {
    current: number,
    total: number,
}
export const ProgressBar: React.FC<ProgressBarProps> = ({current, total}) => {
    const percentage = (current / total) * 100;
    return (
        <div className="flex h-3 mb-4 overflow-hidden text-xs flex-col rounded bg-gray-200">
            <div
                className="flex flex-col text-center text-white bg-purple-300 rounded h-3 transition-all duration-500 ease-in-out"
                style={{width: `${percentage}%`}}
            />
        </div>
    )
}