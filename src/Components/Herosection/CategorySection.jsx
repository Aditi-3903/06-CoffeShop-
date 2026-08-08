import { PiCoffeeFill } from "react-icons/pi";
import { MdCake } from "react-icons/md";
import { TbCookie } from "react-icons/tb";
import { BiSolidCoffeeTogo } from "react-icons/bi";

const CATEGORIES = [
  {
    id: 1,
    name: "Hot Coffee",
    icon: PiCoffeeFill,
  },
  {
    id: 2,
    name: "Dessert",
    icon: MdCake,
  },
  {
    id: 3,
    name: "Cookies",
    icon: TbCookie,
  },
  {
    id: 4,
    name: "Cold Coffee",
    icon: BiSolidCoffeeTogo,
  },
];

const CategorySection = () => {
  return (
    <section className="category-section flex min-h-40 w-full items-center justify-center gap-12 bg-[#F2D4BC] px-6 font-poppins md:gap-26">
      {CATEGORIES.map((category) => {
        const Icon = category.icon;

        return (
          <div
            key={category.id}
            className="category flex h-30 w-30 flex-col items-center justify-center"
          >
            <Icon className="category-icon h-20 w-20 text-[#751b0e]" />

            <h2 className="category-title text-lg text-[#751b0e]">
              {category.name}
            </h2>
          </div>
        );
      })}
    </section>
  );
};

export default CategorySection;