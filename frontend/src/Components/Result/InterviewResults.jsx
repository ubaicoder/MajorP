import React from "react";

function InterviewResults({ results, onStartNew, onBackToHome }) {
  // ✅ Guard clause: if results not available
  if (!results) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <p className="text-muted fs-5">No results available yet...</p>
      </div>
    );
  }

  const averageScore = results?.score ?? 0;
  const completionDate = results?.completedAt
    ? new Date(results.completedAt).toLocaleDateString()
    : "N/A";

  const getScoreBadge = (score) => {
    if (score >= 90) return { label: "Excellent", color: "success" };
    if (score >= 80) return { label: "Good", color: "primary" };
    if (score >= 70) return { label: "Fair", color: "warning" };
    return { label: "Needs Improvement", color: "danger" };
  };

  const scoreBadge = getScoreBadge(averageScore);

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light py-5 min-vh-100"
      style={{ width: "100vw" }}
    >
      <div
        className="container"
        style={{ maxWidth: "960px", margin: "0 auto" }}
      >
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            <i className="fa-solid fa-trophy text-warning"></i> Interview
            Complete!
          </h2>
          <p className="text-muted fs-5">
            Here’s your detailed performance analysis and feedback
          </p>
        </div>

        {/* Overall Performance */}
        <div className="row g-4 mb-5">
          <div className="col-md-4 col-sm-12">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <h2 className={`fw-bold text-${scoreBadge.color}`}>
                {averageScore}%
              </h2>
              <span className={`badge bg-${scoreBadge.color} fs-6`}>
                {scoreBadge.label}
              </span>
              <p className="text-muted mt-2">Overall Score</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <h2 className="fw-bold">{results?.totalQuestions ?? 0}</h2>
              <p className="text-muted">Questions Completed</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card shadow-sm border-0 text-center p-4 h-100">
              <h4 className="text-capitalize fw-bold">
                {results?.interviewType ?? "N/A"}
              </h4>
              <p className="text-muted">Interview Type</p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Question Analysis */}
          <div className="col-lg-8 col-sm-12">
            <h4 className="fw-bold mb-3">
              <i className="fa-solid fa-message"></i> Question Analysis
            </h4>
            {results?.feedback?.length > 0 ? (
              results.feedback.map((item, index) => (
                <div key={index} className="card shadow-sm mb-4 border-0">
                  <div className="card-header d-flex justify-content-between bg-white">
                    <h6 className="fw-bold mb-0">Question {index + 1}</h6>
                    <span
                      className={`fw-bold text-${
                        getScoreBadge(item.score).color
                      }`}
                    >
                      {item.score}%
                    </span>
                  </div>
                  <div className="card-body">
                    <p className="mb-2">
                      <strong>Question:</strong>{" "}
                      <em className="text-secondary">{item.question}</em>
                    </p>
                    <p>
                      <strong>Your Response:</strong>
                      <span className="bg-light d-block p-2 rounded mt-1">
                        {item.response || "No response provided"}
                      </span>
                    </p>
                    <p className="mt-3">
                      <strong>Feedback:</strong>{" "}
                      <span className="text-muted">{item.feedback}</span>
                    </p>
                    <p>
                      <strong>Suggestions:</strong>
                      <ul className="mb-0">
                        {item?.suggestions?.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted">No feedback available</p>
            )}
          </div>

          {/* Insights Panel */}
          <div className="col-lg-4 col-sm-12">
            <h4 className="fw-bold mb-3">
              <i className="fa-solid fa-chart-line"></i> Insights
            </h4>

            {/* Strengths */}
            <div className="card shadow-sm mb-3 border-0">
              <div className="card-header bg-success text-white fw-bold">
                Strengths
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li>Clear communication style</li>
                  <li>Good use of examples</li>
                  <li>Structured responses</li>
                </ul>
              </div>
            </div>

            {/* Weaknesses */}
            <div className="card shadow-sm mb-3 border-0">
              <div className="card-header bg-danger text-white fw-bold">
                Areas for Improvement
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li>Provide quantifiable results</li>
                  <li>Elaborate on technical details</li>
                  <li>Practice concise storytelling</li>
                </ul>
              </div>
            </div>

            {/* Performance Breakdown */}
            <div className="card shadow-sm mb-3 border-0">
              <div className="card-header fw-bold">Performance Breakdown</div>
              <div className="card-body">
                <label>Communication</label>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
                <label>Technical Knowledge</label>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "78%" }}
                  >
                    78%
                  </div>
                </div>
                <label>Problem Solving</label>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "82%" }}
                  >
                    82%
                  </div>
                </div>
                <label>Clarity</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "74%" }}
                  >
                    74%
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="card shadow-sm border-0">
              <div className="card-header fw-bold">Recommended Next Steps</div>
              <div className="card-body">
                <ul className="mb-0">
                  <li>Practice more {results?.interviewType ?? "interview"} questions</li>
                  <li>Record yourself answering</li>
                  <li>Research industry scenarios</li>
                  <li>Practice with a mentor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center my-5 d-flex flex-wrap gap-3 justify-content-center">
          <button className="btn btn-primary" onClick={onStartNew}>
            <i className="fa-solid fa-rotate-left"></i> Try Another Interview
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fa-solid fa-download"></i> Download Report
          </button>
          <button className="btn btn-outline-info">
            <i className="fa-solid fa-share"></i> Share Results
          </button>
          <button className="btn btn-outline-dark" onClick={onBackToHome}>
            Back to Home
          </button>
        </div>

        {/* Footer Info */}
        <div className="card bg-white border-0 shadow-sm text-center p-3 mt-4">
          <small className="text-muted">
            Completed on {completionDate} | Session ID: #
            {Math.random().toString(36).substr(2, 6).toUpperCase()}
          </small>
        </div>
      </div>
    </div>
  );
}

export default InterviewResults;
