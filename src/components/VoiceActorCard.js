import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CustomButton } from "./Button";
import { Box } from "@mui/system";
import AudioPlay from "./audio/AudioPlay";
import { Divider } from "@mui/material";

export default function VoiceActorCard({ actor }) {
  return (
    <React.Fragment>
      <Card>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <a
            href={`${process.env.REACT_APP_URL_LINK}${actor?.user?.username}`}
            target="_blank"
            rel="noreferrer"
            style={{
              width: "100%",
              maxWidth: "480px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box pl={2}>
              <Typography sx={{ display: "flex", width: "100%" }} pt={2}>
                <Avatar
                  src={actor?.user?.picture_medium}
                  alt="avatar"
                  sx={{ width: 40, height: 40 }}
                />
                <Typography ml={2} mt={1}>
                  {actor?.user?.name}
                </Typography>
              </Typography>
              <Box pl={4} mt={2}>
                <Typography fontSize={14}>Last active</Typography>
                <Typography fontSize={13}>10 hours ago</Typography>
              </Box>
              <Typography
                pl={4}
                mt={1}
                fontSize={11}
                variant="body2"
                color="text.secondary"
              >
                {actor?.description}
              </Typography>
            </Box>
          </a>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <AudioPlay file={actor} />
            <a
              href={`${process.env.REACT_APP_URL_LINK}${actor?.user?.username}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardContent
                sx={{
                  backgroundColor: "primary.button",
                  width: 150,
                  height: 70,
                }}
              >
                <Typography variant="p" fontSize={12} color="primary.white">
                  {actor?.user?.name}
                </Typography>
              </CardContent>
            </a>
          </Box>
        </Box>
        <Divider sx={{ border: 1, borderColor: "#bdbdbd33" }} />
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Box display="flex" justifyContent="end">
            <CustomButton title="BOOK NOW" variant="text" />
            <CustomButton title="CONTACT" variant="text" />
          </Box>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
