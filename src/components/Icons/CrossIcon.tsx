"use client";
import React from "react";

const CrossIcon = () => {
  return (
    <div className="w-8 h-6 relative flex items-center justify-center cursor-pointer group">
      {/* Line 1 */}
      <span
        className="absolute block h-px w-full bg-black rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-135"
      />
      {/* Line 2 */}
      <span
        className="absolute block h-px w-full bg-black -rotate-45 transition-transform duration-500 ease-in-out group-hover:-rotate-135"
      />
    </div>
  );
};

export default CrossIcon;
