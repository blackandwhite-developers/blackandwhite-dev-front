import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingProps {
  rating: number;
  maxRating?: number;
}

const Rating = ({ rating, maxRating = 5 }: RatingProps) => {
  const validRating = Math.max(0, Math.min(rating, maxRating));

  const validMaxRating = Math.max(1, maxRating);

  const filledStars = Math.floor(validRating);
  const halfStars = validRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = validMaxRating - filledStars - halfStars;

  const stars = [
    ...Array(filledStars).fill(<FaStar color="#8728ff" />),
    ...Array(halfStars).fill(<FaStarHalfAlt color="#8728ff" />),
    ...Array(emptyStars).fill(<FaRegStar color="#d3d3d3" />),
  ];

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
