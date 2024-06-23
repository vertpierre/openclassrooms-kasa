import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data with caching and refetch functionality.
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} An object containing the fetched data, loading state, error state, and refetch function.
 */
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        /**
         * Asynchronous function to fetch data from the given URL.
         * It first checks the cache, then fetches from the network if necessary.
         */
        const fetchData = async () => {
            try {
                // Check cache
                const cachedData = localStorage.getItem(url);
                if (cachedData) {
                    setData(JSON.parse(cachedData));
                    setLoading(false);
                    return;
                }

                // Fetch from network
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                // Cache the result
                localStorage.setItem(url, JSON.stringify(result));

                setData(result);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    /**
     * Function to refetch data by clearing the cache and triggering a new fetch.
     */
    const refetch = () => {
        setLoading(true);
        setError(null);
        // Remove the cached data to force a new fetch
        localStorage.removeItem(url);
    };

    console.log('data Fetched');
    return { data, loading, error, refetch };
};

export default useFetch;
