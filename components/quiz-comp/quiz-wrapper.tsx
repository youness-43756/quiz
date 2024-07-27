"use client"
import { useContext } from "react";
import { QuizContext } from "@/context/contextProvider";
import { Button } from "../ui/button";
import clsx from "clsx";
import { ArrowBigRight } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { rightAnswerStyle, wrongAnswerStyle } from "./quiz-buttons-effect";
import { SelectQuizSubject } from "./quiz-subjects";
import { QuizProgress } from "./quiz-progress";
import QuizScore from "./quiz-score";

export default function QuizWrapper() {
    const context = useContext(QuizContext);
    if (!context) {
        return <div>No data!!!!!!!</div>;
    }
    const { Replay, score, quizState, quizData, CheckAnswer, NextQuestion, disablAnswers, isAnswered } = context;
    return (
        <section className="w-full h-full md:max-w-2xl flex flex-col gap-5 justify-center items-center mx-auto">
            <div className={
                clsx("w-full md:flex-row md:items-center flex-col items-start gap-4", quizData ? "flex" : "hidden")}>
                <div className="w-fit">
                    <SelectQuizSubject />
                </div>
                <div className="w-full flex-1">
                    <QuizProgress quizState={quizState} />
                </div>
            </div>
            {
                quizState.length > 0 ? quizData?.question.map(qts => (
                    <div className={clsx("w-full flex flex-col items-center md:gap-20 gap-16")} key={quizData?.id}>
                        <div className="w-full rounded-xl text-center bg-[#FFBF00] shadow-md border-l-8 border-[#FF9A00] md:px-8 px-4 md:py-6 py-4">
                            <p className="text-3xl md:font-semibold font-bold md:tracking-wider tracking-wide text-primary select-none">
                                {qts.label}
                            </p>
                        </div>
                        <div className="w-full grid md:grid-cols-2 gap-5 px-6">
                            {
                                qts.answers.map(answer => <Button
                                    size={"lg"}
                                    key={answer.id}
                                    variant={"secondary"}
                                    disabled={disablAnswers}
                                    onClick={() => CheckAnswer(qts.rightAnswer, answer.id)}
                                    className={clsx("h-fit py-2 flex justify-start text-lg md:font-medium font-semibold select-none text-wrap gap-2",
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
                )) : <QuizScore replay={Replay} score={score} />
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