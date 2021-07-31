const baseUrl = "http://localhost:3000/albums"

document.addEventListener('DOMContentLoaded', () => {
    getAlbums()

    const newAlbumForm = document.getElementById("new-album-form")

    newAlbumForm.addEventListener("submit", (e) => 
    createFormHandler(e))

})

    const getAlbums = () => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(albums => {
            albums.forEach(album => {
                render(album);
            })

        })
    }

    const render = (album) => {
        const albumMarkup = `<div data=id=${album.id}>
                <img src=${album.image_url}
                height="120" width="120">
                <h4>${album.title}</h4>
                <h5>${album.artist}</h5>
                <p>${album.genre.name}</p>
                </div>`;

                document.querySelector('#album-container').innerHTML += albumMarkup
    }

    const createFormHandler = (e) => {
        e.preventDefault();
        const titleInput = document.getElementById("input-title").value
        const artistInput = document.getElementById("input-artist").value
        const imageInput = document.getElementById("img-input").value
        const genreId = parseInt(document.getElementById("genre-input").value)

        postFetch(titleInput, artistInput, imageInput, genreId)
    }

    const postFetch = (title, artist, image_url, genre_id) => {
        const bodyData = {title, artist, image_url, genre_id}
        fetch(baseUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData)
        })
        .then(res => res.json())
        .then(album => {
            // const albumData = album.data.attributes
            render(albumData);
        })

    }
