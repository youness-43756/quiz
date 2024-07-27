import {
  QuizQuestionTypes,
  QuizQuestionsTypes,
} from "@/lib/quiz-questions/qTypes";
import { Dispatch, SetStateAction } from "react";

export type isAnsweredTypes = {
  status: boolean;
  answer: boolean;
  rightOne: string;
  userOne: string;
};
export type scoreTypes = { points: number; result: string };

export interface QuizContextType {
  subject: string;
  setSubject: Dispatch<SetStateAction<string>>;
  quizState: QuizQuestionsTypes;
  setQuizState: Dispatch<SetStateAction<QuizQuestionsTypes>>;
  quizData: QuizQuestionTypes | undefined;
  setQuizData: Dispatch<SetStateAction<QuizQuestionTypes | undefined>>;
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
