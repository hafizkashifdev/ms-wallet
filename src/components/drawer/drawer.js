import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import './drawer.css'
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import dropdown from "../../assets/down-arrow.svg";

const pages = [
  { title: 'Home', dropdown: false },
  { title: 'Find work', dropdown: false },
  { title: 'Company', dropdown: true },
  { title: 'Discover', dropdown: false },
  { title: 'Resolution Center', dropdown: true }
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            top: "0",
            right: "0",
            width: "80%",
            maxWidth: "400px",
            animation: "slide-in 0.3s ease-in-out",
          },
        }}
      >
        <List>
         
          {/* Menu items */}
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page.title}</ListItemText>
                {page.dropdown && (
                  <img
                    src={dropdown}
                    alt="Dropdown"
                    style={{ marginLeft: '5px' }} 
                  />
                )}
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={handleToggleDrawer}
      >
        {openDrawer ? <ClearIcon color="black" /> : <MenuIcon color="black" />}
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
