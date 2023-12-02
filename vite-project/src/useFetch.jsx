import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [things, setThings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then(data => {
        setThings(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('Error fetching data. Please try again later.');
        setIsLoading(false);
      });
  }, [url]);

  return { things, isLoading, error };
};

export default useFetch;