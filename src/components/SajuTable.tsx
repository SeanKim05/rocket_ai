import { headersData, rowsData } from "@/data/data";
import Header from "./table/Header";
import Rows from "./table/Rows";
import TableTitle from "./table/TableTitle";

export default function SajuTable() {
  return (
    <div className="mx-2 flex flex-col items-center justify-center px-3 py-6">
      <TableTitle />
      <table className="w-full border-collapse text-center">
        <Header headers={headersData} />
        <Rows rows={rowsData} />
      </table>
    </div>
  );
}
