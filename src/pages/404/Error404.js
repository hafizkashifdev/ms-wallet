import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import errorimg from "../../assets/error.png";
import lo from "../../assets/logo-icon-40.png";

const Error404 = () => {
  return (
    <div dir="ltr">
      <section
        sx={{
          background: "linear-gradient(to bottom, #68d391 0%, rgba(255,255,255,0) 100%)",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            paddingY={10}
            paddingX={4}
          >
            <Link to="/" replace={true}>
              <img src={lo} alt="" sx={{ mx: "auto", height: 10 }} />
            </Link>
            <Box textAlign="center" marginTop={3}>
              <img src={errorimg} alt="" sx={{ mx: "auto" }} />
              <Typography
                variant="h4"
                component="h1"
                sx={{ mt: 3, mb: 6, fontSize: "3xl", fontWeight: "bold" }}
              >
                Page Not Found?
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Whoops, this is embarrassing. <br /> Looks like the page you
                were looking for wasn't found.
              </Typography>
              <Box marginTop={4}>
                <Link
                className="text-font"
                  to="/"
                  replace={true}
                 
                >
                  <Button  sx={{
                    textDecoration: "none",
                    color: "#FFF",
              backgroundColor: "#916BFE",
              textTransform: "capitalize",
              fontSize:'16px',
              fontWeight:600,
              // mt:'38px',
              "&:hover": {
                backgroundColor: "#7455D0",
                color: "#FFFFFF",
              },
                  }} fullWidth>
                    Back to Home
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box textAlign="center" sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "medium" }}>
                © {new Date().getFullYear()} Membership Wallet. Design with{" "}
                <i className="mdi mdi-heart text-red-600"></i> by{" "}
                <a
                  href="https://www.orcalo.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "inherit", textDecoration: "underline" }}
                >
                  Orcalo Holding
                </a>
                .
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Error404;
