import React from "react";
import Image from "next/image";

interface SpeechBubbleProps {
  text: string;
  imageSrc: string; // Bubble image source
  className?: string;
  top: number;
  left: number;
}

export default function SpeechBubble({
  text,
  imageSrc,
  className = "",
  top,
  left,
}: SpeechBubbleProps) {
  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={`absolute ${className}`}
    >
      <div className="relative w-[220px] h-[110px] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt="Speech Bubble"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
        <span
          className="absolute left-0 top-0 w-full h-full flex items-center justify-center px-6 py-4 text-black text-center text-balance text-ellipsis overflow-hidden whitespace-pre-line text-base leading-snug"
          style={{ pointerEvents: "none" }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
