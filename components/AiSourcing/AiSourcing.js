import React from "react";
import Image from "next/image";
import aiSourcingImage from "@/public/images/features/Ai-sourcing.svg";

const AiSourcing = () => {
  return (
    <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
    <div className="Ind-container">
      <h1 className="Ind-heading">AI Sourcing</h1>
      <p className="Ind-subheading">
        Seamless, Targeted AI-Driven Talent Sourcing{" "}
      </p>

      <div className="Ind-layoutBox">
        <div className="Ind-content">
          <h2 className="Ind-boxTitle">
            Why Elevate Your Hiring Process with AI-Powered Sourcing?
          </h2>
          <p className="Ind-boxText">
            AI Sourcing leverages artificial intelligence to identify and
            attract top talent from diverse candidate pools. Cogno’s
            solutions streamline the process, helping you efficiently discover
            and connect with qualified talent, optimizing recruitment from the
            start.
          </p>
        </div>
        <div className="Ind-imageWrapper">
          <Image src={aiSourcingImage} alt="AI Sourcing" layout="responsive" className="custom-small-image"/>
        </div>
      </div>
      <div className="ind-list">
        <div className="ind">
          <div className="ind-content">
            <h4>Predictive Talent Identification </h4>
            <p>
              Utilize AI to predict and identify potential candidates who best
              match your job requirements, even from passive talent pools,
              ensuring you reach top talent early.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/sourcing/first.svg"
              alt="Information Technology"
            />
          </div>
        </div>
        <div className="ind">
          <div className="ind-content">
            <h4>Diverse Candidate Sourcing </h4>
            <p>
               Leverage AI to source candidates from a wide array of
              backgrounds, promoting diversity and inclusion in your recruitment
              process.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/sourcing/second.svg"
              alt="Finance"
            />
          </div>
        </div>
        <div className="ind">
          <div className="ind-content">
            <h4>Automated Candidate Ranking </h4>
            <p>
              Implement AI-driven algorithms to rank candidates based on their
              qualifications and fit for the role, streamlining the sourcing
              process and prioritizing the best matches.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/sourcing/third.svg"
              alt="Manufacturing"
              className="custom-small-image"
            />
          </div>
        </div>
        <div className="ind">
          <div className="ind-content">
            <h4>Real - time Market Insights </h4>
            <p>
              Access AI-generated insights on current talent market trends,
              helping you make informed decisions on where and how to source the
              best candidates.
            </p>
          </div>
          <div className="ind-image">
            <img
              src="/images/features/ind-features/sourcing/fourth.svg"
              alt="Retail"
              className="custom-small-image"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AiSourcing;
