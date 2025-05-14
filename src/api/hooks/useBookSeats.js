import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookSeats } from "../api";

export const useBookSeats = (movieId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookSeats,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookedSeats", movieId] });
    },
  });
};
