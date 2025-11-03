import ModalVideo from "react-modal-video"; 

type Props = {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoId?: string;
};

const VideoPopup = ({isVideoOpen, setIsVideoOpen, videoId = "bgMEvrd2E"}: Props ) => {
  const AnyModalVideo = ModalVideo as any; 

  return (
    <AnyModalVideo
      channel="youtube"
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default VideoPopup;
