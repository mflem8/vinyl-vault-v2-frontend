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
        albums.data.forEach(albums => {
            const albumMarkup = `<div data=id=${album.id}>
                <img src=${album.attributes.image_url}
                height="200" width="250">
                <h3>${album.attributes.title}</h3>
                <h4>${album.attributes.artist}
                <p>${album.attributes.genre.name}</p>
                </div>`;

                document.querySelector('#album-container').innerHTML += albumMarkup
        })
    })
}

const createFormHandler = (e) => {
    e.preventDefault();
    console.log(e);
}