import { Link } from "@tanstack/react-router";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to="/booking/$movieId"
          params={{ movieId: movie.id.toString() }}
          className={styles.movieLink}
        >
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
