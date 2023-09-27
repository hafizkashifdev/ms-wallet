
import React from 'react';
import condot from "../../assets/home/dots.svg"
import {
  Grid,
  Container,
  Box,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FlagUks from "../../assets/contactus/FlagUK.svg";

import PhoneIcon from "../../assets/contactus/call-calling.svg";
import FaxIcon from "../../assets/contactus/call.svg";
import EmailIcon from "../../assets/contactus/sms.svg";

const countries = [
  // { value: "USA", label: "United States" },
  { value: "England", label: "", code: "+44" },
  // { value: "France", label: "France" },
  // { value: "Germany", label: "Germany" },
  // { value: "Japan", label: "Japan" },
];


const DelegateAccount = () => {
  
  const connectdivStyle = {
    background: 'var(--gray-scale-gray-50, #F9FAFB)',
    borderRadius: '0px 0px 300px 300px',
    padding: '20px', 
    height:"643px"
  };

  return (
    <>
 <Container maxWidth="xxl">
<Box sx={{display:{lg:"flex",xs:"none"},pr:"50px",position:'relative',}}>
 <img src={condot} alt="img" style={{marginLeft:"auto",position:"absolute",right:70,top:170}}>
  </img>
 </Box>
    </Container>

    <div style={connectdivStyle}>
   
      <Container maxWidth="lg">

<Grid container >
<Grid item xs={12} sx={{mt:"170px"}}>
<Typography variant="h6" 
 className='text-font'
sx={{color: '#8155FF',
    fontSize: '60px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '72px', 
    letterSpacing: '-1.2px',
    textAlign:"center"}}>Delegate Account</Typography>
</Grid>
</Grid>
      </Container>
      
    </div>

    <Container maxWidth="lg" >
      <Grid container sx={{position:"relative"}}>
<Grid item 
xs={12}
 sx={{
  borderRadius: '20px',
  background: '#FFF',
  boxShadow: '0px 24px 94px -10px rgba(78, 78, 78, 0.20)',
  // padding: '20px',
  // border:"1px solid black",
  // height:"1023px",
  maxWidth: "1109px",
  width:"100%",
  marginTop:"-300px"

  
  
}}
>
            <Grid container spacing={2} sx={{ px: {md:"107px",sm:"40px",xs:"10px"} ,mt:"50px"}}>
              <Grid item  lg={6} xs={12} gap={2}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  First Name {" "} <span style={{color:'red'}}>*</span>
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
                  Enter first name  <span style={{color:'red'}}>*</span>
                </TextField>
              </Grid>
              <Grid item lg={6} xs={12}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  Last Name{" "} <span style={{color:'red'}}>*</span>
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
            </Grid>
            <Grid container spacing={2} sx={{ px: {md:"107px",sm:"40px",xs:"10px"} ,mt:"30px"}}>
            <Grid item lg={6} xs={12} sx={{  }}>
              <InputLabel
                fullWidth
                className='text-font'
                sx={{
                
                  fontSize: "16px",
                  py: "12px",
                }}
              >
                Email{" "}<span style={{color:'red'}}>*</span>
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
            <Grid item lg={6} xs={12} sx={{  }}>
              <InputLabel
                fullWidth
                className='text-font'
                sx={{
                
                  fontSize: "16px",
                  py: "12px",
                }}
              >
               Business Name <span style={{color:'red'}}>*</span>
              </InputLabel>
              <TextField
                fullWidth
                placeholder="Enter company"
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
                Business Name <span style={{color:'red'}}>*</span>
              </TextField>

            </Grid>
              </Grid>
              {/* <Grid item xs={12} sx={{px: {md:"107px",sm:"40px",xs:"10px"},mt:"30px"}}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  Title
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="  Enter subject"
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
                  Enter Tile{" "}
                </TextField>
              </Grid> */}
              
           
             
            <Grid container spacing={2} sx={{ px: {md:"107px",sm:"40px",xs:"10px"} ,mt:"30px"}}>
              <Grid item  lg={6} xs={12} >
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                 Company Registration Number <span style={{color:'red'}}>*</span>
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter Company"
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
                  Enter Company
                </TextField>
              </Grid>
              <Grid item lg={6} xs={12}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
               Services Offered <span style={{color:'red'}}>*</span>
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    value={" Select number of stores"}
                    renderValue={(value) =>
                      value !== "" ? (
                        value
                      ) : (
                        <span
                          style={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: 400,
                          }}
                        >
                          Select number of stores
                        </span>
                      )
                    }
                    sx={{
                      fontSize: "16px",
                      borderRadius: "8px",
                      color: "#A5A7A6",
                      height: "57px",
                      background: "#F9FAFB",
                      "&.Mui-focused fieldset": {
                        border: "#8155FF",
                      },
                    }}
                  >
                    <MenuItem>Ten</MenuItem>
                    <MenuItem>Twenty</MenuItem>
                    <MenuItem>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
           
              
           
              <Grid item xs={12} gap={2} sx={{mt:"30px"}}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                Service Description  <span style={{color:'red'}}>*</span>
                </InputLabel>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="Leave us a message"
                  sx={{ background: "#F9FAFB",  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8155FF"
                    }
                  }}}
                />
              </Grid>
              <Grid item  lg={6} xs={12} gap={2}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                Password <span style={{color:'red'}}>*</span>
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
              Password <span style={{color:'red'}}>*</span>
                </TextField>
              </Grid>
              <Grid item lg={6} xs={12}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                    Confirm Password <span style={{color:'red'}}>*</span>
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
                  Confirm Password <span style={{color:'red'}}>*</span>
                </TextField>
              </Grid>
              <Grid item xs={12} gap={2} sx={{ mt: "30px" }}>
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

              <Grid item xs={12} gap={2} sx={{ textAlign: "center" ,mt:"48px",pb:'50px'}}>
                <Typography
            
            className="text-font "
                  sx={{
                    // fontFamily:"Gilroy-Medium",
                    fontSize: "18px",
                    fontWeight: 400,
                    textTransform:'capitalize'
                  }}
                >
                 Already have an account?

                  <span
                  className="text-font "
                    style={{
                      color: "#916BFE",
                      textTransform:'capitalize'
                   
                    
                    }}
                  >
                  Sign In
                  </span>{" "}
                  <br/>
                  By signing up, you are creating a guest account, and you agree to   <span
                  className="text-font "
                    style={{
                      color: "#916BFE",
                     
                     
                    }}
                  >
              Membership Wallet
                  </span>{" "}
                </Typography>
              </Grid>
              {/* <hr
                style={{ width: "50%", marginLeft: "25%", textAlign: "left" }}
              /> */}
            </Grid>
     

          </Grid>
        </Grid>
     
{/* </Grid>
      </Grid> */}
    </Container>

    </>
  );
};

export default DelegateAccount;
