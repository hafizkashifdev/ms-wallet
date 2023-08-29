import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/Logo.png';
import dropdown from'../../assets/down-chevron 4.png' ;
import Hero from '../hero/hero';
const pages = [
  { title: 'Home', dropdown: false },
  { title: 'Find work', dropdown: false },
  { title: 'Company', dropdown: true },
  { title: 'Discover', dropdown: false },
  { title: 'Resolution Center', dropdown: true }
];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
    
    <AppBar position="static" sx={{ backgroundColor: 'white' ,p:1 }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
          <img src={logo} alt="Logo" />
          </Typography>
          <IconButton
            aria-label="dropdown"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <Typography
              
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ mx: 2,  
                display: 'flex', // Added this line
                alignItems: 'center', // Added this line
              color:'#2F2F2F',
             fontSize:'16px',
              fontWeight:400,
              fontFamily:'Outfit',
              fontStyle:'normal',
              textTransform:'capitalize',
              cursor:'pointer',
               }}
            >
            {page.title}
                {page.dropdown && (
                  <img
                    src={dropdown}
                    alt="Dropdown"
                    style={{ marginLeft: '5px' }} 
                  />
                )}
            </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {pages.map((page) => (
            <Typography
              
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ mx: 2,  
                display: 'flex', // Added this line
                alignItems: 'center', // Added this line
              color:'#2F2F2F',
             fontSize:'16px',
              fontWeight:400,
              fontFamily:'Outfit',
              textTransform:'capitalize',
              cursor:'pointer',
               }}
            >
            {page.title}
                {page.dropdown && (
                  <img
                    src={dropdown}
                    alt="Dropdown"
                    style={{ marginLeft: '5px' }} 
                  />
                )}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', }}>
  <Button
    sx={{
      backgroundColor: '#8155FF',
      color: '#ffffff',
      borderRadius: '8px',
      fontSize:'16px',
      padding:'13px 36px',
      fontWeight:600,
      fontFamily:'Open Sans',
      textTransform:'capitalize',
      '&:hover': {
        backgroundColor: '#6d43e2', // Change the hover background color here
      },
    }}
  >
    Sign Up
  </Button>
  <Button
    sx={{
      color: '#2F2F2F',
      fontSize:'16px',
      fontWeight:500,
      fontFamily:'Outfit',
      textTransform:'capitalize',
      ml:2,
      '&:hover': {
        color: '#8155FF', // Change the hover color here
        backgroundColor: 'transparent',
      },
    }}
  >
    Login
  </Button>
</Box>

      </Toolbar>
    </Container>
  </AppBar>
  <Container maxWidth="xl">  <Hero/>
  </Container>
 
  
  </>
  )
}

export default Header
