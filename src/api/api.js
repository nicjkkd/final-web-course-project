import axios from "axios";
import { API_URL, MOVIES } from "../constants";
import { v4 as uuidv4 } from "uuid";

// Create axios instance with retry logic
const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  retry: 3,
  retryDelay: 1000,
});

// Add retry interceptor
api.interceptors.response.use(null, async (error) => {
  const { config } = error;
  if (!config || !config.retry) {
    return Promise.reject(error);
  }

  config.retryCount = config.retryCount || 0;

  if (config.retryCount >= config.retry) {
    return Promise.reject(error);
  }

  config.retryCount += 1;
  const delayRetry = new Promise((resolve) => {
    setTimeout(resolve, config.retryDelay || 1000);
  });

  await delayRetry;
  return api(config);
});

// LocalStorage keys
const BOOKINGS_STORAGE_KEY = "cinema_bookings";

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

// Custom error class for API errors
class APIError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "APIError";
    this.code = code;
  }
}

// API functions with improved error handling
export const fetchMovies = async () => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOVIES;
  } catch (error) {
    throw new APIError(
      "Не вдалося завантажити список фільмів",
      "FETCH_MOVIES_ERROR"
    );
  }
};

export const getBookings = async () => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return getBookingsFromStorage();
  } catch (error) {
    throw new APIError(
      "Не вдалося отримати список бронювань",
      "GET_BOOKINGS_ERROR"
    );
  }
};

export const fetchBookedSeats = async (movieId) => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const bookings = getBookingsFromStorage();
    return bookings.filter((booking) => booking.movieId === parseInt(movieId));
  } catch (error) {
    throw new APIError(
      "Не вдалося отримати інформацію про заброньовані місця",
      "FETCH_BOOKED_SEATS_ERROR"
    );
  }
};

export const bookSeats = async ({ movieId, seats, email }) => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!movieId || !seats || !email) {
      throw new APIError(
        "Відсутні обов'язкові поля для бронювання",
        "INVALID_BOOKING_DATA"
      );
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
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError("Не вдалося створити бронювання", "BOOK_SEATS_ERROR");
  }
};

export const cancelBooking = async (bookingId) => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const bookings = getBookingsFromStorage();
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );
    saveBookingsToStorage(updatedBookings);
    return { success: true };
  } catch (error) {
    throw new APIError(
      "Не вдалося скасувати бронювання",
      "CANCEL_BOOKING_ERROR"
    );
  }
};

export const fetchUserBookings = async (email) => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const bookings = getBookingsFromStorage();
    return bookings.filter((booking) => booking.email === email);
  } catch (error) {
    throw new APIError(
      "Не вдалося отримати історію бронювань",
      "FETCH_USER_BOOKINGS_ERROR"
    );
  }
};

// Export API instance for potential future use
export default api;
