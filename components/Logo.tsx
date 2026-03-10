export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Southern Sticks logo"
    >
      {/* Left club (bottom-left to top-right) */}
      <line
        x1="15"
        y1="85"
        x2="85"
        y2="15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Left club head */}
      <ellipse
        cx="15"
        cy="85"
        rx="8"
        ry="5"
        transform="rotate(-45 15 85)"
        fill="currentColor"
      />
      {/* Left club grip */}
      <rect
        x="79"
        y="8"
        width="12"
        height="4"
        rx="2"
        transform="rotate(-45 79 8)"
        fill="currentColor"
      />

      {/* Right club (bottom-right to top-left) */}
      <line
        x1="85"
        y1="85"
        x2="15"
        y2="15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Right club head */}
      <ellipse
        cx="85"
        cy="85"
        rx="8"
        ry="5"
        transform="rotate(45 85 85)"
        fill="currentColor"
      />
      {/* Right club grip */}
      <rect
        x="9"
        y="8"
        width="12"
        height="4"
        rx="2"
        transform="rotate(45 9 8)"
        fill="currentColor"
      />

      {/* "S" letter overlaid at center */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="currentColor"
        fontSize="36"
        fontFamily="Georgia, serif"
        fontWeight="bold"
      >
        S
      </text>
    </svg>
  );
}
