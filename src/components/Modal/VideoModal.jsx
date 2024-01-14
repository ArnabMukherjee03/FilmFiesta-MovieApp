import React, { useEffect } from "react";

const VideoModal = ({ videoId, showModal, closeModal, autoPlay }) => {
  useEffect(() => {
    if (showModal) {
      const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay}&mute=1`;
      const iframe = document.getElementById("youtube-iframe");
      iframe.src = youtubeEmbedUrl;
    }
  }, [showModal, videoId, autoPlay]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[80%] lg:w-1/2 ">
        <iframe
          id="youtube-iframe"
          className="relative w-full h-[200px] lg:h-[400px]"
          title="YouTube Video"
          allowFullScreen
        />
        <span
          className="absolute text-2xl top-[35%] right-[12%] lg:top-[16%] lg:right-[26%] z-[60] text-white cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default VideoModal;
