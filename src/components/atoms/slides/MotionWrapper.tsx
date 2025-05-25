"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useInViewStore } from "@/utils/inViewStore";

interface MotionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
}

export default function MotionWrapper({
  id,
  children,
  className = "",
  style = {},
  threshold = 0.5,
}: MotionWrapperProps) {
  // 고유 id가 없으면 랜덤 id 생성 (메모리 누수 방지 위해 useRef)
  const internalIdRef = useRef(
    id || `motion-${Math.random().toString(36).substr(2, 9)}`,
  );
  const uniqueId = id || internalIdRef.current;

  const setInView = useInViewStore((state) => state.setInView);
  const inViewFromStore = useInViewStore(
    (state) => state.inViewMap[uniqueId] || false,
  );

  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    setInView(uniqueId, inView);
  }, [inView, uniqueId]);

  return (
    <div
      ref={ref}
      className={`${className} ${inViewFromStore ? "fade-in" : "opacity-0"}`}
      style={style}
    >
      {children}
    </div>
  );
}
