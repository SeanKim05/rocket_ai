interface HeaderProps {
  headers: string[];
}

export default function Header({ headers }: HeaderProps) {
  return (
    <thead className="border-r-1 border-b-1">
      <tr>
        <th className="px-4 py-2">구분</th>
        {headers.map((header, idx) => (
          <th
            key={header}
            className={`font-han border-r-[0.5] py-2 ${idx === 0 && "border-l-1"}`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
