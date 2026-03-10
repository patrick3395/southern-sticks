export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Southern Sticks logo"
    >
      {/* Left club */}
      <line
        x1="20"
        y1="80"
        x2="80"
        y2="20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse
        cx="20"
        cy="80"
        rx="7"
        ry="4"
        transform="rotate(-45 20 80)"
        fill="currentColor"
      />

      {/* Right club */}
      <line
        x1="80"
        y1="80"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse
        cx="80"
        cy="80"
        rx="7"
        ry="4"
        transform="rotate(45 80 80)"
        fill="currentColor"
      />

      {/* Golf flag */}
      <line
        x1="50"
        y1="15"
        x2="50"
        y2="55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polygon
        points="50,15 70,22 50,29"
        fill="currentColor"
      />
      {/* Hole circle */}
      <circle
        cx="50"
        cy="58"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
