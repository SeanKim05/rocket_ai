interface HeaderProps {
  headers: string[];
}

export default function Header({ headers }: HeaderProps) {
  return (
    <thead>
      <tr>
        <th className="border-[0.5px] border-black px-4 py-2">구분</th>
        {headers.map((header) => (
          <th
            key={header}
            className="font-han border-[0.5px] border-black px-4 py-2"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
