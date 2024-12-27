import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, CircularProgress, TextField,IconButton } from '@mui/material';
import Image from 'next/image';
import upload from "../../public/images/career/upload.png";
import StatusDialog from './statusDialog';
import success from "../../public/images/career/success.png";
import fail from "../../public/images/career/fail.png";
import { getResumeDetailsFromAI, getSimilarityScore } from './applyApi';
import CloseIcon from '@mui/icons-material/Close';
import MissingInfoDialog from "./missingInfoDialog";
import { JobContext } from "@/context/JobContext";

import { getApplicationForm } from "./applyApi";
import { useContext } from "react";
const UploadResumeDialog = ({ open, onClose, setResumeTitle }) => {
    const fileInputRef = useRef(null);
    let { job, setJob } = useContext(JobContext);
    const [statusDialogOpen, setStatusDialogOpen] = useState(false);
    const [statusDialogContent, setStatusDialogContent] = useState({});
    const [resumeDetails, setResumeDetails] = useState(null);
    const [fileName, setFileName] = useState(''); 
    const [loading, setLoading] = useState(false); 
    const [jobData, setJobData] = useState(null);
    const [missingFieldsDialogOpen, setMissingFieldsDialogOpen] = useState(false);
    const [missingFields, setMissingFields] = useState([]); // Track missing fields
    const [applicationForm, setApplicationForm] = useState({})
    const [formData, setFormData] = useState({});
    useEffect(() => {
        const jobFromLocalStorage = localStorage.getItem("job");
        if (jobFromLocalStorage) {
            const parsedJobData = JSON.parse(jobFromLocalStorage);
            setJobData(parsedJobData);
        }
    }, []);

    useEffect(() => {
        const getFormId = () => {
          const formId = job?.application_form_id;
          return formId;
        };
    
        const formId = getFormId();
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
            setApplicationForm(response.data);
          }
        });
      };

    const [error, setError] = useState({ name: false, phone_number: false, email: false });

    const generateRandomId = () => Math.floor(100000 + Math.random() * 900000).toString();

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileUpload = async () => {
        const file = fileInputRef.current.files[0];
    
        if (file) {
            setFileName(file.name);
            setResumeTitle(file.name)
            setLoading(true);
            try {
                const jobFromLocalStorage = localStorage.getItem("job");
                const jobData = jobFromLocalStorage ? JSON.parse(jobFromLocalStorage) : {};
    
                let parsedJobDescription;
                if (typeof jobData.job_description === "string") {
                    try {
                        parsedJobDescription = JSON.parse(jobData.job_description);
                    } catch (e) {
                        parsedJobDescription = jobData.job_description;
                    }
                } else {
                    parsedJobDescription = jobData.job_description;
                }
    
                const [resumeDetailsResult, resumeIdResult] = await Promise.allSettled([
                    getResumeDetailsFromAI(file),
                    getSimilarityScore(file, parsedJobDescription?.Responsibilities || parsedJobDescription)
                ]);

                const resumeDetails = resumeDetailsResult.status === 'fulfilled' && resumeDetailsResult.value.status !== 'error' ? resumeDetailsResult.value : null;
                const resumeId = resumeIdResult.status === 'fulfilled' && resumeIdResult.value.status !== 'error' ? resumeIdResult.value : null;

                if (resumeDetails && resumeId) {
                    // const similarityScore = resumeId?.output?.similarity_score ? Math.round(resumeId.output.similarity_score * 100) + '%' : 'N/A';
                    const similarityScore = resumeId?.output?.similarity_score ? resumeId.output.similarity_score : '0%';
                    const updatedFormData = {
                        total_work_experience: (() => {
                            const years = resumeDetails?.professional_background?.years_of_experience;
    
                            if (typeof years === 'string') {
                                const match = years.match(/\d+/);
                                return match ? Number(match[0]) : 0;
                            }
                            const parsedYears = Number(years);
                            return !isNaN(parsedYears) && parsedYears > 0 ? parsedYears : 0;
                        })(),
                        applicant_name: resumeDetails?.name,
                        applicant_email: resumeDetails?.contact?.email[0],
                        phone_number: resumeDetails?.contact?.phone_number,
                        application_resume_id: generateRandomId(),
                        job_application_score: similarityScore,
                    };

                    if (!updatedFormData.applicant_email  && resumeDetails.contact.urls.length > 0) {
                        let match = resumeDetails.contact.urls[0].match(/mailto:(.+)/);
                        if (match && match[1]) {
                            updatedFormData.applicant_email = match[1];
                            resumeDetails.contact.email.push(match[1]);
                        } 
                    }
                    
                    const mergedResumeData = {
                        ...resumeDetails,
                        ...updatedFormData,
                    };
                    setFormData(mergedResumeData)
                    const missingFieldsArray = [];
                    if (!mergedResumeData.applicant_name) missingFieldsArray.push('applicant_name');
                    if (!mergedResumeData.phone_number) missingFieldsArray.push('phone_number');
                    if (!mergedResumeData.applicant_email) missingFieldsArray.push('applicant_email');
                    if (missingFieldsArray.length > 0) {
                        setMissingFields(missingFieldsArray);
                        setMissingFieldsDialogOpen(true); // Open dialog to fill missing fields
                    } else {
                        localStorage.setItem("resume", JSON.stringify(mergedResumeData));
                        setStatusDialogContent({
                            imageSrc: success,
                            message: 'Successful',
                            text: 'AI has processed your resume and automatically updated the necessary fields',
                        });
                       
                    }
                } else {
                    throw new Error('Failed to process resume details or similarity score');
                }
            } catch (error) {
                setStatusDialogContent({
                    imageSrc: fail,
                    message: 'Error uploading file',
                    text: 'Please try again',
                });
                setStatusDialogOpen(true);
            } finally {
                setLoading(false);
                setStatusDialogOpen(true);
            }
        } else {
            setStatusDialogContent({
                imageSrc: fail,
                message: 'No file selected',
                text: 'Please select a file to upload',
            });
            setStatusDialogOpen(true);
        }
    };

    const handleSaveMissingFields = () => {
        const updatedResume = {
            ...resumeDetails,
            applicant_name: missingFields.name,
            phone_number: missingFields.phone_number,
            applicant_email: missingFields.email,
        };
        localStorage.setItem("resume", JSON.stringify(updatedResume));
        setMissingFieldsDialogOpen(false); // Close dialog after saving
        setStatusDialogContent({
            imageSrc: success,
            message: 'Saved successfully',
            text: 'The missing fields have been saved and resume details are updated',
        });
        setStatusDialogOpen(true);
    };

    const handleStatusDialogClose = () => {
        setStatusDialogOpen(false);
        onClose();
    };
    const handleClose = () => {
        localStorage.setItem("resume", JSON.stringify(formData));
        setMissingFieldsDialogOpen(false);
        setStatusDialogContent({
            imageSrc: success,
            message: 'Saved successfully',
            text: 'The missing fields have been saved and resume details are updated',
        });
        setStatusDialogOpen(true);
    };
    const validateFields = () => {
    const newError = {
        name: !missingFields.name.trim(),
        phone_number: !missingFields.phone_number.trim(),
        email: !missingFields.email.trim(),
    };
    setError(newError);

    return !newError.name && !newError.phone_number && !newError.email;
    };

    const handleSave = () => {
    if (validateFields()) {
        handleSaveMissingFields();
    }
    };
      
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <div style={{ backgroundColor: 'rgba(13, 11, 19, 1)' }}>
                    {!loading && (
                        <DialogTitle style={{ fontSize: '24px', color: 'rgba(255, 255, 255,1)', fontWeight: '600', paddingTop: '8px', textAlign: "center" }}>
                            Upload your resume
                        </DialogTitle>
                    )}
                    <DialogContent sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: '400', fontSize: '18px' }}>
                        {!loading ? (
                            <div style={{
                                backgroundColor: 'rgba(22, 24, 30, 1)',
                                width: '500px',
                                height: '370px',
                                margin: '8px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                <Image src={upload} alt='upload resume' onClick={handleImageClick} />
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                />
                                <h2 style={{ fontWeight: '400', fontSize: '20px', marginTop: '40px', marginBottom: 10 }}>
                                    Drag & drop or <span style={{ fontWeight: '700', fontSize: '20px', color: 'rgba(113, 82, 243, 1)', textDecoration: 'underline' }}> Browse</span>
                                </h2>
                                <p style={{ fontWeight: '400', fontSize: '14px', color: 'rgba(153, 153, 153, 1)', }}>
                                    Supported formats: JPEG, PNG, PDF, DOC
                                </p>
                                {fileName && <p style={{ fontWeight: '400', fontSize: '14px', color: 'white' }}>{fileName}</p>}
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                                <CircularProgress />
                                <p style={{ marginTop: '45px', textAlign: "center", color: 'white', marginBottom: '10px' }}>Please wait, your ATS score is being calculated...</p>
                            </div>
                        )}
                    </DialogContent>
                    {!loading && <DialogActions sx={{ justifyContent: 'center' }}>
                        <Button onClick={handleFileUpload} style={{ backgroundColor: 'rgba(113, 82, 243, 1)', color: 'white', fontSize: '15px', borderRadius: '10px', padding: '7px 70px', marginBottom: '30px' }}>Save</Button>
                    </DialogActions>}
                </div>
            </Dialog>

            <StatusDialog
                open={statusDialogOpen}
                onClose={handleStatusDialogClose}
                imageSrc={statusDialogContent.imageSrc}
                message={statusDialogContent.message}
                text={statusDialogContent.text}
            />
            {/* Dialog to handle missing fields */}
            {/* <Dialog   open={missingFieldsDialogOpen} 
      onClose={handleClose}
      PaperProps={{
        sx: { padding: '20px', borderRadius: '12px', maxWidth: '500px', width: '100%' }
      }}>
                <DialogTitle       sx={{
          fontSize: '24px',
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          position: 'relative',
        }}>Missing Fields    <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'black',
        }}
      >
        <CloseIcon />
      </IconButton></DialogTitle>
                <DialogContent  sx={{ paddingTop: '16px' }}>
                    <TextField
                         label="Name"
                         value={missingFields.name}
                         onChange={(e) => setMissingFields({ ...missingFields, name: e.target.value })}
                         fullWidth
                         margin="normal"
                         error={error.name}
                         helperText={error.name ? 'Name is required' : ''}
                         InputLabelProps={{ style: { color: 'black', fontSize: '16px' } }}
                         sx={{ marginBottom: '16px' }}
                    />
                    <TextField
                      label="Phone Number"
                      value={missingFields.phone_number}
                      onChange={(e) => setMissingFields({ ...missingFields, phone_number: e.target.value })}
                      fullWidth
                      margin="normal"
                      error={error.phone_number}
                      helperText={error.phone_number ? 'Phone number is required' : ''}
                      InputLabelProps={{ style: { color: 'black', fontSize: '16px' } }}
                      sx={{ marginBottom: '16px' }}
                    />
                    <TextField
                         label="Email"
                         value={missingFields.email}
                         onChange={(e) => setMissingFields({ ...missingFields, email: e.target.value })}
                         fullWidth
                         margin="normal"
                         error={error.email}
                         helperText={error.email ? 'Email is required' : ''}
                         InputLabelProps={{ style: { color: 'black', fontSize: '16px' } }}
                    />
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button        sx={{
            backgroundColor: '#7152f3',
            color: 'white',
            width: '85px',
            fontSize: '16px',
            marginRight: '16px',
            marginBottom: '8px',
            padding: '8px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#5931d0',
            },
          }}
          onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog> */}

            <MissingInfoDialog
                open={missingFieldsDialogOpen}
                onClose={handleClose}
                missingFields={missingFields}
                formData={formData}
                setFormData={setFormData}
            />
        </>
    );
};

export default UploadResumeDialog;
