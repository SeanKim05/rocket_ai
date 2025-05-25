import React from "react";
import type { NormalValue } from "@/data/data";

export default function DefaultRow({ label, values }: { label: { cn: string; ko: string }; values: NormalValue[] }) {
  return (
    <tr>
      <td className="border-[0.5px] border-black">
        <div className="flex flex-col items-center">
          <span className="font-han text-xs">{label.cn}</span>
          <span className="text-[8px]">({label.ko})</span>
        </div>
      </td>
      {values.map((val, i) => (
        <td key={i} className="border-[0.5px] border-black px-4 py-2">
          <div className="flex flex-col items-center">
            <span className="font-han text-xs">{val.cn}</span>
            <span className="text-[8px]">({val.ko})</span>
          </div>
        </td>
      ))}
    </tr>
  );
}
