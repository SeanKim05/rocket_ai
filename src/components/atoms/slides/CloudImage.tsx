import Image from "next/image";

interface CloudImageProps {
  position: "left" | "right";
  className?: string;
}

const cloudSrcMap = {
  left: "/images/cloud_lf.png",
  right: "/images/cloud_rg.png",
};

export default function CloudImage({ position, className }: CloudImageProps) {
  return (
    <Image
      src={cloudSrcMap[position]}
      alt={position === "left" ? "왼쪽 구름" : "오른쪽 구름"}
      width={56}
      height={38}
      className={className}
      style={{ width: 56, height: 38 }}
      priority
    />
  );
}
