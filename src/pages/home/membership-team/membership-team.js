import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import memberimg from "../../../assets/home/membershipbuss.svg";
import btnright from "../../../assets/home/arrow-right.svg";
import graphgif from "../../../assets/home/graphhome.gif";
import gropup from "../../../assets/home/group.svg";

const MembershipTeam = () => {
  const mainContainerStyle = {
    background: `url(${memberimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '2rem', // Adjust padding as needed
  };

  return (
    <Container maxWidth="xl" sx={mainContainerStyle}>
      <Grid container>
        <Grid item xs={4}>
          <img src={graphgif} alt="graphgif" />
        </Grid>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontFamily: 'Open Sans',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '60px',
              color: 'var(--gray-scale-gray-800, #1D2939)',
              letterSpacing: '-0.96px',
            }}
          >
            Interested in what
            <span style={{ color: '#AD90FE' }}> Membership Wallet </span>
            can do for your business
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            sx={{
              color: 'var(--secondary-secondary-600, #58506C)',
              fontFamily: 'Open Sans',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '30px',
            }}
          >
            Discover how a Membership Wallet can revolutionize your business! Our Membership Wallet offers a wide range of benefits, including enhanced customer loyalty and retention. With personalized rewards and exclusive discounts, you can build strong, lasting relationships with your clientele. Through seamless communication and data-driven insights, the Membership Wallet allows you to connect with your members directly, sending tailored offers and updates.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<img src={btnright} alt="btnright" />}
            sx={{
              borderRadius: '8px',
              border: '1px solid var(--gray-scale-gray-300, #D0D5DD)',
              boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            }}
          >
            View Business
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src={gropup} alt="memimg" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MembershipTeam;
