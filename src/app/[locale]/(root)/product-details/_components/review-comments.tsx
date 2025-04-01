import Image from "next/image";
import React from "react";

type Props = {
  userName: string;
  userImage: string;
  rating: number;
  reviewText: string;
};

export default function ReviewComment({
  userName,
  userImage,
  rating,
  reviewText,
}: Props) {
  return (
    <div className="flex w-full items-start gap-4 rounded-lg">
      <Image
        src={userImage}
        alt="User Avatar"
        width={48}
        height={48} // 12 * 4 (h-12 in Tailwind) for a responsive size
        className="h-12 w-12 rounded-full"
      />

      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{userName}</h3>
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: the index doesn't change
                <span key={index} className="text-yellow-500">
                  {index < rating ? "★" : "☆"}
                </span>
              ))}
            </div>
          </div>
          <button type="button" className="text-gray-300 hover:text-red-500">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <title>heart icon</title>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
        <p className="text-gray-600">{reviewText}</p>
      </div>
    </div>
  );
}
