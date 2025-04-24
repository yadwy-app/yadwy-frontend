import { DashboardLayout } from "@/components/dashboard-layout";
import { OrderDetails } from "@/components/order-details";

export default function OrderDetailsPage({
  params,
}: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <OrderDetails orderId={params.id} />
    </DashboardLayout>
  );
}
