import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const PointsUpdate = () => {
  return (
    <Container maxWidth="xl">
<Grid container>
<Grid
  item
  lg={6}
  xs={12}
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '20px 140px 140px 20px',
    background: 'linear-gradient(93deg, #4FB3F6 0%, #2BA0F0 113.1%)',
  }}
>
  <Typography sx={{
    color: '#FFF',
    fontFamily: 'Outfit',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '58px',
    letterSpacing: '-0.96px',
  }}>
  Activate Coupons, see your 
points update
  </Typography>
  <Typography  sx={{
    color: '#FFF',
    fontFamily: 'Outfit',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '28px',
    letterSpacing: '0.8px',
  }}>
  Redeem personalized coupons automatically with your purchase.
  </Typography>
</Grid>

</Grid>
    </Container>
  )
}

export default PointsUpdate
