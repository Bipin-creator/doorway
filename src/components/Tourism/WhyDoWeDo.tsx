import React from "react";

const WhyDoWeDo = () => {
  return (
    <section className="pb-16 max-w-120 md:max-w-175 mx-auto">
      {/* <div className="h-28 bg-linear-to-b to-black from-black w-[0.5px] mx-auto mb-6"></div> */}
      <h2
        className={`text-black text-center font-helveticaNeue text-3xl md:text-4xl tracking-wide uppercase mb-4`}
      >
        why do we do it?
      </h2>
      <p className="font-garamondlight text-sm text-center">
        It's simple - we care about people and places and want to see them
        flourish.
      </p>
      {/* <div className="h-28 bg-linear-to-b to-black from-black w-[0.5px] mx-auto mt-6"></div> */}
    </section>
  );
};

export default WhyDoWeDo;
