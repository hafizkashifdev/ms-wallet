import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "../../../assets/icon/search-normal.svg";
import apple from "../../../assets/home/apple-btn.svg";
import play from "../../../assets/home/play-btn.svg";
import homeheroimg from "../../../assets/home/hero-discount.svg";
import rightarrow from "../../../assets/home/right-arrow.svg";

const HomeHero = () => {
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ mt: { lg: "270px", sm: "170px", xs: "70px" } }}>
        <Grid item md={5} xs={12} sx={{ position: 'relative' }}>
          <Typography
            sx={{
              color: 'var(--gray-scale-gray-700, #344054)',
              fontSize: { xl: "64px", sm: "72px", xs: "32px" },
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: {sm:'88px',xs:'54px'},
              textAlign: { md: "left", xs: "center" },
              letterSpacing: '-1.44px',
              mt: {md:"16px",xs:"24px"},
            }}
            className='text-font'
          >
            Find your Needs with Our<span style={{ color: "#8155FF" }}> Mobile Wallet.</span>
          </Typography>
          <Typography
            className='text-font'
            sx={{
              color: 'var(--gray-scale-gray-500, #667085)',
              fontSize: { xl: "19px", sm: "20px", xs: "16px" },
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '32px',
              letterSpacing: '0.2px',
              textAlign: { md: "left", xs: "center" },
              mt: {md:1,xs:2},
             
            }}
          >
            Discover the ultimate solution for managing your finances effortlessly on the go. Our mobile wallet app empowers you to find your financial needs with ease, security, and convenience. Download it now!
          </Typography>
          <Box sx={{ mt: { md: "56px", xs: "34px" }, display: "flex", flexDirection: { md: "row", xs: "column" }, justifyContent: { md: "flex-start", xs: "center" } }}>
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
      border: "1px solid #E5E5E5",
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
              height: "44px",
              textTransform: "capitalize",
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

<Box sx={{ display: 'flex', gap: '16px', mt: { md: "56px", xs: "34px" },   flexDirection: { sm: "row", xs: "column" }, justifyContent: { md: "flex-start", xs: "center" } }}>
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
    <img src={apple} style={{ padding: '4px 8px' }} alt="Button 1" />
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
    <img src={play} style={{ padding: '4px 8px' }} alt="Button 2" />
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
              mt: "24px",
              textAlign: { md: "left", xs: "center" },
              mb:2
            }}
          >
            Download our Mobile App today for a seamless & convenient
            <br />experience on the go!
          </Typography>
          <Box
            sx={{
              display: {xl: "flex", xs: "none" },
              position: 'absolute',
              bottom: "12%",
              right: "15%",
            }}
          >
            <img src={rightarrow} alt="arrow-ing" />
          </Box>
        </Grid>
        <Grid item md={7} xs={12}>
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
  );
}

export default HomeHero;
