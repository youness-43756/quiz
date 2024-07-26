"use client"
import { useContext } from "react";
import { QuizContext } from "@/context/contextProvider";
import { Button } from "../ui/button";
import clsx from "clsx";
import { ArrowBigRight } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { rightAnswerStyle, wrongAnswerStyle } from "./quiz-buttons-effect";
import { SelectQuizSubject } from "./quiz-subjects";

export default function QuizWrapper() {
    const context = useContext(QuizContext);
    if (!context) {
        return;
    }
    const { Replay, score, quizState, quizData, CheckAnswer, NextQuestion, disablAnswers, isAnswered } = context;
    return (
        <section className="w-full h-full md:max-w-2xl flex flex-col gap-10 justify-center items-center mx-auto">
            {/* <div className="w-full">
                <SelectQuizSubject />
            </div> */}
            {
                quizState.length > 0 ? quizData?.question.map(qts => (
                    <div className={clsx("w-full flex flex-col items-center gap-16")} key={quizData?.id}>
                        <div className="w-full rounded-xl text-center text-3xl font-semibold tracking-wider text-primary bg-[#FFBF00] shadow-md border-l-4 border-[#FF9A00] px-8 py-6">
                            <p className="select-none">{qts.label}</p>
                        </div>
                        <div className="w-full grid md:grid-cols-2 gap-5 px-6">
                            {
                                qts.answers.map(answer => <Button
                                    size={"lg"}
                                    key={answer.id}
                                    variant={"secondary"}
                                    disabled={disablAnswers}
                                    onClick={() => CheckAnswer(qts.rightAnswer, answer.id)}
                                    className={clsx("text-lg flex justify-start select-none text-wrap",
                                        isAnswered?.status &&
                                        (isAnswered?.answer ?
                                            (qts.rightAnswer === answer.id && rightAnswerStyle) :

                                            (isAnswered?.userOne === answer.id ? wrongAnswerStyle :
                                                (qts.rightAnswer === answer.id && rightAnswerStyle))
                                        ))
                                    }
                                >
                                    <span className="text-gray-500">{answer.id.toUpperCase()}:</span>
                                    <span className="grow leading-5">{answer.answer}</span>
                                </Button>)
                            }
                        </div>
                    </div>
                )) : <div className="flex flex-col items-center gap-8">
                    <span className="text-5xl font-bold text-white">{score.result}</span>
                    <Button variant={"destructive"} onClick={() => Replay()}>
                        <RotateCcw />
                    </Button>
                </div>
            }
            {
                isAnswered ? (
                    <div className="w-full">
                        <Button
                            size={"default"}
                            variant={"secondary"}
                            className="float-right text-lg"
                            onClick={() => NextQuestion(quizData?.id as number)}
                        >
                            <span>Next</span>
                            <ArrowBigRight className="ml-2" />
                        </Button>
                    </div>
                ) : null
            }
        </section >
    )
}