import ProductSection from "./ProductSection";
import { products } from "../../data/data";
import sack from "../../assets/sack.png";
import Beans from "../../assets/beans.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MiddleSection = () => {
  const coffeeProducts = products.filter(
    (product) => product.category === "coffee"
  );

  const dessertProducts = products.filter(
    (product) => product.category === "dessert"
  );

  return (
    <main className="font-poppins">
      {/* Coffee */}
      <ProductSection
        title="Our Special Coffee"
        products={coffeeProducts}
      />

      {/* Dessert */}
      <ProductSection
        title="Our Special Dessert"
        products={dessertProducts}
      />

      {/* Coffee Beans Banner */}
      <section className="beans-banner mt-10 flex min-h-60 w-full items-center justify-between bg-[#F2D4BC] px-8">
        {/* Sack */}
        <div className="h-50 w-66">
          <img
            src={sack}
            alt="Coffee bean sack"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="beans-content">
          <h2 className="text-left text-4xl font-semibold leading-tight">
            Check Out Our Best
            <br />
            Coffee Beans
          </h2>

          <button
            type="button"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-amber-950 px-8 py-2 text-2xl font-bold text-white"
          >
            Explore Our Products
            <MdKeyboardDoubleArrowRight className="scale-150" />
          </button>
        </div>

        {/* Beans */}
        <div className="h-40 w-70">
          <img
            src={Beans}
            alt="Coffee beans"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default MiddleSection;