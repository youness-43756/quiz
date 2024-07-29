
export default function QuizQuestion({ question }: { question: string }) {
    return (
        <p className="text-3xl md:font-semibold font-bold md:tracking-wider tracking-wide text-primary select-none">
            {question}
        </p>
    )
}
