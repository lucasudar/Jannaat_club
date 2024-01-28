import React, {useEffect, useState} from "react";
import {useLoadScript} from "@react-google-maps/api";

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
  const [reviews, setReviews] = useState<IReview[]>([]);
  const {isLoaded, loadError} = useLoadScript({
    // TO GET API KEY VISIT: https://developers.google.com/maps/documentation/javascript/get-api-key
    // @ts-ignore
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // PUT YOUR API KEY OF PROJECT CREATED IN GOOGLE CLOUD CONSOLE
    // @ts-ignore
    libraries,
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      const mapDiv = document.createElement("div"); // CREATING A DIV ELEMENT TO HOST SERVICE
      mapDiv.style.display = "none";
      document.body.appendChild(mapDiv);

      const service = new google.maps.places.PlacesService(mapDiv); // INITIALIZING PLACES SERVICE
      service.getDetails(
        {
          // TO GET PLACE ID VISIT: https://developers.google.com/maps/documentation/places/web-service/place-id
          //https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=Jannaat&location=12.9259892%2C100.8725437&radius=1500&type=club&key=YOUR_API_KEY
          // @ts-ignore
          placeId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID,
          fields: ["reviews"],
        },

        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setReviews(place!.reviews as IReview[]); // UPDATING STATE WITH REVIEWS RECEIVED
          }
        }
      );

      return () => {
        document.body.removeChild(mapDiv); // CLEANUP BY REMOVING DIV ELEMENT
      };
    }
  }, [isLoaded, loadError]);
  console.log(reviews)
  return (
    <div>
      {/* MAPPING REVIEWS TO DISPLAY EACH REVIEW IN A DIV ELEMENT */}
      {reviews?.map((review: IReview) => (
        <div key={review.id || review.time}>
          <p>
            <strong>NAME: </strong>
            {review.author_name}
          </p>
          <p>
            <strong>RATING: </strong>
            {review.rating}
          </p>
          <p>
            <strong>TEXT: </strong>
            {review.text}
          </p>
          {/* USER PROFILE PHOTO */}
          {review.profile_photo_url && (
            <img
              src={review.profile_photo_url}
              alt={`${review.author_name}'s profile`}
            />
          )}
          {/* PHOTOS ASSOCIATED WITH REVIEW */}
          {review.photos &&
            review.photos.map((photo, index) => (
              <img
                key={index}
                src={photo.getUrl()}
                alt={`Photo ${index + 1} for review by ${
                  review.author_name
                }`}
              />
            ))}
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default GoogleReviews;