export function getCellBg(content: string) {
  if (content.endsWith("水")) return "text-white bg-black";
  if (content.endsWith("木")) return "text-white bg-[var(--color-cell-teal)]";
  if (content.endsWith("火")) return "text-white bg-[var(--color-cell-red)]";
  if (content.endsWith("金"))
    return "bg-white text-black border-1 border-black";
}
