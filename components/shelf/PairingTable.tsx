import { pairings } from "@/lib/data/shelf";

export function PairingTable() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="split-head">
          <div>
            <p className="eyebrow">Pairing notes</p>
            <h2 className="h2">
              Sensible defaults for <em>common actives</em>
            </h2>
          </div>
          <p className="muted">
            These are Dewy&rsquo;s starting suggestions for how to schedule popular ingredients. They&rsquo;re general
            routine guidance, not medical advice, and you can override any of them.
          </p>
        </div>
        <div className="table-wrap">
          <table className="pairs">
            <thead>
              <tr>
                <th scope="col">Pairing</th>
                <th scope="col">Dewy&rsquo;s default</th>
                <th scope="col">Why</th>
              </tr>
            </thead>
            <tbody>
              {pairings.map((row) => (
                <tr key={row.pair}>
                  <th scope="row">{row.pair}</th>
                  <td>
                    <span className="tagp">{row.verdict}</span>
                  </td>
                  <td>{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
