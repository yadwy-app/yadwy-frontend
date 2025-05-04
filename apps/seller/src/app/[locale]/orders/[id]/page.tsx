import { OrderDetails } from "@/components/order-details";

export default async function OrderDetailsPage({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <OrderDetails orderId={id} />;
}
