'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'motion/react';

// === Data ===
const stats = [
  { label: 'Projects', value: 50000, suffix: '+' },
  { label: 'Clients', value: 2000, suffix: '+' },
];

// === Number (single rolling number in a wheel) ===
function Number({ mv, number, height }: { mv: any; number: number; height: number }) {
  const y = useTransform(mv, (latest: number) => {
    const placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });

  return (
    <motion.span
      className="absolute inset-0 flex items-center justify-center font-garamondlight text-3xl text-black"
      style={{ y }}
    >
      {number}
    </motion.span>
  );
}

// === Digit (wheel for 0–9) ===
function Digit({ place, value, height }: { place: number; value: number; height: number }) {
  const valueRounded = Math.floor(value / place);
  const animatedValue = useSpring(valueRounded, { stiffness: 180, damping: 30 });

  useEffect(() => {
    animatedValue.set(valueRounded);
  }, [valueRounded, animatedValue]);

  return (
    <div className="relative w-5 h-10 overflow-hidden">
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

// === Scroll-triggered Smooth Counter ===
function ScrollCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const height = 40;

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate number (smooth + simultaneous digits)
  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // Smooth ease-out (like a real counter)
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress === 1) clearInterval(timer);
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [inView, target]);

  // Dynamically determine digit count (no leading zeros)
  const digits = target.toString().split('');

  return (
    <div ref={ref} className="inline-flex items-center">
      {digits.map((_, i) => {
        // Compute which place this is (e.g. 10000, 1000, ...)
        const place = Math.pow(10, digits.length - i - 1);
        return <Digit key={i} place={place} value={count} height={height} />;
      })}
      {suffix && (
        <span className="font-helveticaNeue text-3xl text-black ml-1">
          {inView ? suffix : ''}
        </span>
      )}
    </div>
  );
}


// === Main Counter Component ===
const Counter = () => {
  return (
    <div className="mx-auto w-fit flex gap-5 p-5">
      {stats.map((stat, i) => (
        <div key={i} className="items-center flex flex-col px-5">
          <ScrollCounter target={stat.value} suffix={stat.suffix} />
          <span className="font-helveticaNeue block text-xl text-black ml-2">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Counter;
