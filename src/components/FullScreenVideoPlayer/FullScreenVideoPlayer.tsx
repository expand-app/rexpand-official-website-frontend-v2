import React, { useRef } from 'react';


interface FullScreenVideoPlayerProps {
    src: string;
  }
  
  function FullScreenVideoPlayer({ src }: FullScreenVideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
  
    const toggleFullScreen = () => {
      const video = videoRef.current;
  
      if (video) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video?.mozRequestFullScreen) { /* Firefox */
          video?.mozRequestFullScreen();
        } else if (video?.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          video?.webkitRequestFullscreen();
        } else if (video?.msRequestFullscreen) { /* IE/Edge */
          video?.msRequestFullscreen();
        }
      }
    };
  
    return (
      <div>
        <video ref={videoRef} controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={toggleFullScreen}>Toggle Full Screen</button>
      </div>
    );
  }
  
  export default FullScreenVideoPlayer;
