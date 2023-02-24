import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import ClearIcon from "@mui/icons-material/Clear";

import React from "react";
import { InputBase } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: 0,
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  margin: ".2rem 1.5rem 0 0.5rem",
  height: "100%",
  pointerEvents: "none",
  alignItems: "center",
  cursor: "pointer",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  position: "relative",
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
  },
}));
export default function SearchInput({ inputVal, setValue, handleEnter }) {
  const clearInput = () => {
    setValue("");
    inputVal = "";
  };
  return (
    <Box
      border={2}
      color="#000"
      borderColor="primary.button"
      sx={{width: {md: '100%'}}}
      mx={2}
    >
      {" "}
      <Search onKeyDown={handleEnter}>
        <SearchIconWrapper sx={{display: {xs: 'none', md: 'block'}}}>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={inputVal}
          onChange={(e) => setValue(e.target.value)}
          sx={{ color: "#000", paddingBottom: "10px", fontSize: {xs:'10px', md:'16px'} }}
          placeholder="warm, black voice actor, female, Morgan Freeman and more…"
          inputProps={{ "aria-label": "search" }}
        />
        {inputVal && (
          <ClearIcon onClick={clearInput} sx={{ mt: 1, cursor: "pointer" }} />
        )}
      </Search>
    </Box>
  );
}



SearchInput.propTypes = {
  inputVal: PropTypes.string,
  setVal: PropTypes.func,
  handleEnter: PropTypes.func,
};