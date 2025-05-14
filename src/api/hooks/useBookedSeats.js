import { useQuery } from "@tanstack/react-query";
import { fetchBookedSeats } from "../api";

export const useBookedSeats = (movieId) => {
  return useQuery({
    queryKey: ["bookedSeats", movieId],
    queryFn: () => fetchBookedSeats(movieId),
    enabled: !!movieId,
  });
};
