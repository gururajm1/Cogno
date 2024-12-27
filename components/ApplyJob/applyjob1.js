import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styles from './style.module.scss';
import coverLetterIcon from '../../public/images/applyjob/cover-icon.png';
import videoIcon from '../../public/images/applyjob/video-icon.png';
import placeholderIcon from '../../public/images/applyjob/video-player.png';
import { useRouter } from "next/router";
import StepperComponent from "./stepper";


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CoverLetterEditor = ({ formData, setFormData, namekey }) => {
  const handleChange = (content) => {
    setFormData({ ...formData, [namekey]: content });
  };
  return (
    <ReactQuill
      theme="snow"
      value={formData[namekey]}
      onChange={handleChange}
      modules={{
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ align: "" }, { align: "center" }, { align: "right" }],
          ["link", "image"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
        ],
      }}
      formats={[
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "link",
        "image",
        "list",
        "bullet",
      ]}
      placeholder="Write a cover letter here..."
      className={styles.coverLetterEditor}
    />
  );
};

const ApplyJob1 = () => {
  const [formData, setFormData] = useState({ coverLetter: "", videoURL: "" });
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const namekey = "coverLetter";
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);

  // Validate that all form fields are filled before proceeding
  // const validateForm = () => {
  //   if (formData.coverLetter.trim() === "" && formData.videoURL.trim() === "") {
  //     alert("Please fill in both the cover letter and the video URL.");
  //     return false;
  //   }
  //   setErrorMessage(""); // Clear the error message if validation passes
  //   return true;
  // };

  const handleNext = () => {
    // if (validateForm()) {
    // Retrieve the existing resume data from localStorage
    const existingResume = localStorage.getItem("resume");
    let resumeData = {};

    if (existingResume) {
      resumeData = JSON.parse(existingResume); // Parse the existing data
    }

    // Append cover letter and video resume to the existing data
    const updatedResumeData = {
      ...resumeData,
      cover_letter: formData.coverLetter, // Add the cover letter
      video_resume: formData.videoURL, // Add the video resume URL
    };

    // Save the updated data back to localStorage
    localStorage.setItem("resume", JSON.stringify(updatedResumeData));

    // Navigate to the next page
    router.push({
      pathname: "/jobs/questions",
    });
  // }
  };

  return (
    <>
      <StepperComponent activeStep={activeStep} />
      <div className={`container ${styles.container}`}>

        {/* Cover Letter Section */}
        <div className={`${styles.section}`}>
          <div className={styles.sectionHeader}>
            <div className={styles.iconWrapper}>

              <img src={coverLetterIcon.src} alt="Cover Letter Icon" className={styles.icon} />
            </div>
            <h5>Cover Letter</h5>
          </div>
          <h6 className={styles.sectionHeader_title}>Cover Letter</h6>

          <div className={`${styles.coverLetterEditor}`}>
            <CoverLetterEditor
              formData={formData}
              setFormData={setFormData}

              namekey={namekey}
            />

          </div>
        </div>

        {/* Video Section */}
        <div className={`${styles.section}`}>
          <div className={styles.videoSectionHeader}>
            <div className={styles.iconWrapper1}>

              <img src={videoIcon.src} alt="Video Icon" className={styles.icon1} />

            </div>
            <h5>Video</h5>
          </div>
          <div className={styles.videoContentHeader}>

            <h1>Upload Video</h1>
            <h2>Video Preview</h2>

          </div>
          <div className={`${styles.videoSection}`}>
            <div className={styles.videoContent}>
              <div className={`${styles.inputSection}`}>

                <h1>Provide video URL</h1>

                <input
                  type="text"
                  placeholder="Enter your video URL"
                  value={formData.videoURL}

                  onChange={(e) => setFormData({ ...formData, videoURL: e.target.value })} />
                <p className={styles.note}>Note: Wait for video preview after entering URL. Check URL for errors if preview doesn't appear. Ensure video is shareable.</p>

              </div>
              <div className={`${styles.previewSection}`}>
                <div className={styles.videoPreview}>
                  {formData.videoURL ? (
                    <iframe
                      src={formData.videoURL}
                      title="Video Preview"
                      allowFullScreen

                    ></iframe>
                  ) : (
                    <img src={placeholderIcon.src} alt="Placeholder Icon" className={styles.placeholderIcon} /> // Replace with PNG image

                  )}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Display error message if validation fails */}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        {/* Save and Continue Button */}
        <div className={styles.buttonContainer}>
          <button type="submit" className={`${styles.saveButton}`} onClick={handleNext}>
            Save and Continue →
          </button>
        </div>
      </div>
    </>

  );
};

export default ApplyJob1;
