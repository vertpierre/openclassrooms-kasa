// import { useState, useEffect } from 'react';

// /**
//  * Custom hook to fetch data from a given URL
//  * @param {string} url - The URL to fetch data from
//  * @returns {object} - Object containing isLoading, data, and error states
//  */
// export function useFetch(url) {
//     const [data, setData] = useState({});
//     const [isLoading, setLoading] = useState(true);
//     const [error, setError] = useState(false);

//     useEffect(() => {
//         if (!url) return;

//         setLoading(true);

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();
//                 setData(data);
//             } catch (err) {
//                 console.log(err);
//                 setError(true);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [url]);

//     return { isLoading, data, error };
// }
