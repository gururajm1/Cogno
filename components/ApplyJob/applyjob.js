import React, { useState } from "react";
import UploadResumeDialog from "./dialog";
import StepperComponent from "./stepper";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import MissingInfoDialog from "./missingInfoDialog";

const Page1 = () => {
  const [formData, setFormData] = useState({

    current_salary: '',
    expected_salary: '',
    linkedin_profile:'',
    notice_period: '',
    certifications: '',
    preferred_location:'',
  });
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  // const [missingInfoOpen, setMissingInfoOpen] = useState(false);
  // const [missingFields, setMissingFields] = useState([]);
  const [resumeTitle, setResumeTitle] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleMissingInfoClose = () => {
  //   setMissingInfoOpen(false);
  // };

  const validateForm = () => {
    const { current_salary, expected_salary, notice_period, linkedin_profile, certifications,preferred_location } = formData;
    // const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
    const missingFieldsArray = [];
    if (!current_salary) missingFieldsArray.push('Current Salary');
    if (!expected_salary) missingFieldsArray.push('Expected Salary');
    if (!notice_period) missingFieldsArray.push('Notice Period');
    // if (!linkedin_profile || !linkedinRegex.test(linkedin_profile)) missingFieldsArray.push('LinkedIn Profile');
    if (!certifications) missingFieldsArray.push('Certifications');
    if (!preferred_location) missingFieldsArray.push('Preferred Location');

    // setMissingFields(missingFieldsArray);

    return missingFieldsArray.length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      // Get the existing "resume" data from localStorage
      const existingResume = localStorage.getItem("resume");
      let resumeData = {};

      if (existingResume) {
        resumeData = JSON.parse(existingResume); // Parse the existing data
      }

      // Merge the formData with the existing resume data
      const updatedResumeData = {
        ...resumeData,
        ...formData, // Append current form data to existing resume data
      };

      // Save the updated data back to localStorage
      localStorage.setItem("resume", JSON.stringify(updatedResumeData));

      // Navigate to the next page
      router.push({
        pathname: "/jobs/upload",
      });
    } else {
      // setMissingInfoOpen(true);
      toast.error('Please Fill the Required Fields',{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        style: {
          backgroundColor: 'red', // Your desired color
          color: 'white', // Text color
        },

    })

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
      
    // Check if the field should be a number
    const numericFields = ['current_salary', 'expected_salary', 'notice_period'];

    setFormData(prevData => ({
      ...prevData,
      [name]: numericFields.includes(name) ? parseFloat(value) || '' : value // Parse as a float for numeric fields
    }));
  };

  return (
    <>
    <StepperComponent activeStep={activeStep} validateForm={validateForm}/>
      <div className="resume container">
        <form>
          <div className="upload">
            <label htmlFor="resume">Upload Resume *</label>
            <span onClick={handleClickOpen}>{resumeTitle || 'No file chosen'}</span>
            <UploadResumeDialog open={open} onClose={handleClose} setResumeTitle={setResumeTitle}/>
          </div>
          <div className="resume_fields">
            <div className="resume_fields_content">

              <label htmlFor="currentSalary">Current Salary *</label>
              <input
                type="text"
                name="current_salary"

                placeholder="Enter Amount in LPA"
                value={formData.current_salary}
                onChange={handleChange}
              />
              <label htmlFor="expectedSalary">Expected Salary *</label>
              <input
                type="text"
                name="expected_salary"

                placeholder="Enter Amount in LPA"
                value={formData.expected_salary}
                onChange={handleChange}
              />

              
            </div>
            <div className="resume_fields_content">
              <label htmlFor="noticePeriod">Notice Period *</label>
              <input
                type="text"
                name="notice_period"

                placeholder="Enter number of days"
                value={formData.notice_period}
                onChange={handleChange}
              />
              <label htmlFor="linkedin_profile">LinkedIn Profile Link *</label>
              <input
                type="text"
                name="linkedin_profile"

                placeholder="Enter Link"
                value={formData.linkedin_profile}
                onChange={handleChange}
              />

            </div>
            <div className="resume_fields_content">
              <label htmlFor="preferred_location">Preferred Location *</label>
              <input
                type="text"
                name="preferred_location"

                placeholder="Enter location"
                value={formData.preferred_location}
                onChange={handleChange}
              />
              <label htmlFor="certifications">Certifications *</label>
              <input
                type="text"
                name="certifications"

                placeholder="Please enter your certification name"
                value={formData.certifications}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="button-container">
            <button type="button" onClick={handleNext} className="button">
              Save and Continue →
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      {/* <MissingInfoDialog
        open={missingInfoOpen}
        onClose={handleMissingInfoClose}
        missingFields={missingFields}
        formData={formData}
        setFormData={setFormData}
      /> */}
    </>
  );
};

export default Page1;
