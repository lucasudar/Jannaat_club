"use client";

import React from "react";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from 'next/image'

export default function Gallery() {
  const {ref} = useSectionInView("Gallery", 0.2);
  const videoUrls = [
    'https://www.youtube.com/embed/UrpYIAA3oyY',
    'https://www.youtube.com/embed/NfdfQRdVurc',
    'https://www.youtube.com/embed/-90Ahaz2xtQ',
  ]

  return (
    <motion.section
      ref={ref}
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="gallery"
      className="scroll-mt-28 mb-10"
    >
      <div>
        <div className="pt-4">
          <SectionHeading>Photos</SectionHeading>
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            <PhotoProvider>
              {[...Array(10)].map((_, i) => (
                <PhotoView key={i} src={`/assets/img/${i + 1}.jpg`}>
                  <div>
                    <Image
                      className=""
                      width={350} height={350} src={`/assets/img/${i + 1}-copy.jpg`} alt=""/>
                  </div>
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
        <div className="pt-4">
          <SectionHeading>Night Club Video</SectionHeading>
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            {videoUrls.map((url, i) => (
              <div key={i} className="h-[200px] md:h-[300px] lg:[400px] aspect-video">
                <iframe
                  className="w-full h-full aspect-video"
                  src={url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
