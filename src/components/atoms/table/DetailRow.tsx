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
      <td className={`border-r ${isLast ? "border-b" : "border-b-[0.5px]"}`}>
        <div className="flex flex-col items-center">
          <span className="font-han text-[0.7rem] sm:text-xs">{label.cn}</span>
          <span className="text-[0.45rem] sm:text-[0.6rem]">({label.ko})</span>
        </div>
      </td>
      {values.map((val, i) => (
        <td
          key={i}
          className={`border-r p-0.5 sm:p-1 ${isLast ? "border-b" : "border-b-[0.5px]"}`}
        >
          <DetailCard val={val} />
        </td>
      ))}
    </tr>
  );
}
