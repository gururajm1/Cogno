import React from "react";
import Image from "next/image";
import aiInterviewImage from "@/public/images/features/ind-features/Ai-interview.svg";

const AiInterview = () => {
  return (
    <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
    <div className="Ind-container">
      <h1 className="Ind-heading">AI Interview</h1>
      <p className="Ind-subheading">
        Effortless, Objective AI-Powered Interviewing
      </p>

      <div className="Ind-layoutBox">
        <div className="Ind-content">
          <h2 className="Ind-boxTitle">
            Why Upgrade to an AI Interview Software?
          </h2>
          <p className="Ind-boxText">
            AI interview software streamlines the interview process by saving
            time and effort, making it suitable for businesses of all sizes. Owl
            bot provides a scalable interview solution that adapts to your
            organization's evolving needs, ensuring a seamless and effective
            interview process from start to finish.
          </p>
        </div>
        <div className="Ind-imageWrapper">
          <Image src={aiInterviewImage} alt="AI Sourcing" layout="responsive" />
        </div>
      </div>
      <div className="ind-list">
        <div className="ind">
          <div className="ind-content">
            <h4>Smart Interview Scheduling</h4>
            <p>
            Utilize AI to automate the scheduling of interviews, offering candidates flexibility while reducing the administrative burden on your HR team.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/interview/first.svg"
              alt="Information Technology"
              className="custom-small-image"
            />
          </div>
          </div>
        <div className="ind">
          <div className="ind-content">
            <h4>Insightful Reports</h4>
            <p>
            AI-generated reports provide detailed feedback on each candidate, consolidating interview results into actionable insights that help in making informed hiring decisions.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/interview/second.svg"
              alt="Finance"
            />
          </div>
        </div>
        <div className="ind">
          <div className="ind-content">
            <h4>Tailored Questions</h4>
            <p>
              Ensure a fair and consistent interviewing process with AI-driven
              evaluations that eliminate human biases, focusing solely on the
              candidates performance and potential.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/interview/third.svg"
              alt="Manufacturing"
            />
          </div>
        </div>
        <div className="ind">
          <div className="ind-content">
            <h4> Instant Video Analysis</h4>
            <p>
              Leverage AI to assess candidate responses during interviews,
              providing instant analysis of both technical and soft skills,
              ensuring a comprehensive evaluation.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/interview/fourth.svg"
              alt="Retail"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AiInterview;
