import { Dispatch, SetStateAction } from "react";

import { QuizQuestionProps, QuizQuestionsProps } from "@/lib/quiz-questions/q";

export type isAnsweredTypes = {
  status: boolean;
  answer: boolean;
  rightOne: string;
  userOne: string;
};

export interface QuizContextType {
  subject: string;
  setSubject: Dispatch<SetStateAction<string>>;
  quizState: QuizQuestionsProps;
  setQuizState: Dispatch<SetStateAction<QuizQuestionsProps>>;
  quizData: QuizQuestionProps | undefined;
  setQuizData: Dispatch<SetStateAction<QuizQuestionProps | undefined>>;
  isAnswered: isAnsweredTypes | undefined;
  setIsAnswered: Dispatch<SetStateAction<isAnsweredTypes | undefined>>;
  disablAnswers: boolean;
  setDisablAnswers: Dispatch<SetStateAction<boolean>>;
  score: scoreTypes;
  setScore: Dispatch<SetStateAction<scoreTypes>>;

  CheckAnswer: (rightOne: string, userOne: string) => void;
  NextQuestion: (questionId: number) => void | boolean;
  Replay: () => void;
  SelectSubject: (value: string) => void;
}
export type scoreTypes = { points: number; result: string };
