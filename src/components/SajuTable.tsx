import { headersData, TableRowsData } from "@/data/data";
import Header from "./atoms/table/Header";
import TableRows from "./molcules/table/TableRows";
import TableTitle from "./molcules/table/TableTitle";

export default function SajuTable() {
  return (
    <div className="mx-2 flex flex-col items-center justify-center px-3 py-6">
      <TableTitle />
      <table className="w-full border-collapse text-center">
        <Header headers={headersData} />
        <TableRows TableRows={TableRowsData} />
      </table>
    </div>
  );
}
