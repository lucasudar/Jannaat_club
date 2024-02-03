"use client"

import {useContext, useRef} from "react";
import {ScrollContext} from "@/components/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

export default function Keys() {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 4
  let progress = 0

  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenHeight = window.innerHeight
    const screenHalfHeight = screenHeight / 2
    const percentY =
      Math.min(
        clientHeight + screenHalfHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + screenHalfHeight
      ) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <section className="w-full bg-white">
      <div
        ref={refContainer}
        className="text-4xl text-black lg:text-6xl px-5 font-semibold leading-none tracking-tight py-20 lg:py-40 mx-auto max-w-3xl "
      >
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 0) }}
        >
          Jannaat one of the biggest club in Asia.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 1) }}
        >
          Best Indian Night Club in Pattaya Thailand.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 2) }}
        >
          Experience Night Live like never before.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 3) }}
        >
          Feel the paradise.
        </span>
      </div>
    </section>
  )
}