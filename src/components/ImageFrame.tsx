import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function ImageFramer({
  src,
  alt = "",
  width,
  height,
  className = "",
  priority = false,
}: ImageProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
