export interface Answer {
    questionId: number;
    answer: string | boolean;
    timeSpent: number;
}

export interface Question {
    id: number;
    type: string;
    question: string;
    options?: string[];
    conditionalBlocks?: { [key: string]: Question[] };
    additionalOptions?: {
        hideNextButton?: boolean;
    };
}


