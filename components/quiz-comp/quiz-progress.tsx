"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import { QuizQuestionsProps } from "@/lib/quiz-questions/q";
import clsx from "clsx";

export function QuizProgress({ quizState }: { quizState: QuizQuestionsProps }) {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress((quizState?.length * 6.25)), 500)
        return () => clearTimeout(timer)
    }, [quizState])

    return <Progress value={progress} className={clsx("w-[100%]", quizState?.length === 0 && "hidden")} />
}
