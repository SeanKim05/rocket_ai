import { headersData, TableRowsData } from "@/data/data";
import Header from "./table/Header";
import TableRows from "./table/TableRows";
import TableTitle from "./table/TableTitle";

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
