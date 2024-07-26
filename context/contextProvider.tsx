"use client";
import { QuizQuestionProps, QuizQuestions, QuizQuestionsProps } from "@/lib/quiz-questions/q";
import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react";

type isAnsweredTypes = {
  status: boolean;
  answer: boolean
  rightOne: string;
  userOne: string
}
export type scoreTypes = { points: number; result: string }

interface QuizContextType {
  quizState: QuizQuestionsProps; setQuizState: Dispatch<SetStateAction<QuizQuestionsProps>>;
  quizData: QuizQuestionProps | undefined; setQuizData: Dispatch<SetStateAction<QuizQuestionProps | undefined>>
  isAnswered: isAnsweredTypes | undefined; setIsAnswered: Dispatch<SetStateAction<isAnsweredTypes | undefined>>
  disablAnswers: boolean; setDisablAnswers: Dispatch<SetStateAction<boolean>>
  score: scoreTypes; setScore: Dispatch<SetStateAction<scoreTypes>>

  CheckAnswer: (rightOne: string, userOne: string) => void;
  NextQuestion: (questionId: number) => void | boolean
  Replay: () => void
  SelectSubject: (value: string) => void
}


export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  //? stock all "QuizQuestions":
  function SelectSubject(value: string) {
    console.log(value);
  }

  const [quizState, setQuizState] = useState<QuizQuestionsProps>(QuizQuestions);

  //? Stock single "QuizQuestions":
  const [quizData, setQuizData] = useState<QuizQuestionProps>()

  const [isAnswered, setIsAnswered] = useState<isAnsweredTypes>()
  const [disablAnswers, setDisablAnswers] = useState<boolean>(false)
  const [score, setScore] = useState<scoreTypes>({ points: 0, result: "Horible score!" });

  const randomIndex: number = Math.floor(Math.random() * quizState.length);

  //? Every time i remove question from "quizState", generate new question from new one:
  useEffect(() => {
    setQuizData(quizState[randomIndex])
  }, [quizState])

  function CheckAnswer(rightOne: string, userOne: string) {
    setTimeout(() => {
      setDisablAnswers(() => true);
      if (rightOne === userOne) {
        setScore(prev => ({
          points: prev.points + 1,
          result: (
            score.points < 4 ? "Bad score" :
              score.points < 7 ? "Laverage score" :
                score.points < 10 ? "Good score" : "Excellent score"
          )
        }));
        return setIsAnswered(() => ({ status: true, answer: true, rightOne, userOne }))
      }
      return setIsAnswered(() => ({ status: true, answer: false, rightOne, userOne }));
    }, 360);
  }

  function NextQuestion(questionId: number) {
    setIsAnswered(undefined);
    setDisablAnswers(() => false);

    //? remove current question from "quizState":
    setQuizState(() => quizState.filter(qq => qq.id !== questionId));
    return;
  }

  function Replay() {
    setQuizState(QuizQuestions)
    return;
  }

  return (
    <QuizContext.Provider value={{
      quizState, setQuizState,
      quizData, setQuizData,
      isAnswered, setIsAnswered,
      disablAnswers, setDisablAnswers,
      score, setScore,

      //?functions
      NextQuestion,
      CheckAnswer,
      Replay,
      SelectSubject
    }}>{children}</QuizContext.Provider>
  )
};

