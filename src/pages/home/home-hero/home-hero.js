import React from 'react'
import { Container, Grid, Typography,Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "../../../assets/icon/search-normal.svg"
import apple from "../../../assets/home/apple-btn.svg"
import play from "../../../assets/home/play-btn.svg"
import homeheroimg from "../../../assets/home/hero-discount.svg"
import "./home-hero.css";


const HomeHero = () => {
  return (
    <Container maxWidth="xl">

    <Grid container sx={{mt:20,}}>
      <Grid item lg={6} xs={12}>
<Typography 

sx={{
    color: 'var(--gray-scale-gray-700, #344054)',
    fontSize: '72px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '88px',
    letterSpacing: '-1.44px',
    mt:"20px"
  }}
  
  className='text-font'>
Find your Needs with Our<span style={{color:"#8155FF"}}> Mobile Wallet.</span> 
</Typography>
<Typography  
className='text-font'

sx={{
    color: 'var(--gray-scale-gray-500, #667085)',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '0.2px',
  }}>
Discover the ultimate solution for managing your finances effortlessly on the go. Our mobile wallet app empowers you to find your financial needs with ease, security, and convenience. Download it now!
</Typography>
<Box sx={{mt:"56px"}}>
<TextField
      fullWidth
      sx={{
        display: 'flex',
        width:"100%",
        maxWidth: '539px',
        minheight: '56px',
        padding: '8.889px 21.67px',
        alignItems: 'center',
        gap: '10px',
        flexShrink: 0,
        borderRadius: '8.889px',
        // border: '1px solid #E5E5E5',
        background: 'rgba(255, 255, 255, 0.10)',
        boxShadow: '0px 8.88889px 15.55555px 0px rgba(0, 0, 47, 0.10)',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
           <img src={SearchIcon} alt="search-icon"></img>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
           <Button
      variant="contained"
      sx={{
        borderRadius: '6px',
        background: 'linear-gradient(103deg, #9672FE 0%, #6A35FF 100%)',
        boxShadow: '0px 17px 22px -10px rgba(24, 8, 70, 0.30)',
        color: 'white', // Text color
      }}
    >
      Search
    </Button>
          </InputAdornment>
        ),
      }}
    />
</Box>
<Box sx={{ display: 'flex', gap: '16px' ,mt:"56px"}}>
      <Button
        variant="contained"
        sx={{
          borderRadius: '7.37px',
          background: '#EAECF0',
          boxShadow: '0px 0px 2.94815px 0.73704px rgba(224, 220, 255, 0.09) inset',
          transition: 'background 0.3s ease', 
          '&:hover': {
            background: 'transparent', 
            boxShadow: 'none',
          },
        }}
      >
        <img src={apple} style={{padding: '9px 22px',}} alt="Button 1" />
      </Button>
      <Button
        variant="contained"
        sx={{
          borderRadius: '7.37px',
          background: '#EAECF0',
          boxShadow: '0px 0px 2.94815px 0.73704px rgba(224, 220, 255, 0.09) inset',
          transition: 'background 0.3s ease', 
          '&:hover': {
            background: 'transparent', 
            boxShadow: 'none',
          },
        }}
      >
        <img src={play} style={{padding: '9px 22px',}} alt="Button 2" />
      </Button>
    </Box>
    <Typography  
className='text-font'

sx={{
    color: 'var(--gray-scale-gray-500, #667085)',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '32px',
    letterSpacing: '0.2px',
    mt:"24px"
  }}>
    Download our Mobile App today for a seamless & convenient 
    <br/>experience on the go!
</Typography>

      </Grid>
      <Grid item lg={6} xs={12}>
  <img
    src={homeheroimg}
    alt="discount"
    style={{
      width: '100%', // Make the image responsive to the container's width
      maxHeight: '100%', // Ensure the image doesn't exceed its container
      display: 'block', // Remove any default spacing or margins
      margin: 'auto', // Center the image horizontally
    }}
  />
</Grid>

    
    </Grid>

  </Container>
  )
}

export default HomeHero