import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  Container,
  useTheme,
} from "@mui/material";
import logo from '../../assets/logo.svg';
import dropdown from'../../assets/down-arrow.svg' ;
import './header.css';
import DrawerComp from "../drawer/drawer";


const pages = [
  { title: 'Home', dropdown: false },
  { title: 'Offers', dropdown: false },
  { title: 'Business', dropdown: false },
  { title: 'Contact Us', dropdown: false },
];


const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(isMatch);

  

  return (
    <React.Fragment>
     
       
      <AppBar sx={{ background: "#FFF",opacity:'1',px:{md:'80px',xxl:'120px',sm:4},py:'10px'}}>
    
        <Toolbar >
        <img
                  src={logo}
                  alt="logo"
                 
                />
          {isMatch ? (
            <>
             
              <DrawerComp/>
            </>
          ) : (
            <>
                  <Tabs
      sx={{ marginLeft: "auto" }}
      indicatorColor="secondary"
      textColor="inherit"
      value={value}
      onChange={(e, value) => setValue(value)}
    >
      {pages.map((page, index) => (
        <Tab
          key={index}
          label={
            <Box className="tabLabel">
              <span
                className="tabTitle"
              >
                {page.title}
              </span>
              {page.dropdown && (
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className="dropdownIcon"
                />
              )}
            </Box>
          }
        />
      ))}
    </Tabs>
    <Box sx={{marginLeft:'auto' }}>
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
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      height:'48px',
      '&:hover': {
        backgroundColor: '#6d43e2', 
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
        color: '#8155FF', 
        backgroundColor: 'transparent',
      },
    }}
  >
    Login
  </Button>
</Box>
             
            </>
          )}
        </Toolbar>
      
      </AppBar>
      
   


    </React.Fragment>
  );
};

export default Header;
