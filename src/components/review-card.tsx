import React from "react";
import Image from "next/image";
import {renderStars} from "@/components/stars";

interface ReviewCardProps {
  image: string;
  name: string;
  date: string;
  review: string;
  rating: number
}

const ReviewCard = ({ image, name, date, review, rating }: ReviewCardProps) => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 xl:w-1/3">
      <div className="py-6 px-6 bg-gray-900 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden w-12 h-12">
            <Image
              className="object-cover w-full h-full rounded-full"
              src={image}
              alt={name}
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col flex-grow">
            <p className="text-white font-medium">{name}</p>
            <p className="text-pink-400 font-medium">{date}</p>
          </div>
          <div className="flex justify-end items-center">
            {renderStars(rating)}
          </div>
        </div>
        <div className="text-white mt-4 leading-2 tracking-tight line-clamp-4 text-left">
          {review}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;