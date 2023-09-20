import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import memberimg from "../../../assets/home/membershipbuss.svg";
import btnright from "../../../assets/home/arrow-right.svg";
import graphgif from "../../../assets/home/graphhome.gif";
import gropup from "../../../assets/home/group.svg";




 

const MembershipBusiness = () => {

  const mainContainerStyle = {
    background: `url(${memberimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '2rem', 
    mt:"87px"
  };


  return (
    <Container maxWidth="xl"  >
    <Grid container sx={mainContainerStyle}>
      <Grid item xs={2}>
        <img src={graphgif} alt="graphgif" />
      </Grid>
      <Grid item xs={10}>
        <Typography
          sx={{
            fontFamily: 'Open Sans',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '60px',
            color: 'var(--gray-scale-gray-800, #1D2939)',
            letterSpacing: '-0.96px',
            pl:10,
            mt:2
          }}
        >
          Interested in what
          <span style={{ color: '#AD90FE' }}> Membership Wallet </span><br/>
          can do for your business
        </Typography>
      </Grid>
      
      <Grid xs={2}>

      </Grid>
      <Grid item xs={6}>
        <Typography
          sx={{
            color: 'var(--secondary-secondary-600, #58506C)',
            fontFamily: 'Open Sans',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '30px',
            mt:"100px",
            pl:10
          }}
        >
          Discover how a Membership Wallet can revolutionize your business! Our Membership Wallet offers a wide range of benefits, including enhanced customer loyalty and retention. With personalized rewards and exclusive discounts, you can build strong, lasting relationships with your clientele. Through seamless communication and data-driven insights, the Membership Wallet allows you to connect with your members directly, sending tailored offers and updates.
        </Typography>
<Box sx={{pl:10}}>
<Button
  variant="contained"
  color="primary"
  endIcon={<img src={btnright} alt="btnright" />}
  sx={{
    borderRadius: '8px',
    border: '1px solid var(--gray-scale-gray-300, #D0D5DD)',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    backgroundColor: "#ffffff",
    mt: "28px",
    color: "black", 
    '&:hover': {
      color: "black", 
      backgroundColor: "#ffffff", 
    },
  }}
>
  View Business
</Button>
</Box>
      </Grid>
      <Grid item xs={4} sx={{display:"flex"}}>
        <img src={gropup} alt="memimg" style={{marginLeft:"auto",marginTop:'60px'}} />
      </Grid>
    </Grid>
  </Container>
  )
}

export default MembershipBusiness