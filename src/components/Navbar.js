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
    <Box sx={{ marginBottom: "80px" }}>
      <AppBar
        sx={{ backgroundColor: "#f6f6f6", display: "flex", height: "65px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <img
            style={{ height: "28px", width: "95px" }}
            src={`${process.env.REACT_APP_URL_LINK}static/logo-branded-v123.png`}
            alt="voice123_logo"
          />
          <SearchInput
            inputVal={input}
            setValue={setInput}
            handleEnter={handleEnter}
          />
          <CustomButton
            title="Search"
            variant="contained"
            searchKeyword={searchBtnAction}
          />
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
