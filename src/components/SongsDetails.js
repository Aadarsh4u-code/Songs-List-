import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
  if(!song) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h2>Details For:</h2>
      <p>
        Title: { song.title}
        <br/>
        Duration: {song.duration}
      </p>

    </div>
  ); 
};

const mapStateToProps = state => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps) (SongDetails);