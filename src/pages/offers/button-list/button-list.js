import React, { useState } from 'react';
import { Button, Popover, Typography, Box } from '@mui/material';

const buttons = [
    {
      title: 'Button 1',
      data: 'Data for Button 1',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    },
    {
      title: 'Button 2',
      data: 'Data for Button 2',
      items: ['Item 5', 'Item 6', 'Item 7', 'Item 8'],
    },
    {
      title: 'Button 3',
      data: 'Data for Button 3',
      items: ['Item 9', 'Item 10', 'Item 11', 'Item 12'],
    },
    {
        title: 'Button 4',
        data: 'Data for Button 4',
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      },
      {
        title: 'Button 5',
        data: 'Data for Button 5',
        items: ['Item 5', 'Item 6', 'Item 7', 'Item 8'],
      },
      {
        title: 'Button 6',
        data: 'Data for Button 6',
        items: ['Item 9', 'Item 10', 'Item 11', 'Item 12'],
      },
      {
        title: 'Button 7',
        data: 'Data for Button 7',
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      },
      {
        title: 'Button 8',
        data: 'Data for Button 8',
        items: ['Item 5', 'Item 6', 'Item 7', 'Item 8'],
      },
      {
        title: 'Button 9',
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
              <Typography variant="subtitle1" style={{ color: 'black', marginBottom: '10px' }}>
                {button.data}
              </Typography>
              {selectedButton === index && button.items.map((item, itemIndex) => (
                <Typography key={itemIndex} style={{ color: 'black' }}>
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
