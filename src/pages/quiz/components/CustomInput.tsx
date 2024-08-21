import React, {useEffect, useState} from "react";

interface CustomInputProps {
    handleAnswer: (answer: string) => void,
}

export const CustomInput: React.FC<CustomInputProps> = ({handleAnswer}) => {
    const [inputData, setInputData] = useState('');

    return (
        <div className="flex flex-col gap-4">
            <input
                type="text"
                className="px-4 py-2 border-b-2 border-blue-500 rounded-b-none text-gray-800 focus:outline-none"
                onChange={e => setInputData(e.target.value)}
            />
            <button
                className="px-10 py-2 w-fit rounded bg-purple-300 hover:bg-purple-400 disabled:bg-gray-300 self-center"
                onClick={() => {
                    handleAnswer(inputData)
                }}
                disabled={inputData.trim().length < 2}
            > Next
            </button>
        </div>
    )
}