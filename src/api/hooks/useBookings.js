import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBookings, bookSeats, cancelBooking } from "../api";

export const useBookings = (movieId) => {
  const queryClient = useQueryClient();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  const { mutate: bookSeatsMutation, isPending: isBooking } = useMutation({
    mutationFn: bookSeats,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  const { mutate: cancelBookingMutation, isPending: isCancelling } =
    useMutation({
      mutationFn: cancelBooking,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["bookings"] });
      },
    });

  const movieBookings = movieId
    ? bookings.filter((booking) => booking.movieId === parseInt(movieId))
    : bookings;

  return {
    bookings: movieBookings,
    isLoading,
    bookSeats: bookSeatsMutation,
    cancelBooking: cancelBookingMutation,
    isBooking,
    isCancelling,
  };
};
