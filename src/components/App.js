import React from 'react';
import SongList from './SongsList';
import SongsDetails from './SongsDetails';
const App = () => {
  
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
        <SongList />
        </div>
        <div className="column eight wide">
          <SongsDetails />
        </div>
      </div>
    </div>
    
  );
}

export default App;