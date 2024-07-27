import { useContext } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { QuizContext } from "@/context/contextProvider";
import { QuizQuestionsWithSubjects } from "@/lib/quiz-questions/q";

export function SelectQuizSubject() {
    const context = useContext(QuizContext);

    if (!context) {
        return null;
    }
    const { SelectSubject, subject } = context;

    return (
        <Select
            onValueChange={(v: string) => SelectSubject(v)}
            value={subject}
        >
            <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
                {QuizQuestionsWithSubjects.map(quiz => (
                    <SelectItem className="text-base" key={quiz.subject} value={quiz.subject}>
                        {quiz.subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
