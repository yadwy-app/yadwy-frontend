import {
  PageContainer,
  PageHeader,
  PageTitle,
} from "~/components/page-component";
import Checkout from "./_components/checkout";

export default function Page() {
  return (
    <PageContainer className="w-full max-w-6xl min-h-screen">
      <PageHeader>
        <PageTitle>Checkout</PageTitle>
      </PageHeader>
      <Checkout />
    </PageContainer>
  );
}
