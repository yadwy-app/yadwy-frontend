import { useTranslations } from "next-intl";
import { FeatureCard } from "../_components/feature-card";

export const Feature = () => {
  const t = useTranslations("HomePage.Features");
  const features = [
    {
      id: 1,
      title: t("Strength.title"),
      desc: t("Strength.desc"),
      img: "/feature/square.svg",
    },
    {
      id: 2,
      title: t("Natural.title"),
      desc: t("Natural.desc"),
      img: "/feature/tree.svg",
    },
    {
      id: 3,
      title: t("Strength_2.title"),
      desc: t("Strength_2.desc"),
      img: "/feature/square.svg",
    },
  ];
  return (
    <section className="grid grid-cols-12 gap-5">
      {features.map((feature) => (
        <FeatureCard feature={feature} key={feature.id} />
      ))}
    </section>
  );
};
