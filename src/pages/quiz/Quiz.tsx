import React, {useState, useEffect, useCallback} from 'react';
import {questions} from '../../../data/questions.ts';
import {QuizView} from "./QuizView.tsx";
import {Answer} from "../../types/types.ts";

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [startTime, setStartTime] = useState(Date.now());
    const [questionFlow, setQuestionFlow] = useState(questions);

    const currentQuestion = questionFlow[currentQuestionIndex];

    const saveToStorage = useCallback(() => {
        localStorage.setItem('quiz-answers', JSON.stringify(answers));
        localStorage.setItem('question-flow', JSON.stringify(questionFlow));
    }, [answers, questionFlow])

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('quiz-answers') || '[]');
        const savedQuestions = JSON.parse(localStorage.getItem('question-flow') || '[]');
        const savedIndex = savedAnswers.length > 0 ? savedAnswers.length - 1 : 0;

        if (savedQuestions) {
            setQuestionFlow(savedQuestions);
        }

        setAnswers(savedAnswers);
        setCurrentQuestionIndex(savedIndex + 1);
        setStartTime(Date.now());
    }, []);

    useEffect(() => {
        if (answers.length > 0) {
            saveToStorage();
        }
    }, [answers, questionFlow, saveToStorage]);


    const handleAnswer = useCallback((answer: string) => {
        const timeSpent = Date.now() - startTime;
        const updatedAnswers = answers.map((ans) =>
            ans.questionId === currentQuestion.id
                ? {...ans, answer, timeSpent}
                : ans
        );

        const existingAnswerIndex = updatedAnswers.findIndex(
            (ans) => ans.questionId === currentQuestion.id
        );

        if (existingAnswerIndex === -1) {
            updatedAnswers.push({
                questionId: currentQuestion.id,
                answer,
                timeSpent,
            });
        }

        setAnswers(updatedAnswers);

        let nextIndex = currentQuestionIndex + 1;
        if (
            currentQuestion?.conditionalBlocks &&
            answer in currentQuestion.conditionalBlocks
        ) {
            const additionalQuestions = currentQuestion.conditionalBlocks?.[answer as keyof typeof currentQuestion.conditionalBlocks];

            if (Array.isArray(additionalQuestions) && additionalQuestions.length > 0) {
                const additionalQuestion = questionFlow.find((item) =>
                    additionalQuestions.some((q) => q.id === item.id)
                );
                if (!additionalQuestion) {
                    const newQuestionFlow = [
                        ...questionFlow.slice(0, currentQuestionIndex + 1),
                        ...additionalQuestions,
                        ...questionFlow.slice(currentQuestionIndex + 1),
                    ];
                    setQuestionFlow(newQuestionFlow);
                    nextIndex = currentQuestionIndex + additionalQuestions.length;
                }
            }
        }

        setCurrentQuestionIndex(nextIndex);
        setStartTime(Date.now());
    }, [answers, currentQuestion, currentQuestionIndex, questionFlow, startTime]);


    const handleGoBack = useCallback(() => {
        if (currentQuestionIndex > 0) {
            const answersPoped = [...answers];
            answersPoped.splice(-1);
            setCurrentQuestionIndex(i => i - 1);
            if (currentQuestionIndex > 0) {
                setQuestionFlow(questions)
            }
            saveToStorage();
        }
    }, [answers, currentQuestionIndex, saveToStorage]);

    const handleReset = () => {
        setCurrentQuestionIndex(0);
        setAnswers([]);
        localStorage.removeItem('quiz-answers');
        localStorage.removeItem('questions-flow');
        setStartTime(Date.now());
        setQuestionFlow(questions);
    };

    return (
        <QuizView
            currentQuestionIndex={currentQuestionIndex}
            questionFlow={questionFlow}
            handleGoBack={handleGoBack}
            currentQuestion={currentQuestion}
            answers={answers}
            handleAnswer={handleAnswer}
            handleReset={handleReset}
        />
    );
};

export default Quiz;