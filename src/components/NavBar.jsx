import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";

import logo from "../assets/logo.png";

function NavBar() {
  const [active, setActive] = useState(1);

  const activeStyle = {
    borderBottomStyle: "solid",
    borderWidth: "2px",
    borderRadius: "2px",
  };

  const menu = [
    { label: "Home", to: "/" },
    { label: "Prodotti", to: "/" },
    { label: "Contatti", to: "/" },
  ];
  return (
    <AppBar
      position="static"
      style={{ backgroundImage: `linear-gradient(#ff9c5e, #5c0104)` }}
      //style={{ backgroundImage: `linear-gradient(#1DE9B6, #0097A7)` }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            id="navbar"
            width="60%"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                //backgroundColor: "#fff",
                width: 100,
                height: 100,
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px 20px 10px 0",
              }}
            >
              <img src={logo} width="140px" />
            </div>
            {menu.map((item, index) => {
              return (
                <div
                  className="menuItem"
                  style={active == index ? activeStyle : {}}
                  onClick={() => {
                    setActive(index);
                  }}
                  key={index}
                >
                  <Typography variant="h5">{item.label}</Typography>
                </div>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
