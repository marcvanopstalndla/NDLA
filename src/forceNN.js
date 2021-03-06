videojs.registerPlugin('forceNNcaption', function() {
    var myPlayer = this;
  
    myPlayer.on("loadedmetadata", function () {
    //myPlayer.on("loadeddata", function () {

        // Get all text tracks for the current player.
        var tracks = myPlayer.textTracks();

        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            // Find captions track and mark it as "showing".
            // if (track.kind === 'captions' && track.language.substr(0, 2).toLowerCase() === 'nn') {
            if (track.language.substr(0, 2).toLowerCase() === 'nn') {
                track.mode = 'showing';
            } else {
                track.mode = 'disabled';
            }
        }
    });
});
