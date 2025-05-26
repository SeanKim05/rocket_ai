import React from "react";
import type { NormalValue } from "@/data/data";

export default function DefaultRow({
  label,
  values,
}: {
  label: { cn: string; ko: string };
  values: NormalValue[];
}) {
  return (
    <tr>
      <td className="border-r-1 border-b-1">
        <div className="flex flex-col items-center">
          <span className="font-han text-[0.7rem] sm:text-xs">{label.cn}</span>
          <span className="text-[0.45rem] sm:text-[0.6rem]">({label.ko})</span>
        </div>
      </td>
      {values.map((val, i) => (
        <td key={i} className="border-r border-b py-1 px-0.5 sm:px-1">
          <div className="flex flex-col items-center">
            <span className="font-han text-xs">{val.cn}</span>
            <span className="text-[8px]">({val.ko})</span>
          </div>
        </td>
      ))}
    </tr>
  );
}
