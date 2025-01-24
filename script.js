document.addEventListener('DOMContentLoaded', function() {
    const artistsSection = document.getElementById('artists');
    const albumsSection = document.getElementById('albums');
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
                    <button onclick="playSong('${artist.songs[0].url}', '${artist.name} - ${artist.songs[0].title}')">Play</button>
                `;
                artistsSection.appendChild(artistDiv);
            });

            data.albums.forEach(album => {
                const albumDiv = document.createElement('div');
                albumDiv.className = 'album';
                albumDiv.innerHTML = `
                    <img src="${album.image}" alt="${album.title}" width="150">
                    <h3>${album.title}</h3>
                    <button onclick="playSong('${album.songs[0].url}', '${album.title} - ${album.songs[0].title}')">Play</button>
                `;
                albumsSection.appendChild(albumDiv);
            });
        });

    window.playSong = function(songUrl, songTitle) {
        audioPlayer.src = songUrl;
        audioPlayer.play();
        currentSongDiv.innerHTML = `Playing: ${songTitle}`;
    };
});
