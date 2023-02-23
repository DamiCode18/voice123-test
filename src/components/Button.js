import Button from "@mui/material/Button";
import React from "react";

export const CustomButton = ({ title, variant, searchKeyword }) => {
  return (
    <Button
      onClick={searchKeyword}
      size="large"
      
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
