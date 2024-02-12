export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="bul">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
