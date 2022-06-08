import React, {useEffect, useRef} from 'react';
import song from '../assets/audios/CTMYOY.mp3'

function Audio(props) {

  const audioSong = useRef();

  useEffect(() => {
    audioSong.current.play()
  },[audioSong])

  return (
    <div>
      <audio loop src={song} ref={audioSong}></audio>
    </div>
  );
}

export default Audio;