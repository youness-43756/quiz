"use client"
import { useContext } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { QuizContext } from "@/context/contextProvider";

export function SelectQuizSubject() {
    const context = useContext(QuizContext);
    if (!context) {
        return;
    }
    const { SelectSubject } = context;
    return (
        <Select onValueChange={(v: string) => SelectSubject(v)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
        </Select>
    )
}
