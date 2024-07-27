"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import clsx from "clsx";
import { QuizQuestionsTypes } from "@/lib/quiz-questions/qTypes";

export function QuizProgress({ quizState }: { quizState: QuizQuestionsTypes }) {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress((quizState?.length * 6.25)), 500)
        return () => clearTimeout(timer)
    }, [quizState])

    return <Progress value={progress} className={clsx("w-[100%]", quizState?.length === 0 && "hidden")} />
}
