import React, { useContext } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import activeIcon from "../../public/images/career/activeStep.png";
import inactiveIcon from "../../public/images/career/inactiveStep.png";
import Image from "next/image";
import { JobContext } from "@/context/JobContext";
import icon from "../../public/images/career/icon.png";
import { useRouter } from "next/router"; // Import useRouter

const StepperComponent = ({activeStep, validateForm, setMissingInfoOpen }) => {
  let {job, setJob} = useContext(JobContext);
  const router = useRouter();

  const steps = [
    { label: "Personal Information", path: "/jobs/apply" },
    { label: "Resume", path: "/jobs/upload" },
    { label: "Quiz", path: "/jobs/questions" },
  ];
  const handleStepClick = (step) => {
    if (activeStep === 0 && !validateForm()) {
      setMissingInfoOpen(true);
    } else {
      router.push(step.path);
    }
  };

  const CustomStepIcon = (props) => {
    const { active, completed,icon } = props;
    return (
      <div className="step">
        <div className="step_image">
          {active || completed ? (
            <Image
              src={activeIcon}
              alt="Active Step"
              width={34}
              height={34}
            />
          ) : (
            <Image
              src={inactiveIcon}
              alt="Inactive Step"
              width={34}
              height={34}
            />
          )}
        </div>
        <div className="step_text">
          {steps[icon - 1].label}
        </div>
      </div>
    );
  };

  const DotConnector = () => {
    return (
      <div className="dot-connector">
        {[...Array(8).keys()].map((_, index) => (
          <div key={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="stepper-container container">
      <div className="stepper-container_field">{job?job.organization.name : ""}
        <Image src={icon} alt="icon" className="stepper-container_field_icon"/>
      </div>
      <h1 className="stepper-container_organization-name">{job?job.organization.name : ""}</h1>
      <h1 className="stepper-container_organization-name_title">Job Title: &nbsp;{job ? job.job_title : ""}</h1>
      <Stepper activeStep={activeStep} className="stepper-container_steps" connector={<DotConnector />}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              onClick={() => handleStepClick(step)}
            >
              {/* {step.label} */}
            </StepLabel>
          </Step>

        ))}
      </Stepper>
    </div>
  );
};

export default StepperComponent;