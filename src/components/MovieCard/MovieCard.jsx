import styles from "./MovieCard.module.css";

const MovieCard = ({ title, poster, genre, description, session }) => {
  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <img src={poster} alt={title} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.genre}>{genre}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.session}>
          Сеанс: {new Date(session).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
