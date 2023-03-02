import homeicon from '../../components/icons/homeicon.vue'
import feedbackicon from '../../components/icons/feedbackicon.vue'
import browseicon from '../../components/icons/browseicon.vue'
import gamingicon from '../../components/icons/gamingicon.vue'
import helpicon from '../../components/icons/helpicon.vue'
import histoyicon from '../../components/icons/histoyicon.vue'
import musicicon from '../../components/icons/musicicon.vue'
import reporticon from '../../components/icons/reporticon.vue'
import settingsicon from '../../components/icons/settingsicon.vue'
import subscicon from '../../components/icons/subscicon.vue'
import trendingicon from '../../components/icons/trendingicon.vue'
import searchicon from "../../components/icons/searchicon.vue"
import micicon from "../../components/icons/micicon.vue"


const state = () => {
    return {
    keyword: null ,
    videos: [
        { id: 1, url: "https://www.youtube.com/embed/OJ62RzJkYUo", title: "where is my mind?", cover: "src/components/img/card imgs/card5.webp", channelimg:"src/components/img/card imgs/card5.1.jpg" , description: "59M views 4 years ago" , channel: "Pixie"  , tag: [ 'mixes' , 'all'  ]   },
        { id: 2, url: "https://www.youtube.com/embed/o_1aF54DO60", title: "Lana Del Rey - Young and Beautiful", cover: 'src/components/img/card imgs/card1.webp', channelimg:"src/components/img/card imgs/card1.1.jpg" , channel: "Lana Del Rey", description: "529M views  9 years ago" , tag: ['all', 'music'] },
        { id: 3, url: 'https://www.youtube.com/embed/Ar48yzjn1PE', title: "Coldplay - Sparks", cover: 'src/components/img/card imgs/card2.webp', channelimg: "src/components/img/card imgs/card2.2.jpg" , description: "600M views 4 years ago" , channel: "Coldplay" , tag: [ 'all' ,'music'] },
        { id: 4, url: 'https://www.youtube.com/embed/MeRIAew8eXc', title: ' Freaking Out The Neighborhood', cover: 'src/components/img/card imgs/card3.webp', channelimg: "src/components/img/card imgs/card3.1.jpg" , description: "700M views 8 years ago" , channel: "macDemarco" , tag: ['all', 'music']   },
        { id: 5, url: 'https://www.youtube.com/embed/viimfQi_pUw', title: 'Billie Eilish - Ocean Eyes', cover: 'src/components/img/card imgs/card4.webp', channelimg: "src/components/img/card imgs/card4.1.jpg" , description: "2B views 5 years ago" , channel: "Billie Eilish" , tag: ['all', 'artists'] },
        { id: 6, url: 'https://www.youtube.com/embed/8uD6s-X3590', title: 'Harry Styles - Sweet Creature', cover: 'src/components/img/card imgs/crad6.webp', channelimg: "src/components/img/card imgs/crad6.1.jpg" , description: "529M views 4 years ago" , channel: "Harry Styles" , tag: ['all', 'music'] },
        { id: 7, url: 'https://www.youtube.com/embed/GWGbOjlJDk', title: 'Who are you?', cover: 'src/components/img/card imgs/card7.webp',  channelimg: "src/components/img/card imgs/card7.1.jpg" , description: "50M views 1 year ago", channel: "Identity" , tag: ['all','identity' ]},
        { id: 8, url: 'https://www.youtube.com/embed/a4iCLIgIsng', title: 'The Beatles - Here Comes The Sun', cover: 'src/components/img/card imgs/card8.webp', channelimg: "src/components/img/card imgs/card8.1.jpg" , description: "906M views 14 year ago" ,channel: "The Beatles" , tag:['all', 'music', 'artist' ]},
        { id: 9, url: 'https://www.youtube.com/embed/T13se_2A7c8', title: 'Pink Floyd - The Great Gig In The Sky', cover: 'src/components/img/card imgs/card10.webp', channelimg: "src/components/img/card imgs/card10.1.jpg" , description: "38M views 1 year ago" , channel: "Pynk Floyd"  , tag: ['all', 'pink', 'floyd'] },
    ],
    icons:  [
        { name: "Home", icon: homeicon},
        { name: "Shorts" , img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/1649px-Youtube_shorts_icon.svg.png", class:"w-[18px] h-7 mr-2 -ml-1.5"},
        { name: "Subscriptions", icon: subscicon},
        { name: 'Library', img: "src/components/img/library.png" , class: 'w-7 -ml-1 mr-1'},
        { name: 'History',icon: histoyicon },
        { name: 'Trending',icon: trendingicon},
        { name: 'Music', icon: musicicon },
        { name: 'Gaming', icon: gamingicon},
        { name: 'Sports',img:"src/components/img/trophy.png", class: 'w-5 h-5 mt-0.5 mr-2 -ml-1' },
        { name: 'Browse channels',icon: browseicon },
        { name: 'YouTube Music',img:"src/components/img/icons8-youtube-music-48.png",class: 'w-[27px] -ml-1.5 mr-1.5'},
        { name: 'YouTube Kids', img:"src/components/img/kids.png",class: 'w-11 -ml-3 -mt-1.5'},
        { name: 'YouTube TV', img:"src/components/img/tv.png",class: 'w-14 -ml-4 -mt-1 -mr-1'},
        { name: 'Settings', icon: settingsicon },
        { name: 'Report history',icon: reporticon},
        { name: 'Help', icon: helpicon},
        { name: 'Send feedback', icon: feedbackicon},
        
    ],
    categories: [
        {name:" All" , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-4 rounded  inline-flex items-center"},
        {name:"Mixes " , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
        {name:" Music" , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-4  rounded  inline-flex items-center"},
        {name:" Pink Floyd" , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
        {name:"identity " , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
        {name:" Artists" , class: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3  rounded  inline-flex items-center"},
    ],
    icons2:  [
        { name: "Home", icon: homeicon},
        { name: "Shorts" , img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/1649px-Youtube_shorts_icon.svg.png", class:"w-[18px] h-7 mr-3 -ml-1.5"},
        { name: "Subscriptions", icon: subscicon},
        { name: 'Library', img: "src/components/img/library.png" , class: 'w-7 -ml-1 mr-1'},
    ],
    searchbaricons: [
        {name:"search", icon : searchicon},
        {name:"microphone", icon : micicon},
    ],
    tags: 'all',
    info: [
        {
           name: 'Mariam' , Surname: 'Tsertsvadze' , email: 'user@example.com '
        }
       
    ]
}
}

export default state