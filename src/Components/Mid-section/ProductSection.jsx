import { ArrowRight } from "lucide-react";
import Cards from "./Cards";

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section py-10 ">
      <h2 className="section-title mb-10 text-center text-4xl font-semibold uppercase">
        {title}
      </h2>

      <div className="product-list flex items-center justify-evenly gap-4">
        {/* Previous */}
        <button
          type="button"
          className="product-arrow flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2D4BC]"
          aria-label={`Previous ${title}`}
        >
          <ArrowRight className="rotate-180" />
        </button>

        {/* Products */}
        <div className="product-cards flex items-center justify-center gap-6">
          {products.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          className="product-arrow flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2D4BC]"
          aria-label={`Next ${title}`}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProductSection;