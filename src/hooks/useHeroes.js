import { useState } from "react";

function useHeroes(searchQuery = "") {
  const [heroes, setHeroes] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const [numberOfResultsShown, setNumberOfResultsShown] = useState(10);

  const fetchHeroes = async () => {
    if (!searchQuery) {
      setError("Please enter the name of your favourite hero");
      return;
    }
    setHeroes([]);
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

  return { heroes, isPending, error, numberOfResultsShown, setNumberOfResultsShown, fetchHeroes};
}

export default useHeroes;