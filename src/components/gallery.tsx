"use client";

import React from "react";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from 'next/image'

export default function Gallery() {
  const {ref} = useSectionInView("Gallery");

  return (
    <motion.section
      ref={ref}
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="gallery"
      className="scroll-mt-28 mb-28"
    >
      <section className="">
        <SectionHeading>Gallery</SectionHeading>
        <div className="flex flex-row pr-3 flex-wrap justify-center">
          <PhotoProvider>
            {[...Array(10)].map((_, i) => (
              <PhotoView key={i} src={`/assets/img/${i + 1}.jpg`}>
                <div className="">
                  <Image
                    className=""
                    width={250} height={250} src={`/assets/img/${i + 1}-copy.jpg`} alt="" />
                </div>
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </section>
    </motion.section>
  );
}
