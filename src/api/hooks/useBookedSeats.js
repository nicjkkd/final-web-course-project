import { useQuery } from "@tanstack/react-query";
import { fetchBookedSeats } from "../api";

export const useBookedSeats = (movieId) => {
  const bookedSeatsQuery = useQuery({
    queryKey: ["bookedSeats", movieId],
    queryFn: () => fetchBookedSeats(movieId),
    enabled: !!movieId,
  });

  return bookedSeatsQuery;
};
