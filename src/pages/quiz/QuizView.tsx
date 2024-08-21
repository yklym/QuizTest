import React from "react";
import {TopBar} from "./components/TopBar.tsx";
import {GenderQuestion} from "./components/GenderQuestion.tsx";
import {SingleVariant} from "./components/SingleVariant.tsx";
import {CustomInput} from "./components/CustomInput.tsx";
import {FinalMessage} from "./components/FinalMessage.tsx";
import {Answer, Question} from "../../types/types.ts";

interface QuizViewProps {
    currentQuestionIndex: number,
    questionFlow: Question[],
    handleGoBack: () => void,
    currentQuestion: Question,
    answers: Answer[],
    handleAnswer: (answer: string) => void,
    handleReset: () => void,
}


export const QuizView: React.FC<QuizViewProps> = ({
                                                      currentQuestionIndex,
                                                      questionFlow,
                                                      handleGoBack,
                                                      currentQuestion,
                                                      handleAnswer,
                                                      handleReset,
                                                  }) => {
  return  (
        <>
            <div className="absolute -z-10 bg-pink-300 w-screen h-[12vw] top-0"/>

            <div
                className="xs:w-[95vw] xl:w-[40vw] bg-white border-2 m-10 px-16 py-5 flex flex-col items-center mx-auto">

                <TopBar
                    current={currentQuestionIndex}
                    total={questionFlow.length - 1}
                    handleGoBack={handleGoBack}
                />
                <h1 className="text-3xl xs:text-xl font-bold mb-6 self-center">{currentQuestion.question}</h1>

                {currentQuestion.type === 'select-sex' && (
                    <GenderQuestion handleAnswer={handleAnswer}/>
                )}

                {currentQuestion.type === 'single-variant' && (
                    <SingleVariant currentQuestion={currentQuestion} handleAnswer={handleAnswer}/>
                )}

                {currentQuestion.type === 'custom-input' && (
                    <CustomInput handleAnswer={handleAnswer}/>
                )}

                {currentQuestion.type === 'final-message' && (
                    <FinalMessage handleReset={handleReset}/>
                )}
            </div>
        </>
    )
}