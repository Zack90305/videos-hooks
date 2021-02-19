import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);
	
	//kinda like componentDidMount() in a class component in this instance
	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			}
		});
		setVideos(response.data.items);
	};
	
	return [videos, search];
};

export default useVideos;