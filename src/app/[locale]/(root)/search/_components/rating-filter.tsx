"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Checkbox } from "~/components/ui/checkbox";

const ratings = [5, 4, 3, 2, 1];

const RatingFilter = () => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating],
    );
  };

  return (
    <div className="mt-3 space-y-2">
      <h4 className="font-bold text-textColor">Rating</h4>

      {ratings.map((rating) => (
        <div key={rating} className="flex items-center space-x-2">
          <Checkbox
            id={`rating-${rating}`}
            checked={selectedRatings.includes(rating)}
            onCheckedChange={() => handleRatingChange(rating)}
          />
          <label
            htmlFor={`rating-${rating}`}
            className="flex items-center space-x-1"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                // biome-ignore lint/suspicious/noArrayIndexKey: the index doesn't change for an element
                key={index}
                className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
