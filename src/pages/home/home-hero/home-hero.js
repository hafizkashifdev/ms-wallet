import React from 'react'
import { Container, Grid, Typography,Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "../../../assets/icon/search-normal.svg"
import apple from "../../../assets/home/apple-btn.svg"
import play from "../../../assets/home/play-btn.svg"
import homeheroimg from "../../../assets/home/hero-discount.svg"
import { makeStyles } from '@mui/styles';
import "./home-hero.css";
import rightarrow from "../../../assets/home/right-arrow.svg"

const useStyles = makeStyles((theme) => ({
 
  
}));


const HomeHero = () => {

  const classes = useStyles();
  return (
    <Container maxWidth="xl">

    <Grid container sx={{mt:{lg:"274px",sm:"170px",xs:"70px"}}}>
      <Grid item lg={5} xs={12}sx={{ position: 'relative' }}>
<Typography 

sx={{
    color: 'var(--gray-scale-gray-700, #344054)',
    fontSize: {xl:"64px",lg:"72px",md:"46px",xs:"28px"},
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '88px',
    letterSpacing: '-1.44px',
    mt:"16px"
  }}
  
  className='text-font'>
Find your Needs with Our<span style={{color:"#8155FF"}}> Mobile Wallet.</span> 
</Typography>
<Typography  
className='text-font'

sx={{
    color: 'var(--gray-scale-gray-500, #667085)',
    fontSize: {xl:"19px",lg:"20px",md:"16px",xs:"12px"},
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '0.2px',
  }}>
Discover the ultimate solution for managing your finances effortlessly on the go. Our mobile wallet app empowers you to find your financial needs with ease, security, and convenience. Download it now!
</Typography>
<Box sx={{ mt: "56px" }}>
  <TextField
    fullWidth
    sx={{
      display: 'flex',
      width: '100%',
      maxWidth: '539px',
      minHeight: '56px',
      alignItems: 'center',
      gap: '10px',
      flexShrink: 0,
      borderRadius: '8.889px',
      background: 'rgba(255, 255, 255, 0.10)',
      boxShadow: '0px 8.88889px 15.55555px 0px rgba(0, 0, 47, 0.10)',
      "& fieldset": { border: "none" }
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <img src={SearchIcon} alt="search-icon" />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          <Button
          
            sx={{
              borderRadius: '6px',
              background: 'linear-gradient(103deg, #9672FE 0%, #6A35FF 100%)',
              boxShadow: '0px 17px 22px -10px rgba(24, 8, 70, 0.30)',
              padding: "10px 20px",
              color: 'white',
              height:"44px",
              textTransform:"capitalize",
              width: '118px',

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
        <img src={apple} style={{padding: '4px 8px',}} alt="Button 1" />
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
        <img src={play} style={{padding: '4px 8px',}} alt="Button 2" />
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
<Box
        sx={{
          display:{lg:"flex",xs:"none"},
          position: 'absolute',
          bottom: "13%",
          right: "15%",
          // border:"1px solid black"
        }}
      >
        <img src={rightarrow} alt="arrow-ing" />
      </Box>

      </Grid>
      <Grid item lg={7} xs={12}  >
  <img
    src={homeheroimg}
    alt="discount"
    style={{
      width: '100%', 
      maxHeight: '100%', 
      display: 'block', 
      margin: 'auto', 
    }}
  />
</Grid>

    
    </Grid>

  </Container>
  )
}

export default HomeHero