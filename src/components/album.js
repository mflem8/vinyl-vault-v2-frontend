class Album {
    
    constructor(album) {
        this.id = album.id
        this.title = album.title
        this.artist = album.artist
        this.image_url = album.image_url
        this.genre = album.genre
        Album.all.push(this)
    }

    render() {
        console.log(this);
        return `<div data-id=${this.id}>
        <img src=${this.image_url} height="120" width="120">
        <h4>${this.title}</h4>
        <h5>${this.artist}</h5>
        <p>${this.genre.name}</p>
        </div>`
    }
}

Album.all = [];