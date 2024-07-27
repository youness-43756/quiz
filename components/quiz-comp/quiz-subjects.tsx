// import { useContext } from "react";
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { QuizContext } from "@/context/contextProvider";
// import { QuizQuestionsWithSubjects } from "@/lib/quiz-questions/q";

// export function SelectQuizSubject() {
//     const context = useContext(QuizContext);

//     if (!context) {
//         return null;
//     }
//     const { SelectSubject, subject } = context;
//     return (
//         <Select
//             onValueChange={(v: string) => SelectSubject(v)}
//             value={subject}
//         >
//             <SelectTrigger className="w-[150px] text-base">
//                 <SelectValue placeholder="Select a subject" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectGroup>
//                     {
//                         QuizQuestionsWithSubjects.map(quiz => (
//                             <SelectItem className="text-base" key={quiz.subject} value={quiz.subject}>
//                                 {quiz.subject}
//                             </SelectItem>
//                         ))
//                     }
//                 </SelectGroup>
//             </SelectContent>
//         </Select>
//     );
// }

import { useContext } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
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
            <SelectTrigger className="w-[150px] text-base relative z-10">
                <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent className="absolute z-20 bg-white shadow-lg">
                <SelectGroup>
                    {
                        QuizQuestionsWithSubjects.map(quiz => (
                            <SelectItem
                                className="text-base"
                                key={quiz.subject}
                                value={quiz.subject}
                                onMouseDown={(e:any) => e.stopPropagation()}
                            >
                                {quiz.subject}
                            </SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

