type Props = {
  icon: React.ReactNode;
  description: string;
};

export default function Feature({ icon, description }: Props) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm text-[#5E6A6B]">{description}</span>
    </div>
  );
}
