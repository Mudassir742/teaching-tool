//react
import React, { useState, useEffect } from "react";
import { Button, Grid, Divider, Card, Box } from "@mui/material";
import { Notes, VideoCameraBack, Gesture, Camera } from "@mui/icons-material";

//components
import ScreenRecorder from "./components/ScreenRecorder";
import WebCam from "./components/Webcam";
import NoteTaker from "./components/NoteTaker";
import WhiteBoard from "./components/Drawingboard";

//styles
import "./App.css";

const App = () => {
  const [mediaBlobUrl, setMediaBlobUrl] = useState();
  const [noteFlag, setNoteFlag] = useState(false);
  const [camFlag, setcamFlag] = useState(false);
  const [screenFlag, setscreenFlag] = useState(false);
  const [whiteboardFlag, setwhiteboardFlag] = useState(false);

  useEffect(() => {}, [mediaBlobUrl]);

  const getRecordedVedio = (blobUrl) => {
    if (blobUrl) {
      console.log(blobUrl);
      const myFile = new File([blobUrl], "demo.mp4", { type: "video/mp4" });

      console.log("Media", myFile);

      const blobFile = URL.createObjectURL(blobUrl);
      console.log(blobFile)
      setMediaBlobUrl(blobFile);
    }
  };

  return (
    <Box className="main-container">
      <Grid container className="content">
        <Grid item xs={2} className="btn-menu">
          <Card className="card btn-section">
            <Button
              color="secondary"
              variant={noteFlag ? "contained" : "outlined"}
              startIcon={<Notes />}
              sx={{ marginBottom: ".8rem", width: "100%" }}
              onClick={() => {
                setNoteFlag(!noteFlag);
              }}
              disabled={screenFlag}
            >
              Note Taker
            </Button>
            <Button
              variant={camFlag ? "contained" : "outlined"}
              color="secondary"
              sx={{ marginBottom: ".8rem", width: "100%" }}
              startIcon={<Camera />}
              onClick={() => {
                setcamFlag(!camFlag);
              }}
              disabled={screenFlag}
            >
              Web Camera
            </Button>

            <Button
              variant={whiteboardFlag ? "contained" : "outlined"}
              color="secondary"
              startIcon={<Gesture />}
              sx={{ marginBottom: ".8rem", width: "100%" }}
              onClick={() => {
                setwhiteboardFlag(!whiteboardFlag);
              }}
              disabled={screenFlag}
            >
              White Board
            </Button>

            <Divider
              sx={{
                backgroundColor: "#F0F2F5",
                margin: "1.5rem 0",
                width: "100%",
              }}
            />

            <ScreenRecorder
              setMediaBlobUrl={getRecordedVedio}
              disableButton={screenFlag}
            />

            <Divider
              sx={{
                backgroundColor: "#F0F2F5",
                margin: "2.1rem 0",
                width: "100%",
              }}
            />
            <Button
              variant={screenFlag ? "container" : "outlined"}
              color="secondary"
              sx={{ marginBottom: ".8rem", width: "100%" }}
              startIcon={<VideoCameraBack />}
              onClick={() => {
                setwhiteboardFlag(false);
                setNoteFlag(false);
                setcamFlag(false);
                setscreenFlag(!screenFlag);
              }}
              disabled={!mediaBlobUrl ? true : false}
            >
              View Video
            </Button>
          </Card>
        </Grid>
        <Grid item xs={10} className="screens">
          <Card className="card">
            <Grid container className="screenContainer">
              {whiteboardFlag && (
                <Grid item xs={12}>
                  <WhiteBoard />
                </Grid>
              )}
              {noteFlag && (
                <Grid item xs={6}>
                  <NoteTaker />
                </Grid>
              )}
              {camFlag && (
                <Grid item xs={6}>
                  <WebCam />
                </Grid>
              )}

              {screenFlag && mediaBlobUrl && (
                <Grid item xs={12}>
                  <video
                    height="100%"
                    width="100%"
                    src={mediaBlobUrl}
                    controls
                  />
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
