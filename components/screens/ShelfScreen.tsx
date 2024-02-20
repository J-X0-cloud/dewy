import { cn } from "@/lib/cn";
import { shelfCount, shelfFilters, shelfProducts } from "@/lib/data/app-screens";
import type { ShelfProduct } from "@/types/skincare";
import { Bottle } from "@/components/phone/Bottle";
import { StatusBar } from "@/components/phone/StatusBar";

const FLAG_LABEL: Record<NonNullable<ShelfProduct["flag"]>, string> = {
  warn: "Use soon",
  low: "Low",
};

function ProductCard({ product }: { product: ShelfProduct }) {
  return (
    <div className="pc">
      {product.flag ? <i className={`flag f-${product.flag}`}>{FLAG_LABEL[product.flag]}</i> : null}
      <div className="pc-img">
        <Bottle shape={product.shape} fill={product.fill} />
      </div>
      <small>{product.category}</small>
      <b>{product.name}</b>
      <span>{product.meta}</span>
      <em>{product.daypart}</em>
    </div>
  );
}

export function ShelfScreen() {
  return (
    <div className="scr scr-shelf">
      <StatusBar />
      <p className="s-kicker">Product shelf</p>
      <h3 className="s-title">
        My shelf <span className="count">{shelfCount}</span>
      </h3>
      <div className="search">
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Search or scan a barcode
      </div>
      <div className="filters">
        {shelfFilters.map((filter, i) => (
          <span key={filter} className={cn(i === 0 && "on")}>
            {filter}
          </span>
        ))}
      </div>
      <div className="pgrid">
        {shelfProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
