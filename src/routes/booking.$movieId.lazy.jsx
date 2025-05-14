import { useParams, createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMovies } from "../api/hooks/useMovies";
import { useBookings } from "../api/hooks/useBookings";
import { useDateFormat } from "../hooks/useDateFormat";
import CinemaHall from "../components/CinemaHall/CinemaHall";
import BookingForm from "../components/BookingForm/BookingForm";
import Skeleton from "../components/Skeleton/Skeleton";
import styles from "./booking.module.css";

const Booking = () => {
  const { movieId } = useParams({ from: "/booking/$movieId" });
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { formatDate } = useDateFormat();

  const { data: movies = [], isLoading: isLoadingMovies } = useMovies();
  const {
    bookings: movieBookings,
    isLoading: isLoadingBookings,
    bookSeats,
    isBooking,
  } = useBookings(movieId);

  const movie = movies?.find((m) => m.id === parseInt(movieId));

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatNumber)) {
        return prev.filter((seat) => seat !== seatNumber);
      }
      return [...prev, seatNumber];
    });
  };

  const handleSubmit = (email, resetForm) => {
    if (selectedSeats.length === 0) {
      toast.error("Будь ласка, оберіть місця");
      return;
    }

    bookSeats(
      {
        movieId: parseInt(movieId),
        seats: selectedSeats,
        email,
      },
      {
        onSuccess: () => {
          toast.success("Бронювання успішно створено!");
          setSelectedSeats([]);
          resetForm();
        },
        onError: (error) => {
          toast.error(error.message || "Помилка при створенні бронювання");
        },
      }
    );
  };

  if (isLoadingMovies || isLoadingBookings) {
    return (
      <div className={styles.container}>
        <Skeleton type="title" />
        <div className={styles.bookingContainer}>
          <CinemaHall isLoading={true} />
          <div className={styles.formSkeleton}>
            <Skeleton type="formGroup" count={3} />
          </div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className={styles.error}>
        <h2>Фільм не знайдено</h2>
        <p>Спробуйте вибрати інший фільм</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.movieInfo}>
        <img src={movie.poster} alt={movie.title} className={styles.poster} />
        <div className={styles.movieDetails}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.description}>{movie.description}</p>
          <p className={styles.genre}>{movie.genre}</p>
          <p className={styles.session}>Сеанс: {formatDate(movie.session)}</p>
        </div>
      </div>

      <div className={styles.bookingContainer}>
        <CinemaHall
          selectedSeats={selectedSeats}
          onSeatSelect={handleSeatSelect}
          bookedSeats={movieBookings.flatMap((b) => b.seats)}
          isLoading={isBooking}
        />

        {selectedSeats.length > 0 && (
          <div className={styles.selectedSeats}>
            <h3 className={styles.selectedSeatsTitle}>Вибрані місця:</h3>
            <div className={styles.selectedSeatsList}>
              {selectedSeats.map((seat) => (
                <span key={seat} className={styles.seatBadge}>
                  {seat}
                </span>
              ))}
            </div>
          </div>
        )}

        <BookingForm
          onSubmit={handleSubmit}
          isSubmitting={isBooking}
          selectedSeats={selectedSeats}
        />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/booking/$movieId")({
  component: Booking,
});

export default Booking;
