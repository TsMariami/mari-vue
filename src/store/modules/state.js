const state = () => {
    return {
    videos: [
        { id: 1, url: "https://www.youtube.com/embed/OJ62RzJkYUo", title: "where is my mind?", cover: "src/components/img/card imgs/card5.webp", channelimg:"src/components/img/card imgs/card5.1.jpg" , description: "59M views 4 years ago" , channel: "Pixie" },
        { id: 2, url: "https://www.youtube.com/embed/o_1aF54DO60", title: "Lana Del Rey - Young and Beautiful", cover: 'src/components/img/card imgs/card1.webp', channelimg:"src/components/img/card imgs/card1.1.jpg" , channel: "Lana Del Rey", description: "529M views  9 years ago"},
        { id: 3, url: 'https://www.youtube.com/embed/Ar48yzjn1PE', title: "Coldplay - Sparks", cover: 'src/components/img/card imgs/card2.webp', channelimg: "src/components/img/card imgs/card2.2.jpg" , description: "600M views 4 years ago" , channel: "Coldplay"},
        { id: 4, url: 'https://www.youtube.com/embed/MeRIAew8eXc', title: ' Freaking Out The Neighborhood', cover: 'src/components/img/card imgs/card3.webp', channelimg: "src/components/img/card imgs/card3.1.jpg" , description: "700M views 8 years ago" , channel: "macDemarco"},
        { id: 5, url: 'https://www.youtube.com/embed/viimfQi_pUw', title: 'Billie Eilish - Ocean Eyes', cover: 'src/components/img/card imgs/card4.webp', channelimg: "src/components/img/card imgs/card4.1.jpg" , description: "2B views 5 years ago" , channel: "Billie Eilish"},
        { id: 6, url: 'https://www.youtube.com/embed/8uD6s-X3590', title: 'Harry Styles - Sweet Creature', cover: 'src/components/img/card imgs/crad6.webp', channelimg: "src/components/img/card imgs/crad6.1.jpg" , description: "529M views 4 years ago" , channel: "Harry Styles"},
        { id: 7, url: 'https://www.youtube.com/embed/GWGbOjlJDk', title: 'Who are you?', cover: 'src/components/img/card imgs/card7.webp',  channelimg: "src/components/img/card imgs/card7.1.jpg" , description: "50M views 1 year ago", channel: "Identity"},
        { id: 8, url: 'https://www.youtube.com/embed/a4iCLIgIsng', title: 'The Beatles - Here Comes The Sun', cover: 'src/components/img/card imgs/card8.webp', channelimg: "src/components/img/card imgs/card8.1.jpg" , description: "906M views 14 year ago" ,channel: "The Beatles"},
        { id: 9, url: 'https://www.youtube.com/embed/T13se_2A7c8', title: 'Pink Floyd - The Great Gig In The Sky', cover: 'src/components/img/card imgs/card10.webp', channelimg: "src/components/img/card imgs/card10.1.jpg" , description: "38M views 1 year ago" , channel: "Pynk Floyd"},
    ],
    icons:  [
        { id: 1, name: "Home", img: "https://cdn-icons-png.flaticon.com/512/25/25694.png" },
        { id: 2, name: "Shorts", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/1649px-Youtube_shorts_icon.svg.png" ,},
        { id: 3, name: "Subscriptions", img: "src/components/img/subscription.png" },
        { id: 4, name: 'Library', img: "https://cdn-icons-png.flaticon.com/512/565/565285.png",},
        { id: 5, name: 'History', img: "https://www.seekpng.com/png/detail/301-3019211_history-comments-history-icon-png.png"},
        { id: 6, name: 'Trending',  img: "https://spng.pngfind.com/pngs/s/17-171458_fire-logo-flame-symbol-sign-fire-symbol-png.png"},
        { id: 7, name: 'Music', img: "https://w7.pngwing.com/pngs/274/853/png-transparent-musical-note-icon-music-notes-miscellaneous-logo-monochrome.png"},
        { id: 8, name: 'Gaming',  img: "https://www.pngfind.com/pngs/m/5-50746_png-file-svg-gaming-console-icon-png-transparent.png"},
        { id: 9, name: 'Sports', img: "src/components/img/trophy.png"},
        { id: 10, name: 'Browse channels', img: "https://icons-for-free.com/iconfiles/png/512/circle+more+plus+icon-1320183136549593898.png"},
        { id: 11, name: 'YouTube Music', img: "src/components/img/icons8-youtube-music-48.png"},
        { id: 12, name: 'YouTube Kids', img: "src/components/img/kids.png"},
        { id: 13, name: 'YouTube TV', img: "src/components/img/tv.png"},
        { id: 14, name: 'Settings',  img: "https://cdn-icons-png.flaticon.com/512/126/126472.png"},
        { id: 15, name: 'Report history', img: "https://png.pngtree.com/png-vector/20190116/ourlarge/pngtree-vector-flag-icon-png-image_322150.jpg"},
        { id: 16, name: 'Help', img: "https://cdn-icons-png.flaticon.com/512/0/827.png"},
        { id: 17, name: 'Send feedback', img: "https://www.iconpacks.net/icons/1/free-warning-icon-1090-thumb.png"},
    ],
    categories: [
        {name:" All" , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-4 rounded  inline-flex items-center"},
        {name:"Mixes " , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
        {name:" Music" , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-4  rounded  inline-flex items-center"},
        {name:" Pink Floyd" , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
        {name:"Beauty " , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
        {name:"Colleges " , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3 rounded  inline-flex items-center"},
        {name:"Watched " , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3 rounded  inline-flex items-center"},
        {name:"Recently uploaded " , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
        {name:"New to you " , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
        {name:" Artists" , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
    ]
}
   
}

export default state