export function TrendLegend({ note }: { note: string }) {
  return (
    <div className="legend">
      <span>
        <i className="lg1" />
        Hydration
      </span>
      <span>
        <i className="lg2" />
        Comfort
      </span>
      <em>{note}</em>
    </div>
  );
}
