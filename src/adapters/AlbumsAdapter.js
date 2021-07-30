class AlbumsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/albums'
    }

    getAlbums() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}