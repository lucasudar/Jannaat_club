"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";
import GoogleReviews from "@/components/google-reviews";

export default function Reviews() {
  const { ref } = useSectionInView("Reviews", 0.2);
  return (
    <motion.section
      ref={ref}
      className="py-12 px-4 mx-auto max-w-7xl text-center scroll-mt-28"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="reviews"
    >
      <SectionHeading>Reviews</SectionHeading>
      <GoogleReviews/>
    </motion.section>
  );
}
