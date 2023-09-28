import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import giftCard from '../../../assets/Partner With Us/gift.svg';
import promotionss from '../../../assets/Partner With Us/promotion.svg';
import friendsh from '../../../assets/Partner With Us/friendship.svg';
import driven from '../../../assets/Partner With Us/driven.svg';
import abbab from '../../../assets/Partner With Us/aboutus.svg';

const BenefitsCards = () => {
  return (
    <>
    <Container maxWidth="xl">
      <Grid container spacing={4} sx={{ mt:'75px'}}>
        <Grid item lg={6} xs={12} sx={{display:'flex',justifyContent:{lg:'flex-start',xs:'center'}}}>
          <Card
            sx={{
            //   mt: 8,
              maxWidth: '587px',
              borderRadius: '20px',
              minHeight:'208px',
              bgcolor: 'linear-gradient(90deg, #F6D365 0%, #FDA085 100%)',
              background: 'linear-gradient(90deg, #F6D365 0%, #FDA085 100%)',
              boxShadow: '0px 4px 15px 1px rgba(255, 182, 71, 0.50)',
              display: 'flex', 
              py: "24px",
               
              
              
            }}
          >
            <CardContent
              sx={{
                flex: 1, 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'flex-start', 
              }}
            >
              <Typography className="text-font" sx={{ ml: '24px', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '32px', color: '#FFF' }}>
                Enhanced Customer Engagement
              </Typography>
              <Typography className="text-font" sx={{ color: '#FFF', ml: '24px', fontSize: '18px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px', mt: '16px' }}>
                Access our diverse user base and <br/>engage with them through targeted <br/>promotions and rewards, boosting customer loyalty.
              </Typography>
            </CardContent>

            <CardMedia
              sx={{
                width: '168px',
                height: '160px',
                flexShrink: 0, 
                display: {sm:'flex',xs:'none'},
                justifyContent: 'flex-end', 
                mr: "24px",
                
              }}
            >
              <img src={giftCard} alt="giftCard" />
            </CardMedia>
          </Card>
        </Grid>

        <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent: {lg:'flex-end',xs:'center'},  }}>
          <Card
            sx={{
            //   mt: 8,
              width: '100%',
              maxWidth: '587px',
              borderRadius: '20px',
              minHeight:'208px',
              bgcolor: 'linear-gradient(90deg, #667EEA 0%, #764BA2 100%)',
              background: 'linear-gradient(90deg, #667EEA 0%, #764BA2 100%)',
              boxShadow: '0px 4px 15px 1px rgba(167, 139, 249, 0.50)',
              display: 'flex',
              py: '24px',
               
              marginLeft: {lg:'auto',xs:'none'}, 
            }}
          >
            <CardContent
              sx={{
                flex: 1, 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'flex-start', 
              }}
            >
              <Typography className="text-font" sx={{ ml: '24px', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '32px', color: '#FFF' }}>
              Cross-Promotion
              </Typography>
              <Typography className="text-font" sx={{ color: '#FFF', ml: '24px', fontSize: '18px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px', mt: '16px' }}>
              Be at the forefront of the digital transformation in loyalty management, enhancing your brand's image and relevance.
              </Typography>
            </CardContent>

            <CardMedia
              sx={{
                width: '168px',
                height: '160px',
                flexShrink: 0, 
                justifyContent: 'flex-end', 
                mr: "24px",
                display: {sm:'flex',xs:'none'},
              }}
            >
              <img src={promotionss} alt="giftCard" style={{  width: '168px',
                height: '160px',}}/>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Container>
    
    {/* // secomnd container */}


    <Container maxWidth="lg">
      <Grid container sx={{  mt:'30px'}} spacing={4}>
        <Grid item lg={6} xs={12} sx={{display:'flex',justifyContent:{lg:'flex-start',xs:'center'}}}>
          <Card
            sx={{
            //   mt: 8,
              maxWidth: '587px',
              borderRadius: '20px',
              minHeight:'208px',
              bgcolor: 'linear-gradient(90deg, #B8CBB8 0%, #B8CBB8 0%, #B465DA 0%, #CF6CC9 33%, #EE609C 66%, #EE609C 100%)',
              background: 'linear-gradient(90deg, #B8CBB8 0%, #B8CBB8 0%, #B465DA 0%, #CF6CC9 33%, #EE609C 66%, #EE609C 100%)',
              boxShadow: '0px 4px 15px 1px rgba(254, 128, 166, 0.50)',
              display: 'flex', 
              py: "24px",
               
              
              
            }}
          >
            <CardContent
              sx={{
                flex: 1, 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'flex-start', 
              }}
            >
              <Typography className="text-font" sx={{ ml: '24px', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '32px', color: '#FFF' }}>
              Streamlined Loyalty Programs
              </Typography>
              <Typography className="text-font" sx={{ color: '#FFF', ml: '24px', fontSize: '18px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px', mt: '16px' }}>
              Integrate your loyalty program with Membership Wallet, making it easier for customers to participate and enjoy your offerings.
              </Typography>
            </CardContent>

            <CardMedia
              sx={{
                width: '168px',
                height: '160px',
                flexShrink: 0, 
                display: {sm:'flex',xs:'none'},
                justifyContent: 'flex-end', 
                mr: "24px",
                
              }}
            >
              <img src={friendsh} alt="giftCard" />
            </CardMedia>
          </Card>
        </Grid>

        <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent: {lg:'flex-end',xs:'center'},  }}>
          <Card
            sx={{
            //   mt: 8,
              width: '100%',
              maxWidth: '587px',
              borderRadius: '20px',
              minHeight:'208px',
              bgcolor: 'linear-gradient(90deg, #4FACFE 0%, #00F2FE 100%)',
              background: 'linear-gradient(90deg, #4FACFE 0%, #00F2FE 100%)',
              boxShadow: '0px 4px 15px 1px rgba(33, 189, 255, 0.50)',
              display: 'flex',
              py: '24px',
               
              marginLeft: {lg:'auto',xs:'none'}, 
            }}
          >
            <CardContent
              sx={{
                flex: 1, 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'flex-start', 
              }}
            >
              <Typography className="text-font" sx={{ ml: '24px', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '32px', color: '#FFF' }}>
              Data-Driven Insights
              </Typography>
              <Typography className="text-font" sx={{ color: '#FFF', ml: '24px', fontSize: '18px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px', mt: '16px' }}>
              Gain valuable insights into customer behavior and preferences, helping you make informed decisions and tailor your offerings.
              </Typography>
            </CardContent>

            <CardMedia
              sx={{
                width: '168px',
                height: '160px',
                flexShrink: 0, 
                justifyContent: 'flex-end', 
                mr: "24px",
                display: {sm:'flex',xs:'none'},
              }}
            >
              <img src={driven} alt="giftCard" style={{  width: '168px',
                height: '160px',}}/>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Container>

    <Container maxWidth="md">
    <Grid item xs={12} sx={{ display: 'flex', justifyContent:'center', mt:"30px" }}>
          <Card
            sx={{
            //   mt: 8,
              width: '100%',
              maxWidth: '587px',
              borderRadius: '20px',
              minHeight:'208px',
              bgcolor: 'linear-gradient(90deg, #96DEDA 0%, #50C9C3 100%)',
              background: 'linear-gradient(90deg, #96DEDA 0%, #50C9C3 100%)',
              boxShadow: 'rgba(0, 188, 188, 0.50)',
              display: 'flex',
              py: '24px',
               
            }}
          >
            <CardContent
              sx={{
                flex: 1, 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'flex-start', 
              }}
            >
              <Typography className="text-font" sx={{ ml: '24px', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '32px', color: '#FFF' }}>
              Data-Driven Insights
              </Typography>
              <Typography className="text-font" sx={{ color: '#FFF', ml: '24px', fontSize: '18px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px', mt: '16px' }}>
              Gain valuable insights into customer behavior and preferences, helping you make informed decisions and tailor your offerings.
              </Typography>
            </CardContent>

            <CardMedia
              sx={{
                width: '168px',
                height: '160px',
                flexShrink: 0, 
                justifyContent: 'flex-end', 
                mr: "24px",
                display: {sm:'flex',xs:'none'},
              }}
            >
              <img src={abbab} alt="giftCard" style={{  width: '168px',
                height: '160px',}}/>
            </CardMedia>
          </Card>
        </Grid>

    </Container>
    
    </>
  );
};

export default BenefitsCards;
