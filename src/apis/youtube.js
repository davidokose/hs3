import axios from 'axios';

const KEY = 'AIzaSyDGaeWo5uvfDFqa0rjdOgNO43Z2cCi1ykA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});