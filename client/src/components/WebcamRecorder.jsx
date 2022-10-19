import { ReactMediaRecorder } from "react-media-recorder";
import Button from "@mui/material/Button";

const WebCamRecorder = () => {
  return (
    <div>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>Status : {status}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "15px",
                width:"350px"
              }}
            >
              <Button style={{margin:"2px"}} variant="outlined" onClick={startRecording}>
                Start Recording
              </Button>
              <Button style={{margin:"2px"}} variant="outlined" onClick={stopRecording}>
                Stop Recording
              </Button>
            </div>
             <video height={200} src={mediaBlobUrl} controls autoPlay loop />
          </div>
        )}
      />
    </div>
  );
};


export default WebCamRecorder
