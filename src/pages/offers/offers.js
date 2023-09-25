import React from 'react'
import { Box, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import searcicon from "../../assets/offers/searchicon.svg"
import ButtonList from './button-list/button-list'
import TrendingCard from './trending-card/trending-card'


const Offers = () => {
  return (
  <>
  <Container maxWidth="lg">
    <Grid container sx={{ mt: { lg: "115px", sm: "170px", xs: "70px" } }}>
<Grid item xs={12}>
<Box
  sx={{
    mt: { md: "56px", xs: "34px" },
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    justifyContent:"center",
    alignItems: "center", 
  }}
>
  <TextField
    fullWidth
    sx={{
      width: '100%',
      maxWidth: '682px',
      minHeight: '70px',
      // gap: '10px',
      flexShrink: 0,
      border: "1px solid #E5E5E5",
      borderRadius: '8.889px',
      background: 'rgba(255, 255, 255, 0.10)',
      boxShadow: '0px 8.88889px 15.55555px 0px rgba(0, 0, 47, 0.10)',
      "& fieldset": { border: "none" },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#8155FF"
        }
      },
      "::placeholder":"Search"
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start" sx={{width:"42px" , height:"42px",mt:1}}>
          <img src={searcicon} alt="search-icon" />
        </InputAdornment>
      ),
     
    }}
  />
</Box>
</Grid>
    </Grid>
    </Container>
    <Container>
      <ButtonList/>
    </Container>
    <Container>
    <Typography
  className='text-font'
  sx={{
    color: "#2F2F2F",
    textAlign:"center",
    mt:"98px",
    // fontFamily: "Outfit", // Uncomment this line if you want to set a specific font family
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  }}
>
  Here’s what’s Trending <span style={{ color: "#8155FF" }}>Today.</span>
</Typography>
<Grid container >
<Grid item xs={12}> 

</Grid>
</Grid>
    </Container>

    {/* <TrendingCard sale="50% OFF" /> */}
    </>
  )
}

export default Offers
