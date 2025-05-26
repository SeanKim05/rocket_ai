"use client";
import { headersData, TableRowsData } from "@/data/data";
import Header from "@/components/atoms/table/Header";
import CloudImage from "@/components/atoms/slides/CloudImage";
import TableRows from "./TableRows";
import TableTitle from "@/components/atoms/table/TableTitle";
import Line from "@/components/atoms/table/Line";

import { useInViewStore } from "@/utils/inViewStore";

interface SajuTableProps {
  inViewId?: string;
}

export default function SajuTable({ inViewId }: SajuTableProps) {
  const inView = useInViewStore(
    (state: { inViewMap: Record<string, boolean> }) =>
      inViewId ? state.inViewMap[inViewId] : true,
  );

  return (
    <div
      className={`relative flex flex-col items-center justify-center border-2 ${inViewId && inView && "saju-slide-in"}`}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <div className="absolute top-[36px] left-1 z-10">
        <CloudImage position="left" />
      </div>

      <Line direction="horizontal" top={4} />
      <Line direction="vertical" left={4} />
      <Line direction="vertical" right={4} />
      <TableTitle />
      <div className="w-full px-3 pb-6">
        <table className="w-full border-collapse text-center">
          <Header headers={headersData} />
          <TableRows TableRows={TableRowsData} />
        </table>
      </div>

      <div className="absolute top-[18px] right-1 z-10">
        <CloudImage position="right" />
      </div>

      <Line direction="horizontal" bottom={4} />
    </div>
  );
}
