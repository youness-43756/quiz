
export default function QuizQuestion({ question }: { question: string }) {
    return (
        <p className="md:text-3xl text-2xl md:font-semibold font-bold md:tracking-wider tracking-wide text-primary select-none">
            {question}
        </p>
    )
}
