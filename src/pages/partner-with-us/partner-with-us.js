import React from 'react';
import paerus from "../../assets/home/dots.svg";
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import partnerimg from "../../assets/Partner With Us/vactp.png";
import imgmapword from "../../assets/Partner With Us/visionsalam.svg";
import { Link, useNavigate } from 'react-router-dom';
import BenefitsCards from './benefits-cards/benefits-cards';
import carelib from "../../assets/Partner With Us/logo/care.svg";
import omani from "../../assets/Partner With Us/logo/omni.svg";
import share from "../../assets/Partner With Us/logo/sharemydine.svg";
import pethelp from "../../assets/Partner With Us/logo/pethelp.svg";
import idgram from "../../assets/Partner With Us/logo/idgram.svg";
import airrap from "../../assets/Partner With Us/logo/airapple.svg"

const PartnerWithUs = () => {
    const navigate = useNavigate();

    const delecateaccountHandler = (path) => {
      navigate(path);
    };

  return (
   <>
    <Container maxWidth="xxl">
<Box sx={{display:{lg:"flex",xs:"none"},pr:"50px",position:'relative',}}>
 <img src={paerus} alt="img" style={{marginLeft:"auto",position:"absolute",right:70,top:170}}>
  </img>
 </Box>
    </Container>

    <Container maxWidth="lg">

<Grid container >
<Grid item xs={12} sx={{mt:"170px"}}>
<Typography variant="h6" 
 className='text-font'
sx={{color: '#8155FF',
    fontSize: '60px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '72px', 
    letterSpacing: '-1.2px',
    textAlign:"center"}}>Partner With Us</Typography>
</Grid>
</Grid>
      </Container>

      <Container maxWidth="xl">
<Grid container sx={{mt:'72px'}}>
<Grid item lg={6} xs={12} sx={{  display: 'flex', flexDirection: 'column', mt:{lg:"100px" ,xs:"0px"}}}>
  <Typography className='text-font'
    sx={{
      color: '#1D2939',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '60px',
      letterSpacing: '-0.64px',
      textAlign: { lg: "left", xs: 'center',},
    }}
  >
    Why Partner with <span style={{ color: '#23A5FF' }}>Membership Wallet?</span>
  </Typography>
  <Typography className='text-font'
    sx={{
      color: 'var(--secondary-secondary-600, #58506C)',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '30px',
      display:{lg:"flex",xs:"none"},
      mt: "16px",
      textAlign: { lg: "left", xs: 'center', },
      whiteSpace: 'normal',
    }}
  >
    Membership Wallet is not just a loyalty management platform;<br /> it's a revolution in customer engagement and retention.<br /> Partnering with us means joining forces with a dynamic team <br /> dedicated to simplifying the lives of consumers while helping <br /> businesses thrive.
  </Typography>
  <Typography className='text-font'
    sx={{
        display:{lg:"none",xs:"flex"},
      color: 'var(--secondary-secondary-600, #58506C)',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '30px',
   
      mt: "16px",
      textAlign: { lg: "left", xs: 'center', justifyContent: 'center' },
      whiteSpace: 'normal',
    }}
  >
    Membership Wallet is not just a loyalty management platform; it's a revolution in customer engagement and retention.Partnering with us means joining forces with a dynamic team dedicated to simplifying the lives of consumers while helping businesses thrive.
  </Typography>
  
 <Box sx={{display:'flex',justifyContent:{lg:'flex-start',xs:'center'}}}>
 <Link to="/delegate-account">
      <Button
        sx={{
          borderRadius: '8px',
          background: '#8155FF',
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          padding: "14px 24px",
          color: "#ffffff",
          textTransform: 'capitalize',
          width: '100%',
          maxWidth: '237px',
          minHeight: '52px',
          mt: "24px",
          mb: { lg: "82px", xs: "2px" },
          textAlign: 'center', 
          '&:hover': {
            background: '#8155FF',
          },
        }}
        onClick={() => delecateaccountHandler('/delegate-account')}
      >
        Get Delegate account now
      </Button>
    </Link>
 </Box>
</Grid>

<Grid item lg={6} xs={12} sx={{mt:{lg:0,xs:8},p:{lg:0,xs:2}}}>
  <div
    style={{
      width: '100%',
      maxWidth: '650px',
      height: '500px',
      flexShrink: 0,
      background: `url(${partnerimg}) no-repeat center center`,
      backgroundSize: 'cover', 
      margin: '0 auto', 
    }}
  />
</Grid>

</Grid>
</Container>

<Container maxWidth="xl">
  <Grid container >
  <Grid item lg={6} xs={12} sx={{ mt: '120px', display: {lg:'flex',xs:'none'} , }}>
  <img
    src={imgmapword}
    alt="partners"
    style={{
      width: '100%',
      maxWidth: '640px',
      height: '570px',
      flexShrink: 0,
    }}
  />
</Grid>

    <Grid item lg={6} xs={12} sx={{ mt: {lg:"310px",xs:"60px"}}}>
      <Typography className='text-font'
        sx={{
          color: '#1D2939',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 600,
        //   lineHeight: '60px',
          letterSpacing: '-0.64px',
          textAlign: { lg: "left", xs: 'center' },
          justifyContent: 'center'
        }}
      >
        Our Vision
      </Typography>
      <Typography className='text-font'
        sx={{
          color: 'var(--secondary-secondary-600, #58506C)',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '30px',
          textAlign: { lg: "left", xs: 'center' },
         
          justifyContent: 'center'
        }}
      >
        At Membership Wallet, our vision is clear: to create a seamless, digital ecosystem where businesses and consumers connect effortlessly. We believe in the power of partnerships to make this vision a reality.
      </Typography>
    </Grid>
    <Grid item lg={6} xs={12} sx={{ mt: {lg:"40px",sm:"60px",xs:"10px"},p:2,  display: {lg:'none',xs:'flex'} ,justifyContent: {lg:'left',xs:"center"}, alignItems: {lg:'left',xs:"center"} }}>
  <img
    src={imgmapword}
    alt="partners"
    style={{
      width: '100%',
      maxWidth: '640px',
      height: '570px',
      flexShrink: 0,
    }}
  />
</Grid>
  </Grid>
</Container>

      <Container maxWidth="lg">
   <Grid container>
<Grid item xs={12} sx={{ mt:{lg:"120px",md:"70px",sm:"40px",xs:"0px"}}}>
<Typography className='text-font'
sx={{color: '#1D2939',
    fontSize: {lg:'60px',xs:"40px"},
    fontStyle: 'normal',
    fontWeight: 700,
    // lineHeight: '72px', 
    letterSpacing: '-1.2px',
    m:2,
    textAlign:"center"}}>
Benefits of Partnering with <span style={{color:'#8155FF'}}>Membership Wallet?</span>
</Typography>
</Grid>
   </Grid>
      </Container>


      <Container maxWidth="xl">
<BenefitsCards/>
      </Container>


      <Container maxWidth="lg">

<Grid container sx={{mt:'120px'}}>
<Grid item xs={12}>
<Typography className='text-font'
sx={{color: '#1D2939',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 600,
    // lineHeight: '72px', 
    letterSpacing: '0.64px',
    // m:2,
    textAlign:{lg:'left',xs:"center"}}}>
How to <span style={{color:'#8155FF'}}>Partner with Us.</span>
</Typography>

<Typography className='text-font'
sx={{color: 'var(--secondary-secondary-600, #58506C)',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    // lineHeight: '72px', 
    letterSpacing: '0.64px',
    mt:'16px',
    // m:2,
    textAlign:{lg:'left',xs:"center"}}}>
Getting started is easy. Simply reach out to our partnership team by filling the form, and we'll work together to tailor a partnership plan that aligns with your business goals. Whether you're a retailer, service provider, or an organisation looking to enhance customer engagement, we're here to help.
</Typography>

<Box sx={{display:'flex',justifyContent:{lg:'flex-start',xs:'center'}}}>
 <Link to="/contact-us">
      <Button
        sx={{
          borderRadius: '8px',
          background: '#8155FF',
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          padding: "14px 24px",
          color: "#ffffff",
          textTransform: 'capitalize',
          // width: '100%',
          // maxWidth: '237px',
          // minHeight: '52px',
          mt: "24px",
          mb: { lg: "82px", xs: "2px" },
          textAlign: 'center', 
          '&:hover': {
            background: '#8155FF',
          },
        }}
        onClick={() => delecateaccountHandler('/delegate-account')}
      >
      Contact Us
      </Button>
    </Link>
 </Box>
</Grid>
</Grid>

      </Container>

      <Container maxWidth="xl">

<Grid container sx={{}}>
  <Grid item xs={12} sx={{mt:'120px'}}>
  <Typography className='text-font'
sx={{color: '#8155FF',
    fontSize: '60px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '72px', 
    letterSpacing: '-1.2px',
    // m:2,
    textAlign:'center'}}>
 Our Partners.
</Typography>

  <Typography className='text-font'
sx={{color: 'var(--secondary-secondary-600, #58506C)',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px', 
    letterSpacing: '0.2px',
    mt:'16px',
    textAlign:'center',
    // m:2,
    }}>
Membership wallet is behind the fastest growing companies.
</Typography>
  </Grid>
  <Grid xs={12} sx={{ mt: '56px', display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
  <div style={{ display: 'flex', overflowX: 'auto' }}>
    <img src={carelib} alt="Carelib"  style={{ marginRight: '87px' }} />
    <img src={omani} alt="Omani"   style={{ marginRight: '87px' }} />
    <img src={share} alt="Share"   style={{ marginRight: '87px' }} />
    <img src={pethelp} alt="Pethelp"   style={{ marginRight: '87px' }} />
    <img src={idgram} alt="Idgram"   style={{ marginRight: '87px' }} />
    <img src={airrap} alt="Airrap" />
  </div>
</Grid>



</Grid>

     
      </Container>
   
   </>
  )
}

export default PartnerWithUs
