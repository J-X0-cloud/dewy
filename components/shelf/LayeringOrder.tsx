import { layeringOrder } from "@/lib/data/shelf";
import { swatchFill } from "@/lib/swatches";
import { Bottle } from "@/components/phone/Bottle";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LayeringOrder() {
  return (
    <section className="sec sec-tint">
      <div className="wrap">
        <SectionHeading
          centered
          eyebrow="Layering order"
          title={
            <>
              Thinnest first, <em>richest last</em>
            </>
          }
        />
        <p className="muted center narrow">
          Dewy slots every product into the step where it belongs. Morning routines always finish with sunscreen;
          evenings finish with your richest layer.
        </p>
        <ol className="layers">
          {layeringOrder.map((layer, i) => (
            <li key={layer.name}>
              <div className="lb">
                <Bottle shape={layer.shape} fill={swatchFill[layer.swatch]} className="bt-lg" />
              </div>
              <b>{layer.name}</b>
              <span>{i + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
