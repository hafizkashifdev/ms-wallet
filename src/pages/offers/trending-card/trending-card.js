import React, { useState } from 'react';
import {  Typography, Button, Box, SvgIcon, Grid } from '@mui/material';
import salec from "../../../assets/home/group.svg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import saleimg from "../../../assets/offers/sale.svg";
import saleimgtwo from "../../../assets/offers/special.svg";
import saleimgthree from "../../../assets/offers/persensale.svg";


const cards = [
  {
    img: saleimg,
    text: '60%',
  },
  {
    img: saleimgtwo,
    text: '50%',
  },
  {
    img: saleimgthree,
    text: '20%',
  },
];

const cardColors = {
  '60%': 'rgba(242, 188, 2, 0.80)',
  '50%': 'rgba(242, 188, 2, 0.80)',
  '20%': 'green',
};
const  TrendingCard = () => {

  const [hovered, setHovered] = useState(false);
  
  const buttonText = hovered ? 'View Details' : '£9.50';


  return (
    <Grid container spacing={2}>
    {cards.map((card, index) => (
      <Grid item lg={4} md={6} xs={12} sx={{display:"flex", justifyContent:'center'}} key={index}>
    <Card
    style={{
      width: '100%',
      maxWidth: '448.714px',
      minHeight: '530.979px',
      borderRadius:'16px',
      flexShrink: 0,
      display: 'flex',
     
      flexDirection: 'column',
      alignItems: 'center', // Center content horizontally
    }}
  >
    <CardMedia
      component="img"
      alt="Card Image"
      height="265.074px"
      style={{
        width: '100%',
        borderRadius:'16px',
        maxWidth: '408.829px',
        minHeight: '265.074px',
        flexShrink: 0,
        position: 'relative',
        marginTop: '1rem', 
      }}
      src={card.img}
    />
    <SvgIcon
      style={{
        width: '99.714px',
        height: '39.886px',
        fill: 'rgba(242, 188, 2, 0.80)',
        strokeWidth: '0.831px',
        stroke: 'rgba(255, 255, 255, 0.30)',
        filter: 'drop-shadow(0px 6.6476px 19.9429px rgba(0, 0, 0, 0.40))',
        backdropFilter: 'blur(4.1548px)',
        position: 'absolute',
        top: '2px',
        right: '2px',
      }}
    >
      <polygon points="16,0 14.29,4.11 10,4.11 8.29,0 6,0 10,8 14.29,8"></polygon>
    </SvgIcon>
    <Box sx={{ position: 'relative' }}>
  <Typography
    variant="body2"
    sx={{
      position: 'absolute',
      top: '-250px',
      right: '-190px',
      backgroundColor: cardColors[card.text],
      width: '99px',
      height: '40px',
      color: 'white',
      padding: '2px 8px',
      borderRadius: '0px 8px 8px 8px', 
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
    }}
  >
{card.text}
  </Typography>
</Box>


      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: '#796EFF',
            fontFamily: 'Outfit',
            fontSize: '13.295px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '0.266px',
            mt:"29px"
          }}
          className='text-font'
        >
          Sponge Cakes
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#475467',
            fontFamily: 'Outfit',
            fontSize: '13.295px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            mt:'13px'
          }}
          className='text-font'
        >
          4.9  <SvgIcon sx={{ color: '#EFA029' }}>
      <polygon points="12,2 15,8 22,8 16,13 19,20 12,15 5,20 8,13 2,8 9,8"></polygon>
    </SvgIcon>
          (136 Ratings)
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'var(--gray-scale-gray-600, #475467)',
            fontFamily: 'Outfit',
            fontSize: '19.943px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '28.252px',
          }}
        >
          Admission to Santus Circus, 31 August 2023 - 24 September
        </Typography>
      </CardContent>
      
      <Box
    sx={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px', // Adjust the padding to control space on the left and right
    }}
  >
    <Button
      variant="contained"
      sx={{
        borderRadius: '6px',
        background: 'rgba(121, 110, 255, 0.10)',
        width:'100%',
        maxWidth:"224px",
        color: '#796EFF',
        '&:hover': {
          background: '#796EFF',
          color: 'white',
        },
      }}
    >
      {buttonText}
    </Button>
    <Typography
      sx={{
        color: 'var(--gray-scale-gray-500, #667085)',
        fontFamily: 'Outfit',
        fontSize: '23.267px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        textDecorationLine: 'line-through',
      }}
    >
      £19.00 
    </Typography>
  </Box>

    </Card>
    </Grid>
      ))}
    </Grid>
  );
};

export default TrendingCard;
