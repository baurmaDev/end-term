import axios from 'axios';

const KEY = 'AIzaSyDoVKfwZMk2nFs_WOMeCYC5kbqGuJL7ino';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});