import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";

import {
  FaRegHeart,
  FaHeart,
  FaStepBackward,
  FaBackward,
  FaPause,
  FaPlay,
  FaForward,
  FaStepForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
function MusicPlayer({ song, imgSrc }) {
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlayed] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef(); //Our Audio Tag
  const progressBar = useRef(); // our progress bar
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const CalculateTime = (sec) => {
    const min = Math.floor(sec / 60);
    const returnMin = min < 10 ? `0${min}` : `${min}`;

    const seconds = Math.floor(sec % 60);
    const returnseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnseconds}`;
  };
   
  const playPauseStatus = () => {
    const prevValue = isPlaying;

    if (!prevValue) {
        
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whileplaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);

    }
    setPlayed(!prevValue);
  };

  const whileplaying = () =>{
      progressBar.current.value = audioPlayer.current.currentTime;
      changeCurrentTime(); 
      animationRef.current = requestAnimationFrame(whileplaying);
  };
  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
       changeCurrentTime();  
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
        "--player-played",
        `${(progressBar.current.value / duration) * 100}%`
      );
  
      setCurrentTime(progressBar.current.value);
  };

  const changeLoved = () => {
    setLoved(!isLove);
  };


  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc}></img>
      </div>
      <div className="songAttri">
        <audio src={song} preload="metaData" ref={audioPlayer} />
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <div className="download">
              {" "}
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={playPauseStatus}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">{CalculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            onChange={changeProgress}
          />
          <div className="duration">
            {duration && !isNaN(duration) && CalculateTime(duration)
              ? CalculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
