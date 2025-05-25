import React from "react";
import { getCellBg } from "@/utils/getBgColor";
import type { DetailValue } from "@/data/data";

interface DetailCardProps {
  val: DetailValue;
}

export default function DetailCard({ val }: DetailCardProps) {
  return (
    <div
      className={`relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl ${getCellBg(val.cn.content)}`}
    >
      <div className="absolute top-[3%] text-[8px]">({val.ko})</div>
      <div className="font-han flex items-center justify-center text-[24px]">
        {val.cn.title}
      </div>
      <div className="font-han absolute bottom-[3%] text-[8px]">
        {val.cn.content}
      </div>
    </div>
  );
}
