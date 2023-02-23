import React, { useEffect, useState } from "react";
import { Box, ThemeProvider } from "@mui/material/";
import theme from "./theme";
import Navbar from "./components/Navbar";
import { getAllActors } from "./API/listActors/listActors";
import { useDebounce } from "./utils/useDebounce";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const debouncedSearch = useDebounce(input, 800);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllActors(page, input);
      setData(response.providers);
    };
    fetchData().catch(console.error);
    //input is removed from the useEffect dependancy array and replaced by debouncedSearch,
    //so that it only fetches new data not when input changes but after it has been debounced...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, debouncedSearch]);

  const handleOnClick = () => {
    const fetchData = async () => {
      const response = await getAllActors(page, input);
      setData(response.providers);
    };
    fetchData();
  };

  const handleEnterPress = (e) => {
    //it triggers by pressing the enter key
    //it also only hit the endpoint when a new value aside the current input value is entered
    if (e.keyCode === 13 && debouncedSearch !== input) {
      handleOnClick();
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar
          input={input}
          setInput={setInput}
          searchBtnAction={handleOnClick}
          handleEnter={handleEnterPress}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
