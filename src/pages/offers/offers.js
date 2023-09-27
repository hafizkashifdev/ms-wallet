import React from 'react'
import { Box, Container, Grid, InputAdornment, TextField, Typography,Button } from '@mui/material';
import searcicon from "../../assets/offers/searchicon.svg";
import ButtonList from './button-list/button-list';
import TrendingCard from './trending-card/trending-card';
// import saleimg from "../../assets/offers/sale.svg"
import summersale from "../../assets/offers/summersale.svg";
import megaOffers from "../../assets/offers/mega.svg";
import bedimg from "../../assets/offers/bed.svg";
import boximg from "../../assets/offers/boximg.svg"
import "./offers.css";
import PopularCards from './popular-cards/popular-cards';

const Offers = () => {
  return (
  <>
  <Container maxWidth="lg">
    <Grid container sx={{ mt: { lg: "115px", sm: "170px", xs: "70px" } }}>
<Grid item xs={12}>
<Box
  sx={{
    mt: { md: "56px", xs: "34px" },
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    justifyContent:"center",
    alignItems: "center", 
  }}
>
  <TextField
    fullWidth
    sx={{
      width: '100%',
      maxWidth: '682px',
      minHeight: '70px',
      // gap: '10px',
      flexShrink: 0,
      border: "1px solid #E5E5E5",
      borderRadius: '8.889px',
      background: 'rgba(255, 255, 255, 0.10)',
      boxShadow: '0px 8.88889px 15.55555px 0px rgba(0, 0, 47, 0.10)',
      "& fieldset": { border: "none" },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#8155FF"
        }
      },
      "::placeholder":"Search"
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start" sx={{width:"42px" , height:"42px",mt:1}}>
          <img src={searcicon} alt="search-icon" />
        </InputAdornment>
      ),
     
    }}
  />
</Box>
</Grid>
    </Grid>
    </Container>
    
      <ButtonList/>
    
    <Container maxWidth="lg">
    <Typography
  className='text-font'
  sx={{
    color: "#2F2F2F",
    textAlign:"center",
    mt:"98px",
    // fontFamily: "Outfit", 
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  }}
>
  Here’s what’s Trending <span style={{ color: "#8155FF" }}>Today.</span>
</Typography>
<Grid container >
<Grid item xs={12} sx={{ mt:"60px",}}> 
<TrendingCard />
</Grid>
</Grid>
    </Container>

    <Container maxWidth="lg" sx={{mt:20}}>
<Grid container> 
<Grid item sm={10} xs={12} sx={{ bgcolor: "#3DA9F3", borderRadius: "35px", position: 'relative' }}>
<Box sx={{ ml: {lg:"48px",xs:"0px"}, my: "36px", zIndex: 1, position: 'relative',px:{lg:0,xs:2} }}>
    <Typography
      className='text-font'
      sx={{
        color: 'var(--White, #FFF)',
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: 'normal',
      }}
    >
      End Of Summer Sale!
    </Typography>
    <Typography
      className='text-font'
      sx={{
        color: 'var(--White, #FFF)',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 'normal',
        mt: "16px"
      }}
    >
      Get ready for incredible savings! Enjoy up to a whopping 50% discount on a wide <br />range of home items, experiences, hotels, and more! Shop and save today!
    </Typography>
    <Button
      variant="contained"
      sx={{
        display: 'flex',
        width: '144px',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '30px',
        bgcolor: "transparent",
        border: '1px solid #FFF',
        mt: "24px",
        textTransform: 'capitalize',
        '&:hover': {
          bgcolor: '#796EFF',
          color: '#FFF',       
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        Shop Now
      </Box>
    </Button>
  </Box>
  <Box sx={{ position: 'absolute', right: '-24%', top: '-60%', zIndex: 0,display:{sm:"flex",xs:"none"} }}>
    <img src={summersale} alt="summer img" />
  </Box>

</Grid>

    <Grid item xs={2} sx={{display:{lg:'flex',xs:"none"}}}>

    </Grid>
    <Grid item xs={2} sx={{display:{lg:'flex',xs:"none"}}}>

    </Grid>
    <Grid item xs={12} lg={10} sx={{ bgcolor: "#F4FBFF", borderRadius: "35px", position: 'relative', mt: "90px" }}>
      <Box sx={{ position: 'absolute', left: '-10%', top: '-20%', zIndex:0 ,display:{md:"flex",xs:"none"}}}>
        <img src={megaOffers} alt="summer img" style={{  }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end', 
          flexDirection: 'column', 
          width: '100%',
          padding: '36px',
          boxSizing: 'border-box',
          textAlign:{lg:'right',xs:"center"},
          position: 'relative',
          zIndex:1
        }}
      >
        <Typography
          className='text-font'
          sx={{
            color: '#3CA7EF',
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
         VUE Offer!
        </Typography>
        <Typography
          className='text-font'
          sx={{
            color: 'var(--gray-scale-gray-500, #667085)',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 'normal',
            mt: "16px"
          }}
        >
Grab this amazing deal: Five tickets for just £22 or get even more value with ten <br/>tickets for only £40! Don't miss out on this fantastic offer!
        </Typography>
        <Box
  sx={{
    display: 'flex',
    justifyContent: {lg:'flex-end',xs:"center"},
  }}
>
  <Button
    variant="contained"
    sx={{
      width: '144px',
      padding: '10px',
      gap: '10px',
      borderRadius: '30px',
      bgcolor: 'transparent',
      border: '1px solid #3DA9F3',
      mt: '24px',
      textTransform: 'capitalize',
      color:"#3DA9F3",
      '&:hover': {
        bgcolor: '#796EFF', 
        color: '#FFF',       
      },
    }}
  >
    Shop Now
  </Button>
</Box>

      </Box>
    </Grid>

    {/* // 2nd same seaction */}


    <Grid item lg={10} xs={12} sx={{ bgcolor: "#3DA9F3", borderRadius: "35px", position: 'relative',mt:"80px" }}>
      <Box sx={{ ml: "48px", my: "36px" ,position:"relative",zIndex:1,textAlign:{lg:"left",xs:"none"}}}>
        <Typography
          className='text-font'
          sx={{
            color: 'var(--White, #FFF)',
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 'normal',
            textAlign:{lg:"left",xs:"none"}

          }}
        >
         Massive Mattress Markdowns
        </Typography>
        <Typography
          className='text-font'
          sx={{
            color: 'var(--White, #FFF)',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 'normal',
            textAlign:{lg:"left",xs:"none"},
            mt: "16px"
          }}
        >
          Enjoy substantial discounts and complimentary delivery on all your orders! Don't miss <br/>out on these fantastic savings and the convenience of free delivery. Shop now!  </Typography>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            width: '144px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '30px',
            bgcolor: "transparent",
            border: '1px solid #FFF',
            mt: "24px",
            textTransform: 'capitalize',
            '&:hover': {
              bgcolor: '#796EFF',
              color: '#FFF',       
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            Shop Now
          </Box>
        </Button>
      </Box>
      <Box sx={{ position: 'absolute', right: '-19%', top: '-30%',zIndex:0,display:{lg:'flex',xs:'none'} }}>
        <img src={bedimg} alt="summer img" style={{width:'391px',height:"391px"}}/>
      </Box>
    </Grid>
    <Grid item xs={2} sx={{display:{lg:'flex',xs:"none"}}}>

    </Grid>
    <Grid item xs={2} sx={{display:{lg:'flex',xs:"none"}}}>

    </Grid>
 <Grid item lg={10} xs={12} sx={{ bgcolor: "#F4FBFF", borderRadius: "35px", position: 'relative', mt: "90px" }}>
  <Box
    sx={{
      display: 'flex',
      justifyContent: {lg:'lex-end',xs:"center"},
      flexDirection: 'column',
      width: '100%',
      padding: '36px',
      boxSizing: 'border-box',
      textAlign: {lg:'right',xs:'center'},
      zIndex: 1, 
      position:"relative"
    }}
  >
    <Typography
      className='text-font'
      sx={{
        color: '#3CA7EF',
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: 'normal',
      }}
    >
      Restock, Refresh & Save!
    </Typography>
    <Typography
      className='text-font'
      sx={{
        color: 'var(--gray-scale-gray-500, #667085)',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 'normal',
        mt: "16px"
      }}
    >
      Discover your must-have post-holiday essentials! Find everything you need to ease <br />back into your routine and make the most of your post-vacation life.
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: {lg:'flex-end',xs:'center'},
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: '144px',
          padding: '10px',
          gap: '10px',
          borderRadius: '30px',
          bgcolor: 'transparent',
          border: '1px solid #3DA9F3',
          mt: '24px',
          textTransform: 'capitalize',
          color: "#3DA9F3",
          '&:hover': {
            bgcolor: '#796EFF',
            color: '#FFF',
          },
        }}
      >
        Shop Now
      </Button>
    </Box>
  </Box>
  <Box sx={{ position: 'absolute', left: '-26%', top: '-55%', zIndex: 0, display: { md: "flex", xs: "none" } }}>
    <img src={boximg} alt="summer img" style={{}} />
  </Box>
</Grid>


</Grid>
    </Container>

    <Container maxWidth="xl">
      <Grid container>
<Grid item xs={12} sx={{mt:"194px"}}>
<Typography
  variant="h2" 
  className='text-font'
  sx={{
    color: '#8155FF',
    // fontFamily: 'Outfit',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    textAlign:{lg:"left",xs:'center'}
  }}
>
 <span style={{color:"var(--main-primary, #363565)"}}>Popular on</span>  Membership Wallet.
</Typography>

<Typography
  variant="body1" 
  className='text-font'
  sx={{
    color: 'var(--text-body, #4E4B66)',
    // fontFamily: 'Outfit',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px', 
    mt:"16px",
    textAlign:{lg:"left",xs:'center'}
  }}
>
  Deals you don’t want to miss.
</Typography>

</Grid>
<Grid xs={12} sx={{mt:'104px'}}>
<PopularCards/>
</Grid>
      </Grid>

    </Container>

    
    </>
  )
}

export default Offers
