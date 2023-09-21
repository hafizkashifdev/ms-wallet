import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import headdotsimg from "../../assets/home/dots.svg"

const Business = () => {
  return (
  <>
   <Container maxWidth="xxl">
<Box sx={{display:{lg:"flex",xs:"none"},pr:"50px",position:'relative',}}>
 <img src={headdotsimg} alt="img" style={{marginLeft:"auto",position:"absolute",right:70,top:170}}>
  </img>
 </Box>
    </Container>

<Grid item xs={12}  sx={{mt:"180px"}}>
 
<Typography
  sx={{
    color: '#8155FF',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: '60px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '72px',
    letterSpacing: '-1.2px',
  }}
>
Business
</Typography>
<Typography
  sx={{
    color: 'var(--gray-scale-gray-500, #667085)',
    textAlign: 'center',
    fontFamily: 'Outfit',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '0.2px',
    mt:"24px"
  }}
>Fully trackable drive-to-store solutions.
</Typography>

</Grid>

</>
  )
}

export default Business
