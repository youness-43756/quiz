import {
  QuizQuestionTypes,
  QuizQuestionsTypes,
} from "@/lib/quiz-questions/qTypes";
import { Dispatch, SetStateAction } from "react";

export type isAnsweredTypes = {
  status: boolean;
  isAnswerRight: boolean;
  disablAnswersButtons: boolean;
  rightOne: string;
  userOne: string;
};
export type scoreTypes = {
  points: number;
  result: string;
};
export type showAnswerTypes = {
  status: boolean;
  times: number;
};


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
  showAnswer: showAnswerTypes;
  setShowAnswer: Dispatch<SetStateAction<showAnswerTypes>>;

  SelectSubject: (value: string) => void;
  CheckAnswer: (rightOne: string, userOne: string) => void;
  NextQuestion: (questionId: number) => void | boolean;
  Replay: () => void;
  HightLightRightAnswer: () => boolean;
}
