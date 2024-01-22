"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { eventsData } from "@/lib/data";
import Event from "./event";
import { useSectionInView } from "@/lib/hooks";

export default function Events() {
  const { ref } = useSectionInView("Events", 0.5);

  return (
    <section ref={ref} id="events" className="scroll-mt-28 mb-28">
      <SectionHeading>Upcoming events</SectionHeading>
      <div className="columns-1 xl:columns-2 md:columns-1">
        {eventsData.map((event, index) => (
          <React.Fragment key={index}>
            <Event {...event} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
