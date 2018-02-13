var playlist = {artistNames: "song title"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(object, artistName) {
  delete playlist.artistName;
  return object;


}
