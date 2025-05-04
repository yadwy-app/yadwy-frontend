import { ProductForm } from "@/components/product-form";
import { DashboardLayout } from "../../_components";

export default function NewProductPage() {
  return (
    <DashboardLayout>
      <ProductForm mode="create" />
    </DashboardLayout>
  );
}
