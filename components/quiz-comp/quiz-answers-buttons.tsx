import { QuizContext } from "@/context/contextProvider"
import { useContext } from "react"
import { Button } from "../ui/button"
import clsx from "clsx"
import { rightAnswerStyle, wrongAnswerStyle } from "./quiz-buttons-effect"

type questionTypes = {
    question: {
        label: string
        rightAnswer: string
        answers: {
            id: string
            answer: string
        }[]
    }
    answer: { id: string, answer: string }
}


export default function QuizAnswersButtons({ question, answer }: questionTypes) {
    const context = useContext(QuizContext);
    if (!context) {
        return null;
    }
    const { CheckAnswer, disablAnswers, isAnswered } = context;
    return (
        <Button
            size={"lg"}
            variant={"secondary"}
            disabled={disablAnswers}
            onClick={() => CheckAnswer(question.rightAnswer, answer.id)}
            className={clsx("h-full py-2 flex justify-start md:text-lg text-base md:font-medium font-semibold select-none text-wrap gap-2",
                isAnswered?.status &&
                (isAnswered?.answer ?
                    (question.rightAnswer === answer.id && rightAnswerStyle) :

                    (isAnswered?.userOne === answer.id ? wrongAnswerStyle :
                        (question.rightAnswer === answer.id && rightAnswerStyle))
                ))
            }
        >
            <span className="text-gray-500">{answer.id.toUpperCase()}:</span>
            <span className="grow leading-5">{answer.answer}</span>
        </Button>
    )
}
