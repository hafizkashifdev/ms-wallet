import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import heroimg from '../../assets/Group 1410087859.png';
import elipdeheroone from '../../assets/Ellipse 1143.png';
import elipdeherotwo from '../../assets/Ellipse 1145.png';

const Hero = () => {
  const containerStyle = {
    // background: 'url("background-image.jpg")', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const leftGridStyle = {
    paddingRight: '15px', 
  };

  const rightGridStyle = {
    position: 'relative', 
  };

  const bottomCenteredImageStyle = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={6} sx={leftGridStyle}>
      <img src={elipdeheroone} alt="Ellipse 1" style={{ ...bottomCenteredImageStyle, left: '25%' }} />
        <Typography variant='h6' sx={{fontSize:'72px',fontWeight:700,color:'#2F2F2F',fontFamily:'Open Sans',fontStyle:'normal',lineHeight:'90px',letterSpacing:'-1.44px'}}>
          Lorem ipsum dolor sit amet consectetur.
        </Typography>
        <Typography sx={{fontSize:'72px',fontWeight:700,color:'#8155FF',fontFamily:'Open Sans',fontStyle:'normal',lineHeight:'90px',letterSpacing:'-1.44px'}}>
          <span style={{ color: '#8155FF' }}> Lorem ipsum </span>
        </Typography>
        <Typography variant='body1' sx={{fontSize:'24px',fontWeight:400,color:'#4E4B66',fontFamily:'Open Sans',fontStyle:'normal',lineHeight:'32px'}}>
          Lorem ipsum dolor sit amet consectetur. In tellus maecenas massa convallis blandit nisl. Fames eget arcu lectus platea imperdiet.
        </Typography>
        <Button
          sx={{
            backgroundColor: '#8155FF',
            mt:2,
            color: '#ffffff',
            borderRadius: '8px',
            fontSize: '16px',
            padding: '13px 36px',
            fontWeight: 600,
            fontFamily: 'Open Sans',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#6d43e2'
            },
          }}
        >
          Lorem ipsum
        </Button>
      </Grid>
      <Grid item xs={6} textAlign="center" sx={rightGridStyle}>
        <img src={heroimg} alt="Logo" />
        <img src={elipdeherotwo} alt="Ellipse 2" style={{ ...bottomCenteredImageStyle, left: '50%' }} />
      </Grid>
    </Grid>
  );
}

export default Hero;
