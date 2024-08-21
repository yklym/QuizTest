export const questions = [
    {
        id: 1,
        type: 'select-sex',
        question: 'What is your gender assigned at birth?',
        additionalOptions: {
            hideNextButton: true
        },
        conditionalBlocks: {
            female: [
                {
                    id: 2,
                    question: 'Are you currently pregnant?',
                    type: 'single-variant',
                }
            ]
        }
    },
    {
        id: 3,
        question: 'What any known allergies do you have?',
        type: 'custom-input'
    },
    {
        id: 4,
        question: 'How often do you exercise per week?',
        type: 'single-variant',
        options: ['Never', '1-2 times', '3-4 times', '5+ times']
    },
    {
        id: 5,
        question: 'What is your primary diet?',
        type: 'single-variant',
        options: ['Vegetarian', 'Vegan', 'Omnivore', 'Pescatarian', 'Other']
    },
    {
        id: 6,
        question: 'How many hours do you sleep per night on average?',
        type: 'single-variant',
        options: ['Less than 5', '5-6 hours', '7-8 hours', 'More than 8 hours']
    },
    {
        id: 7,
        question: 'Do you smoke?',
        type: 'single-variant',
        options: ['Yes', 'No']
    },
    {
        id: 8,
        question: 'How many glasses of water do you drink daily?',
        type: 'single-variant',
        options: ['Less than 2', '2-4 glasses', '5-7 glasses', '8+ glasses']
    },
    {
        id: 9,
        question: 'Do you consume alcohol?',
        type: 'single-variant',
        options: ['Never', 'Occasionally', 'Regularly']
    },
    {
        id: 10,
        question: 'You are all set!',
        type: 'final-message',
    }
];
