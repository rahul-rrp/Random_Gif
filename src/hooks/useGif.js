import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const [loading, setLoading] = useState(false);

    // Memoize fetchData using useCallback
    const fetchData = useCallback(async () => {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        try {
            const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
            console.log('Data is', data);
            const imageSource = data.data.images.downsized_large.url;
            console.log('Image source is', imageSource);
            setGif(imageSource);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
        setLoading(false);
    }, [tag, API_KEY]); // Include dependencies to prevent stale values

    useEffect(() => {
        fetchData();
    }, [fetchData]); // Now fetchData is stable and won't cause infinite loops

    return { gif, loading, fetchData };
};

export default useGif;
