import { headersData, TableRowsData } from "@/data/data";
import Header from "./atoms/table/Header";
import TableRows from "./molcules/table/TableRows";
import TableTitle from "./molcules/table/TableTitle";
import Line from "./atoms/Line";

export default function SajuTable() {
  return (
    <div
      className="relative flex flex-col items-center justify-center border-2"
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
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
      <Line direction="horizontal" bottom={4} />
    </div>
  );
}
