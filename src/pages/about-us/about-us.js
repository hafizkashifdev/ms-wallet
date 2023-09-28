import React from 'react';
import paerus from "../../assets/home/dots.svg";
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import partnerimg from "../../assets/about-us/ab.png";
import imgmapword from "../../assets/about-us/nbnhj.png";
import { Link, useNavigate } from 'react-router-dom';
import AboutCards from './about-cards/about-cards';
import mapbg from "../../assets/about-us/missbg.svg"

const AboutUs = () => {
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
    textAlign:"center"}}>About Us.</Typography>
    <Typography variant="h6" 
 className='text-font'
sx={{color: 'var(--gray-scale-gray-500, #667085)',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: 500,
lineHeight: '32px', 
letterSpacing: '0.2px',
mt:"8px",
    textAlign:"center"}}>Discover Membership Wallet</Typography>
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
   Introduction
  </Typography>
  <Typography className='text-font'
  sx={{
    color: 'var(--secondary-secondary-600, #58506C)',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '30px',
    display: { lg: "flex", xs: "none" },
    mt: "16px",
    textAlign: "left",
  }}
>
  At <span style={{ color: "#8155FF",  display: 'contents' }}>Membership Wallet</span>, we are dedicated to simplifying your life<br />by revolutionising the way you manage loyalty cards and <br /> memberships. Our centralised platform provides a seamless <br />digital solution that eliminates the need for physical cards and <br /> offers a hassle-free way to track and access rewards from your<br />favorite retailers.
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
  At<span style={{ color: "#8155FF",  display: 'contents'  }}>Membership Wallet</span>,we are dedicated to simplifying your life by revolutionising the way you manage loyalty cards and memberships. Our centralised platform provides a seamless digital solution that eliminates the need for physical cards and offers a hassle-free way to track and access rewards from your favourite retailers.
  </Typography>
  
 
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
  <Grid item lg={6} xs={12} sx={{
  mt: { lg: "40px", sm: "60px", xs: "10px" },
  p: 2,
  display: { lg: 'flex', xs: 'none' },
  justifyContent: 'flex-start', // Align content to the left horizontally
  alignItems: 'center', // Center content vertically
  position: 'relative',
}}>
  <img
    src={imgmapword}
    alt="partners"
    style={{
      width: '100%',
      maxWidth: '640px',
      minHeight: '570px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 1,
      background: `url(${mapbg}) no-repeat left center`, // Set background image on the image
      backgroundSize: 'cover',
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
      Our Mission
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
Our mission is to empower individuals like you to make the most of their loyalty programs in the digital age. We believe that managing your memberships and enjoying the benefits should be effortless, and that's why we've created Membership Wallet. 
      </Typography>
    </Grid>
    <Grid item lg={6} xs={12} sx={{
  mt: { lg: "40px", sm: "60px", xs: "10px" },
  p: 2,
  display: {lg:'none',xs:'flex'},
  justifyContent: 'center', // Center content horizontally
  alignItems: 'center', // Center content vertically
  position: 'relative',
}}>
  <img
    src={imgmapword}
    alt="partners"
    style={{
      width: '100%',
      maxWidth: '640px',
      minHeight: '570px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 1,
      background: `url(${mapbg}) no-repeat center center`, // Set background image on the image and center it
      backgroundSize: 'cover',
    }}
  />
</Grid>

  </Grid>
</Container>

      <Container maxWidth="lg">
   <Grid container>
<Grid item xs={12} sx={{ mt:"120px",}}>
<Typography className='text-font'
sx={{color: '#1D2939',
    fontSize: {lg:'60px',xs:"40px"},
    fontStyle: 'normal',
    fontWeight: 700,
    // lineHeight: '72px', 
    letterSpacing: '-1.2px',
    m:2,
    textAlign:"center"}}>
Why <span style={{color:'#8155FF'}}>Choose Us.</span>
</Typography>
<Typography className='text-font'
sx={{color: '#1D2939',
    fontSize: "20px",
    fontStyle: 'normal',
    fontWeight: 500,
    // lineHeight: '72px', 
    letterSpacing: '0.2px',
    m:2,
    textAlign:"center"}}>
We are a passionate, creative team dedicated to making a difference.
</Typography>
</Grid>
   </Grid>
      </Container>

      <Container maxWidth="xl">
   <Grid container>
<Grid item xs={12} sx={{ mt:"72px"}}>
<AboutCards/>
</Grid>
   </Grid>
      </Container>

   
   </>
  )
}

export default AboutUs
