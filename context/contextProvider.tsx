"use client";
import {
  QuizQuestionsWithSubjects,
} from "@/lib/quiz-questions/q";
import { createContext, useState, useEffect } from "react";
import { QuizContextType, isAnsweredTypes, scoreTypes } from "./contextTypes";
import { QuizQuestionTypes, QuizQuestionsTypes } from "@/lib/quiz-questions/qTypes";

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  function RandomIndexGenerator(i: any) {
    const randomIndex: number = Math.floor(Math.random() * i.length);
    return randomIndex;
  }
  const [subject, setSubject] = useState(QuizQuestionsWithSubjects[RandomIndexGenerator(QuizQuestionsWithSubjects)].subject);

  //? Bring questions by subject and store it in "quizState":
  const questionsBySubject = QuizQuestionsWithSubjects.filter(q => q.subject === subject);
  const [quizState, setQuizState] = useState<QuizQuestionsTypes>(questionsBySubject[0].quiz);

  //? Stock single "QuizQuestions":
  const [quizData, setQuizData] = useState<QuizQuestionTypes>()

  const [isAnswered, setIsAnswered] = useState<isAnsweredTypes>()
  const [disablAnswers, setDisablAnswers] = useState<boolean>(false)
  const [score, setScore] = useState<scoreTypes>({ points: 0, result: "Horrible score!" });


  //? Every time i remove question from "quizState", generate new question:
  useEffect(() => {
    setQuizData(quizState[RandomIndexGenerator(quizState)])
  }, [quizState])

  //? Determine which subject a user want:
  function SelectSubject(value: string) {
    setIsAnswered(() => undefined)
    setDisablAnswers(() => true);
    setTimeout(() => {
      setDisablAnswers(() => false);
    }, 110);

    setScore(() => ({ points: 0, result: "Horrible score!" }));
    setSubject(() => value);

    const questionsBySubject = QuizQuestionsWithSubjects.filter(q => q.subject === value)
    setQuizState(questionsBySubject[0].quiz);
  }


  function CheckAnswer(rightOne: string, userOne: string) {
    setTimeout(() => {
      //? enable answers buttons:
      setDisablAnswers(() => true);
      if (rightOne === userOne) {

        setScore(prev => ({
          points: prev.points + 1,
          result: (
            prev.points < 4 ? "Bad score" :
              prev.points < 7 ? "Laverage score" :
                prev.points < 10 ? "Good score" : "Excellent score"
          )
        }));
        return setIsAnswered(() => ({ status: true, answer: true, rightOne, userOne }))
      }
      return setIsAnswered(() => ({ status: true, answer: false, rightOne, userOne }));
    }, 210);
  }

  function NextQuestion(questionId: number) {
    setIsAnswered(undefined);
    setDisablAnswers(() => false);

    //? remove current question from "quizState":
    setQuizState(() => quizState.filter(qq => qq.id !== questionId));
    return;
  }

  function Replay() {
    setScore({ points: 0, result: "Horible score!" })
    setQuizState(questionsBySubject[0].quiz)
    return;
  }



  return (
    <QuizContext.Provider value={{
      subject, setSubject,
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


// 0 -> Horrible
// 1 - 4 -> Bad
// 5 - 7 -> Laverage
// 8 - 10 -> Good
// 10< -> Excellent