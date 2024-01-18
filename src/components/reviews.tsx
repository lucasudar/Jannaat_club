"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function Reviews() {
  const {ref} = useSectionInView("Reviews");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="reviews"
    >
      <SectionHeading>Reviews</SectionHeading>
      <ul>
        <li>VIP Areas</li>
        <li>Best CCTV Systems</li>
        <li>Awesome Sound Systems</li>
        <li>VIP Areas Bodyguards For Security</li>
        <li>Live Dancers</li>
      </ul>
    </motion.section>
  );
}
