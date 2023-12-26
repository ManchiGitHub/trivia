import { observer } from "mobx-react-lite";
import { IQuestion } from "../store/Question";
import { LoadingSpinner } from "../atoms/LoadingSpinner";
import { ScoreAndQuestionDisplay } from "./ScoreAndQuestionDisplay";
import { AnswerButtons } from "./AnswerButtons";

interface TriviaPageLayoutProps {
    isLoading: boolean,
    currentQuestion: IQuestion,
    currentScore: number,
    currentIndex: number,
    questions: IQuestion[],
    selectedAnswer: string | null,
    handleAnswersClick: (answer: string) => void
};

export const TriviaPageLayout: React.FC<TriviaPageLayoutProps> = observer((props) => {
    return (
        <div className="flex flex-col h-screen">
            {props.isLoading && <LoadingSpinner />}
            <ScoreAndQuestionDisplay {...props} />
            <AnswerButtons
                currentQuestion={props.currentQuestion}
                selectedAnswer={props.selectedAnswer}
                handleAnswersClick={props.handleAnswersClick}
            />
        </div>
    );
});