import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import join from '../../assets/joind-hand.svg';
import men from '../../assets/men.svg' 
import tabhand from '../../assets/tab.svg' 
import googleplay from '../../assets/google-play-badge.svg' 
import applepaly from '../../assets/appleplay.svg' 
import './about.css';

import smmenone from '../../assets/sm-men-two.png'
import smmen2 from '../../assets/small-girl-img.svg'
import smmenthree from '../../assets/small-men-three.svg'
import tabhandbg from '../../assets/tabhandbg.svg'

export const About = () => {
  return (
    <Grid container spacing={2}>
 
<Grid item lg={6} xs={12} style={{ position: 'relative', width: '798px', height: '640px', flexShrink: 0, overflow: 'hidden' }}>
  <div
   className='herohand'
    style={{
      
    }}
  ></div>
  <img src={join} alt="hero_hand_image"  className='hero_hand_image'/>
</Grid>



 
  <Grid
    item
    xs={6}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      textAlign: 'left', 
      height: '74vh', 
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontSize: '53px',
        fontWeight: 700,
        color: 'var(--main-primary, #363565)',
        p: 2,
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        lineHeight: 'normal',
        mb: 2, 
      }}
    >
      Find out more about Membership Wallet and <span style={{ color: '#8155FF' }}>join our</span> team!
    </Typography>
    <Typography variant="body1" sx={{
        fontSize: '22.5px',
        fontWeight: 300,
        color: ' var(--text-body, #4E4B66)',
        p: 2,
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        lineHeight: 'normal',
        lineHeight:'24px',
        mb: 2, 
      }}>
      Lorem ipsum dolor sit amet consectetur. In tellus maecenas massa convallis blandit nisl. Fames eget arcu lectus platea imperdiet.
    </Typography>
  </Grid>

<Grid
  item
  lg={6}
  xs={12}
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: {
      lg: 'flex-start',
      xs: 'center', // Center alignment for xs breakpoint
    },
    textAlign: {
      lg: 'left',
      xs: 'center', // Center alignment for xs breakpoint
    },
    height: '74vh',
    mt: {
      lg: 0,
      sm: -20,
      xs: -25,
    },
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontSize: '55px',
      fontWeight: 700,
      color: 'var(--main-primary, #363565)',
      p: 2,
      fontFamily: 'Outfit',
      fontStyle: 'normal',
      lineHeight: 'normal',
      mb: 2,
      mt:{sx:0,xs:-15}
    }}
    className='hero_typography'
  >
    Interested in what <span style={{ color: '#8155FF' }}>Membership Wallet</span> can do for your business?
  </Typography>
  <Button
    sx={{
      backgroundColor: '#8155FF',
      display: 'block', // Make the button a block-level element
      margin: '0 auto', // Center horizontally
      mt: 2,
      m: 2,
      color: '#ffffff',
      borderRadius: '8px',
      fontSize: '16px',
      padding: '13px 36px',
      fontWeight: 600,
      fontFamily: 'Open Sans',
      textTransform: 'capitalize',
      // textAlign: 'left', // Reset the textAlign for the Button
      '&:hover': {
        backgroundColor: '#6d43e2',
      },
    }}
  >
    Visit business
  </Button>
</Grid>

  <Grid item xs={6} style={{ position: 'relative', width: '798px', height: '640px', flexShrink: 0, overflow: 'hidden' }}>
  <div
    style={{
      backgroundImage: `url(${tabhandbg})`, // Set the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%', 
      height: '100%', 
      position: 'absolute',
      top: '50%', 
      transform: 'translateY(-50%)',
      left: 0,
      zIndex: -1,
    }}
  ></div>
  <img src={tabhand} alt="Image 6"  />
</Grid>

<Grid item xs={6} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img src={men} alt="Image 6" style={{ maxWidth: '798px' }} />

  <img
    src={smmenone} 
    alt="Image 1"
    style={{
      position: 'absolute',
      bottom: '130px',    
      right: '46px', 
      maxWidth: '100px',  
    }}
  />

  <img
    src={smmen2} 
    alt="Image 2"
    style={{
      position: 'absolute',
      top: '15%',    
      left: '90%',    
      transform: 'translate(-50%, -50%)', 
      maxWidth: '100px',  
    }}
  />

  <img
    src={smmenthree}     
    alt="Image 3"
    style={{
      position: 'absolute',
      top: '7px',    
      left: '97px',    
      maxWidth: '100px',  
    }}
  />
</Grid>

<Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
  <Typography
    variant="h6"
    sx={{
      fontSize: '48px',
      fontWeight: 700,
      color: 'var(--main-primary, #363565)',
      p: 2,
      fontFamily: 'Outfit',
      fontStyle: 'normal',
      lineHeight: 'normal',
      mb: 2,
      textAlign: 'left', // Align the text to the left
    }}
  >
    See Our Success <br /> Stories
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontSize: '22.5px',
      fontWeight: 300,
      color: 'var(--text-body, #4E4B66)',
 
      fontFamily: 'Outfit',
      fontStyle: 'normal',
      lineHeight: 'normal',
      lineHeight: '24px',
     p:2,
      textAlign: 'left', // Align the text to the left
    }}
  >
    I LOVE using the stocard app no worries about looking for my wallet<br/> then going through all the cards individually.
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontSize: '22.5px',
      fontWeight: 300,
      color: 'var(--text-body, #4E4B66)',
      p: 2,
      fontFamily: 'Outfit',
      fontStyle: 'normal',
      lineHeight: 'normal',
      lineHeight: '24px',
     
      textAlign: 'left', // Align the text to the left
    }}
  >
    Jorge Robertson
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontSize: '22.5px',
      fontWeight: 300,
      color: 'var(--text-body, #4E4B66)',
      p: 2,
      fontFamily: 'Outfit',
      fontStyle: 'normal',
      lineHeight: 'normal',
      lineHeight: '24px',
     
      textAlign: 'left', // Align the text to the left
    }}
  >
    CS at Google
  </Typography>
</Grid>

<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 20 ,mb:10}}>
  <div style={{ backgroundColor: '#796EFF', padding: '64px 80px', width: '100%', display: 'flex',maxWidth: '1000px', alignItems: 'center' ,borderRadius:'16px'}}>
    <Typography
      variant="h6"
      sx={{
        fontSize: '32px',
        fontWeight: 600,
        color: 'var(--text-body, #4E4B66)',
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        lineHeight: 'normal',
        lineHeight: '48px',
        textAlign: 'left', 
        marginRight: '20px',
        color:'white'
      }}
    >
      84% of employees who use<br />
      trust their direct manager
    </Typography>

    <div style={{ display: 'flex', alignItems: 'center' ,marginLeft:'auto'}}>
      <img src={googleplay} alt="google" style={{ marginRight: '10px' }} />
      <img src={applepaly} alt="apple" />
    </div>
  </div>
</Grid>




</Grid>

  );
};
