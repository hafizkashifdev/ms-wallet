import { Grid, Typography } from '@mui/material';
import React from 'react';
import './card.css'
import googleplay from '../../assets/google-play-badge.svg';
import applepaly from '../../assets/appleplay.svg';

const Card = () => {
  return (
    <Grid item xs={12} sx={{ display:{lg:'flex',xs:'none'}, justifyContent: 'center', alignItems: 'center', mt: 20, mb: 10 }}>
      <div  className ="card-style "  style={{ backgroundColor: '#796EFF', padding: '64px 80px', width: '100%', display: 'flex',maxWidth:'1280px',  alignItems: 'center', borderRadius: '16px' , }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: '32px',
            // border: '1px solid black',
            fontWeight: 600,
            color: 'var(--text-body, #4E4B66)',
            fontFamily: 'Outfit',
            fontStyle: 'normal',
            lineHeight: 'normal',
            textAlign: 'left',
            marginRight: '20px',
            color: 'white',
          }}
        >
          Add your cards, Collect rewards & Get offers.
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <img src={googleplay} alt="google" style={{ marginRight: '10px' }} />
          <img src={applepaly} alt="apple" />
        </div>
      </div>
    </Grid>
  );
}

export default Card;
