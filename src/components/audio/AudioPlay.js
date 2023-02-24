import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import PauseAndPlay from "./pauseAndPlay";
import ForwardAndBackward from "./forwardAndBackward";
import CircularProgress from "@mui/material/CircularProgress";

const PLAY_NEW_AUDIO_EVENT = "PLAY_NEW_AUDIO";
const AudioPlay = ({ file }) => {
  const audioRef = React.useRef(null);
  const [audioIsPlaying, setAudioIsPlaying] = React.useState(false);
  const [audioDownloading, setAudioDownloading] = React.useState(false);

  const handleAudioState = () => {
    const isPlaying = audioIsPlaying;
    const customEvent = new CustomEvent(PLAY_NEW_AUDIO_EVENT, {});

    // if it's playing for the first time, initiate audio downlaod
    if (!isPlaying && !audioRef.current) {
      audioRef.current = new Audio(file);
      audioRef.current.onloadstart = () => setAudioDownloading(true);
      audioRef.current.oncanplaythrough = () => setAudioDownloading(false);
      audioRef.current.onerror = () => setAudioDownloading(false);
      audioRef.current.onended = () => setAudioIsPlaying(false);
    }

    document.dispatchEvent(customEvent);

    if (!isPlaying) audioRef.current.play();
    else audioRef.current.pause();
    setAudioIsPlaying(!isPlaying);
  };

  // accepts either a positive or negative value
  const handleFowardAndBackward = (duration) => {
    const currentTime = (audioRef.current.currentTime += duration);
    audioRef.current.currentTime = currentTime;
  };

  const handleEventListener = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setAudioIsPlaying(false);
    }
  };

  React.useEffect(() => {
    // stop other audio from playing when a new audio is about to start playing
    document.addEventListener(PLAY_NEW_AUDIO_EVENT, handleEventListener);
    return () => {
      document.removeEventListener(PLAY_NEW_AUDIO_EVENT, handleEventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      bgcolor="#bdbdbd33"
      sx={{
        height: 120,
        width: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!audioDownloading && (
        <ForwardAndBackward
          currentPlaying={audioIsPlaying}
          callback={handleFowardAndBackward}
        >
          <PauseAndPlay showPlay={audioIsPlaying} callback={handleAudioState} />
        </ForwardAndBackward>
      )}
      {audioDownloading && (
        <CircularProgress
          sx={{ height: 38, width: 38, color: "primary.button" }}
        />
      )}
    </Box>
  );
};

AudioPlay.propTypes = {
  file: PropTypes.string.isRequired
};

export default AudioPlay;
