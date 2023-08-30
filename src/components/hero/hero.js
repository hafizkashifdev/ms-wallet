import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import heroimg from '../../assets/Group 1410087859.svg';
import './hero.css';
import herorightone from '../../assets/herorightone.svg';
import herorighlock from '../../assets/herorighlock.svg';
import herobg from '../../assets/hero-bg.svg';
import barfi from '../../assets/barfi.svg';
const Hero = () => {
  



  return (
    <div 
    
    style={{  backgroundImage: `url(${herobg})`,width:'100%',padding:'0px',margin:'0px', opacity:'1',filter:'blur(0.5px)'}}
    
    >
    <Container maxWidth="xxl" 
    
    >
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      
      sx={{ height: "100vh",mt:2,
     
    }} 
    >
     <Grid item xs={12} lg ={6} sx={{ position: "relative" ,p:2,m:0,}}>
        <Typography variant='h1' sx={{ fontSize: {lg:'72px',xs:'44px'}, fontWeight: {lg:700,xs:500}, color: '#2F2F2F', p:2, fontFamily: 'Open Sans', fontStyle: 'normal', lineHeight: {lg:'90px',xs:'none'}, letterSpacing: '-1.44px',mt:{lg:'none' ,xs:'70px'} }}>
          Lorem ipsum dolor sit  amet consectetur.
        
        </Typography>
        <Typography sx={{fontSize: {lg:'72px',xs:'44px'},fontWeight:700,color:'#8155FF',fontFamily:'Open Sans',fontStyle:'normal',p:2,lineHeight:'10px',  lineHeight: {lg:'90px',xs:'none'},letterSpacing:'-1.44px',mt:-4}}>
           <span style={{ color: '#8155FF' ,}}> Lorem ipsum </span>
        </Typography>

        <Typography variant='body1' sx={{fontSize:'24px',p:2,fontWeight:400,color:'#4E4B66',fontFamily:'Open Sans',fontStyle:'normal',lineHeight:'32px',mt:2}}>
          Lorem ipsum dolor sit amet consectetur. In tellus maecenas massa<br/>convallis blandit nisl. Fames eget arcu lectus platea imperdiet.
        </Typography>
       
        <Button
          sx={{
            backgroundColor: '#8155FF',
            mt: 2,
            m:2,
            color: '#ffffff',
            borderRadius: '8px',
            fontSize: '16px',
            padding: '13px 36px',
            fontWeight: 600,
            fontFamily: 'Open Sans',
            textTransform: 'capitalize',
            lineHeight: '150%',
            '&:hover': {
              backgroundColor: '#6d43e2'
            },
          }}
        >
          Lorem ipsum
        </Button>
      </Grid>

      <Grid item  xs={12} lg ={6} sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
  
  <img src={heroimg} alt="Logo" style={{ maxWidth: "100%" ,marginLeft:'164px'}} />

  

  <div style={{ position: "absolute", top: '58%', left: '25%'}}>
    <img src={herorightone} alt="Image 2" />
  </div>
  
 
  <div style={{ position: "absolute", top: '13%', left: "54%" }}>
    <img src={herorighlock} alt="Image 3" />
  </div>
  
  
  <div style={{ position: "absolute", top: '87%'  , right: '3%'}}>
    <img src={barfi} alt="Image 4" />
  </div>
</Grid>

    </Grid>
  </Container>
  </div>
  );
}

export default Hero;
