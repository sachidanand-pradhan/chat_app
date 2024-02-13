import { useState } from "react";

function VideoPlayer() {
  // State to manage whether the video is playing or paused
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* Video element */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/pTFZFxd4hOI?autoplay=${
          isPlaying ? 1 : 0
        }`}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Button to toggle play/pause */}
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

export default VideoPlayer;
