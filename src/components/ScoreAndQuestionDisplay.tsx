import { observer } from "mobx-react-lite";
import { IQuestion } from "../store/Question";

interface ScoreAndQuestionDisplayProps {
    currentQuestion: IQuestion,
    currentScore: number,
    currentIndex: number,
    questions: IQuestion[]
}

export const ScoreAndQuestionDisplay: React.FC<ScoreAndQuestionDisplayProps> =
    observer((props) => {
        return (
            <div className="flex flex-row h-1/2">
                <div className="flex-1 flex justify-center items-center bg-blue-100">
                    <p className="text-3xl font-sriracha">{props.currentQuestion?.query}</p>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center bg-blue-200">
                    <p className="text-3xl font-sriracha">score: {props.currentScore}</p>
                    <p className="text-lg font-sriracha">{props.currentIndex + 1} / {props.questions.length}</p>
                </div>
            </div>
        );
    });