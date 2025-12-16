import AnimatedSectionBlock from "./AnimatedSectionBlock";
import StaticSectionBlock from "./StaticSectionBlock";

const description =
  "Celebrate the wonder that pampers you as you dip into our adults-only infinity pool, or set out to explore the island with a customized itinerary designed just for you. At day’s end, unwind in the most spacious accommodations Maui has to offer.";

const MAUI = () => {
  return (
    <section className="px-2 sm:px-4 md:px-6 lg:px-10 py-10 md:py-16">
      <div className="mb-10">
        <h2 className="text-black text-center font-helveticaNeue text-2xl md:text-3xl tracking-widest uppercase">
          MAUI
        </h2>
      </div>

      <AnimatedSectionBlock title="Gateway to The Doorway" text={description} direction="expand" />
      <StaticSectionBlock title="Experience Serenity" text={description} />
      <StaticSectionBlock title="Luxury Beyond Stay" text={description} />
      <AnimatedSectionBlock title="Discover Paradise" text={description} direction="collapse" />
    </section>
  );
};

export default MAUI;