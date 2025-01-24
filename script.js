document.addEventListener('DOMContentLoaded', function() {
    const artistsSection = document.getElementById('artists');
    const audioPlayer = document.getElementById('audioPlayer');
    const currentSongDiv = document.getElementById('currentSong');

    fetch('artists.json')
        .then(response => response.json())
        .then(data => {
            data.artists.forEach(artist => {
                const artistDiv = document.createElement('div');
                artistDiv.className = 'artist';
                artistDiv.innerHTML = `
                    <img src="${artist.image}" alt="${artist.name}" width="150">
                    <h3>${artist.name}</h3>
                    <button onclick="playSong('${artist.song}', '${artist.name}')">Play</button>
                `;
                artistsSection.appendChild(artistDiv);
            });
        });

    window.playSong = function(songUrl, artistName) {
        audioPlayer.src = songUrl;
        audioPlayer.play();
        currentSongDiv.innerHTML = `Playing: ${artistName}`;
    };
});
