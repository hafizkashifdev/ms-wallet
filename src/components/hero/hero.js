import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heroimg from "../../assets/Group 1410087859.svg";
import "./hero.css";
import herorightone from "../../assets/herorightone.svg";
import herorighlock from "../../assets/herorighlock.svg";
import herobg from "../../assets/hero-bg.svg";
import barfi from "../../assets/barfi.svg";
const Hero = () => {

  const images = [
    { src: herorightone, top: "58%", left: "25%" },
    { src: herorighlock, top: "13%", left: "54%" },
    { src: barfi, top: "92%", right: "1%" }
  ];

 
  
  
  return (
    <div
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "112vh",
        padding: "0",
        margin: "0",
        opacity: "1",
        filter: "blur(0.5px)",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh", mt: {sm:2,xs:6}, px: { md: "80px", xxl: "120px", sm: '0px' } }}
      >
        <Grid item xs={12} lg={6} sx={{ position: "relative", p: 2, m: 0 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { lg: "72px", xs: "60px" },
              fontWeight: { lg: 700, xs: 700 },
              
              color: "#2F2F2F",
              p: {xl:2,xs:1},
              fontFamily: "Open Sans",
              fontStyle: "normal",
              lineHeight: { lg: "90px", xs: "none" },
              letterSpacing: "-1.44px",
              mt: { lg: "none", sm:"70px",xs: "0px" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "72px", xs: "60px" },
              fontWeight: { lg: 700, xs: 700 },
              color: "#8155FF",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              lineHeight: "10px",
              lineHeight: { lg: "90px", xs: "none" },
              letterSpacing: "-1.44px",
              mt: {xl:-4,xs:-2},
              p: {xl:2,xs:1},
            }}
          >
            <span style={{ color: "#8155FF" }}> Lorem ipsum </span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "24px",
              p: {xl:2,xs:1.4},
              fontWeight: 400,
              color: "#4E4B66",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              lineHeight: "32px",
              mt: {xl:2,xs:-2},
            }}
          >
            Lorem ipsum dolor sit amet consectetur. In tellus maecenas massa
            <br />
            convallis blandit nisl. Fames eget arcu lectus platea imperdiet.
          </Typography>

          <Button
            sx={{
              backgroundColor: "#8155FF",
              mt: {xl:2,xs:2},
              // m: {xl:2,xs:4},
              ml:{xl:2,xs:1},
              color: "#ffffff",
              borderRadius: "8px",
              fontSize: "16px",
              padding: "13px 36px",
              fontWeight: 600,
              fontFamily: "Open Sans",
              textTransform: "capitalize",
              lineHeight: "150%",
              "&:hover": {
                backgroundColor: "#6d43e2",
              },
            }}
          >
            Lorem ipsum
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box className="hero-img">
            <img
              className="hereo-graph_img"
             
              src={heroimg}
              alt="Logo"
              
              
            />
          </Box>
          <Box
           className={`hide-on-small-screens`}
            style={{
              position: "absolute",
              top: "54%",
              left: "14%",
              display: { xl: "block", xs: "none" },
            }}
          >
            <img src={herorightone} alt="Image2" />
          </Box>

          <Box
           className={`hide-on-small-screens`}
            style={{
              position: "absolute",
              top: "11%",
              left: "43%",
              display: { xl: "block", xs: "none" },
            }}
          >
            <img src={herorighlock} alt="Image3" />
          </Box>

          <Box
           className={`hide-on-small-screens`}
            sx={{
              position: "absolute",
              top: "86%",
              right: "10%",
              display: { xl: "block", xs: "none" },
            }}
          >
            <img src={barfi} alt="Image4" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
