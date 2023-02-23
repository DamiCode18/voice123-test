import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Forward5Icon from "@mui/icons-material/Forward5";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

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
          <SkipPreviousIcon
            sx={{ height: 18, width: 18, color: "primary.button" }}
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
          <Forward5Icon
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
