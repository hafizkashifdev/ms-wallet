import React from 'react';
import { Grid, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import tabhandbg from '../../assets/tabhandbg.svg';
import tabhand from '../../assets/tab.svg';

const TabWallet = () => {
  const theme = createTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {/* Conditional arrangement for 'lg' */}
        {isXsScreen ? (
          <>
            {/* Image Grid */}
        <Grid
  item
  xs={12}
  className="custom-grid-item"
  sx={{
    height: 'auto',
    // border: '2px solid blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    m: { lg: 0, xs:0 },
    // mt:{lg:-4,sm:-6,xs:-6},
    maxWidth: '423.5px', // Set the maximum width for screens smaller than 1200 pixels
    margin: '0 auto', // Center the grid item horizontally
  }}
>
  <div
    sx={{
      position: 'relative',
      width: '100%',
      height: '100%',
    }}
  >
    <div
      sx={{
        backgroundImage: `url(${tabhandbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
    <img
      src={tabhand}
      alt="Image6"
      style={{ width: '100%', }} // Add padding to the image
    />
  </div>
</Grid>










            {/* Typography Grid */}
            <Grid
  item
  xs={12}
  sx={{
    height: 'auto',
    textAlign: 'center', // Align text content to center by default
    // Conditional styles for 'lg' and larger screens
    '@media (min-width: 1280px)': {
      justifyContent: 'center', // Center content horizontally
      alignItems: 'center', // Center content vertically
      textAlign: 'left', // Reset text alignment for larger screens
    },
  }}
>
  
  <Typography
    variant="h6"
    sx={{
      fontSize: '55px',
      fontWeight: 700,
      color: 'var(--main-primary, #363565)',
      p: 2,
      fontFamily: 'Outfit',
      fontStyle: 'normal',
      lineHeight: 'normal',
      // border:'1px solid black',
      mb: 2,
      // mt:{sx:0,xs:-15}
    }}
    className='hero_typography'
  >
    Interested in what <span style={{ color: '#8155FF' }}>Membership Wallet</span> can do for your business?
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontSize: '22.5px',
      fontWeight: 300,
      color: 'var(--text-body, #4E4B66)',
      p: 2,
      fontFamily: 'Outfit',
      fontStyle: 'normal',
      lineHeight: 'normal',
      // border:'1px solid black',
      lineHeight: '24px',
      mb: 2,
    }}
  >
    Lorem ipsum dolor sit amet consectetur. In tellus maecenas massa convallis blandit nisl. Fames eget arcu lectus platea imperdiet.
  </Typography>
</Grid>

          </>
        ) : (
          // Default arrangement for screen sizes larger than 'lg'
          <>
            <Grid
              item
              lg={6}
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'left',
                height: '74vh',
                // border:'1px solid black',
              }}
            >
             <Typography
    variant="h6"
    sx={{
      fontSize: '55px',
      fontWeight: 700,
      color: 'var(--main-primary, #363565)',
      p: 2,
      fontFamily: 'Outfit',
      fontStyle: 'normal',
      lineHeight: 'normal',
      mb: 2,
      // mt:{sx:0,xs:-15}
      // border:'1px solid black'
    }}
    className='hero_typography'
  >
    Interested in what <span style={{ color: '#8155FF' }}>Membership Wallet</span> can do for your business?
  </Typography>
              <Typography variant="body1" sx={{
                fontSize: '22.5px',
                fontWeight: 300,
                color: 'var(--text-body, #4E4B66)',
                p: 2,
                fontFamily: 'Outfit',
                fontStyle: 'normal',
                lineHeight: 'normal',
                lineHeight: '24px',
                mb: 2,
              }}>
                Lorem ipsum dolor sit amet consectetur. In tellus maecenas massa convallis blandit nisl. Fames eget arcu lectus platea imperdiet.
              </Typography>
            </Grid>
            <Grid
  item
  lg={6}
  xs={12}
  sx={{
    position: 'relative',
    maxWidth: '823.5px', // Set the maximum width
    height: '761.5px', 
    flexShrink: 0,
    overflow: 'hidden',
    // border: '1px solid red',
  }}
>
  
  <div
    style={{
      backgroundImage: `url(${tabhandbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', 
      zIndex: -1,
    }}
  ></div>

  <img
    src={tabhand}
    alt="Image6"
    style={{ display: 'block', margin: 'auto' }} 
  />
</Grid>


          </>
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default TabWallet;
