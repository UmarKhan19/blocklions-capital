import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavItem({ label, link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "font-semibold text-black"
          : "hover:text-gray-800 hover:font-medium"
      }
    >
      {label}
    </NavLink>
  );
}

NavItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
};
