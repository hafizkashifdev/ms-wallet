import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import mobilepay from "../../../assets/home/mobilepay.svg"
import mobilepayiphone from "../../../assets/home/paymb.svg"
import imgdots from "../../../assets/home/dots.svg"
import imgframe from "../../../assets/home/frame.svg"

import layer  from"../../../assets/home/line.svg" 

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
<>

<Container maxWidth="xl" sx={{mt:20,display:{md:"flex",xs:"none"}}}>
  
      <Grid container>
       
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}>
          <img src={mobilepayiphone} alt="frame" draggable={false}  style={{ maxWidth: '100%', height: 'auto',width:"100%" }} />
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="xxl">
  <Grid container>
    <Grid xs={12} item sx={{ display: {xl:'flex',xs:"none"} ,position:"relative"}}>
      <img src={imgdots} alt="dots" style={{position:"absolute",top:"-230px",right:'30px'}} />
    </Grid>
  </Grid>
</Container>


<Container maxWidth="lg" sx={{ mt: 20,display:{md:"none",xs:"flex"} }}>
  <Grid container>
    <Grid item xs={12}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", }}>
        <Box sx={{borderRadius: "16px",       p:2,
    border: "1px solid var(--gray-scale-gray-300, #D0D5DD)",  
    background: "#FFF",}}>
        <Typography
          className='text-font'
          sx={{
            color: 'var(--gray-scale-gray-800, #1D2939)',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '60px',
            letterSpacing: '-0.96px',
          }}
        >
          Your card just a tap away
        </Typography>
        <Typography
          className='text-font'
          sx={{
            color: 'var(--secondary-secondary-600, #58506C)',
            // mt: "28px",
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '30px',
           
          }}
        >
          With our Card Assistant, you never forget to use your card. It will show right on your lock screen when you are in a store.
        </Typography></Box>
       <Box sx={{ maxWidth: "100%", width: "100%", marginTop: "50px", mr: { sm: "140px", xs: "60px" } }}>
  <img src={mobilepay} alt="pay-slip" style={{ maxWidth: "100%", height: "auto", width: "100%", marginRight: "40px",marginTop:"30px",marginBottom:'30px' }} />
</Box>

      </div>
    </Grid>
  </Grid>
</Container>




    </>
  )
}

export default CardPay
