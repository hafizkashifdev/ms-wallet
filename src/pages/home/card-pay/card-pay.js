import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import mobilepay from "../../../assets/home/mobilepay.svg"
import imgdots from "../../../assets/home/dots.svg"

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles((theme) => ({
    imageContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }));


const CardPay = () => {

    const classes = useStyles();

  return (
    <Container sx={{ mt: 20 }}>
      <Grid container>
      <Grid item lg={6} xs={12}>
          <Box>
            <img src={mobilepay} alt="pay-slip" />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <Typography 
               className='text-font'
          sx={{
            color: 'var(--gray-scale-gray-800, #1D2939)',
            // fontFamily: 'Open Sans',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '60px',
            letterSpacing: '-0.96px',
            textAlign: 'left',
          }}>
            Your card just a tap away
          </Typography>
          <Typography 
          className='text-font'
          sx={{
            color: 'var(--secondary-secondary-600, #58506C)',
            mt:"24px",
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '30px',
            textAlign: 'left',
          }}>
           With our Card Assistant you never forget to use your card. It will show right on your lock screen when you are in a store.
          </Typography>
          <Box
    sx={{
      display: { lg: 'flex', xs: 'none' },
      position: 'absolute',
      top: '3%',
      right: '0%',
    }}
  >
    <img src={imgdots} alt="dot-ing" />
  </Box>

        </Grid>
      </Grid>
    </Container>
  )
}

export default CardPay
