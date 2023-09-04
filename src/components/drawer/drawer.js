import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "./drawer.css";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import dropdown from "../../assets/down-arrow.svg";

const pages = [
  { title: "Home", dropdown: false },
  { title: "Offers", dropdown: false },
  { title: "Business", dropdown: false },
  { title: "Contact Us", dropdown: false },
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
        <Container>
          <List>
            {pages.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{page.title}</ListItemText>
                  {page.dropdown && (
                    <img
                      src={dropdown}
                      alt="Dropdown"
                      style={{ marginLeft: "5px" }}
                    />
                  )}
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              p: 6,
            }}
          >
            <Button
              sx={{
                backgroundColor: "#8155FF",
                color: "#ffffff",
                borderRadius: "8px",
                fontSize: "16px",
                padding: "13px 36px",
                fontWeight: 600,
                fontFamily: "Open Sans",
                textTransform: "capitalize",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                height: "48px",
                "&:hover": {
                  backgroundColor: "#6d43e2",
                },
              }}
            >
              Sign Up
            </Button>
            <Button
              sx={{
                color: "#2F2F2F",
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "Outfit",
                textTransform: "capitalize",
                mt: 2,
                "&:hover": {
                  color: "#8155FF",
                  backgroundColor: "transparent",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Container>
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
