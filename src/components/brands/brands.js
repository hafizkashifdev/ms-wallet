import React from 'react';
import { Box, Typography } from '@mui/material';
import google from '../../assets/Brand/google.svg';
import airbnb from '../../assets/Brand/airbnb.svg';
import facebook from '../../assets/Brand/facebook.svg';
import hubspot from '../../assets/Brand/hubspot.svg';
import slack from '../../assets/Brand/slack.png';
import './brands.css';

const Brands = () => {
  return (
    <React.Fragment>
      <Box
       sx={{ mt: { xl: -16, sm: 22,xs:0 } }}
       >
        <Typography
          sx={{
            color: '#4E5A65',
            textAlign: 'center',
            fontFamily: 'inter',
            fontSize: '16px',
            fontWeight: 400,
            fontStyle: 'normal',
            mb: 2,
            zIndex:1
          }}
        >
          TRUSTED BY OVER 10.000+ WORLD’S BEST TEAMS
        </Typography>
      </Box>
      <div className="brands-container">
        <img src={google} alt="Image1" className="brand-image" />
        <img src={airbnb} alt="Image2" className="brand-image" />
        <img src={facebook} alt="Image3" className="brand-image" />
        <img src={hubspot} alt="Image4" className="brand-image" />
        <img src={slack} alt="Image5" className="brand-image" />
      </div>
    </React.Fragment>
  );
};

export default Brands;
