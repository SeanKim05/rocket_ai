import React from "react";

interface GradientOverlayProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GradientOverlay({
  className = "",
}: GradientOverlayProps) {
  return (
    <div
      className={`absolute left-0 top-0 w-full h-full pointer-events-none bg-fade-beige ${className}`}
    />
  );
}
