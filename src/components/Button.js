import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import React from "react";

export const CustomButton = ({ title, variant, onClick, page, size }) => {
  return (
    <Button
      onClick={onClick}
      size={size}
      disabled={page}
      sx={[
        {
          color: variant !== "text" ? "#fff" : "primary.button",
          backgroundColor: variant !== "text" && "primary.button",
        },
        variant !== "text" && {
          "&:hover": {
            color: "#FFF",
            backgroundColor: "primary.button",
          },
        },
      ]}
      variant={variant}
    >
      {title}
    </Button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  page: PropTypes.bool,
  size: PropTypes.string,
};
