import React from "react";
import type { DetailValue } from "@/data/data";

export default function DetailRow({ label, values }: { label: { cn: string; ko: string }; values: DetailValue[] }) {
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
            <span className="text-[8px]">({val.ko})</span>
            <span className="font-han text-[24px]">{val.cn.title}</span>
            <span className="font-han text-xs">{val.cn.content}</span>
          </div>
        </td>
      ))}
    </tr>
  );
}
