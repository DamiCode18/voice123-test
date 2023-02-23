import React from "react";
import { CustomButton } from "../components/Button";
import SearchInput from "../components/SearchInput";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Box, IconButton, Divider } from "@mui/material/";

export default function Navbar({
  input,
  setInput,
  searchBtnAction,
  handleEnter,
}) {
  return (
    <Box sx={{ marginBottom: { xs: '100px', md: "80px" } }}>
      <AppBar
        sx={{ backgroundColor: "#f6f6f6", display: "flex", height: { xs: '90px', md: "65px" } }}
      >
        <Toolbar sx={{ display: { xs: "block", md: 'flex', justifyContent: "space-between", alignItems: 'center' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <img
              style={{ height: "28px", width: "95px" }}
              src={`${process.env.REACT_APP_URL_LINK}static/logo-branded-v123.png`}
              alt="voice123_logo"
            />
          </IconButton>

          <SearchInput
            inputVal={input}
            setValue={setInput}
            handleEnter={handleEnter}
          />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <CustomButton
              title="Search"
              variant="contained"
              searchKeyword={searchBtnAction}
            />
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
