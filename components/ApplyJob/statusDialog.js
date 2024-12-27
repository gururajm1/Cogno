import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, DialogTitle } from '@mui/material';
import Image from 'next/image';

const StatusDialog = ({ open, onClose, imageSrc, message,text }) => {
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{
        style: {
          borderRadius: '12px',
          backgroundColor: 'rgba(22, 24, 30, 1',
        
        }, sx:{
            width:'50%'
        },
      }}>
        
        <DialogContent sx={{ textAlign: 'center', borderRadius: '10px',color:' rgba(147, 147, 147, 1)',fontWeight:'400',fontSize:'17px',padding:'25px' }}>
        <Image src={imageSrc} alt="status" />
        <DialogTitle sx={{ color: 'rgba(255, 255, 255, 1)', fontWeight: '500', fontSize: '24px', marginTop: '20px' }}>
          {message}
        </DialogTitle>
        {text}
      </DialogContent>
     
      <DialogActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
        <Button
          onClick={onClose}
          style={{
            backgroundColor: 'rgba(113, 82, 243, 1)',
            borderRadius: '10px',
            width: '170px',
            height: '40px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StatusDialog;
