import { MOVIES, BOOKINGS_STORAGE_KEY } from "../constants";
import { v4 as uuidv4 } from "uuid";

// Helper functions for localStorage with error handling
const getBookingsFromStorage = () => {
  try {
    const bookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    return bookings ? JSON.parse(bookings) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

const saveBookingsToStorage = (bookings) => {
  try {
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
  } catch (error) {
    console.error("Error writing to localStorage:", error);
    throw new Error("Не вдалося зберегти бронювання. Спробуйте пізніше.");
  }
};

// API functions with improved error handling
export const fetchMovies = async () => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOVIES;
  } catch (error) {
    throw new Error("Не вдалося завантажити список фільмів");
  }
};

export const getBookings = async () => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return getBookingsFromStorage();
  } catch (error) {
    throw new Error("Не вдалося отримати список бронювань");
  }
};

export const fetchBookedSeats = async (movieId) => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const bookings = getBookingsFromStorage();
    const filteredBookings = bookings.filter(
      (booking) => booking.movieId === parseInt(movieId)
    );
    return filteredBookings;
  } catch (error) {
    throw new Error("Не вдалося отримати інформацію про заброньовані місця");
  }
};

export const bookSeats = async ({ movieId, seats, email }) => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!movieId || !seats || !email) {
      throw new Error("Відсутні обов'язкові поля для бронювання");
    }

    const bookings = getBookingsFromStorage();
    const newBooking = {
      id: uuidv4(),
      movieId: parseInt(movieId),
      seats,
      email,
      timestamp: new Date().toISOString(),
    };

    bookings.push(newBooking);
    saveBookingsToStorage(bookings);
    return newBooking;
  } catch (error) {
    throw new Error("Не вдалося створити бронювання");
  }
};
