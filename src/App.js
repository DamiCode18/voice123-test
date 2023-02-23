import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  ThemeProvider,
  Typography,
  CircularProgress,
} from "@mui/material/";
import Grid from "@mui/material/Grid";
import theme from "./theme";
import Navbar from "./components/Navbar";
import { getAllActors } from "./API/listActors/listActors";
import { useDebounce } from "./utils/useDebounce";
import VoiceActorCard from "./components/VoiceActorCard";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  //debounced search hook call
  const debouncedSearch = useDebounce(input, 800);

    //input is removed from the useEffect dependancy array and replaced by debouncedSearch,
    //so that it only fetches new data not when input changes but after it has been debounced...
     const fetchData = async () => {
      try {
        setLoading(true); // Set loading before sending API request
        const response = await getAllActors(page, input);
        setData(response.providers);
        setLoading(false); // Stop loading
      } catch (error) {
        setLoading(false); // Stop loading in case of error
        console.error(error);
      }
    };

  useEffect(() => {
    fetchData().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, debouncedSearch]);

  const handleOnClick = () => {
    fetchData().catch(console.error);
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
        <Container>
          <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {!loading && data &&
                data?.map((actor, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index} m="auto">
                    <VoiceActorCard actor={actor} />
                  </Grid>
                ))}
              {!loading && data?.length === 0 && (
                <Box mt={20} mx="auto">
                  <Typography>No data available</Typography>
                </Box>
              )}
              {loading && (
                <Box
                 mt={20}
                 mx="auto"
                >
                  <CircularProgress
                    sx={{
                      height: 28,
                      width: 28,
                      color: "primary.button",
                    }}
                  />
                </Box>
              )}
            </Grid>
          </Box>
          <Box
            height={50}
            sx={{
              backgroundColor: "#f6f6f6",
              position: "fixed",
              bottom: 0,
              width: "100%",
              maxWidth: "1150px",
            }}
          >
            <Pagination page={page} setPage={setPage} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
