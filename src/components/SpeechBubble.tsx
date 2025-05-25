import React from "react";

interface SpeechBubbleProps {
  text: string;
  imageSrc: string;
  className?: string;
  top?: number;
  left?: number;
  tailPosition?: "top" | "bottom";
}

export default function SpeechBubble({
  text,
  imageSrc,
  className = "",
  top,
  left,
  tailPosition = "bottom",
}: SpeechBubbleProps) {
  const paddingClass = tailPosition === "top" ? " pt-11 pb-16" : " pt-16 pb-12";

  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={`absolute ${className}`}
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
