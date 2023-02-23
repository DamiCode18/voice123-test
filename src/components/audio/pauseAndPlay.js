import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

const PauseAndPlay = ({ showPlay, callback }) => {
  if (!showPlay) {
    return (
      <IconButton
        aria-label="play"
        sx={{
          width: "50px",
          height: "50px",
        }}
        onClick={callback}
      >
        <PlayCircleOutlineIcon
          sx={{ height: 48, width: 48, color: "primary.button" }}
        />
      </IconButton>
    );
  }

  return (
    <IconButton
      aria-label="pause"
      sx={{
        width: "50px",
        height: "50px",
      }}
      onClick={callback}
    >
      <PauseCircleOutlineIcon
        sx={{ height: 38, width: 38, color: "primary.button" }}
      />
    </IconButton>
  );
};

PauseAndPlay.propTypes = {
  showPlay: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default PauseAndPlay;
