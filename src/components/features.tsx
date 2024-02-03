"use client"

import React from "react";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";
import {RiVipFill} from "react-icons/ri";
import {FaBong} from "react-icons/fa6";
import {IoRestaurant} from "react-icons/io5";
import {FaCocktail, FaMusic} from "react-icons/fa";
import {GrLounge} from "react-icons/gr";
import {VscSymbolEvent} from "react-icons/vsc";
import {MdOutlinePool} from "react-icons/md";
import {TbBuildingSkyscraper} from "react-icons/tb";

// Define fadeInAnimationVariants object
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// Combine featureData and fadeInAnimationVariants into a single object
const featuresData = {
  "VIP Zone": {
    icon: RiVipFill,
  },
  "Hookah": {
    icon: FaBong,
  },
  "Restaurant": {
    icon: IoRestaurant,
  },
  "Bar": {
    icon: FaCocktail,
  },
  "Lounge Area": {
    icon: GrLounge,
  },
  "Dance Floor": {
    icon: FaMusic,
  },
  "Special Events": {
    icon: VscSymbolEvent,
  },
  "Skyline Pool": {
    icon: MdOutlinePool,
  },
  "Rooftop Sky Bar": {
    icon: TbBuildingSkyscraper,
  },
};

// Define the Features component
export default function Features() {
  const {ref} = useSectionInView("Features");

  return (
    <section
      id="features"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Object.entries(featuresData).map(([feature, {icon}], index) => {
          const Icon = icon;

          return (
            <motion.li
              className="bg-white borderBlack rounded-xl p-2 md:p-4 hover:bg-yellow-300 hover:opacity-50 transition-colors duration-500"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div>
                <div className="flex justify-center">
                  {Icon && <Icon size={40}/>}
                </div>
                <div className="">{feature}</div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
