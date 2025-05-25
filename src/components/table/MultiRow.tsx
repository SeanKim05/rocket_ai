import React from "react";
import type { MultiValue } from "@/data/data";

export default function MultiRow({ label, values }: { label: { cn: string; ko: string }; values: MultiValue[] }) {
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
            {val.content.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <span className="font-han text-xs">{item.cn}</span>
                <span className="text-[8px]">({item.ko})</span>
              </div>
            ))}
          </div>
        </td>
      ))}
    </tr>
  );
}
