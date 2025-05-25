"use client";

import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
}

export default function MotionWrapper({
  children,
  className = "",
  style = {},
  threshold = 0.5,
}: MotionWrapperProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? "fade-in" : "opacity-0"}`}
      style={style}
    >
      {children}
    </div>
  );
}
