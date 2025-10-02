import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import "./InterviewSetup.css";

function InterviewSetup() {
  const [type, setType] = useState(false);
  const [difficulty, setDifficulty] = useState("Medium");
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [inter, setInter] = useState();
  const name = localStorage.getItem("name");
  if (inter) {
    localStorage.setItem("interviewtype", inter); // It will send the type of interview to the session page
    console.log(inter);
  }
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("name");
   // Redirect to home page
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center my-2">
          <div className="col text-end">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="row r11 mx-2 my-4">
          <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center m1">
            <div className="topic text-center">
              <h3 className="fw-bold">Set Up Your Interview</h3>
            </div>
            <div className="para text-center">
              <p>
                Practice your interview skills with our AI interviewer. Get
                real-time feedback, improve your responses, and build confidence
                for your next interview
              </p>
            </div>
          </div>
        </div>
        <div className="row r12 mx-2 my-3">
          <h5>Choose Interview Type</h5>
          <div className="col-md-4 col-sm-12 m2 mt-3">
            <div className="card w-75 cc1" onClick={() => setType(true)}>
              <div className="card-body">
                <div className="cb d-flex justify-content-start">
                  <div className="inttype">
                    <i className="fa-solid fa-less-than"></i>
                    <i className="fa-solid fa-greater-than"></i>
                  </div>
                  <div className="inttext">
                    <h6 onClick={() => setInter("technical")}>
                      Technical Interview
                    </h6>
                    <div className="d-flex justify-content-center align-items-center qm text-center">
                      <div>
                        <p>3 Questions</p>
                      </div>
                      <div>
                        <p>15-20 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="maininfo mt-3">
                  <p>
                    Test your programming knowledge, problem-solving skills, and
                    technical expertise.
                  </p>
                  <p className="fw-bold">Skill Assessed</p>
                  <div className="d-flex psd">
                    <div>
                      <p>Programming</p>
                    </div>
                    <div>
                      <p>System Design</p>
                    </div>
                  </div>
                  <div className="d-flex psd">
                    <div>
                      <p>Algorithms</p>
                    </div>
                    <div>
                      <p>Databases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 m2 mt-3">
            <div className="card w-75 cc1" onClick={() => setType(true)}>
              <div className="card-body">
                <div className="cb d-flex justify-content-start">
                  <div className="inttype">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="inttext">
                    <h6 onClick={() => setInter("behavioral")}>
                      Behavioral Interview
                    </h6>
                    <div className="d-flex justify-content-center align-items-center qm text-center">
                      <div>
                        <p>3 Questions</p>
                      </div>
                      <div>
                        <p>10-15 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="maininfo mt-3">
                  <p>
                    Assess your soft skills, teamwork, and cultural fit through
                    situational questions.
                  </p>
                  <p className="fw-bold">Skill Assessed</p>
                  <div className="d-flex psd">
                    <div>
                      <p>Communication</p>
                    </div>
                    <div>
                      <p>Leadership</p>
                    </div>
                  </div>
                  <div className="d-flex psd">
                    <div>
                      <p>Problem Solving</p>
                    </div>
                    <div>
                      <p>Teamwork</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 m2 mt-3">
            <div className="card w-75 cc1" onClick={() => setType(true)}>
              <div className="card-body">
                <div className="cb d-flex justify-content-start">
                  <div className="inttype">
                    <i className="fa-solid fa-message"></i>
                  </div>
                  <div className="inttext">
                    <h6 onClick={() => setInter("general")}>
                      General Interview
                    </h6>
                    <div className="d-flex justify-content-center align-items-center qm text-center">
                      <div>
                        <p>3 Questions</p>
                      </div>
                      <div>
                        <p>8-12 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="maininfo mt-3">
                  <p>
                    Cover basic interview questions about your background,
                    motivation, and goals.
                  </p>
                  <p className="fw-bold">Skill Assessed</p>
                  <div className="d-flex psd">
                    <div>
                      <p>Self Presentation</p>
                    </div>
                    <div>
                      <p>Career Goals</p>
                    </div>
                  </div>
                  <div className="d-flex psd">
                    <div>
                      <p>Company Acknowledge</p>
                    </div>
                    <div>
                      <p>Self Confidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row r13 ">
          {type ? (
            <div className="col-sm-12 my-3 px-2 py-2">
              {/* Interview Settings */}
              <div className="card shadow p-4 mb-4 w-75">
                <h5>Interview Settings</h5>
                <div className="row mt-3">
                  {/* Difficulty Dropdown */}
                  <div className="col-md-6">
                    <label className="form-label fw-bold">
                      Difficulty Level
                    </label>
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-primary dropdown-toggle w-75 text-start"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {difficulty}
                      </button>
                      <ul
                        className="dropdown-menu w-75"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => setDifficulty("Easy")}
                          >
                            Easy
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => setDifficulty("Medium")}
                          >
                            Medium
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => setDifficulty("Hard")}
                          >
                            Hard
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Timer Checkbox */}
                  <div className="col-md-6 d-flex align-items-center mt-3 mt-md-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={timerEnabled}
                        onClick={() => setTimerEnabled(true)}
                        id="timerCheck"
                      />
                      <label
                        className="form-check-label fw-bold"
                        htmlFor="timerCheck"
                      >
                        Enable 3-minute timer per question
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="card shadow p-4 mb-4 w-75">
                <h5>What to Expect</h5>
                <div className="d-flex flex-wrap mt-3">
                  <div className="p-2">
                    <span className="badge bg-primary me-2">
                      📋 Interactive Questions
                    </span>
                    <small>3 carefully curated questions</small>
                  </div>
                  <div className="p-2">
                    <span className="badge bg-success me-2">
                      ⏱️ Timed Practice
                    </span>
                    {timerEnabled ? (
                      <small>3 minutes per question</small>
                    ) : (
                      <small>No time limit</small>
                    )}
                  </div>
                  <div className="p-2">
                    <span className="badge bg-info me-2">✅ AI Feedback</span>
                    <small>Detailed analysis and suggestions</small>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="card shadow p-4 mb-4 w-75">
                <h5>Tips for Success:</h5>
                <ul className="mt-2">
                  <li>Speak clearly and take your time to think</li>
                  <li>
                    Use specific examples and quantify results when possible
                  </li>
                  <li>
                    For behavioral questions, use the <b>STAR method</b>{" "}
                    (Situation, Task, Action, Result)
                  </li>
                  <li>
                    For technical questions, explain your thought process step
                    by step
                  </li>
                </ul>
              </div>

              {/* Start Interview */}
              <div className="text-center mb-3">
                <Link className="btn btn-dark btn-lg" to="/tointerviewsession">
                  Start Interview →
                </Link>{" "}
                {/*use will be redirected to the main interview page*/}
              </div>
            </div>
          ) : (
            <div className="col-sm-12 text-center mt-3">
              <Link className="btn btn-primary" to="/tointerviewSession">
                Start Interview →
              </Link>{" "}
              {/*use will be redirected to the main interview page*/}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default InterviewSetup;
