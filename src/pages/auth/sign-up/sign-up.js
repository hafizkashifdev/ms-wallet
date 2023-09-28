import { Box, Container, Grid, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import authlogo from '../../../assets/auth/sign-in/Logo.svg';
import boxbg from "../../../assets/auth/sign-up/gbg.svg"
import { Button } from '@mui/material'


const SignUp = () => {
  return (
   <Container maxWidth="xl">

    <Grid container >
        <Grid item lg={6} xs={12} >

            <Box>
                <img src={authlogo} alt="logo">
                </img>
            </Box>

            <Box>
                <Typography  className='text-font' sx={{
    color: '#000047',
    // fontFamily: 'Outfit',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '60px',
    letterSpacing: '-0.72px',
  }}>
                Sign up for account
                </Typography>


            </Box>

            <Grid container>
                <Grid xs={12}>
                <Grid item  lg={3} xs={12} gap={2}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  First Name{" "}
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter first name"
                  className='text-font'
                  sx={{
                      
                    fontSize: "16px",
                    background: "#F9FAFB",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                  }}
                >
                  Enter first name
                </TextField>
              </Grid>
              <Grid item lg={3} xs={12}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  Last Name{" "}
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter last name"
                  className='text-font'
                  sx={{
               
                    fontSize: "16px",
                    borderRadius: "8px",
                    background: "#F9FAFB",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                  }}
                >
                  Enter last name
                </TextField>
              </Grid>
              <Grid item lg={6} xs={12} sx={{  }}>
              <InputLabel
                fullWidth
                className='text-font'
                sx={{
                
                  fontSize: "16px",
                  py: "12px",
                }}
              >
                Email{" "}
              </InputLabel>
              <TextField
                fullWidth
                placeholder="Enter email"
                className='text-font'
                sx={{
                 
                  fontSize: "16px",
                  background: "#F9FAFB",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8155FF"
                    }
                  }
                }}
              >
                Enter email
              </TextField>

            </Grid>
            <Grid item  lg={3} xs={12} gap={2}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                Password  
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter password"
                  className='text-font'
                  sx={{
                      
                    fontSize: "16px",
                    background: "#F9FAFB",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                  }}
                >
              Password  
                </TextField>
              </Grid>
              <Grid item lg={3} xs={12}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                    Confirm Password 
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Re-enter password"
                  className='text-font'
                  sx={{
               
                    fontSize: "16px",
                    borderRadius: "8px",
                    background: "#F9FAFB",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                  }}
                >
                  Confirm Password  
                </TextField>

                <Typography className="text-font" sx={{ color: '#23222D',
    // fontFamily: 'Lato',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '28px',}}>
               Already have an account?  <span style={{color:'#8155FF'}}>Sign In</span>
                </Typography>y

                <Button
    fullWidth
    sx={{
      color: "#FFFFFF",
      backgroundColor: "#916BFE",
      textTransform:'capitalize',
      "&:hover": {
        backgroundColor: "#7455D0", 
        color: "#FFFFFF", 

      },
    }}
  >
 SIgn Up
  </Button>
              </Grid>
                </Grid>

            </Grid>

        </Grid>

        <Grid item xs={12} >
    <Box >
<img src={boxbg} alt="jj">
</img>
    </Box>
        </Grid>
    </Grid>

   </Container>
  )
}

export default SignUp