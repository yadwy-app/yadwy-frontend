import { features, mockProductData } from "~/data";
import ProductDetails from "../_components/details";
import ProductImage from "../_components/product-images";
import ReviewRate from "../_components/review-rate";
import ReviewComment from "../_components/review-comments";
import Feature from "../_components/feature";
import { Separator } from "~/components/ui/separator";
import ButtonAction from "../_components/button-actions";
export async function generateStaticParams() {
  // إذا كنت تجلب البيانات من API استخدم `fetch` هنا
  return mockProductData.map((product) => ({
    id: product.id,
  }));
}
type Props = {
  params: {
    id: string;
  };
};
function getProductById(id: string) {
  return mockProductData.find((p) => p.id === id);
}

export default function Page({ params }: Props) {
  const product = getProductById(params.id);
  const ratings = [
    { stars: 5, percentage: 52 },
    { stars: 4, percentage: 30 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 7 },
    { stars: 1, percentage: 15 },
  ];

  if (!product) return <h3>Product not Found</h3>;

  console.log(product);
  return (
    <div className="px-4 py-8 md:container">
      <div className="flex w-full flex-col justify-center gap-12 md:flex-row">
        <ProductImage images={product.images} />
        <div className="flex flex-col gap-[1.6rem]">
          <ProductDetails
            title={product.title}
            price={product.price}
            rate={product.rate}
            description={product.description}
          />
          <Separator className="w-24 bg-primary" />
          {features.map((feature) => (
            <Feature
              key={feature.description}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
          <Separator className="w-24 bg-primary" />
          <ButtonAction />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 py-16 md:flex-row">
        <ReviewRate totalReviews={64} ratings={ratings} />
        <div className="flex flex-col gap-4">
          {product.reviewComment.map((comment) => (
            <ReviewComment
              key={comment.reviewText}
              userImage={comment.userImage}
              userName={comment.userName}
              rating={comment.rating}
              reviewText={comment.reviewText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
