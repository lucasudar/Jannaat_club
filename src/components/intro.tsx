"use client";

import React from "react";

import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <div className="mb-28" ref={ref}>

    </div>
  );
}
