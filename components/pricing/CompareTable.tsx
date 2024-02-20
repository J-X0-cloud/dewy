import { compareRows } from "@/lib/data/pricing";
import type { CompareValue } from "@/types/content";

function Cell({ value }: { value: CompareValue }) {
  if (value === true) {
    return (
      <span className="yes" aria-label="Included">
        &#10003;
      </span>
    );
  }
  if (value === false) return <span aria-label="Not included">&mdash;</span>;
  return <>{value}</>;
}

export function CompareTable() {
  return (
    <section className="sec sec-tint">
      <div className="wrap">
        <h2 className="h2 center">
          Compare <em>plans</em>
        </h2>
        <div className="table-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Free</th>
                <th scope="col">Plus</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td>
                    <Cell value={row.free} />
                  </td>
                  <td>
                    <Cell value={row.plus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
