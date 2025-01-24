document.addEventListener('DOMContentLoaded', function() {
    const artistsSection = document.getElementById('artists');
    const albumsSection = document.getElementById('albums');
    const audioPlayer = document.getElementById('audioPlayer');
    const currentSongDiv = document.getElementById('currentSong')
            function logToConsoleDiv(message) {
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML += `<p>${message}</p>`;
    }
    const toggleButton = document.getElementById('toggleConsole');
    toggleButton.addEventListener('click', () => {
        if (consoleDiv.style.display === 'none' || consoleDiv.style.display === '') {
            consoleDiv.style.display = 'block';
            toggleButton.textContent = 'Hide Console';
        } else {
            consoleDiv.style.display = 'none';
            toggleButton.textContent = 'Show Console';
        }
    });

;

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
                
            logToConsole(`Added artist: ${artist.name}`);artistsSection.appendChild(artistDiv);
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
            logToConsole(`Added album: ${album.title}`);
        });

    window.playSong = function(songUrl, songTitle) {
        audioPlayer.src = songUrl;
        audioPlayer.play();
        currentSongDiv.innerHTML = `Playing: ${songTitle}`;
    };
});
