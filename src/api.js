import axios from 'axios';
console.log(process.env.REACT_APP_YT_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyBxNQYSzA63cVSYuCdA3HkNpbt2MWr0kAg',
   },
})

export default request