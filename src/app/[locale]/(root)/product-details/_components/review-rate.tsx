import { Progress } from "~/components/ui/progress";

interface Rating {
  stars: number;
  percentage: number;
}

interface Props {
  totalReviews: number;
  ratings: Rating[];
}

export default function ReviewRate({ totalReviews, ratings }: Props) {
  return (
    <div className="w-full md:w-1/2 h-fit">
      <h2 className="mb-4 text-xl font-semibold">Customer Reviews</h2>
      <p className="mb-2 text-gray-600">{totalReviews} reviews</p>
      {ratings.map((rating) => (
        <div key={rating.percentage} className="flex items-center mb-2">
          <span className="text-yellow-500">★</span>
          <Progress
            value={rating.percentage}
            className="overflow-hidden grow ml-2 h-2 bg-gray-200 [&>div]:bg-yellow-400"
          />
          <span className="ml-3 text-gray-600">{rating.percentage}%</span>
        </div>
      ))}
    </div>
  );
}
