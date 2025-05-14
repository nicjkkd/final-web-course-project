import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api";

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
};
