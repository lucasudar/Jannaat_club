"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";
import {sendEmail} from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const {ref} = useSectionInView("Contact");

  const timeArray = [];
  for (let i = 18; i <= 23; i++) {
    timeArray.push(`${i}:00`);
  }
  for (let i = 0; i <= 17; i++) {
    timeArray.push(`${i.toString().padStart(2, '0')}:00`);
  }

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  let currentDate = yyyy + '-' + mm + '-' + dd;

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-12 px-4 mx-auto mb-20 sm:mb-28 w-[min(100%,48rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Book your table</SectionHeading>

      <form
        className="mt-10 flex flex-col text-gray-500 border-2 border-yellow-400 rounded-xl p-2 md:p-4 mx-auto max-w-[50rem]"
        action={async (formData) => {
          const {data, error} = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <div className="grid grid-cols-1 gap-2 md:gap-2 md:grid-cols-2">
          <div className="flex flex-col">
            <input
              className="h-14 px-4 mb-3 rounded-lg borderBlack outline-none"
              name="name"
              type="name"
              required
              placeholder="Your name"
            />
            <input
              className="h-14 px-4 mb-3 rounded-lg borderBlack outline-none"
              name="phone"
              type="tel"
              required
              placeholder="Mobile number"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="h-14 px-4 mb-3 rounded-lg borderBlack outline-none"
              name="senderEmail"
              type="email"
              required
              placeholder="Your email"
            />
            <div className="flex flex-row justify-center gap-2">
              <input
                className="h-14 px-4 mb-3 rounded-lg borderBlack outline-none min-w-[180px]"
                name="date"
                type="date"
                required
                placeholder="Date"
                defaultValue={currentDate}
              />
              <select
                className="h-14 px-4 mb-3 rounded-lg borderBlack outline-none"
                name="time"
                required
              >
                {timeArray.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <SubmitBtn/>
        </div>
      </form>
    </motion.section>
  );
}
