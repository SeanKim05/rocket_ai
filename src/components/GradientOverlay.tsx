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
      className={`bg-fade-beige pointer-events-none absolute top-0 left-0 h-full w-full ${className}`}
    />
  );
}
