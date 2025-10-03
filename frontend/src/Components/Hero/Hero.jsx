import React from "react";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const name = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("name");
    // Redirect to home page
    navigate("/");
  };

  return (
    <>
      <div className="container intro">
        {/* 🔹 Top Row with Welcome + Logout */}
        <header className="px-4 py-3 bg-white shadow-sm hd rounded">
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

        {/* 🔹 Intro Section */}
        <div className="row r1 mx-2 my-3">
          <div className="col-sm-12 d-flex justify-content-center ">
            <div className="intro-text shadow-lg mb-2">
              <div className="interview d-flex flex-column justify-content-center align-items-center g-0">
                <h3>
                  <i className="fa-solid fa-user"></i> Welcome back,{" "}
                  {name || "Guest"}!
                </h3>
                <p>Ready to practice your interview skills?</p>
              </div>
              <div className="intro-btn shadow-sm">
                <Link to="/toInterviewset" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Progress Overview */}
        <div className="row r2 mx-2 my-3 g-3">
          <h3 className="text-center py-1 fw-bold">Progress Overview</h3>
          <div className="col-md-3 col-sm-12">
            <div className="card cd shadow">
              <div className="card-body d-flex justify-content-between">
                <div className="card-text ct d-flex flex-column ">
                  <div>
                    <h5 className="text-danger">Total Interviews</h5>
                    <h5 className="fw-bolder">3</h5>
                  </div>
                  <div>
                    <p className="text-success">+2 from last week</p>
                  </div>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="card cd shadow">
              <div className="card-body d-flex justify-content-between">
                <div className="card-text ct d-flex flex-column">
                  <div>
                    <h5 className="text-danger">Average Score</h5>
                    <h5 className="fw-bold">85%</h5>
                  </div>
                  <div>
                    <p className="text-success">+5% from last month</p>
                  </div>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-medal"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="card cd shadow">
              <div className="card-body d-flex justify-content-between">
                <div className="card-text ct d-flex flex-column">
                  <div>
                    <h5 className="text-danger">Total Practice Time</h5>
                    <h5 className="fw-bold">40m</h5>
                  </div>
                  <div>
                    <p className="text-success">This month</p>
                  </div>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="card cd shadow">
              <div className="card-body d-flex justify-content-between">
                <div className="card-text ct d-flex flex-column">
                  <div>
                    <h5 className="text-danger">Improvement</h5>
                    <h5 className="fw-bold">+20%</h5>
                  </div>
                  <div>
                    <p className="text-success">Since you Started</p>
                  </div>
                </div>
                <div className="card-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Performance Category */}
        <div className="row r3 mx-2 my-5">
          <div className="col-sm-12 col-md-6 mx-auto pc shadow-sm">
            <h4 className="fw-bold text-center mb-3 mt-2">
              <i className="fa-solid fa-chart-bar"></i> Performance Category
            </h4>

            <label>Technical Skills</label>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style={{ width: "25%" }}>
                25%
              </div>
            </div>

            <label>Communication</label>
            <div className="progress mb-3">
              <div className="progress-bar bg-info" style={{ width: "50%" }}>
                50%
              </div>
            </div>

            <label>Problem Solving</label>
            <div className="progress mb-3">
              <div className="progress-bar bg-warning" style={{ width: "75%" }}>
                75%
              </div>
            </div>

            <label>Leadership</label>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" style={{ width: "100%" }}>
                100%
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6"></div>
        </div>

        {/* 🔹 Recent Interviews */}
        <div className="row r4">
          <h4 className="py-2 fw-bold">
            <i className="fa-solid fa-clock-rotate-left"></i> Recent Interviews
          </h4>

          <div className="col-sm-12 ri d-flex justify-content-between align-items-center shadow-sm">
            <div className="techI">
              <h5 className="fw-normal">
                <i className="fa-solid fa-bullseye"></i> Technical Interview
              </h5>
              <p className="text-success">2024-10-2</p>
            </div>
            <div className="comI d-flex gap-3 align-items-center">
              <p>85%</p>
              <button className="btn btn-light">View Details</button>
            </div>
          </div>

          <div className="col-sm-12 ri d-flex justify-content-between align-items-center shadow-sm">
            <div className="techI">
              <h5>
                <i className="fa-solid fa-bullseye"></i> Behavioral Interview
              </h5>
              <p className="text-success">2025-8-2</p>
            </div>
            <div className="comI d-flex gap-3 align-items-center">
              <p>78%</p>
              <button className="btn btn-light">View Details</button>
            </div>
          </div>

          <div className="col-sm-12 ri d-flex justify-content-between align-items-center shadow-sm mb-2">
            <div className="techI">
              <h5>
                <i className="fa-solid fa-bullseye"></i> General Interview
              </h5>
              <p className="text-success">2025-10-2</p>
            </div>
            <div className="comI d-flex gap-3 align-items-center">
              <p>92%</p>
              <button className="btn btn-light">View Details</button>
            </div>
          </div>
        </div>

        {/* 🔹 Feature Cards */}
        <div className="row r5 d-flex justify-content-center">
          <div className="col-md-4 col-sm-12 my-3 d-flex flex-column justify-content-center align-items-center text-center shadow-sm p-3 ft">
            <i className="fa-duotone fa-solid fa-bullseye"></i>
            <h5>Practice Technical Skills</h5>
            <p>Test your programming and problem solving abilities</p>
          </div>
          <div className="col-md-4 col-sm-12 my-3 d-flex flex-column justify-content-center align-items-center text-center shadow-sm p-3 ft">
            <i className="fa-duotone fa-solid fa-medal"></i>
            <h5>Behavioral Questions</h5>
            <p>Improve your storytelling and soft skills</p>
          </div>
          <div className="col-md-4 col-sm-12 my-3 d-flex flex-column justify-content-center align-items-center text-center shadow-sm p-3 ft">
            <i className="fa-duotone fa-solid fa-chart-line"></i>
            <h5>Track Progress</h5>
            <p>Monitor your improvement over time</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
