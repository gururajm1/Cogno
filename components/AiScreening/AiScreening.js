import React from "react";
import Image from "next/image";
import aiFeedbackImage from "@/public/images/features/ind-features/Ai-screening.svg";

const AiFeedback = () => {
  return (
    <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
    <div className="Ind-container">
      <h1 className="Ind-heading">AI Screening</h1>
      <p className="Ind-subheading">
        Efficient, Unbiased AI-Powered Candidate Screening
      </p>

      <div className="Ind-layoutBox">
        <div className="Ind-content">
          <h2 className="Ind-boxTitle">
            Why Upgrade to an AI Screening Software?
          </h2>
          <p className="Ind-boxText">
            Accelerate your recruitment with AI-powered screening software that
            quickly analyzes resumes, automates candidate ranking, and enhances
            your evaluation process. Leverage the power of Artificial
            Intelligence to make smarter, faster hiring decisions, and focus on
            what truly matters—choosing the best talent
          </p>
        </div>
        <div className="Ind-imageWrapper">
          <Image src={aiFeedbackImage} alt="AI Sourcing" layout="responsive" />
        </div>
      </div>
      <div className="ind-list">
        <div className="ind">
          <div className="ind-content">
            <h4>Skill Matching Algorithms</h4>
            <p>
              Leverage AI to match candidate skills with job requirements
              accurately, ensuring that only the most qualified candidates move
              forward in the hiring process
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/screening/first.svg"
              alt="first"
            />
          </div>
        </div>
        <div className="ind">
          <div className="ind-content">
            <h4>Bias Reduction Techniques</h4>
            <p>
              Implement AI models designed to minimize unconscious bias,
              promoting a fair and equitable evaluation process based solely on
              candidate merit.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/screening/second.svg"
              alt="second"
            />
          </div>
        </div>
        <div className="ind">
          <div className="ind-content">
            <h4>Behavioral Analysis Models</h4>
            <p>
              Utilize AI to assess candidate responses in video interviews or
              assessments, providing insights into their soft skills, cultural
              fit, and emotional intelligence.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/screening/third.svg"
              alt="third"
            />
          </div>
        </div>
        <div className="ind">
          <div className="ind-content">
            <h4> Customizable Screening Parameters</h4>
            <p>
              Customized the AI screening process to your specific needs by
              setting parameters that align with the unique requirements of each
              role, ensuring precision in candidate selection.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/screening/fourth.svg"
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
