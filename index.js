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
                
                let newAlbum = new Album(album);

                document.querySelector('#album-container').innerHTML += newAlbum.render();

            })
        })
    }

    const createFormHandler = (e) => {
        e.preventDefault();
        const titleInput = document.querySelector("#title-input").value
        const artistInput = document.querySelector("#artist-input").value
        const imageInput = document.querySelector("#img-input").value
        const genreId = parseInt(document.querySelector("#genre-input").value)

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
            const albumData = album.data
            let newAlbum = new Album(album);

            document.querySelector('#album-container').innerHTML += newAlbum.render();
        })
    }




    

 

   
    



    
      


