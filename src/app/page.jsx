"use client";
import HeroOne from "@/components/heroOne";
import HeroTwo from "@/components/heroTwo";
const Home = () => {
  return (
    <section className="lg:py-16 py-8 mt-20 sm:mt-20 md:mt-17 lg:mt-15">
      <div className="gap-8">
        {/* Left Text Section */}
        <HeroOne/>
        {/* Right Image Section */}
       <HeroTwo/>
      </div>
    </section>
  );
};

export default Home;
