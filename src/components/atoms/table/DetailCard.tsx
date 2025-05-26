import React from "react";
import { getCellBg } from "@/utils/getBgColor";
import type { DetailValue } from "@/data/data";

interface DetailCardProps {
  val: DetailValue;
}

export default function DetailCard({ val }: DetailCardProps) {
  return (
    <div
      className={`relative mx-auto flex aspect-square w-12 min-w-0 max-w-[3.2rem] items-center justify-center rounded-xl sm:w-10 ${getCellBg(val.cn.content)}`}
    >
      <div className="absolute top-0.5 text-[0.45rem] sm:text-[0.6rem]">({val.ko})</div>
      <div className="font-han flex items-center justify-center text-[0.9rem] sm:text-base">
        {val.cn.title}
      </div>
      <div className="font-han absolute bottom-0.5 text-[0.45rem] sm:text-[0.6rem]">
        {val.cn.content}
      </div>
    </div>
  );
}
