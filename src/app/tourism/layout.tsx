"use client";

import { useEffect } from "react";

export default function TourismLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Scroll to top on reload / navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 return <section>{children}</section>
}
