import { useState } from "react";

function useHeroes(searchQuery = "") {
  const [heroes, setHeroes] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroes = async () => {
    if (!searchQuery) {
      setError("Please enter a search query");
      return;
    }
    setIsPending(true);
    setError(null);
    try {
      const response = await fetch(`/api-proxy/api/${import.meta.env.VITE_SUPERHERO_TOKEN}/search/${searchQuery}`);
      if (!response.ok) {
        throw new Error("Failed to fetch heroes");
      }
      const data = await response.json();
      setHeroes(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);  
    }
  };

  return { heroes, isPending, error, fetchHeroes};
}

export default useHeroes;