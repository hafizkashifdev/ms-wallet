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

    <Container maxWidth="lg" >
  <Grid container

  className='background-svg '
  sx={{ 
    
    // border: "1px solid #BA88FF" ,borderRadius:'8px'
    
    mt:"185px"}}
  // sx={gridStyle}
  
  >


<Grid item lg={7} xs={12} sx={{ alignItems: "center", justifyContent: "center" }}>
  <Typography
    className='text-font'
    sx={{
      textAlign: {lg:"left",xs:"center"},
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "60px",
      color: "#1D2939",
      letterSpacing: "-0.64px",
      mt:{lg:10,xs:2}
    }}
  >
    From <span style={{ color: '#8155FF' }}>cost-per-click</span> through cost-per-purchase
  </Typography>
  <Typography
    className='text-font'
    sx={{
      color: "var(--gray-scale-gray-500, #667085)",
      textAlign: {lg:"left",xs:"center"},
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "30px",
      mt: "16px"
    }}
  >
    Stocard can track visits and purchases post-click, making end-to-end attribution come true. The ROI question answered in detail through first-party data.
  </Typography>
  <Box sx={{display:'flex',justifyContent:{lg:"flex-start",xs:"center"}}}>

 
  <Button
    sx={{
      borderRadius: '8px',
      background: 'linear-gradient(103deg, #9672FE 0%, #6A35FF 100%)',
      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      padding: "14px 24px",
      color: "#ffffff",
      textTransform: 'capitalize',
      mt: "36px",
      textAlign: {lg:"left",xs:"center"},
    }}
  >
    Get in touch
  </Button>
  </Box>
</Grid>

<Grid item lg={5} xs={12} >
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    sx={{ height: "100%" ,display:{lg:"flex",xs:"none"}}}
  >
    <Grid item>
      <img
        src={map}
        alt="map"
        sx={{ maxWidth: "300px", width: "100%" }}
      />
    </Grid>
  </Grid>
</Grid>

  </Grid>
</Container>

</>
  )
}

export default Business
