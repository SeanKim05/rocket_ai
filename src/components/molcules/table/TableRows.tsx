import DefaultRow from "@/components/atoms/table/DefaultRow";
import DetailRow from "@/components/atoms/table/DetailRow";
import MultiRow from "@/components/atoms/table/MultiRow";
import type { RowType } from "@/data/data";

interface TableRowsProps {
  TableRows: RowType[];
}

export default function TableRows({ TableRows }: TableRowsProps) {
  const detailIndexes = TableRows.map((row, idx) =>
    row.type === "detail" ? idx : -1,
  ).filter((idx) => idx !== -1);
  return (
    <tbody className="border-r-1 border-b-1">
      {TableRows.map((row, idx) => {
        if (row.type === "default") {
          return <DefaultRow key={idx} label={row.label} values={row.values} />;
        }
        if (row.type === "detail") {
          const isLast = idx === detailIndexes[detailIndexes.length - 1];
          return (
            <DetailRow
              key={idx}
              label={row.label}
              values={row.values}
              isLast={isLast}
            />
          );
        }
        if (row.type === "multi") {
          return <MultiRow key={idx} label={row.label} values={row.values} />;
        }
        return null;
      })}
    </tbody>
  );
}
