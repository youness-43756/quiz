"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import { QuizContext } from "@/context/contextProvider";

export function QuizProgress() {
    const [progress, setProgress] = React.useState(0)
    const context = React.useContext(QuizContext);
    if (!context) {
        return;
    }
    const { quizState } = context;

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress((quizState?.length * 6.25)), 500)
        return () => clearTimeout(timer)
    }, [quizState])

    return <Progress value={progress} className="w-[100%] " />
}
