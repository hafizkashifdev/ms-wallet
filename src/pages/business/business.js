import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import headdotsimg from "../../assets/home/dots.svg";
import businessmain from "../../assets/business/businessmain.svg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import circlebg from "../../assets/business/bg-circle.svg";
import arrowgif from "../../assets/business/arrowplan.gif"
import Personalization from "../../assets/business/Personalization.gif"
import datarich from "../../assets/business/datarich.gif"
import phone from "../../assets/business/phone.gif"
import map from "../../assets/business/Map.svg"

const cardData = [
  {
    title: "ROAS focused",
    description: "Our optimized audience ensures maximum store conversions, eliminating distribution losses, all thanks to efficient CPC strategies.",
    image: arrowgif, 
    
  },
  {
    title: "Personalization",
    description: "Provide a one-of-a-kind shopping adventure, personalized for both your members and future customers.",
    image: Personalization,
  },
  {
    title: "Data rich",
    description: "Unlock a wealth of data to uncover the key drivers of store conversions and gain insights into customer interactions with your competitors.",
    image: datarich, 
  },
  {
    title: "Mobile and contactless",
    description: "Engage a wide mobile audience naturally with a fully digital, impactful, COVID-19 resilient, and eco-friendly approach.",
    image: phone, 
  },
];

const svgStyle = {
  width: '100%',
  height: '100%',
  fill: 'none',
};

const gridStyle = {
  border: '2px solid black', // Adjust border properties as needed
  position: 'relative', // Needed for absolute positioning of SVG
};



const Business = () => {
  return (
  <>
   <Container maxWidth="xxl">
<Box sx={{display:{lg:"flex",xs:"none"},pr:"50px",position:'relative',}}>
 <img src={headdotsimg} alt="img" style={{marginLeft:"auto",position:"absolute",right:70,top:170}}>
  </img>
 </Box>
    </Container>

<Container maxWidth="lg">
<Grid item xs={12}  sx={{mt:"180px"}}>
 
<Typography
className='text-font'
  sx={{
    color: '#8155FF',
    textAlign: 'center',
    // fontFamily: 'Open Sans',
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
className='text-font'
  sx={{
    color: 'var(--gray-scale-gray-500, #667085)',
    textAlign: 'center',
    // fontFamily: 'Outfit',
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
</Container>
<Container maxWidth="xl">
      <Grid container justifyContent="center"> 
        <Grid item sx={{ marginTop: "68px" }}>
          <img
            src={businessmain}
            alt="business"
            style={{ width: "100%", maxWidth: "100%" }} 
          />
        </Grid>
        <Grid item sx={{display:'flex',flexDirection:"column",justifyContent:'center',mt:"190px"}}>
<Typography
className='text-font'
      sx={{
        color: '#8155FF',
        textAlign: 'center',
        fontSize: '60px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '72px',
        letterSpacing: '-1.2px',
        mt: "24px",
      }}
    >
      Why work with Membership Wallet
    </Typography>
    <Typography
className='text-font'
sx={{
  color: 'var(--gray-scale-gray-500, #667085)',
  textAlign: 'center',
  // fontFamily: 'Outfit',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '32px',
  letterSpacing: '0.2px',
  mt:"16px"
}}
    >
    Tailor features to meet your unique needs
    </Typography>

    
</Grid>


      </Grid>

    </Container>
    <Container maxWidth="xl">
  <Grid container justifyContent="center" alignItems="center" sx={{mt:"78px"}}>
  
    {cardData.map((card, index) => (
      <Grid item xs={12} sm={6} md={3} key={index} sx={{  p: 2 }}>
        <Card
          sx={{
            borderRadius: "20px",
            background: "#FFFFFF",
            maxWidth: "398px",
            minHeight: "330px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
              <CardMedia
                component="img"
                alt={card.title}
                height="152"
                image={card.image}
                sx={{
                  width: "152px",
                  height: "152px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: `url(${circlebg})`,
                  backgroundSize: "cover",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#59B9FF",
                    textAlign: "center",
                    // fontFamily: "Outfit",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "32px",
                  }}
                  className='text-font'
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className='text-font'
                  sx={{
                    color: "var(--gray-scale-gray-500, #667085)",
                    textAlign: "center",
                    fontFamily: "Outfit",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "26px",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    <Container maxWidth="lg">
  <Grid container
  sx={{ 
    
    // border: "1px solid #BA88FF" ,borderRadius:'8px'
    
    mt:"185px"}}
  // sx={gridStyle}
  
  >
  {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1397"
        height="399"
        viewBox="0 0 1397 399"
        style={svgStyle} // Apply the svgStyle to the SVG
      ><svg xmlns="http://www.w3.org/2000/svg" width="1397" height="399" viewBox="0 0 1397 399" fill="none">
      <path d="M1 362.301H2H1ZM1 37.1993H0H1ZM36.6993 2.5H1360.3V0.5H36.6993V2.5ZM1395 37.1993V362.301H1397V37.1993H1395ZM1360.3 397H36.6993V399H1360.3V397ZM2 362.301V37.1993H0V362.301H2ZM36.6993 397C17.5354 397 2 381.465 2 362.301H0C0 382.569 16.4308 399 36.6993 399V397ZM1395 362.301C1395 381.465 1379.46 397 1360.3 397V399C1380.57 399 1397 382.569 1397 362.301H1395ZM1360.3 2.5C1379.46 2.5 1395 18.0354 1395 37.1993H1397C1397 16.9308 1380.57 0.5 1360.3 0.5V2.5ZM36.6993 0.5C16.4308 0.5 0 16.9308 0 37.1993H2C2 18.0354 17.5354 2.5 36.6993 2.5V0.5Z" fill="url(#paint0_linear_23208_9703)" fill-opacity="0.7"/>
      <defs>
        <linearGradient id="paint0_linear_23208_9703" x1="1" y1="1.5" x2="145.389" y2="685.882" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9A35FF"/>
          <stop offset="0.513577" stop-color="#7B78FF" stop-opacity="0"/>
          <stop offset="1" stop-color="#60B3FF"/>
        </linearGradient>
      </defs>
      
    </svg>
     </svg> */}
<Grid item lg={7} xs={12} sx={{ alignItems: "center", justifyContent: "center" }}>
  <Typography
    className='text-font'
    sx={{
      textAlign: "left",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "60px",
      color: "#1D2939",
      letterSpacing: "-0.64px",
      mt:10
    }}
  >
    From <span style={{ color: '#8155FF' }}>cost-per-click</span> through cost-per-purchase
  </Typography>
  <Typography
    className='text-font'
    sx={{
      color: "var(--gray-scale-gray-500, #667085)",
      textAlign: "left",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "30px",
      mt: "16px"
    }}
  >
    Stocard can track visits and purchases post-click, making end-to-end attribution come true. The ROI question answered in detail through first-party data.
  </Typography>
  <Button
    sx={{
      borderRadius: '8px',
      background: 'linear-gradient(103deg, #9672FE 0%, #6A35FF 100%)',
      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      padding: "14px 24px",
      color: "#ffffff",
      textTransform: 'capitalize',
      mt: "36px"
    }}
  >
    Get in touch
  </Button>
</Grid>


    <Grid item lg={5} xs={12}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100%" }}>
        <Grid item>
          <img src={map} alt="map" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Container>

</>
  )
}

export default Business
