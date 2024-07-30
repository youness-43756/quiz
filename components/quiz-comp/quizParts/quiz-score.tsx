import React from 'react'
import { Angry, Flame, Frown, Meh, RotateCcw, Smile } from 'lucide-react'
import { scoreTypes } from '@/context/contextTypes';
import { Button } from '@/components/ui/button';

const scoreEmojiStyle = "w-28 h-28 text-white";

export default function QuizScore({ replay, score }:
    { replay: () => void, score: scoreTypes }) {
    return (
        <div className="flex flex-col items-center gap-8">
            <span className="text-5xl text-center font-bold text-white tracking-wide">{score.result}</span>
            
            {
                score.points < 1 ? <Angry className={scoreEmojiStyle} /> :
                    score.points <= 4 ? <Frown className={scoreEmojiStyle} /> :
                        score.points <= 7 ? <Meh className={scoreEmojiStyle} /> :
                            score.points <= 10 ? <Smile className={scoreEmojiStyle} /> : <Flame className={scoreEmojiStyle} />
            }
            
            <Button variant={"destructive"} onClick={() => replay()}>
                <RotateCcw />
            </Button>
        </div>
    )
}
