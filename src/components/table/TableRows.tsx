import DefaultRow from "./DefaultRow";
import DetailRow from "./DetailRow";
import MultiRow from "./MultiRow";
import type { RowType } from "@/data/data";

interface TableRowsProps {
  TableRows: RowType[];
}

export default function TableRows({ TableRows }: TableRowsProps) {
  return (
    <tbody>
      {TableRows.map((row, idx) => {
        if (row.type === "default") {
          return <DefaultRow key={idx} label={row.label} values={row.values} />;
        }
        if (row.type === "detail") {
          return <DetailRow key={idx} label={row.label} values={row.values} />;
        }
        if (row.type === "multi") {
          return <MultiRow key={idx} label={row.label} values={row.values} />;
        }
        return null;
      })}
    </tbody>
  );
}
