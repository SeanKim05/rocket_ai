import React from "react";

interface SpeechBubbleProps {
  text: string;
  imageSrc: string;
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
      <div
        className="text-seokbong-buble inline-block bg-[length:100%_100%] bg-no-repeat px-12 pt-12 pb-16 text-center whitespace-pre-line"
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
