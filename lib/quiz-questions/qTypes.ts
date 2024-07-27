export type QuizQuestionsTypes = {
  id: number;
  question: {
    label: string;
    rightAnswer: string;
    answers: {
      id: string;
      answer: string;
    }[];
  }[];
}[];
export type QuizQuestionTypes = {
  id: number;
  question: {
    label: string;
    rightAnswer: string;
    answers: {
      id: string;
      answer: string;
    }[];
  }[];
};

export type QuizQuestionsWithSubjectsTypes = {
  id: number;
  subject: string;
  quiz: {
    id: number;
    question: {
      label: string;
      rightAnswer: string;
      answers: {
        id: string;
        answer: string;
      }[];
    }[];
  }[];
}[];
