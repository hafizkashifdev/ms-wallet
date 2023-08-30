import React from 'react';
import Container from '@mui/material/Container';
import google from '../../assets/Brand/google.svg'
import airbnb from '../../assets/Brand/airbnb.svg'
import facebook from '../../assets/Brand/facebook.svg'
import hubspot from '../../assets/Brand/hubspot.svg'
import slack from '../../assets/Brand/slack.png'
import { Box, Typography } from '@mui/material';

const Brands = () => {
  return (
    <React.Fragment>
  <Box>
        <Typography sx={{color:'#4E5A65',textAlign:'center',fontFamily:'inter',fontSize:'16px',fontWeight:400,fontStyle:'normal',mt:4,mb:2}}>
        TRUSTED BY OVER 10.000+ WORLD’S BEST TEAMS
        </Typography>
        </Box>
      <Container maxWidth="lg" 
      style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}
      >
      

        <img src={google} alt="Image 1" style={{ marginBottom: "10px", marginRight: "130px" }} />

       
        <img src={airbnb} alt="Image 2" style={{ marginBottom: "10px", marginRight: "130px" }} />

       
        <img src={facebook} alt="Image 3" style={{ marginBottom: "10px", marginRight: "130px" }} />

       
        <img src={hubspot} alt="Image 4" style={{ marginBottom: "10px", marginRight: "130px" }} />

        {/* Image without right margin to avoid unnecessary gap */}
        <img src={slack} alt="Image 5" style={{ marginBottom: "10px" }} />
      </Container>
    </React.Fragment>
  )
}

export default Brands;
