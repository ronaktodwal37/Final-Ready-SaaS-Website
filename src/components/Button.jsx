import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const base = "inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandViolet focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
const variants = {
  primary: "bg-gradient-to-r from-brandViolet to-brandIndigo text-white shadow-md hover:shadow-lg",
  secondary: "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50",
  outline: "border border-brandViolet text-brandViolet hover:bg-brandViolet hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  to,
  href,
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;
  const motionProps = {
    whileHover: disabled ? undefined : { scale: 1.02 },
    whileTap: disabled ? undefined : { scale: 0.98 },
  };

  if (to) {
    return <MotionLink to={to} className={classes} {...motionProps}>{children}</MotionLink>;
  }
  if (href) {
    return <motion.a href={href} className={classes} {...motionProps}>{children}</motion.a>;
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
