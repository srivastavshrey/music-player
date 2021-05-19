import REACT, { useState } from "react";
import LibrarySong from "./LibrarySongs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Library = ({
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setIsPlaying,
  setSongs,
}) => {
  const openSidebar = (e) => {
    document.getElementById("lib").style = "width:400px";
    console.log("clicked");
  };

  const closeSidebar = (e) => {
    document.getElementById("lib").style = "width:0px";
    console.log("close-click");
  };

  return (
    <div className="s-bar">
      <button onClick={openSidebar} className="library-button">
        Library
      </button>
      <div className="library" id="lib">
        <h2>Library</h2>
        <FontAwesomeIcon
          className="close-library"
          size="2x"
          icon={faWindowClose}
          onClick={closeSidebar}
        />
        <div className="library-songs"></div>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
