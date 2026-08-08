import heroImg from "../../assets/heroImg.jpg";
import CategorySection from "./CategorySection";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-10 font-poppins">
        
        {/* Hero Background */}
        <img
          src={heroImg}
          alt="Coffee"
          className="absolute inset-0 h-full w-full object-cover brightness-70"
        />

        {/* Hero Content */}
        <div className="hero-content relative -left-70 z-10 max-w-3xl text-left text-white">
          <p className="hero-subtitle mb-3 text-4xl font-semibold">
            Welcome!
          </p>

          <h1 className="hero-title text-5xl font-bold leading-tight md:text-4xl">
            We serve the richest coffee<br></br> in the city!
          </h1>

          <p className="hero-description mx-auto mt-3 max-w-xl text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quibusdam, facilis Lorem, ipsum dolor.
          </p>

          <button
            type="button"
            className="hero-button mt-3 rounded-full bg-white px-8 py-3 text-xl font-semibold text-black transition-transform duration-300 hover:scale-105"
          >
            Order Now
          </button>
        </div>
      </section>

      <CategorySection />
    </>
  );
};

export default HeroSection;