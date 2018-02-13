var playlist = {artistNames: "song title"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  var newObj = Object.assign({}, artName);
  delete newObj.key;
  return newObj;


}
