import React from "react";

import type {
  NormalValue,
  DetailValue,
  MultiValue,
  RowType,
} from "@/data/data";

interface RowsProps {
  rows: RowType[];
}

const DefaultRow = (val: NormalValue, i: number) => (
  <td key={i} className="border-[0.5px] border-black px-4 py-2">
    <div className="flex flex-col items-center">
      <span className="font-han text-xs">{val.cn}</span>
      <span className="text-[8px]">({val.ko})</span>
    </div>
  </td>
);

const DetailRow = (val: DetailValue, i: number) => (
  <td key={i} className="border-[0.5px] border-black px-4 py-2">
    <div className="flex flex-col items-center">
      <span className="text-[8px]">({val.ko})</span>
      <span className="font-han text-[24px]">{val.cn.title}</span>
      <span className="font-han text-xs">{val.cn.content}</span>
    </div>
  </td>
);

const MultiRow = (val: MultiValue, i: number) => (
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

          {row.type === "default" &&
            row.values.map((val, i) => DefaultRow(val, i))}
          {row.type === "detail" &&
            row.values.map((val, i) => DetailRow(val, i))}
          {row.type === "multi" && row.values.map((val, i) => MultiRow(val, i))}
        </tr>
      ))}
    </tbody>
  );
}
