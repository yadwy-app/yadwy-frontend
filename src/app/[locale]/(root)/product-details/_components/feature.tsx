type Props = {
  header: string;
  icon: React.ReactNode;
  description: string;
};

export default function Feature({ header, icon, description }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
        {icon}
      </div>
      <div>
        <p className="font-bold">{header}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
