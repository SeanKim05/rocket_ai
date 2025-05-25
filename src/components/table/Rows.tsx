import React from "react";

interface NormalValue {
  cn: string;
  ko: string;
}

interface NestedValue {
  id: number;
  content: NormalValue[];
}

interface Row {
  label: { cn: string; ko: string };
  values: (NormalValue | NestedValue)[];
}

interface RowsProps {
  rows: Row[];
}

const DefaultRow = (val: NormalValue, i: number) => (
  <td key={i} className="border-[0.5px] border-black px-4 py-2">
    <div className="flex flex-col items-center">
      <span className="font-han text-xs">{val.cn}</span>
      <span className="text-[8px]">({val.ko})</span>
    </div>
  </td>
);

const NestedRow = (val: NestedValue, i: number) => (
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

export default function Rows({ rows }: RowsProps) {
  return (
    <tbody>
      {rows.map((row, idx) => (
        <tr key={idx}>
          <td className="border-[0.5px] border-black">
            <div className="flex flex-col items-center">
              <span className="font-han text-xs">{row.label.cn}</span>
              <span className="text-[8px]">({row.label.ko})</span>
            </div>
          </td>
          {row.values.map((val, i) => {
            if ("content" in val) {
              return NestedRow(val, i);
            } else {
              return DefaultRow(val, i);
            }
          })}
        </tr>
      ))}
    </tbody>
  );
}
