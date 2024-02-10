import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define an interface for the question structure
interface Question {
  id: number;
  questionText: string;
  options: string[];
}

// Sample questions for demonstration
const questions: Question[] = [
  { id: 1, questionText: "Question 1", options: ['A', 'B', 'C', 'D'] },
  { id: 2, questionText: "Question 2", options: ['A', 'B', 'C', 'D'] },
  { id: 3, questionText: "Question 3", options: ['A', 'B', 'C', 'D'] },
];

// No props for this component, but you could define an interface for them if needed
function ExamPage() {
  const [timeLeft, setTimeLeft] = useState<number>(20 * 60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, questionId: number) => {
    setAnswers({
      ...answers,
      [questionId]: e.target.value,
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitting answers:', answers);
    navigate('/cdl-clone/thank-you'); // Ensure you have a route set up for this path
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Exam Page</h2>
        <div className="rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-lg font-semibold mb-4">{questions[currentQuestionIndex].questionText}</h3>
          <div className="flex flex-col">
            {questions[currentQuestionIndex].options.map((option) => (
              <label key={option} className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name={`answer-${questions[currentQuestionIndex].id}`}
                  value={option}
                  className="mr-2"
                  checked={answers[questions[currentQuestionIndex].id] === option}
                  onChange={(e) => handleAnswerChange(e, questions[currentQuestionIndex].id)}
                />
                {option}. Choice {option}
              </label>
            ))}
          </div>
        </div>
        <div className="text-center mb-4">
          <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0} className="mr-4 px-4 py-2 rounded bg-blue-500 text-white">Previous</button>
          <button onClick={goToNextQuestion} disabled={currentQuestionIndex === questions.length - 1} className="px-4 py-2 rounded bg-blue-500 text-white">Next</button>
        </div>
        <div className="text-center">
          <p>Time Left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</p>
          <button onClick={handleSubmit} className="mt-4 px-6 py-2 rounded bg-green-500 text-white">Submit Exam</button>
        </div>
      </div>
    </section>
  );
}

export default ExamPage;
