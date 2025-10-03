import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function InterviewSession({ onComplete, onExit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(180);
  const [isRecording, setIsRecording] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const interviewType = localStorage.getItem("interviewtype") || "general";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    navigate("/");
  };

  const mockQuestions = {
    technical: [
      {
        id: 1,
        question:
          "Explain the difference between synchronous and asynchronous programming. Provide examples of when you would use each approach.",
        type: "technical",
        difficulty: "Medium",
        category: "Programming Concepts",
      },
      {
        id: 2,
        question:
          "How would you optimize a slow database query? Walk me through your debugging process.",
        type: "technical",
        difficulty: "Hard",
        category: "Database",
      },
      {
        id: 3,
        question:
          "Describe how you would implement a caching strategy for a high-traffic web application.",
        type: "technical",
        difficulty: "Hard",
        category: "System Design",
      },
    ],
    behavioral: [
      {
        id: 1,
        question:
          "Tell me about a time when you had to work with a difficult team member. How did you handle the situation?",
        type: "behavioral",
        difficulty: "Medium",
        category: "Teamwork",
      },
      {
        id: 2,
        question:
          "Describe a project where you had to learn a new technology quickly. What was your approach?",
        type: "behavioral",
        difficulty: "Medium",
        category: "Learning",
      },
      {
        id: 3,
        question:
          "Give me an example of when you had to make a decision without having all the information you needed.",
        type: "behavioral",
        difficulty: "Hard",
        category: "Decision Making",
      },
    ],
    general: [
      {
        id: 1,
        question: "Why are you interested in this role and our company?",
        type: "general",
        difficulty: "Easy",
        category: "Motivation",
      },
      {
        id: 2,
        question: "Where do you see yourself in 5 years?",
        type: "general",
        difficulty: "Easy",
        category: "Career Goals",
      },
      {
        id: 3,
        question:
          "What are your greatest strengths and how do they apply to this position?",
        type: "general",
        difficulty: "Medium",
        category: "Self Assessment",
      },
    ],
  };

  const questions = mockQuestions[interviewType] || mockQuestions.general;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (timeRemaining > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeRemaining === 0 && currentQuestionIndex < questions.length - 1) {
      handleNextQuestion();
    }
  }, [timeRemaining, isCompleted, currentQuestionIndex]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNextQuestion = () => {
    setResponses([...responses, currentResponse]);
    setCurrentResponse("");
    setTimeRemaining(180);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
      const feedback = generateMockFeedback(
        [...responses, currentResponse],
        questions
      );
      const sessionResults = {
        interviewType,
        totalQuestions: questions.length,
        score: Math.floor(Math.random() * 30) + 70,
        feedback,
        completedAt: new Date().toISOString(),
      };
      onComplete(sessionResults);
    }
  };

  const generateMockFeedback = (responses, questions) => {
    return questions.map((question, index) => ({
      question: question.question,
      response: responses[index] || "No response provided",
      score: Math.floor(Math.random() * 30) + 70,
      feedback:
        "Good response! Consider elaborating more on specific examples and technical details.",
      suggestions: [
        "Provide more concrete examples",
        "Structure your answer with clear beginning, middle, and end",
        "Show quantifiable results where possible",
      ],
    }));
  };

  const toggleRecording = () => setIsRecording(!isRecording);

  if (isCompleted) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div
          className="card text-center shadow-lg border-0 rounded-3 p-5"
          style={{ maxWidth: "700px" }}
        >
          <i className="fa-solid fa-check-circle text-success fa-4x mb-4"></i>
          <h3 className="fw-bold mb-3">Interview Completed!</h3>
          <p className="text-muted fs-5 mb-4">
            Thank you for completing the {interviewType} interview. Your
            responses have been analyzed.
          </p>
          <Link
            className="btn btn-primary btn-lg px-4"
            to="/toresults"
            onClick={onComplete}
          >
            View Results
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Fixed Header */}
      <header className="px-4 py-3 bg-white shadow-sm position-fixed top-0 w-100">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded p-2"
              style={{ width: "40px", height: "40px" }}
            >
              <span className="text-white fw-bold">AI</span>
            </div>
            <span className="fw-semibold fs-4 text-dark">Mock Interview</span>
          </div>
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div
        className="container d-flex justify-content-center align-items-start py-5 mt-5"
        style={{ paddingTop: "100px" }}
      >
        <div style={{ width: "100%", maxWidth: "900px" }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-capitalize">{interviewType} Interview</h2>
            <p className="text-muted">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
            <div className="d-flex justify-content-center align-items-center gap-3 mt-2 flex-wrap">
              <i className="fa-solid fa-clock text-muted"></i>
              <span
                className={`fw-bold ${
                  timeRemaining < 60 ? "text-danger" : "text-muted"
                }`}
              >
                {formatTime(timeRemaining)}
              </span>
              <Link
                className="btn btn-outline-secondary btn-sm"
                to="/tohero"
                onClick={onExit}
              >
                <i className="fa-solid fa-times me-1"></i> Exit Interview
              </Link>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span className="fw-medium">Progress</span>
              <span className="fw-medium">{Math.round(progress)}%</span>
            </div>
            <div className="progress" style={{ height: "10px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="card shadow-lg border-0 mb-4 text-center rounded-3">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3">Interview Question</h5>
              <div className="mb-3">
                <span className="badge bg-secondary rounded-pill me-2">
                  {currentQuestion.category}
                </span>
                <span
                  className={`badge rounded-pill ${
                    currentQuestion.difficulty === "Easy"
                      ? "bg-success"
                      : currentQuestion.difficulty === "Medium"
                      ? "bg-warning text-dark"
                      : "bg-danger"
                  }`}
                >
                  {currentQuestion.difficulty}
                </span>
              </div>
              <p className="lead mb-4">{currentQuestion.question}</p>

              {/* Response */}
              <label className="fw-bold mb-2">Your Response</label>
              <textarea
                className="form-control mb-3"
                rows="6"
                value={currentResponse}
                onChange={(e) => setCurrentResponse(e.target.value)}
                placeholder="Type your response here..."
                style={{ resize: "none" }}
              ></textarea>

              {/* Buttons */}
              <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <button
                  className={`btn btn-outline-${
                    isRecording ? "danger" : "secondary"
                  } btn-sm`}
                  onClick={toggleRecording}
                  style={{ minWidth: "130px" }}
                >
                  <i
                    className={`fa-solid ${
                      isRecording ? "fa-microphone-slash" : "fa-microphone"
                    } me-1`}
                  ></i>
                  {isRecording ? "Stop Recording" : "Start Recording"}
                </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={handleNextQuestion}
                  disabled={timeRemaining === 0}
                  style={{ minWidth: "80px" }}
                >
                  Skip
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleNextQuestion}
                  disabled={!currentResponse.trim() && timeRemaining > 0}
                  style={{ minWidth: "100px" }}
                >
                  {currentQuestionIndex < questions.length - 1
                    ? "Next"
                    : "Complete"}
                </button>
              </div>
            </div>
          </div>

          {/* AI Feedback */}
          <div className="card bg-light shadow-sm border-0 text-center p-3">
            <p className="mb-0">
              <strong>AI Tip:</strong>{" "}
              {interviewType === "behavioral"
                ? "Use the STAR method (Situation, Task, Action, Result)."
                : interviewType === "technical"
                ? "Explain step by step and consider edge cases."
                : "Answer clearly with specific examples."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewSession;
