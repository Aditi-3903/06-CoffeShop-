const Cards = ({ product }) => {
  const { name, info, price, image } = product;

  return (
    <article className="product-card w-70 overflow-hidden p-2 rounded-2xl bg-stone-200 shadow-md">
      {/* Product Image */}
      <div className="product-image h-60 w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="product-content px-4 py-3 text-left">
        <h3 className="product-name font-semibold leading-8">
          {name}
        </h3>

        <p className="product-info text-xs leading-4 text-gray-600">
          {info}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p className="product-price font-semibold">
            Rs.{price}
          </p>

          <button
            type="button"
            className="product-button rounded-xl bg-amber-950 px-3 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-105"
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default Cards;