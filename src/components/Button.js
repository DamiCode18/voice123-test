import Button from "@mui/material/Button";
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
          backgroundColor: variant !== "text" && "primary.button"
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
