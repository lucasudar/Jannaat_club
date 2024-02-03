"use client";

import React, {useContext, useRef} from "react";
import {useSectionInView} from "@/lib/hooks";
import Image from 'next/image'
import {ScrollContext} from "@/components/scroll-observer";

export default function Intro() {
  const {ref} = useSectionInView("Home", 0.9);
  const refContainer = useRef<HTMLDivElement>(null)
  const {scrollY} = useContext(ScrollContext)

  let progress = 0

  const {current: elContainer} = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  const isImageVisible = progress < 0.8

  return (
    <div
      ref={refContainer}
      className="min-h-screen w-full sticky -z-10 top-0 left-0"
      style={{transform: `translateY(-${progress * 20}vh)`}}
    >
      {isImageVisible && (
        <>
          <Image
            width={1920}
            height={1440}
            src="/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg"
            alt="Jannaat Night Club Pattaya Thailand"
            className="object-cover absolute w-full h-full"
          />
          <div ref={ref} className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              priority
              width={500}
              height={300}
              src="/logo.png"
              alt="logo"
            />
          </div>
        </>
      )
      }
    </div>
  );
}
