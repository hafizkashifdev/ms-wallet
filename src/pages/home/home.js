import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HomeHero from './home-hero/home-hero'
import CardPay from './card-pay/card-pay'
import MembershipBusiness from './membership-business/membership-business'
import MembershipTeam from './membership-team/membership-team'
import PointsUpdate from './points-update/points-update'
import UnleashEfficiency from './unleash-efficiency/unleash-efficiency'

const Home = () => {
  return (
 <>

 <HomeHero/>
 <PointsUpdate/>
 <UnleashEfficiency/>
{/* <MembershipTeam/> */}
 {/* <MembershipBusiness/> */}
 {/* <CardPay/> */}
 </>
  )
}

export default Home
