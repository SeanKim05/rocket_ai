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
      <div className="absolute top-8 left-2 z-10 sm:top-6 sm:left-1">
        <CloudImage position="left" />
      </div>

      <Line direction="horizontal" top={4} />
      <Line direction="vertical" left={4} />
      <Line direction="vertical" right={4} />
      <TableTitle />
      <div className="w-full max-w-[320px] sm:max-w-[420px] px-1 sm:px-3 pb-4 mx-auto overflow-x-auto">
        <table className="w-full table-fixed border-collapse text-center">
          <Header headers={headersData} />
          <TableRows TableRows={TableRowsData} />
        </table>
      </div>

      <div className="absolute top-4 right-2 z-10 sm:top-2 sm:right-1">
        <CloudImage position="right" />
      </div>

      <Line direction="horizontal" bottom={4} />
    </div>
  );
}
