import React, { useState, useEffect } from "react";
import { Songs } from "./Songs.js";
import { MusicPlayer } from "./MusicPlayer.js";

import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImage] = useState(Songs[0].imgSrc);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    // console.log(allLi);
    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const CalculateTime = (sec) => {
    const min = Math.floor(sec / 60);
    const returnMin = min < 10 ? `0${min}` : `${min}`;

    const seconds = Math.floor(sec % 60);
    const returnseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnseconds}`;
  };

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
  };

  return (
    <div className="audioList">
      <audio id="myaudio" controls>
        <source src={song?.song}></source>
      </audio>
      <h2 className="title">
        The list <span>{Songs.length} songs</span>
      </h2>
      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt=""></img>
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="spanArtist">{song?.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,464,656
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      {CalculateTime(
                        Math.floor(document.getElementById("muaudio").duration)
                      )}
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} />
    </div>
  );
}

export { AudioList };
