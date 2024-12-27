import React from "react";
// Removed the unused Next.js Image import since we'll use a regular img tag
import aiFeedbackImage from "@/public/images/features/Ai-feedback.svg";

const AiFeedback = () => {
  return (
    <div
      className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
      data-black-overlay="1"
    >
      <div className="container">
        <div className="Ind-container">
          <h1 className="Ind-heading">AI Feedback System</h1>
          <p className="Ind-subheading">
            AI-driven tool that provides transparent and timely feedback
          </p>

          <div className="Ind-layoutBox">
            <div className="Ind-content">
              <h2 className="Ind-boxTitle">AI Feedback System at cogno</h2>
              <p className="Ind-boxText">

                We provide an AI Feedback System that promotes transparency,
                reduces the hiring cycle, and improves the overall effectiveness
                of the recruitment process by delivering clear and actionable
                feedback at every stage.
              </p>
            </div>
            <div className="Ind-imageWrapper">
              
              <img
                src="/images/features/Ai-feedback.svg" 
                alt="AI Sourcing"
                
              />
            </div>
          </div>

          <div className="ind-list">
            <div className="ind">
              <div className="ind-content">
                <h4>Real-Time Feedback Generation</h4>
                <p>
                  Leverage AI to generate immediate, objective feedback after
                  each interview round, providing clear insights into candidate
                  performance.
                </p>
              </div>
              <div className="ind-image">
                <img
                  src="/images/features/ind-features/feedback/first.svg"
                  alt="first"
                  className="custom-small-image"
                />
              </div>
            </div>


            <div className="ind">
              <div className="ind-content">
                <h4>Data-Driven Insights for Employers</h4>
                <p>

                   Provide employers with detailed reports that compile feedback

                  from all interview rounds, helping in making informed hiring
                  decisions and reducing the time to hire.
                </p>
              </div>
              <div className="ind-image">
                <img
                  src="/images/features/ind-features/feedback/second.svg"
                  alt="second"
                />
              </div>
            </div>

            <div className="ind">
              <div className="ind-content">
                <h4>Customized Feedback for Each Role</h4>
                <p>
                  Utilize the AI Feedback System to tailor feedback based on the
                  specific requirements of each role, ensuring relevance and
                  precision in evaluations.
                </p>
              </div>
              <div className="ind-image">
                <img
                  src="/images/features/ind-features/feedback/third.svg"
                  alt="third"
                />
              </div>
            </div>

            <div className="ind">
              <div className="ind-content">
                <h4>Transparent Evaluation Process</h4>
                <p>
                  Ensure full transparency by making feedback visible to both
                  employers and candidates, fostering trust and clarity
                  throughout the hiring process.
                </p>
              </div>
              <div className="ind-image">
                <img
                  src="/images/features/ind-features/feedback/fourth.svg"
                  alt="fourth"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiFeedback;
