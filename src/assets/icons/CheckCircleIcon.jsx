import React from "react";

const CheckCircleIcon = ({ size = 100, strokeWidth = 6 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle */}
      <circle
        cx="50"
        cy="50"
        r={50 - strokeWidth / 2}
        stroke="#0D54FF"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Checkmark */}
      <path
        d="M30 50 L42 62 L70 34"
        stroke="#0D54FF"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default CheckCircleIcon;
