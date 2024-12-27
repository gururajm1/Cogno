import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import fail from "../../public/images/career/fail.png";

const fieldMappings = {
  'applicant_name': 'Applanct Name',
  'phone_number': 'Phone Number',
  'applicant_email': 'Email'
};

const MissingInfoDialog = ({ open, onClose, missingFields, formData, setFormData }) => {
  const [tempFormData, setTempFormData] = useState({});

  useEffect(() => {
    if (open) {
      const initialTempData = {};
      missingFields.forEach((field) => {
        // const formKey = fieldMappings[field];
        initialTempData[field] = formData[field] || '';
      });
      setTempFormData(initialTempData); 
    }
  }, [open, missingFields, formData]);

  const handleInputChange = (fieldKey, value) => {
    // const numericFields = ['current_salary', 'expected_salary', 'notice_period'];
    if (fieldKey === 'phone_number' || fieldKey === 'applicant_email') {
      let contact = formData.contact || {};
      if (fieldKey === 'phone_number') contact.phone_number = value
      setTempFormData((prevTempData) => ({
        ...prevTempData,
        contact:contact,
        [fieldKey]: value 
      }));
    } else {
      setTempFormData((prevTempData) => ({
        ...prevTempData,
        [fieldKey]: value 
      }));
    }
    
  };

  const handleProceed = () => {
    const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
    if (tempFormData['linkedin_profile'] && !linkedinRegex.test(tempFormData['linkedin_profile'])) {
      // alert('Please enter a valid LinkedIn profile link');
      return;
    }
    let contact = formData.contact || {};
    if (tempFormData.applicant_email) {
      contact.email.push(tempFormData.applicant_email)
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...tempFormData,
      contact
    }));
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "rgba(13, 11, 19, 1)",
          borderRadius: '12px',
          width: '600px',
          height: 'auto',
        },
      }}
    >
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '30px' }}>
          <Image src={fail} alt="Error" height={50} width={50} style={{ marginRight: '15px' }} />
          <div style={{ color: 'rgba(220, 219, 222, 1)', fontSize: '24px' }}>
            Missing Info
            <h1 style={{ fontSize: '15px', color: 'rgba(220, 219, 222, 1)', fontWeight: '300' }}>
              {missingFields?.join(', ')} is a mandatory field
            </h1>
          </div>
        </div>
        <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '20px' }}>
          {missingFields.map((field, index) => {

            const formKey = fieldMappings[field];
            const fieldValue = tempFormData[field] || ''; 

            return (
              
              <li key={index} style={{ margin: '20px 0' }}>
                <TextField
                  label={'Enter ' + formKey}
                  fullWidth
                  variant="outlined"
                  value={fieldValue}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: '0.8px solid #cc94fa',
                        borderRadius: '10px',
                      },
                      '&.Mui-focused fieldset': {
                        border: '0.8px solid #cc94fa'
                      },
                      '&:hover fieldset': {
                        border: '0.8px solid #cc94fa'
                      },
                      '& input': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        height: '50px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '15px',
                      transition: 'all 0.2s ease',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      display:'none'
                    },
                    width: '450px',
                  }}
                />
              </li>
            );
          })}
        </ul>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', marginBottom: '10px' }}>
        <Button
          onClick={handleProceed}
          style={{
            backgroundColor: 'rgba(113, 82, 243, 1)',
            color: 'white',
            fontSize: '15px',
            borderRadius: '10px',
            padding: '8px 100px',
          }}
        >
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MissingInfoDialog;
