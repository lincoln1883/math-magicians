import React, { useEffect, useState } from 'react';
import './quotes.css';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = 'https://api.api-ninjas.com/v1/quotes?category=';
  const category = 'love';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
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
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [apiKey]);

  const dash = ' — ';

  return (
    <div className="container">
      {isError && <p className="error">Somthing went wrong...</p>}
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
