import React from "react";

interface LineProps {
  direction: "horizontal" | "vertical";
  length?: string | number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  style?: React.CSSProperties;
}

export default function Line({
  direction,
  length = "100%",
  top,
  bottom,
  left,
  right,
  style = {},
}: LineProps) {
  const tailwindBase = `absolute pointer-events-none bg-[var(--color-line-gray)] ${direction === "horizontal" ? "left-0 right-0" : "top-0 bottom-0"}`;
  const dynamicStyle: React.CSSProperties =
    direction === "horizontal"
      ? {
          height: 1,
          width: length,
          ...(top !== undefined ? { top } : {}),
          ...(bottom !== undefined ? { bottom } : {}),
          ...style,
        }
      : {
          width: 1,
          height: length,
          ...(left !== undefined ? { left } : {}),
          ...(right !== undefined ? { right } : {}),
          ...style,
        };
  return <div className={tailwindBase} style={dynamicStyle} />;
}
