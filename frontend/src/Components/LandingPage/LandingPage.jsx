import { Link } from "react-router-dom";
import React from "react";

export function LandingPage() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="px-4 py-3 bg-white shadow-sm">
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
          <Link to="/toLogin" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container text-center py-5">
        <h1 className="fw-bold display-5 mb-4">
          Master Your Interview Skills with{" "}
          <span className="text-primary d-block">AI-Powered Practice</span>
        </h1>
        <p
          className="fs-5 text-secondary mb-4 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          Get personalized feedback, practice with realistic scenarios, and
          build confidence for your next job interview with our advanced AI
          interview simulator.
        </p>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
          <Link
            to="/toLogin"
            className="btn btn-lg btn-primary d-flex align-items-center justify-content-center gap-2"
          >
            <i className="fa-solid fa-play"></i>
            Start Practice Interview
          </Link>
          <Link to="/toLogin" className="btn btn-lg btn-outline-primary">
            View Dashboard
          </Link>
        </div>

        {/* Features */}
        <div className="row g-4 mt-5">
          <div className="col-md-4 text-center">
            <div
              className="bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "64px", height: "64px" }}
            >
              <i className="fa-solid fa-brain text-primary fs-2"></i>
            </div>
            <h3 className="fs-5 fw-semibold mb-2">AI-Powered Questions</h3>
            <p className="text-secondary">
              Dynamic question generation based on your role, experience level,
              and industry focus.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <div
              className="bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "64px", height: "64px" }}
            >
              <i className="fa-solid fa-chart-line text-primary fs-2"></i>
            </div>
            <h3 className="fs-5 fw-semibold mb-2">Real-time Feedback</h3>
            <p className="text-secondary">
              Get instant analysis of your responses, communication skills, and
              areas for improvement.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <div
              className="bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "64px", height: "64px" }}
            >
              <i className="fa-solid fa-shield-halved text-primary fs-2"></i>
            </div>
            <h3 className="fs-5 fw-semibold mb-2">Progress Tracking</h3>
            <p className="text-secondary">
              Monitor your improvement over time with detailed analytics and
              performance metrics.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
