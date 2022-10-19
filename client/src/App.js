import "./App.css";
import React, { useState, useEffect } from "react";
import ScreenRecorder from "./components/screen-recorder";
import WebCam from "./components/camera-share";
import WebCamRecorder from "./components/webcam-recorder";
import NoteTaker from "./components/note-taker";
import { Button, Grid, Divider, Card, Box } from "@mui/material";
import WhiteBoard from "./components/whiteboard";

const App = () => {
  const [mediaBlobUrl, setMediaBlobUrl] = useState();
  console.log(mediaBlobUrl);

  const [noteFlag, setNoteFlag] = useState(false);
  const [camFlag, setcamFlag] = useState(false);
  const [camRecordFlag, setcamRecordFlag] = useState(false);
  const [screenFlag, setscreenFlag] = useState(false);
  const [whiteboardFlag, setwhiteboardFlag] = useState(false);

  const [noteColor, setNoteColor] = useState("primary");
  const [camColor, setcamColor] = useState("primary");
  const [camRecordColor, setcamRecordColor] = useState("primary");
  const [screenColor, setscreenColor] = useState("primary");
  const [whiteboardColor, setwhiteboardColor] = useState("primary");

  useEffect(() => {}, [mediaBlobUrl]);

  // const renderNoteTaker = () => {
  //   if (noteFlag) return <NoteTaker></NoteTaker>;
  // };

  // const renderWebCam = () => {
  //   if (camFlag) return <WebCam></WebCam>;
  // };

  // const renderWhiteboard = () => {
  //   if (whiteboardFlag) return <WhiteBoard></WhiteBoard>;
  // };

  // const renderScreen = () => {
  //   if (screenFlag) return <ScreenRecorder></ScreenRecorder>;
  // };

  // const renderCamRecorder = () => {
  //   if (camRecordFlag) return <WebCamRecorder></WebCamRecorder>;
  // };

  const getRecordedVedio = (blobUrl) => {
    if (blobUrl) {
      const myFile = new File([blobUrl], "demo.mp4", { type: "video/mp4" });

      console.log("Media", myFile);
      setMediaBlobUrl(blobUrl);
    }
  };

  return (
    <Box className="main-container">
      <Grid container className="content">
        <Grid item xs={2} className="btn-menu">
          <Card className="card">
            <Grid container>
              <Grid item xs={12} className="btn-section one">
                <Button
                  color={noteColor}
                  variant="contained"
                  sx={{ marginBottom: ".8rem" }}
                  onClick={() => {
                    setNoteFlag(!noteFlag);
                    if (!noteFlag) {
                      setNoteColor("success");
                    } else {
                      setNoteColor("primary");
                    }
                  }}
                  disabled={screenFlag}
                >
                  Note Taker
                </Button>
                <Button
                  variant="contained"
                  color={camColor}
                  onClick={() => {
                    setcamFlag(!camFlag);
                    if (!camFlag) {
                      setcamColor("success");
                    } else {
                      setcamColor("primary");
                    }
                  }}
                  disabled={screenFlag}
                >
                  Web Camera
                </Button>
              </Grid>
              <Divider
                sx={{
                  backgroundColor: "rgb(129, 129, 129);",
                  margin: "1.5rem 0",
                }}
              />
              <Grid item xs={12} className="btn-section two">
                <ScreenRecorder
                  setMediaBlobUrl={getRecordedVedio}
                  disableButton={screenFlag}
                />
              </Grid>
              <Divider
                sx={{
                  backgroundColor: "rgb(129, 129, 129);",
                  margin: "1.5rem 0",
                }}
              />

              {/* <Button
          variant="contained"
          color={screenColor}
          onClick={() => {
            setscreenFlag(!screenFlag);
            if (!screenFlag) {
              setscreenColor("success");
            } else {
              setscreenColor("primary");
            }
          }}
        >
          Screen Recorder
        </Button>  */}

              {/* <Button
          variant="contained"
          color={camRecordColor}
          onClick={() => {
            setcamRecordFlag(!camRecordFlag);
            if (!camRecordFlag) {
              setcamRecordColor("success");
            } else {
              setcamRecordColor("primary");
            }
          }}
        >
          Web Camera Recorder
        </Button>  */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color={whiteboardColor}
                  onClick={() => {
                    setwhiteboardFlag(!whiteboardFlag);
                    if (!whiteboardFlag) {
                      setwhiteboardColor("success");
                    } else {
                      setwhiteboardColor("primary");
                    }
                  }}
                  disabled={screenFlag}
                >
                  White Board (In-Progress)
                </Button>
              </Grid>

              <Divider
                sx={{
                  backgroundColor: "rgb(129, 129, 129);",
                  margin: "1.5rem 0",
                }}
              />
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color={screenColor}
                  onClick={() => {
                    setwhiteboardFlag(false);
                    setNoteFlag(false);
                    setcamFlag(false);
                    setscreenFlag(!screenFlag);
                  }}
                  disabled={mediaBlobUrl === undefined ? true : false}
                >
                  View Video
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={10} className="screens">
          <Card className="card">
            <Grid container className="screenContainer">
            {whiteboardFlag && (
                <Grid item xs={12} > 
                  <WhiteBoard />
                </Grid>
              )}
              {noteFlag && (
                <Grid item xs={6}>
                  <NoteTaker />
                </Grid>
              )}
              {camFlag && (
                <Grid item xs={6} style={{ border: "1px solid black" }}>
                  <WebCam />
                </Grid>
              )}
              
              {screenFlag && mediaBlobUrl !== undefined && (
                <Grid item xs={12}>
                  <video
                    height={200}
                    src={mediaBlobUrl}
                    controls
                    autoPlay
                    loop
                  />
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {/* {renderWhiteboard()}
        
        {renderWebCam()} */}
      {/* {renderCamRecorder()} */}
      {/* {renderScreen()} */}
    </Box>
  );
};

export default App;
