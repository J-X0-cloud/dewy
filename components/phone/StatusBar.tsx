export function StatusBar({ time = "9:41" }: { time?: string }) {
  return (
    <div className="sb">
      <span>{time}</span>
      <span className="sb-i">
        <i className="sig" />
        <i className="wifi" />
        <i className="bat" />
      </span>
    </div>
  );
}
