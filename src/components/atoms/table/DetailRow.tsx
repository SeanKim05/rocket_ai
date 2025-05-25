import React from "react";
import type { DetailValue } from "@/data/data";
import DetailCard from "@/components/atoms/table/DetailCard";

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
          <DetailCard val={val} />
        </td>
      ))}
    </tr>
  );
}
