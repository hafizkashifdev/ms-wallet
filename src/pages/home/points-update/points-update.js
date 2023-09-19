import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import persentagegir from "../../../assets/home/persentage-girl.svg";
import persenbg from "../../../assets/home/persebg.svg";
import pering from "../../../assets/home/pgbg.svg";
import bp from "../../../assets/home/pgbg.svg";

const PointsUpdate = () => {
  return (
    <Container maxWidth="xl">
     
     
        <Grid container item justifyContent="center" sx={{  display: {md:'none',xs:'flex'},}}>
          <Grid
            item
            md={8}
            xs={12}
            sx={{
              display: 'flex',
              // height: "280px",
              
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              borderRadius: '20px 140px 140px 20px',
              // background: 'linear-gradient(93deg, #4FB3F6 0%, #2BA0F0 113.1%)',
             
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              paddingRight: '0px',
              mt:"50px"
            }}
          >
            <Typography sx={{
               color:'--gray-scale-gray-800, #1D2939)',
              fontFamily: 'Outfit',
              fontSize: {sm:'48px',xs:"28px"},
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: {sm:'58px',xs:"36px"},
              letterSpacing: '-0.96px',
              textAlign:'center',
              // background: 'linear-gradient(93deg, #4FB3F6 0%, #2BA0F0 113.1%)',
            }}>
              Activate Coupons, see your points update
            </Typography>
            <Typography sx={{
              color:'--secondary-secondary-600, #58506C)',
              fontFamily: 'Outfit',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '28px',
              letterSpacing: '0.8px',
              textAlign:'center',
              mt:2
              
              // background: 'linear-gradient(93deg, #4FB3F6 0%, #2BA0F0 113.1%)',
            }}>
              Redeem personalized coupons automatically with your purchase.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
<img src={persentagegir} alt="persentage-girl" style={{ width:"100%",height:'100%'}} />
</Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: { md: 'flex', xs: 'none' } }}>
  <img src={bp} alt="Pering" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} draggable={false} />
</Grid>

    </Container>
  );
};

export default PointsUpdate;
