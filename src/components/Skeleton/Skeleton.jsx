import styles from "./Skeleton.module.css";

const Skeleton = ({ type, count = 1 }) => {
  const elements = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`${styles.skeleton} ${styles[type]}`}
      aria-hidden="true"
    />
  ));

  return <>{elements}</>;
};

export default Skeleton;
