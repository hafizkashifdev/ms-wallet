import { Grid, Typography } from '@mui/material'
import React from 'react'
import smmenone from '../../assets/sm-men-two.png'
import smmen2 from '../../assets/small-girl-img.svg'
import smmenthree from '../../assets/small-men-three.svg'
import men from '../../assets/men.svg' 
import './reviews.css';
const Reviews = () => {
  return (
    <Grid container spacing={2} sx={{mt:{lg:20,xs:2}}}>

  <Grid item lg={6} xs={12} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <img src={men} alt="Image6"  className = "menreviews" />

    <img
          src={smmenone}
          alt="Image1"
          className="reviewimg1" // Apply the CSS class
        />

        <img
          src={smmen2}
          alt="Image2"
          className="reviewimg2" // Apply the CSS class
        />

        <img
          src={smmenthree}
          alt="Image3"
          className="reviewimg3" // Apply the CSS class
        />
  </Grid>

  
  <Grid item  lg={6} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: {lg:'flex-start',xs:'center'} }}>
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
        textAlign: {lg:'left',xs:'center'}
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
        p: 2,
        textAlign: {lg:'left',xs:'center'}
      }}
    >
      I LOVE using the stocard app no worries about looking for my wallet<br /> then going through all the cards individually.
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
        textAlign: {lg:'left',xs:'center'}
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
        textAlign: {lg:'left',xs:'center'}
      }}
    >
      CS at Google
    </Typography>
  </Grid>
</Grid>

  )
}

export default Reviews