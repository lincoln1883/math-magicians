import React, { useEffect, useState } from 'react';
import './quotes.css';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = 'https://api.api-ninjas.com/v1/quotes?category=';
  const category = 'love';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const response = await fetch(`${url}${category}`, {
          headers: {
            'X-Api-Key': `${apiKey}`,
          },
        });
        const results = await response.json();
        const returnVal = results.map((quote, index) => ({
          ...quote,
          id: index + 1,
        }));
        setData(returnVal);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
      setError(false);
    };
    fetchData();
  }, [apiKey]);

  const dash = ' — ';

  return (
    <div className="container">
      {error && <p className="error">There was an error</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data.map((data) => (
        <div className="box" key={data.id}>
          <q className="title">{data.quote}</q>
          <cite className="author">
            {dash}
            {data.author}
          </cite>
        </div>
      ))}
    </div>
  );
};
export default Quotes;
