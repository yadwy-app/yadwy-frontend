import { Section, SectionHeader, SectionTitle } from "~/components/section";
import Checkout from "./_components/checkout";

export default function Page() {
  return (
    <Section className="w-full min-h-screen">
      <SectionHeader>
        <SectionTitle>Checkout</SectionTitle>
      </SectionHeader>
      <Checkout />
    </Section>
  );
}
