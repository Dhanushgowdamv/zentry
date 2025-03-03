import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const clipRef = useRef(null);
  const backgroundRef = useRef(null);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  useEffect(() => {
    const clipElement = clipRef.current;
    if (!clipElement) return;

    // Magnetic Effect on Mouse Move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = clipElement.getBoundingClientRect();

      // Normalize cursor position (-1 to 1 range)
      const xMove = ((clientX - left) / width - 0.5) * 40;
      const yMove = ((clientY - top) / height - 0.5) * 40;

      gsap.to(clipElement, {
        x: xMove,
        y: yMove,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Mouse Enter (Subtle Scale & Skew Effect)
    const handleMouseEnter = () => {
      gsap.to(clipElement, {
        scaleX: 1.05,
        scaleY: 1.1,
        skewX: 4,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    // Mouse Leave (Reset Animation)
    const handleMouseLeave = () => {
      gsap.to(clipElement, {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        skewX: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    };

    // Attach Event Listeners
    clipElement.addEventListener("mousemove", handleMouseMove);
    clipElement.addEventListener("mouseenter", handleMouseEnter);
    clipElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup on unmount
    return () => {
      clipElement.removeEventListener("mousemove", handleMouseMove);
      clipElement.removeEventListener("mouseenter", handleMouseEnter);
      clipElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="about"
    ref={backgroundRef}
    className="min-h-screen w-screen bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: "url('./img/about background.webp')" 
    }}
    >
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div ref={clipRef} className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
