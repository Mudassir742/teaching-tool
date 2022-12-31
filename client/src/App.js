//react
import React, { useState, useEffect } from "react";
//material
import { Button, Grid, Divider, Card, Box } from "@mui/material";
import {
  Notes,
  VideoCameraBack,
  Gesture,
  Camera,
  Menu,
  Clear,
  DesignServices,
} from "@mui/icons-material";

//components
import ScreenRecorder from "./components/ScreenRecorder";
import WebCam from "./components/Webcam";
import NoteTaker from "./components/NoteTaker";
import WhiteBoard from "./components/Drawingboard";

//ui-components
import CustomDrawer from "./ui-components/CustomDrawer";

//styles
import "./App.css";

const App = () => {
  const [mediaBlobUrl, setMediaBlobUrl] = useState();
  const [noteFlag, setNoteFlag] = useState(false);
  const [camFlag, setcamFlag] = useState(false);
  const [screenFlag, setscreenFlag] = useState(false);
  const [whiteboardFlag, setwhiteboardFlag] = useState(false);
  const [showEditVideo, setShowEditVideo] = useState(false);

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  useEffect(() => {}, [mediaBlobUrl]);

  const onCloseSidebar = () => {
    setIsOpenSidebar(false);
  };

  const getRecordedVedio = (blobUrl) => {
    if (blobUrl) {
      console.log(blobUrl);
      const myFile = new File([blobUrl], "demo.mp4", { type: "video/mp4" });

      console.log("Media", myFile);

      const blobFile = URL.createObjectURL(blobUrl);
      console.log(blobFile);
      setMediaBlobUrl(blobFile);
    }
  };

  return (
    <Box className="main-container">
      <Grid container className="content">
        <CustomDrawer
          isOpenSidebar={isOpenSidebar}
          onCloseSidebar={onCloseSidebar}
        >
          <Card className="card btn-section">
            <Clear className="clearIcon" onClick={onCloseSidebar} />
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
              variant={screenFlag ? "contained" : "outlined"}
              color="secondary"
              sx={{ marginBottom: ".8rem", width: "100%" }}
              startIcon={<VideoCameraBack />}
              onClick={() => {
                setwhiteboardFlag(false);
                setNoteFlag(false);
                setcamFlag(false);
                setShowEditVideo(false);
                setscreenFlag(!screenFlag);
              }}
              disabled={!mediaBlobUrl ? true : false}
            >
              View Video
            </Button>
            <Button
              variant={showEditVideo ? "contained" : "outlined"}
              color="secondary"
              sx={{ marginBottom: ".8rem", width: "100%" }}
              startIcon={<DesignServices />}
              onClick={() => {
                setwhiteboardFlag(false);
                setNoteFlag(false);
                setcamFlag(false);
                setscreenFlag(false);
                setShowEditVideo(!showEditVideo);
              }}
              disabled={!mediaBlobUrl ? true : false}
            >
              Edit Video
            </Button>
          </Card>
        </CustomDrawer>

        <Grid item xs={12} spacing={1} className="screens">
          <Card className="card">
            <Menu className="menuIcon" onClick={() => setIsOpenSidebar(true)} />
            <Grid container className="screenContainer">
              {whiteboardFlag && (
                <Grid item xs={!noteFlag && !camFlag ? 12 : 7}>
                  <WhiteBoard />
                </Grid>
              )}
              {noteFlag && (
                <Grid
                  item
                  xs={
                    !whiteboardFlag && !camFlag
                      ? 12
                      : !whiteboardFlag && camFlag
                      ? 7
                      : 5
                  }
                >
                  <NoteTaker
                    whiteboardFlag={whiteboardFlag}
                    camFlag={camFlag}
                  />
                </Grid>
              )}
              {camFlag && (
                <Grid
                  item
                  xs={5}
                  style={{ position: "absolute", right: 0, bottom: "20px" }}
                >
                  <WebCam />
                </Grid>
              )}

              {screenFlag && mediaBlobUrl && (
                <Grid item xs={12}>
                  <video
                    height="80%"
                    width="100%"
                    src={mediaBlobUrl}
                    controls
                  />
                </Grid>
              )}

              {showEditVideo && mediaBlobUrl && (
                <Grid item xs={12}>
                  <iframe
                    src={process.env.REACT_API_URL}
                    width="100%"
                    height="100%"
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
