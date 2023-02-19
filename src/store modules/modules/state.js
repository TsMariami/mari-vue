const state = () =>{
    return{
    songs: [
        { id: 1, name: 'Bohemian Rhapsody', url: "https://www.youtube.com/embed/fJ9rUzIMcZQ", description: 'Bohemian Rhapsody by Queen', cover: "https://ichef.bbci.co.uk/news/976/cpsprodpb/4B19/production/_86352291_bohemianrhapsody.jpg" },
        { id: 2, name: 'Smells Like Teen Spirit', url: "https://www.youtube.com/embed/hTWKbfoikeg", description: "Smells like teen spirit by Nirvana", cover: 'https://i.insider.com/571649b9dd0895954c8b46d3?width=700', },
        { id: 3, name: 'In My Life', url: 'https://www.youtube.com/embed/N0tOm2mjWAw', description: 'in my life by The Beatles', cover: 'https://img.youtube.com/vi/YBcdt6DsLQA/hqdefault.jpg', },
        { id: 4, name: 'Where Is My Mind?', url: 'https://www.youtube.com/embed/OJ62RzJkYUo', description: 'Where Is My Mind? by pixies', cover: 'https://i1.sndcdn.com/artworks-pkUF8ryhpshcyjXD-xTJoJg-t500x500.jpg', },
        { id: 5, name: 'The Real Slim Shady', url: 'ttps://www.youtube.com/embed/eJO5HU_7_1w', description: 'The Real Slim Shady by Eminem', cover: 'https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42', },
    ],
    watchlist: [],
    currencies: []
}
}
export default state