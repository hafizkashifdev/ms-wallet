import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import herobg from "../../../assets/framehero.svg";
import seacrcIcon from "../../../assets/icon/search-normal.svg";
import heroimg from "../../../assets/safe-box.svg";
import './home-hero.css';
// import Card from "../../card/card";

const HomeHero = () => {
  const searchBarStyles = {
    width: '100%',
    maxWidth: '500px',
    height: '44px',
    borderRadius: '24px',
    background: 'var(--gray-scale-gray-25, #FCFCFD)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const inputStyles = {
    border: 'none',
    borderColor: 'transparent',
    textAlign: 'center',
    color: 'var(--gray-scale-gray-400, #98A2B3)',
  };

  const buttonStyles = {
    color: 'white',
    background: 'var(--primary-primary-500, #7A5AF8)',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    padding: '10px 20px',
    borderRadius: '24px',
  };

  const searchimgStyles = {
    marginRight: '8px',
  };

  return (
    <div
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xxl">
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{px:{lg:'80px',xs:'0px'}}}>
          <Grid item xs={12} lg={6} sx={{ p: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { lg: "72px", xs: "60px" },
                fontWeight: 700,
                color: "#2F2F2F",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                lineHeight: { lg: "90px", xs: "none" },
                letterSpacing: "-1.44px",
                mt: { xs: "70px" },
                width:'100%',
                maxWidth:'775px',
              }}
            >
              Lorem ipsum dolor sit amet consectetur. <br/><span style={{ color: "#8155FF" }}> Lorem ipsum </span>
            </Typography>
            {/* <Typography
              sx={{
                fontSize: { lg: "72px", xs: "60px" },
                fontWeight: 700,
                color: "#8155FF",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                lineHeight: { lg: "90px", xs: "none" },
                letterSpacing: "-1.44px",
                mt: -4,
              }}
            >
              <span style={{ color: "#8155FF" }}> Lorem ipsum </span>
            </Typography> */}
            <Typography
              variant="body1"
              sx={{
                fontSize: "24px",
                fontWeight: 400,
                color: "#4E4B66",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                lineHeight: "32px",
                mt: 2,
                width:'100%',
                maxWidth:'764px',
                height:'64px'
              }}
            >
              Lorem ipsum dolor sit amet consectetur. In tellus maecenas massa
          <br/>
              convallis blandit nisl. Fames eget arcu lectus platea imperdiet.
            </Typography>
            <div style={{ ...searchBarStyles, marginTop: '30px' }} className="search-main" >
              <TextField
                sx={{
                  border: 'none',
                  "& fieldset": { border: 'none' },
                }}
                placeholder="Enter Postal Code"
                variant="outlined"
                InputProps={{
                  style: { ...inputStyles, textAlign: 'left' },
                }}
              />
              <Button variant="contained" style={buttonStyles}>
                <img src={seacrcIcon} alt="search-icon" style={searchimgStyles} />
                Search
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img className="hero-frame-img" src={heroimg} alt="Image2" />
          </Grid>
         
        </Grid>
        {/* <Card/> */}
      </Container>
    </div>
  );
};

export default HomeHero;
