import { useState } from "react";
import styles from "./CinemaHall.module.css";
import Skeleton from "../Skeleton/Skeleton";

const CinemaHall = ({
  totalSeats = 50,
  bookedSeats = [],
  selectedSeats = [],
  onSeatSelect,
  isLoading = false,
}) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const rows = Math.ceil(totalSeats / 10);

  const getSeatStatus = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return "booked";
    if (selectedSeats.includes(seatNumber)) return "selected";
    return "available";
  };

  const handleSeatClick = (seatNumber) => {
    if (isSelecting || bookedSeats.includes(seatNumber)) return;

    setIsSelecting(true);
    try {
      onSeatSelect(seatNumber);
    } finally {
      setIsSelecting(false);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.hall}>
        <div className={styles.screen}>Екран</div>
        <div className={styles.seats}>
          {Array.from({ length: rows }, (_, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {Array.from({ length: 10 }, (_, colIndex) => {
                const seatNumber = rowIndex * 10 + colIndex + 1;
                if (seatNumber > totalSeats) return null;
                return <Skeleton key={seatNumber} type="seat" />;
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.hall}>
      <div className={styles.screen}>Екран</div>
      <div className={styles.seats}>
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {Array.from({ length: 10 }, (_, colIndex) => {
              const seatNumber = rowIndex * 10 + colIndex + 1;
              if (seatNumber > totalSeats) return null;

              return (
                <button
                  key={seatNumber}
                  className={`${styles.seat} ${styles[getSeatStatus(seatNumber)]}`}
                  onClick={() => handleSeatClick(seatNumber)}
                  disabled={bookedSeats.includes(seatNumber) || isSelecting}
                  aria-label={`Місце ${seatNumber}`}
                >
                  {seatNumber}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.seat} ${styles.available}`}></div>
          <span>Доступні</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.seat} ${styles.selected}`}></div>
          <span>Вибрані</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.seat} ${styles.booked}`}></div>
          <span>Заброньовані</span>
        </div>
      </div>
    </div>
  );
};

export default CinemaHall;
