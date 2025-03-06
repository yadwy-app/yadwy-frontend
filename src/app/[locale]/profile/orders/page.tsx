import { OrderItem } from "./_component/order-item";
import SectionPriview from "../_components/section-priview";

// Sample order data
const orders = [
  {
    id: "ORD-12345",
    date: "March 2, 2024",
    status: "Delivered",
    total: "$129.99",
    items: 3,
  },
  {
    id: "ORD-12344",
    date: "February 15, 2024",
    status: "Delivered",
    total: "$79.50",
    items: 2,
  },
  {
    id: "ORD-12343",
    date: "January 28, 2024",
    status: "Canceled",
    total: "$214.75",
    items: 4,
  },
];

export default function Page() {
  return (
    <SectionPriview
      header="Order History"
      subHeader="View and track your orders."
    >
      <div className="w-full space-y-4">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </SectionPriview>
  );
}
