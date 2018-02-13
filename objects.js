var playlist = {artistNames: "song title"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(object, artistName) {
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;


}
