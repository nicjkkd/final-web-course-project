import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api";

export const useMovies = () => {
  const movieQuery = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  return movieQuery;
};
