import React from "react";

interface GradientOverlayProps {
  className?: string;
  style?: React.CSSProperties;
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({
  className = "",
}) => (
  <div
    className={`absolute left-0 top-0 w-full h-full pointer-events-none bg-[linear-gradient(180deg,rgba(243,242,239,0)_85%,#F3F2EF_100%)] ${className}`}
  />
);

export default GradientOverlay;
