import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from '@mui/icons-material/Replay10';

const ForwardAndBackward = ({
  currentPlaying,
  children,
  callback,
  skipDuration = 10,
}) => {
  return (
    <>
      {currentPlaying && (
        <IconButton
          aria-label="play/pause"
          sx={{
            width: "50px",
            height: "50px",
          }}
          onClick={() => callback(-skipDuration)}
        >
          <Replay10Icon
            sx={{ height: 28, width: 28, color: "primary.button" }}
          />
        </IconButton>
      )}

      {children}

      {currentPlaying && (
        <IconButton
          aria-label="pause"
          sx={{
            width: "50px",
            height: "50px",
          }}
          onClick={() => callback(skipDuration)}
        >
          <Forward10Icon
            sx={{ height: 28, width: 28, color: "primary.button" }}
          />
        </IconButton>
      )}
    </>
  );
};

ForwardAndBackward.propTypes = {
  currentPlaying: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ForwardAndBackward;
