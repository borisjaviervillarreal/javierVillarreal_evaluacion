import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../../../assets/img/actuaria-logo.png";

const Nav = () => {
  const themeNavBar = createTheme({
    palette: {
      grey: {
        main: "#f2f1f0",
      },
    },
  });

  return (
    <ThemeProvider theme={themeNavBar}>
      <AppBar position="static" color="grey">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div className="image-container">
              <img src={logo} className="logo" />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Nav;
