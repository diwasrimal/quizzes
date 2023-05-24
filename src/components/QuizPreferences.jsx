import { useState } from "react";
import {
  quizCategoriesMap,
  difficultiesMap,
  questionTypesMap,
} from "../quizParameters.js";
import QuizCategoryPicker from "./QuizCategoryPicker.jsx";
import QuizDifficultyPicker from "./QuizDifficultyPicker.jsx";
import QuizQuestionTypePicker from "./QuizQuestionTypePicker.jsx";
import QuizQuestionCounter from "./QuizQuestionCounter.jsx";

export default function QuizPreferences({ quizQuestionFetcher }) {
  const quizCategories = Object.keys(quizCategoriesMap);
  const difficulties = Object.keys(difficultiesMap);
  const questionTypes = Object.keys(questionTypesMap);

  const [quizCategory, setQuizCategory] = useState(quizCategories[0]);
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [questionType, setQuestionType] = useState(questionTypes[1]);
  const [questionCount, setQuestionCount] = useState(15);

  function sumbitHandler(e) {
    e.preventDefault();
    quizQuestionFetcher(
      quizCategoriesMap[quizCategory], 
      difficultiesMap[difficulty], 
      questionTypesMap[questionType],
      questionCount
    );
  }

  return (
    <form  onSubmit={sumbitHandler}>
      <QuizCategoryPicker
        quizCategories={quizCategories}
        quizCategory={quizCategory}
        setQuizCategory={setQuizCategory}
      />
      <QuizDifficultyPicker
        difficulties={difficulties}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <QuizQuestionTypePicker
        questionTypes={questionTypes}
        questionType={questionType}
        setQuestionType={setQuestionType}
      />
      <QuizQuestionCounter
        questionCount={questionCount}
        setQuestionCount={setQuestionCount}
      />
      <button>Confirm</button>
    </form>
  );
}
