import { Box } from "@mui/material";
import React from "react";
import { CustomButton } from "./Button";

export default function Pagination({ page, setPage }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" py={1} mx="auto" width='max-content'>
      <CustomButton
        title="Previous"
        variant="text"
        size="small"
        page={page === 1 ? true : false}
        onClick={() => setPage(page -1)}
      />
      <Box>
        {[1,2,3].map(btn=>(
        <CustomButton 
        key={btn}
        size="small"
        title={`${btn}`} 
        variant={page === btn ? "outlined" : 'text'}
        onClick={() => setPage(btn)} 
        />
        ))}
      </Box>
      <CustomButton
        title="Next"
        size="small"
        variant="text"
        page={page === 3 ? true : false}
        onClick={() => setPage(page + 1)}
      />
    </Box>
  );
}
