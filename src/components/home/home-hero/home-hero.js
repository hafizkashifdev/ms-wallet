import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heroimg from "../../../assets/safe-box.svg";
import './home-hero';

import herobg from "../../../assets/framehero.svg";



export const HomeHero = () => {
   

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
        marginTop:'-14px',
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
             <img
          src={heroimg}
          alt="Image2"
         width={'100%'}
         maxWidth={'512px'}
         height={'512px'}
        />
           
         
        </Grid>
      </Grid>
    </div>
  )
}
