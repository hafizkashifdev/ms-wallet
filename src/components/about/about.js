import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import join from '../../assets/joind-hand.svg';
import men from '../../assets/men.svg' 
import tabhand from '../../assets/tab.svg' 
import './about.css';

import smmenone from '../../assets/sm-men-two.png'
import smmen2 from '../../assets/small-girl-img.svg'
import smmenthree from '../../assets/small-men-three.svg'
import tabhandbg from '../../assets/tabhandbg.svg'

export const About = () => {
  return (
    <Grid container spacing={2} sx={{mt:10}}>
 
 <Grid item lg={6} xs={12} style={{ position: 'relative', width: '798px', height: '640px', flexShrink: 0, overflow: 'hidden' }}>
  <div
    // className='herohand'
    style={{
      backgroundImage: `url(${tabhandbg})`,
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
      borderRadius: '0px 320px 320px 0px',
      border: '1px dashed #F0EBFA',
      opacity: 0.05,
      background: 'linear-gradient(135deg, #4200FF 0%, #EE726F 47.61%, #0097FF 95.62%)',
      // display: 'block', // Hide the div by default
    }}
    className="herohand"
  ></div>
  <img src={join} alt="hero_hand_image" className='hero_hand_image' style={{
    width: '100%',
    // maxWidth: '798px', // Set the maximum width
    // height: '640px', // Set the height
    flexShrink: 0,
    position: 'absolute',
    top: '55%',
    transform: 'translateY(-50%)',
    
    // left: '50%',
    // marginLeft: '-399px', // Half of the maximum width
  }} />
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
      sm: -12,
      xs: -35,
    },
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
    Find out more about Membership Wallet and{' '}
    <span style={{ color: '#8155FF' }}>join our</span> team!
  </Typography>
  <Button
    sx={{
      backgroundColor: '#8155FF',
      display: 'block', 
      margin: '0 auto', 
      mt: 2,
      m: 2,
      color: '#ffffff',
      borderRadius: '8px',
      fontSize: '16px',
      padding: '13px 36px',
      fontWeight: 600,
      fontFamily: 'Open Sans',
      textTransform: 'capitalize',
      
      '&:hover': {
        backgroundColor: '#6d43e2',
      },
    }}
  >
    Visit business
  </Button>
</Grid>






</Grid>

  );
};
