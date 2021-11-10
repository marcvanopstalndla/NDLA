// Get all text tracks for the current player.
var tracks = player.textTracks();

for (var i = 0; i < tracks.length; i++) {
  var track = tracks[i];

  // Find the English captions track and mark it as "showing".
  if (track.kind === 'captions' && track.language === 'nn') {
    track.mode = 'showing';
  }
}
