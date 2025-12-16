"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

// Sample logo data - replace with your actual images
const logos = [
  {
    src: "/image/hospitality/hospitality_logo01.png",
    alt: "Hotel Investors",
    title: "Hotel Investors",
  },
  {
    src: "/image/hospitality/hospitality_logo02.png",
    alt: "Hotel Owners",
    title: "Hotel Owners",
  },
  {
    src: "/image/hospitality/hospitality_logo03.png",
    alt: "Wellness Retreats",
    title: "Wellness Retreats",
  },
  {
    src: "/image/hospitality/hospitality_logo04.png",
    alt: "Health Resorts",
    title: "Health Resorts",
  },
  {
    src: "/image/hospitality/hospitality_logo05.png",
    alt: "Event Planning & Management Companies",
    title: "Event Planning & Management Companies",
  },
  {
    src: "/image/hospitality/hospitality_logo06.png",
    alt: "Food & Beverage Industry",
    title: "Food & Beverage Industry",
  },
];

const WhoDoWeWorkWith = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);

  const [seqWidth, setSeqWidth] = useState<number>(0);
  const [copyCount, setCopyCount] = useState<number>(
    ANIMATION_CONFIG.MIN_COPIES
  );
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const speed = 80; // pixels per second
  const logoHeight = 60;
  const gap = 48;

  const targetVelocity = speed;

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceRect = seqRef.current?.getBoundingClientRect?.();
    const sequenceWidth = sequenceRect?.width ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded =
        Math.ceil(containerWidth / sequenceWidth) +
        ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => updateDimensions();
    window.addEventListener("resize", handleResize);
    updateDimensions();
    return () => window.removeEventListener("resize", handleResize);
  }, [updateDimensions]);

  // Handle image loading
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];

    if (images.length === 0) {
      updateDimensions();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        updateDimensions();
      }
    };

    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener("load", handleImageLoad, { once: true });
        htmlImg.addEventListener("error", handleImageLoad, { once: true });
      }
    });
  }, [updateDimensions]);

  // Animation loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const rafRef = { current: null as number | null };
    const lastTimestampRef = { current: null as number | null };
    const velocityRef = { current: 0 };

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      track.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime =
        Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered ? 0 : targetVelocity;

      const easingFactor =
        1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        // Get current transform
        const currentTransform = track.style.transform;
        const matches = currentTransform.match(/translate3d\(([^,]+)px/);
        const currentOffset = matches ? Math.abs(parseFloat(matches[1])) : 0;

        let nextOffset = currentOffset + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;

        track.style.transform = `translate3d(${-nextOffset}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [targetVelocity, seqWidth, isHovered]);

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          className="flex items-center"
          key={`copy-${copyIndex}`}
          //   style={{ gap: `${gap}px` }}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {logos.map((logo, itemIndex) => (
            <li
              key={`${copyIndex}-${itemIndex}`}
              className="flex-none group/item mx-10"
            >
              <div className="transform transition-transform duration-300 hover:scale-110">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="block object-contain grayscale invert hover:grayscale-0 transition-all duration-300"
                  style={{ height: `${logoHeight}px`, width: "auto" }}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </li>
          ))}
        </ul>
      )),
    [copyCount, logoHeight, gap]
  );

  return (
    <div className="flex items-center justify-center px-10 mb-8" >
      <div className="flex flex-col items-center w-full">
        <h2 className="p-6 font-garamondlight text-black text-2xl tracking-wide uppercase ">
          who do we work with?
        </h2>
        <div
          ref={containerRef}
          className="relative overflow-hidden w-full py-2"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            ref={trackRef}
            className="flex w-max select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {logoLists}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoDoWeWorkWith;

