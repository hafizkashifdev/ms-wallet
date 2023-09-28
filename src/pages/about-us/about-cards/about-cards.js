import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import effiey from "../../../assets/about-us/cards.svg";
import connven from "../../../assets/about-us/discount-shape.png";
import wallwwt from "../../../assets/about-us/wallet.png";
import wallettfour from "../../../assets/about-us/shield-tick.png";

import Innovation from "../../../assets/about-us/status-up.svg"
import join from "../../../assets/about-us/profile-2user.png"

const cardData = [
  {
    id: 1,
    bgColor: '#F0FAFF',
    image: effiey,
    title: 'Efficiency',
    titleColor: '#029A9A',
    content: 'Put an end to clogged wallets and piles of plastic cards. With Membership Wallet, put all of your loyalty cards and memberships within easy reach.',
  },
  {
    id: 2,
    bgColor: '#FFFAED',
    image: connven,
    title: 'Convenience',
    titleColor: '#F1B300', 
    content: `Our user-friendly interface makes it easy to add, organise, and manage your cards. You'll wonder how you ever lived without it.`,
  },
  {
    id: 3,
    bgColor: '#F9F6FF',
    image: wallwwt,
    title: 'Wallet',
    titleColor: '#9D7BFF', 
    content: `Our user-friendly interface makes it easy to add, organise, and manage your cards. You'll wonder how you ever lived without it.`,
  },
  {
    id: 4,
    bgColor: '#F0FAFF',
    image: wallettfour,
    title: 'Security',
    titleColor: '#46A4CD', 
    content: 'We take your data security seriously. Your personal information and card details are protected with the latest encryption technology.',
  },
  {
    id: 5,
    bgColor: '#FFF6F9',
    image: Innovation,
    title: 'Innovation',
    titleColor: '#FF8FB1', 
    content: `We're committed to staying ahead in the world of loyalty management. We continuously update our platform to provide you with the best experience.`,
  },
  {
    id: 6,
    bgColor: '#FFF8F8',
    image: join,
    title: 'Join Us Digital Revolution: ',
    titleColor: '#FF7E7E', 
    content: `Join us as we improve the way you manage your memberships and loyalty cards. We're influencing loyalty management's future together.`,
  },
];

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    position: 'relative',
    justifyContent:'center'
  },
  cardBox: {
    position: 'absolute',
    borderRadius: "4px 4px 34px 4px",
    width: '100px',
    height: '100px',
    top: "10px",
    left: "12%",
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AboutCards = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} lg={3} key={card.id} sx={{display:'flex',flexDirection:"column",justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <div className={classes.cardWrapper}>
              <Card sx={{mt:8,width:'100%',maxWidth:"398px"}}>
                <CardContent>
                  <Typography className="text-font" sx={{ color: card.titleColor, ml: "24px", fontFamily: 'Outfit', fontSize: "20px", fontStyle: 'normal', fontWeight: 600, lineHeight: '32px', mt: '50px' }}>
                    {card.title}
                  </Typography>
                  <Typography className="text-font" sx={{ color: 'var(--gray-scale-gray-500, #667085)', ml: "24px", fontFamily: 'Outfit', fontSize: "16px", fontStyle: 'normal', fontWeight: 400, lineHeight: '26px', mt: "16px" }}>
                    {card.content}
                  </Typography>
                </CardContent>
              </Card>
              <Box
                className={classes.cardBox}
                style={{ zIndex: 2 + index }}
                sx={{
                  bgcolor: card.bgColor,
                }}
              >
                <img src={card.image} alt={card.title} style={{ width: '60px', height: '60px' }} />
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AboutCards;
