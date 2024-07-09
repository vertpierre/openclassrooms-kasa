import { useState, useEffect } from 'react';

// Custom hook for fetching data with caching, refetch functionality, and cache expiration.
// Default cache expiration: 15 minutes
const useFetch = (url, cacheExpiration = 15 * 60 * 1000) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check cache
                const cachedData = localStorage.getItem(url);
                const cachedTimestamp = localStorage.getItem(
                    `${url}_timestamp`,
                );
                const currentTime = Date.now();

                if (
                    cachedData &&
                    cachedTimestamp &&
                    currentTime - cachedTimestamp < cacheExpiration
                ) {
                    const cachedResult = JSON.parse(cachedData);
                    setData(cachedResult);
                    setLoading(false);
                    return;
                }

                // Fetch from network
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                const result = await response.json();

                // Cache the result with timestamp
                localStorage.setItem(url, JSON.stringify(result));
                localStorage.setItem(
                    `${url}_timestamp`,
                    currentTime.toString(),
                );

                setData(result);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, cacheExpiration]);

    // Function to refetch data by clearing the cache and triggering a new fetch.
    const refetch = () => {
        setLoading(true);
        setError(null);
        localStorage.removeItem(url);
        localStorage.removeItem(`${url}_timestamp`);
    };

    console.log('data Fetched');
    return { data, loading, error, refetch };
};

export default useFetch;
