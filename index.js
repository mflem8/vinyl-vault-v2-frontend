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
        albums.data.forEach(album => {
            const albumMarkup = `<div data=id=${album.id}>
                <img src=${album.attributes.image_url}
                height="120" width="120">
                <h4>${album.attributes.title}</h4>
                <h5>${album.attributes.artist}</h5>
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