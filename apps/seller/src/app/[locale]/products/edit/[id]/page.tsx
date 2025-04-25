import { DashboardLayout } from "@/components/dashboard-layout";
import { ProductForm } from "@/components/product-form";

export default async function EditProductPage({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <DashboardLayout>
      <ProductForm mode="edit" productId={id} />
    </DashboardLayout>
  );
}
