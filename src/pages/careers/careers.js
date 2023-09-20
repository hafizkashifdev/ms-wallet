import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import dotimg from "../../assets/home/dots.svg"

const Careers = () => {
  return (

<>

    <Container maxWidth="xxl">
<Box sx={{display:"flex",pr:"50px",position:'relative',mt:2}}>
 <img src={dotimg} alt="img" style={{marginLeft:"auto",position:"absolute",right:50,top:100}}>
  </img>
 </Box>
    </Container>
    <Container maxWidth="xl">
   <Grid container >

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
  Careers
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
>
A career in membership wallet involves managing and enhancing digital platforms and applications that offer membership <br/>services, often focusing on customer engagement, retention, and improving user experiences.
</Typography>

</Grid>
<Grid item xs={12}>
<iframe src='https://jobs.orcaloholding.co.uk/jobs/companies/x6JjXz0nZY5kzbkD4VqrLpgoP2' width='100%' height='100%' no-border title='Jobs Widget'   style={{ border: "none", minHeight: "950px" }}></iframe>
</Grid>
   </Grid>
   
   </Container>
   </>
  )
}

export default Careers

