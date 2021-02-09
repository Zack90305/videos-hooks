import axios from 'axios';

const KEY = 'AIzaSyB4mJsLQfr5WrZJrOMYTXiJKu0D3HAbXt4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: KEY
	}
});

