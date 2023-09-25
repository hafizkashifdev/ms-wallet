import React, { useState } from 'react';
import { Button, Popover, Typography, Box } from '@mui/material';

const buttons = [
    {
      title: 'Food & Drink',
      data: 'Data for Button 1',
      items: ['Item 1', 'Breweries, Wineries & Distilleries', 'Cafes & Treats', 'Groceries & Markets','Bars','In-Store & Delivery','Groceries','Meal Kits','All Food'],
    },
    {
      title: 'Fashion',
      data: 'Data for Button 2',
      items: ['Clothing', 'Designer', 'Shoes', 'Accessories','Jewelry','Bags','Sunglasses','Lingerie & Underwear','Swimwear','Activewear','Menswear','All Fashion'],
    },
    {
      title: 'Technology',
      data: 'Data for Button 3',
      items: ['Entertainment', 'Travel & Lodging', 'Digital Subscriptions', 'Daily Essentials','Eye Care','Student Insurance','All Lifestyle'],
    },
    {
        title: 'Lifestyle',
        data: 'Data for Button 4',
        items: ['Massage', 'Makeup', 'Skincare', 'Salons','Cosmetic Procedures','Brows & Lashes','Hair Removal','Hair & Styling','Spas','Nail Salons','Blowouts & Styling','Makeup','Tanning','Face & Skin Care'],
      },
      {
        title: 'Beauty & Spa',
        data: 'Data for Button 5',
        items: ['Automotive', 'Car wash', 'Electric Chargers'],
      },
      {
        title: 'Transport',
        data: 'Data for Button 6',
        items: ['Restaurants', 'Breweries, Wineries & Distilleries', 'Cafes & Treats', 'Groceries & Markets','Bars','In-Store & Delivery','Groceries','Meal Kits','All Food'],
      },
      {
        title: 'Health & Fitness',
        data: 'Data for Button 7',
        items: ['Family vacations', 'Big city vacations', 'Europe Tours', 'Asia & Pacific Tours','Casino','Travel & Lodging'],
      },
      {
        title: 'Travel & Hotel',
        data: 'Data for Button 8',
        items: ['Family vacations', 'Big city vacations', 'Europe Tours', 'Asia & Pacific Tours','Casino','Travel & Lodging'],
      },
      {
        title: 'Membership & Loyalty Cards',
        data: 'Data for Button 9',
        items: ['Item 9', 'Item 10', 'Item 11', 'Item 12'],
      },
  ];

  
const ButtonList = () => {
  const [anchorEls, setAnchorEls] = useState(Array(buttons.length).fill(null));
  const [selectedButton, setSelectedButton] = useState(null);


  const handleButtonClick = (event, buttonIndex) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[buttonIndex] = event.currentTarget;
    setAnchorEls(newAnchorEls);
    setSelectedButton(buttonIndex);
  };

  const handlePopoverClose = (buttonIndex) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[buttonIndex] = null;
    setAnchorEls(newAnchorEls);
    setSelectedButton(null);
  };

  const isPopoverOpen = selectedButton !== null;

  return (
    <Box display="flex" sx={{mt:"56px"}} overflowX="auto" maxWidth="100%">
      {buttons.map((button, index) => (
        <Box
        key={index}
        
        mx={2}
        >
          <Button
            onClick={(event) => handleButtonClick(event, index)}
            style={{
              color: selectedButton === index ? 'blue' : 'black',
              fontWeight: selectedButton === index ? 'bold' : 'normal',
              textTransform:"capitalize"
            }}
            className='text-font'
            sx={{
              color: 'var(--gray-scale-gray-500, #667085)',
              fontFamily: 'Outfit',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              letterSpacing: '0.8px',
            }}
            
          >
            {button.title}
          </Button>
          <Popover
            open={isPopoverOpen && anchorEls[index] !== null}
            anchorEl={anchorEls[index]}
            onClose={() => handlePopoverClose(index)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography 
              className='text-font'
              variant="subtitle1" sx={{
  color: '#35ACFE',
  fontFamily: 'Outfit',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '0.9px',
}}
>
                {button.data}
              </Typography>
              {selectedButton === index && button.items.map((item, itemIndex) => (
                <Typography key={itemIndex} 
                className='text-font'
                sx={{
                  color: 'var(--gray-scale-gray-500, #667085)',
                  height: '24px',
  paddingRight: '0px',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px',
                }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Popover>
        </Box>
      ))}
    </Box>
  );
};

export default ButtonList;
