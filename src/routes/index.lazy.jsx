import { createLazyFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMovies } from "../api/hooks/useMovies";
import styles from "./index.module.css";
import { Link } from "@tanstack/react-router";
import Skeleton from "../components/Skeleton/Skeleton";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: moviesData, isLoading, error } = useMovies();

  const filteredMovies = useMemo(() => {
    return moviesData?.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [moviesData, searchQuery]);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <Skeleton type="formGroup" />
        </div>
        <Skeleton type="title" />
        <div className={styles.movieGrid}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} type="movieCard" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Помилка завантаження</h2>
        <p>{error.message}</p>
        <button
          className={styles.retryButton}
          onClick={() => window.location.reload()}
        >
          Спробувати ще раз
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Пошук фільмів..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <h1 className={styles.title}>Фільми в прокаті</h1>
      <div className={styles.movieGrid}>
        {filteredMovies.map((movie) => (
          <Link
            key={movie.id}
            to="/booking/$movieId"
            params={{ movieId: movie.id.toString() }}
            className={styles.movieCard}
          >
            <div className={styles.imageWrapper}>
              <img
                src={movie.poster}
                alt={movie.title}
                className={styles.poster}
                loading="lazy"
              />
            </div>
            <div className={styles.movieInfo}>
              <h2 className={styles.movieTitle}>{movie.title}</h2>
              <p className={styles.movieDescription}>{movie.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Home,
});
