"use client"
import clsx from "clsx";
import { useContext } from "react";
import { QuizContext } from "@/context/contextProvider";
import { Button } from "../ui/button";
import { ArrowBigRight, Lightbulb } from "lucide-react";
import { SelectQuizSubject } from "./quizParts/quiz-subjects";
import { QuizProgress } from "./quizParts/quiz-progress";
import QuizScore from "./quizParts/quiz-score";
import QuizAnswersButtons from "./quizParts/quiz-answers-buttons";
import QuizQuestion from "./quizParts/quiz-question";

export default function QuizWrapper() {
    const context = useContext(QuizContext);
    if (!context) {
        return null;
    }
    const { Replay, score, quizState, quizData, NextQuestion, isAnswered, showAnswer, HightLightRightAnswer } = context;
    return (
        <section className="w-full h-full md:max-w-2xl flex flex-col gap-5 justify-center mx-auto">
            <div className={clsx("w-full mb-4 md:flex-col md:items-center flex-col items-start gap-4", quizData ? "flex" : "hidden")}>
                <div className="w-full flex justify-between items-center">
                    <SelectQuizSubject />
                    <Button size={"sm"} variant={"outline"}
                        disabled={showAnswer.times === 0 && true}
                        onClick={() => HightLightRightAnswer()}
                    >
                        <Lightbulb />
                        <span className="text-base font-semibold">: {showAnswer.times}</span>
                    </Button>
                </div>
                <div className="w-full flex-1">
                    <QuizProgress quizState={quizState} />
                </div>
            </div>
            {
                quizState.length > 0 ? quizData?.question.map(qts => (
                    <div className="w-full flex flex-col items-center md:gap-16 gap-14" key={quizData?.id}>
                        <div className="w-full rounded-xl text-center bg-[#FFBF00] shadow-md border-l-8 border-[#FF9A00] md:px-8 px-3 md:py-6 py-5">
                            <QuizQuestion question={qts.label} />
                        </div>

                        <div className="w-full grid md:grid-cols-2 gap-5 px-4 md:gap-x-8">
                            {
                                qts.answers.map(answer => <QuizAnswersButtons question={qts} answer={answer} key={answer.id} />
                                )
                            }
                        </div>
                    </div>
                )) : <QuizScore replay={Replay} score={score} />
            }
            <div className={clsx("w-full h-10 flex items-center justify-end", !quizData && "hidden")}>
                <Button
                    size={"default"}
                    variant={"secondary"}
                    className={clsx("hidden", isAnswered && "flex" || showAnswer.status && "flex")}
                    onClick={() => NextQuestion(quizData?.id as number)}
                >
                    <span className="text-lg">Next</span>
                    <ArrowBigRight className="ml-2" />
                </Button>
            </div>

        </section >
    )
}