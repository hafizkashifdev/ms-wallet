import React from 'react';
import {  Typography, Button, Box, SvgIcon } from '@mui/material';
import salec from "../../../assets/home/group.svg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const  TrendingCard = (sale) => {
  return (
    <Card
      style={{
        width: '448.714px',
        height: '530.979px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        alt="Card Image"
        height="265.074px"
        style={{
          width: '408.829px',
          height: '265.074px',
          flexShrink: 0,
          position: 'relative',
        }}
        src={salec}
      >
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
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            bottom: '4px',
            left: '4px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          {sale}
        </Typography>
      </CardMedia>
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
          }}
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
          }}
        >
          4.9 <SvgIcon>
            <polygon points="8,0 10.5,15 0,6 15,6 5.5,15"></polygon>
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: '6px',
            background: 'rgba(121, 110, 255, 0.10)',
          }}
        >
          Button 1
        </Button>
        <Button
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
          Button 2
        </Button>
      </Box>
    </Card>
  );
};

export default TrendingCard;
