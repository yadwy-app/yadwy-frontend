import { DashboardLayout } from "@/components/dashboard-layout";
import { ProductForm } from "@/components/product-form";

export default function NewProductPage() {
  return (
    <DashboardLayout>
      <ProductForm mode="create" />
    </DashboardLayout>
  );
}
