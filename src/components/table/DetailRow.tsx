import React from "react";
import type { DetailValue } from "@/data/data";

export default function DetailRow({
  label,
  values,
  isLast = false,
}: {
  label: { cn: string; ko: string };
  values: DetailValue[];
  isLast?: boolean;
}) {
  return (
    <tr>
      <td className={`border-r-1 ${isLast ? "border-b-1" : "border-b-[0.5]"}`}>
        <div className="flex flex-col items-center">
          <span className="font-han text-xs">{label.cn}</span>
          <span className="text-[8px]">({label.ko})</span>
        </div>
      </td>
      {values.map((val, i) => (
        <td
          key={i}
          className={`border-r-[0.5] p-1 ${isLast ? "border-b-1" : "border-b-[0.5]"}`}
        >
          <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-[var(--color-cell-red)] py-1 text-white">
            <span className="text-[8px]">({val.ko})</span>
            <span className="font-han text-[24px]">{val.cn.title}</span>
            <span className="font-han text-xs">{val.cn.content}</span>
          </div>
        </td>
      ))}
    </tr>
  );
}
