import React from "react";

interface NormalValue {
  cn: string;
  ko: string;
}
interface NestedValue {
  id: number;
  content: NormalValue[];
}
interface RowType {
  label: { cn: string; ko: string };
  values: (NormalValue | NestedValue)[];
}

export default function Row({ row }: { row: RowType }) {
  function renderCell(val: NormalValue | NestedValue, i: number) {
    if ("content" in val) {
      return (
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
      );
    } else {
      return (
        <td key={i} className="border-[0.5px] border-black px-4 py-2">
          <div className="flex flex-col items-center">
            <span className="font-han text-xs">{val.cn}</span>
            <span className="text-[8px]">({val.ko})</span>
          </div>
        </td>
      );
    }
  }

  return (
    <tr>
      <td className="border-[0.5px] border-black">
        <div className="flex flex-col items-center">
          <span className="font-han text-xs">{row.label.cn}</span>
          <span className="text-[8px]">({row.label.ko})</span>
        </div>
      </td>
      {renderCell(row.values[0], 0)}
      {renderCell(row.values[1], 1)}
      {renderCell(row.values[2], 2)}
      {renderCell(row.values[3], 3)}
    </tr>
  );
}
