// AudioPlayer.js
import React from 'react';
import AudioPlayer from 'react-audio-player';

const AudioPlayerComponent = ({ src }) => {
  return (
    <div>
      <AudioPlayer
        src={src}
        controls
        // Other optional props
      />
    </div>
  );
};

export default AudioPlayerComponent;
