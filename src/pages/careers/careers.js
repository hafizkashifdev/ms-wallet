import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import dotimg from "../../assets/home/dots.svg"


const Careers = () => {
  return (

<>

    <Container maxWidth="xxl">
<Box sx={{display:{lg:"flex",xs:"none"},pr:"50px",position:'relative',}}>
 <img src={dotimg} alt="img" style={{marginLeft:"auto",position:"absolute",right:70,top:170}}>
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
<Grid item xs={12} sx={{mt:10}}>
<Button

 className='text-font'
  sx={{
    ml:2,
    mb:2,
    mt:2,
    // border:"1px solid black",
    color: 'var(--gray-scale-gray-600, #475467)',
    fontFamily: 'Outfit',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '0.24px',
  }}
>
  View Jobs
</Button>

<iframe src='https://jobs.orcaloholding.co.uk/jobs/companies/x6JjXz0nZY5kzbkD4VqrLpgoP2' width='100%' height='100%' no-border title='Jobs Widget'   style={{ border: "none", minHeight: "950px" }}></iframe>
</Grid>
   </Grid>
   
   </Container>
   </>
  )
}

export default Careers

