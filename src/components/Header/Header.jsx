import { Link } from "@tanstack/react-router";
import { memo } from "react";

const Header = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/booking" className="[&.active]:font-bold">
        Booking
      </Link>{" "}
    </div>
  );
};

export default memo(Header);
