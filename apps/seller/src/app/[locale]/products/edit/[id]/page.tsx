import { DashboardLayout } from "@/components/dashboard-layout";
import { ProductForm } from "@/components/product-form";

export default function EditProductPage({
  params,
}: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <ProductForm mode="edit" productId={params.id} />
    </DashboardLayout>
  );
}
