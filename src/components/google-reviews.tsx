import React, {useEffect, useRef, useState} from "react";
import {useLoadScript} from "@react-google-maps/api";
import ReviewCard from "@/components/review-card";
import {renderStars} from "@/components/stars";
import {IRating} from "@/lib/types";

const libraries = ["places"]; // IMPORTING 'PLACES' LIBRARY FROM GOOGLE MAPS

interface IReview {
  id: string;
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  photos?: {
    getUrl: () => string;
  }[];
}

function GoogleReviews() {
  const mapDivRef = useRef<HTMLDivElement | null>(null);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [rating, setRating] = useState<IRating>({stars: 5, total: 539})
  const {isLoaded, loadError} = useLoadScript({
    // TO GET API KEY VISIT: https://developers.google.com/maps/documentation/javascript/get-api-key
    // @ts-ignore
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // PUT YOUR API KEY OF PROJECT CREATED IN GOOGLE CLOUD CONSOLE
    // @ts-ignore
    libraries,
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      mapDivRef.current = document.createElement("div");
      mapDivRef.current.style.display = "none";
      document.body.appendChild(mapDivRef.current);

      const service = new google.maps.places.PlacesService(mapDivRef.current);
      try {
        service.getDetails(
          {
            // TO GET PLACE ID VISIT: https://developers.google.com/maps/documentation/places/web-service/place-id
            //https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=Jannaat&location=12.9259892%2C100.8725437&radius=1500&type=club&key=YOUR_API_KEY
            // @ts-ignore
            placeId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID,
            fields: ["reviews", "rating", "user_ratings_total"],
          },

          (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              setReviews(place!.reviews as IReview[]); // UPDATING STATE WITH REVIEWS RECEIVED
              setRating({stars: place!.rating as number, total: place!.user_ratings_total as number})
            }
          }
        );
      } catch(e) {
        console.warn(e)
      }


      return () => {
        if (mapDivRef.current && document.body.contains(mapDivRef.current)) {
          document.body.removeChild(mapDivRef.current);
        }
      };
    }
  }, [isLoaded, loadError]);

  return (
    <div className="container mx-auto my-8 text-center">
      <div>
        <h1 className="font-bold">Jannaat Club</h1>
        <div className="flex items-center justify-center my-2">
          {renderStars(rating.stars)}
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{rating.stars}</p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
        </div>
        <div className="text-sm font-medium text-gray-400">Based on <span
          className="font-bold">{rating.total}</span> reviews
        </div>
      </div>
      <div className="flex justify-center flex-row flex-wrap gap-4 mt-8">
        {/* MAPPING REVIEWS TO DISPLAY EACH REVIEW IN A DIV ELEMENT */}
        {reviews?.map((review: IReview) => (
          <ReviewCard
            key={review.id || review.time}
            name={review.author_name}
            date={review.relative_time_description}
            image={review.profile_photo_url}
            review={review.text}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default GoogleReviews;