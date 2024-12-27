import React, { useEffect, useState } from "react";
import Image from "next/image";
import quiz from "../../public/images/career/quiz.png";
import completed from "../../public/images/career/completed.png"; // Assuming this image is in your public folder
import { useRouter } from "next/router";
import StepperComponent from "./stepper";
import { applyJobThroughResume, getApplicationForm } from "./applyApi";
import { JobContext } from "@/context/JobContext";
import { useContext } from "react";

const Page3 = () => {
  const [answer, setAnswer] = useState('');
  const [decimalAnswer, setDecimalAnswer] = useState('');
  const [checkedQuestions, setCheckedQuestions] = useState({});
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(2);
  const [formId, setFormId] = useState(null);
  const [formData, setFormData] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status
  const [isSuccess, setIsSuccess] = useState(false); // New state to track success response
  let { job, setJob } = useContext(JobContext);
  const [isCharValid, setisCharValid] = useState(true);

  const handleAnswerChange = (e) => {
    const input = e.target.value;
    setAnswer(input);
    if (input.length < 10) {
      setisCharValid(false);
    } else {
      setisCharValid(true);
    }
  };

  const handleDecimalChange = (e) => {
    setDecimalAnswer(e.target.value);
  };

  const handleCheckboxChange = (index) => (event) => {
    setCheckedQuestions((prevState) => ({
      ...prevState,
      [index]: event.target.checked,
    }));
  };

  useEffect(() => {
    const step = parseInt(router.query.activeStep, 10);
    if (!isNaN(step)) {
      setActiveStep(step);
    }
  }, [router.query.activeStep]);

  useEffect(() => {
    const getFormId = () => {
      const formId = job?.application_form_id;
      return formId;
    };

    const formId = getFormId();
    setFormId(formId);
    if (formId) {
      FetchApplicationForm(formId);
    }
  }, [job]);

  const FetchApplicationForm = (formId) => {
    getApplicationForm(formId).then((response) => {
      if (response.status === "error") {
        console.error(response.message);
      } else {
        console.log("Application Form Data:", response.data);
        setFormData(response.data);
      }
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true); // Set to true when submission starts
    const jobId = job?.job_id;
    const jobDetails = JSON.parse(localStorage.getItem("resume"));

    const body = {
      job_id: jobId,
      name: jobDetails.name,
      phone_number: jobDetails?.contact?.phone_number || 1234512345,
      email: jobDetails?.contact?.email[0] || "tusha@gmail.com",
      contact: jobDetails.contact || "1234567123",
      professional_background: jobDetails.professional_background,
      education: jobDetails.education.map(({ "College name": college_name, Degree: degree, Date: date }) => ({
        college_name, degree, date,
      })),
      skills: [
        {
          technical_skills: ["JavaScript", "TypeScript", "React"],
          soft_skills: ["Communication", "Teamwork"],
        },
      ],
      work_experience: jobDetails.work_experience.map(({ "Company name": company_name, "Job title": job_title, Date: date }) => ({
        company_name, job_title, date,
      })),
      projects: jobDetails.projects.map(({ "Project description": project_description }) => ({
        project_name: "Unnamed Project", project_description, date: "Unknown Date",
      })),
      applicant_name: jobDetails.name,
      applicant_email: jobDetails.contact.email[0],
      notice_period: jobDetails.notice_period,
      current_salary: jobDetails.current_salary,
      expected_salary: jobDetails.expected_salary,
      job_application_score: jobDetails.job_application_score,
      application_resume_id: jobDetails.application_resume_id,
      total_work_experience: jobDetails.total_work_experience,
      preferred_location: jobDetails.preferred_location,
      certifications: [
        {
          title: "Certified JavaScript Developer",
          id: "cert_12345",
          url: "http://certifications.com/cert_12345",
          valid_from: "2021-01-01",
          valid_till: "2023-01-01",
          expire: false,
        },
      ],
      cover_letter: jobDetails.cover_letter,
      video_resume: jobDetails.video_resume,
      linkedin_profile: jobDetails.linkedin_profile,
    };

    console.log("API Request Body:", body);

    try {
      const response = await applyJobThroughResume(jobId, body);
      console.log(response);

      if (response.status === "success") {
        setIsSuccess(true); // Set success state
        setIsSubmitting(false); // Stop the "Please wait" message
      } else {
        alert(response?.message || "An unexpected error occurred. Please try again.");
        setIsSubmitting(false); // Stop the "Please wait" message
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false); // Stop the "Please wait" message
    }
  };

  return (
    <>
      <StepperComponent activeStep={activeStep} />
      <div className="container quiz">
        {isSubmitting && !isSuccess && <p>Please wait...</p>}

        {!isSubmitting && isSuccess ? (
          <div className="quiz-completed" style={{marginRight:"100px",display:"flex",flexDirection:"column",alignItems:" center",justifyContent:"center"}}>
            <p style={{fontSize:"23px"}}>You have successfully applied for the Job!</p>
            <Image src={completed} height={100} style={{width:"500px"}} />
            <button onClick={() => router.push("/career")} className="button" style={{marginBottom:"30px"}}>
              Go to Careers Page
            </button>
          </div>
        ) : (
          <>
            <h1 className="quiz_heading">
              <span>
                <Image src={quiz} height={30} width={30} />
              </span>{" "}
              Quiz
            </h1>
            <h2>Questions</h2>

            {formData && Array.isArray(formData.screening_questions) ? (
              formData.screening_questions.length > 0 ? (
                <div>
                  {formData.screening_questions.map((question, index) => (
                    <div className="quiz_questions" key={index}>
                      <div className="quiz_questions_container">
                        <p>
                          {index + 1}. {question.question}
                        </p>
                        <input
                          type="checkbox"
                          id={`skip_${index}`}
                          name={`skip_${index}`}
                          checked={!!checkedQuestions[index]}
                          onChange={handleCheckboxChange(index)}
                        />
                        <label htmlFor={`skip_${index}`}>Skip</label>
                      </div>

                      {question.questionType === "Open Text" && (
                        <div className="quiz_questions_textarea">
                          <textarea
                            value={answer}
                            onChange={handleAnswerChange}
                            placeholder="Enter your answer here..."
                            className={isCharValid ? "" : "err"}
                          />
                          {!isCharValid && (
                            <p className="validation-text">
                              Your answer must be at least 10 characters long.
                            </p>
                          )}
                        </div>
                      )}
                      {question.questionType === "Decimal Point" && (
                        <div className="quiz_questions_textarea">
                          <textarea
                            value={decimalAnswer}
                            onChange={handleDecimalChange}
                            placeholder="Enter your answer here..."
                          />
                        </div>
                      )}
                      {question.questionType === "Single Choice" && question.options && (
                        <div className="options-container">
                          {question.options.map((option, optionIndex) => (
                            <div
                              className={`option ${            
                                optionIndex % 2 === 0 ? "left" : "right"
                                }`}
                              key={optionIndex}
                            >
                              <input        
                                type="radio"
                                id={`question_${index}_option_${optionIndex}`}
                                name={`question_${index}`}
                                value={option}
                              />
                              <label
                                htmlFor={`question_${index}_option_${optionIndex}`}
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      {question.questionType === "Multiple Choice" &&
                        question.options && (
                          <div className="options-container">
                            {question.options.map((option, optionIndex) => (
                              <div
                                className={`option ${
                                  optionIndex % 2 === 0 ? "left" : "right"
                                  }`}
                                key={optionIndex}
                              >
                                <input
                                  type="checkbox"
                                  id={`question_${index}_option_${optionIndex}`}
                                  name={`question_${index}`}
                                  value={option}
                                />
                                <label
                                  htmlFor={`question_${index}_option_${optionIndex}`}
                                >
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text">No screening questions available.</p>
              )
            ) : (
              <p className="text">Loading Screening Questions...</p>
            )}


            <div className="submitButton">
              <button type="submit" onClick={handleSubmit} className="button">
                Save and Submit →
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page3;
