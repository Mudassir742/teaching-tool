import { ReactMediaRecorder } from "react-media-recorder";
import Button from "@mui/material/Button";

const ScreenRecorder = ({ setMediaBlobUrl, disableButton }) => {

  return (
    <div>
      <ReactMediaRecorder
        screen
        render={({ status, startRecording, stopRecording, mediaBlobUrl,}) => (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                style={{ margin: ".8rem 0" }}
                disabled={disableButton}
                variant="contained"
                onClick={()=>{startRecording()}}
              >
                Start Recording
              </Button>
              <Button
                variant="contained"
                disabled={disableButton}
                onClick={() => {
                  stopRecording();
                  setMediaBlobUrl(mediaBlobUrl);
                }}
              >
                Stop Recording
              </Button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ScreenRecorder;
