"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="py-12 px-4 mx-auto max-w-[45rem] text-center scroll-mt-28"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="about"
    >
      <div>
        <SectionHeading>About our club</SectionHeading>
        <p className="mb-3">
          The Jannaat Club is one & only {" "}<span className="font-medium">biggest Indian club</span> {" "} in walking
          street, Pattaya. Jannaat Club one of the awesome
          party destination is also a paradise of entertainment. It is the perfect destination for night parties & an ever
          more entertaining nightlife. Partying in Jannaat Club is truly enjoyed by tourists from all over the world, who
          love viewing the place to enjoy the vibe. The hassle free nightlife and the pleasant weather in Pattaya is
          enjoyed & thoroughly preferred by tourists of all ages.
        </p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-start">
          <ul className="list-inside list-[square]">
            <li>VIP Areas</li>
            <li>Best CCTV Systems</li>
            <li>Awesome Sound Systems</li>
            <li>VIP Areas Bodyguards For Security</li>
            <li>Live Dancers</li>
          </ul>
        </div>
        <div>
          Image
        </div>
      </div>

    </motion.section>
  );
}
