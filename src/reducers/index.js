import { combineReducers } from 'redux';

const songsReducers = () => {
  return [
    { title:'Ae Dil Aashiqana', duration:'4:05', },
    { title:'Complicated', duration: '3:20' },
    { title:'Smile', duration: '2:50' },
    { title:'Dilbar Dilbar', duration: '5:10' },
    { title:'saki saki', duration: '3:40' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer
});