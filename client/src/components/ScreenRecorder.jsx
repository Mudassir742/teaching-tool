import {
  ReactMediaRecorder,
  useReactMediaRecorder,
} from "react-media-recorder";
import Button from "@mui/material/Button";

const ScreenRecorder = ({ setMediaBlobUrl, disableButton }) => {
  const onStop = (blobUrl, blob) => {
    setMediaBlobUrl(blob);
  };

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true, screen: true, onStop });

  return (
    <div>
      {/* <ReactMediaRecorder
        screen
        render={({ status, startRecording, stopRecording,onStop, mediaBlobUrl}) => (
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
      /> */}

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
            onClick={() => {
              startRecording();
            }}
          >
            Start Recording
          </Button>
          <Button
            variant="contained"
            disabled={disableButton}
            onClick={() => {
              stopRecording();
              //setMediaBlobUrl(mediaBlobUrl);
            }}
          >
            Stop Recording
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorder;
