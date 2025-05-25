"use client";
import React from "react";

import { useInViewStore } from "@/utils/inViewStore";

interface SpeechBubbleProps {
  text: string;
  imageSrc: string;
  className?: string;
  top?: number;
  left?: number;
  tailPosition?: "top" | "bottom";
  inViewId?: string; // MotionWrapper의 id와 연결
}

export default function SpeechBubble({
  text,
  imageSrc,
  className = "",
  top,
  left,
  tailPosition = "bottom",
  inViewId,
}: SpeechBubbleProps) {
  // zustand에서 inView 상태 받아오기
  const inView = useInViewStore(
    (state) => (inViewId ? state.inViewMap[inViewId] : undefined)
  );

  React.useEffect(() => {
    if (inViewId !== undefined) {
      console.log(`[SpeechBubble] inViewId: ${inViewId}, inView:`, inView);
    }
  }, [inViewId, inView]);
  const paddingClass = tailPosition === "top" ? " pt-11 pb-16" : " pt-16 pb-12";

  return (
    <div
      style={{ top: `${top}px`, left: `${left}px`, display: inViewId && !inView ? "none" : undefined }}
      className={`absolute ${className} ${(inViewId && inView) ? "bubble-slide-in" : ""}`}
    >
      <div
        className={`text-seokbong-buble z-50 inline-block bg-[length:100%_100%] bg-no-repeat px-12 ${paddingClass} text-center whitespace-pre-line`}
        style={{
          backgroundImage: `url(${imageSrc})`,
          minWidth: "100px",
          minHeight: "80px",
        }}
      >
        {text}
      </div>
    </div>
  );
}
