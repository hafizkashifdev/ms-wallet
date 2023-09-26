import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'; 
import flogo from '../../assets/flog.svg';
import googleiconfooter from '../../assets/fappstore.svg';
import playicon from '../../assets/playfg.svg';
import { Link, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import fbIcon from '../../assets/icon/fbicon.svg';
import instaIcon from '../../assets/icon/insta.svg';
import linkedinIcon from '../../assets/icon/linkin.svg';
import twitterIcon from '../../assets/icon/twicon.svg';
import youtubeIcon from '../../assets/icon/youtube.svg';
import './footer.css'
// import { useLocation, import { useNavigate, useLocation } from 'react-router-dom'; } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
const footerStyles = {
  backgroundColor: 'White', // Customize your color
  color: 'white',
  padding: '1rem',
};

const images = [
    fbIcon,
    instaIcon,
    linkedinIcon,
    twitterIcon,
    youtubeIcon,
  ];

const columnStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '1rem',
  
  
};


const Footer = () => {


  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <>    <footer style={{ backgroundColor: 'White', padding: '1rem',marginTop:"120px" }}>
      <Divider sx={{borderTop: "1px solid var(--gray-scale-gray-300, #D0D5DD)",
  backGround: "#D9DBE9"}} />
      <Container maxWidth="xl"> 
  
    <Grid container spacing={2} sx={{mt:4,}}>
      <Grid item xs={12} sm={6} md={6} sx={columnStyles} >
      
       <img src={flogo} alt ='foter logo'>
       </img>
       <Typography className='text-font' sx={{color:'#4E4B66', fontSize:'14px',fontWeight:500,fontStyle:'normal',textTransform:'capitalize',mt:2}}>
       Copyrights © 2023 All Rights Reserved by Membership Wallet
       </Typography>
      </Grid>
        <Grid item xs={12}  sm={6} md={2} sx={columnStyles}>
          <Typography className='text-font ' sx={{color:'#363565',fontSize:'15px',fontWeight:700,fontStyle:'normal',textTransform:'capitalize',mb:2,mr:{lg:0,xs:2}}}>Company</Typography>
            <Link
          // href="/" 
          className='link '  sx={{textDecoration:"none"}}>About Us</Link>
            <Link 
           onClick={() => handleNavigation('/contact-us')} 
          className='link ' sx={{textDecoration:"none"}}>Contact us</Link>
            <Link 
         onClick={() => handleNavigation('/careers')} 
          className='link '  sx={{textDecoration:"none"}}>Careers</Link>
        </Grid>
        <Grid  item xs={12} sm={6} md={2} style={columnStyles}>
          <Typography className='text-font ' sx={{mb:2,color:'#363565', fontSize:'15px',fontWeight:700,fontStyle:'normal',textTransform:'capitalize',mb:2}}  >Legal</Typography>
            <Link 
            sx={{color:'#363565', fontSize:'15px',fontWeight:700,fontStyle:'normal',textTransform:'capitalize',mb:2,textDecoration:"none"}}
         // href="/" 
          className='link'  onClick={() => handleNavigation('/data-policy')} >Data Policy</Link>
            <Link 
            sx={{textDecoration:"none"}}
            
         // href="/" 
          className='link '  onClick={() => handleNavigation('/privacy-policy')} 
          sx={{textDecoration:"none"}}
           >Privacy Policy</Link>
            <Link 
            sx={{textDecoration:"none"}}
         // href="/" 
          className='link'  onClick={() => handleNavigation('/cockie-policy')}  >Cookie Policy</Link>
       
       
        </Grid>
        <Grid item xs={12} sm={6} md={2} style={columnStyles}>
        <Typography className='text-font'  sx={{color:'#363565',fontSize:'15px',fontWeight:700,fontStyle:'normal',textTransform:'capitalize',}}>
    Install App
  </Typography>
  <div className='appIcons'>
    <img
      src={googleiconfooter}
      alt="Google Play"
      className='appIcons'
    />
    <img src={playicon} alt="Apple Store"className='appIcons' />
  </div>
        </Grid>
      </Grid>
      <Divider sx={{mt:4,borderTop: "1px solid var(--gray-scale-gray-300, #D0D5DD)",
  backGround: "#D9DBE9"}}/>
      
      <Grid  className="image-grid-container" sx={{ display: 'flex' }}>
          {images.map((image, index) => (
            <Grid item xs={6} sm={4} md={1} key={index} sx={{ display: 'flex' ,mt:2}}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="grid-image"
                style={{ width: '30px', height: '30px', margin: '8px' }}
              />
            </Grid>
          ))}
        </Grid>
      
      </Container>

     
     
    </footer>
     <Grid container sx={{ backgroundColor: '#8155FF', color: 'white', padding: '1rem' }}>
     <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
       <Grid item xs={12} md={6} xl={8} sx={{ display: 'flex', alignItems: 'center' }}>
         <Typography className='text-font' sx={{ color: '#FFFFFF',  fontSize: '14px', fontWeight: 400, fontStyle: 'normal', textTransform: 'capitalize' }}>
           © 2023 All Rights Reserved by Membership Wallet
         </Typography>
       </Grid>
       <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
         <Typography className='text-font' sx={{ color: '#FFFFFF',fontSize: '14px', fontWeight: 400, fontStyle: 'normal', textTransform: 'capitalize', display: { xs: 'none', md: 'block' } }}>
           <span > Cookies Policy    </span> | <span> Privacy Policy    </span> | <span>    Terms & Conditions </span>
         </Typography>
       </Grid>
     </Container>
   </Grid></>

  );
};

export default Footer;
