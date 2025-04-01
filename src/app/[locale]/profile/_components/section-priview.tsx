export default function SectionPriview({
  children,
  header,
  subHeader,
}: React.PropsWithChildren<{
  header: string;
  subHeader?: string;
}>) {
  return (
    <section className="bg-primary/30 group rounded-lg overflow-clip relative @container p-3 md:p-4">
      <span className="absolute z-0 inset-0 md:bg-primary/20 md:group-hover:bg-primary/15 md:[clip-path:polygon(40%_0,100%_0,100%_100%,50%_100%)]" />
      <div className="flex flex-col relative">
        <div className="flex items-start flex-col gap-y-2 bg-primary/10 group-hover:bg-primary/15 md:bg-inherit md:group-hover:bg-inherit">
          <h3 className="text-2xl font-bold capitalize">{header}</h3>
          {subHeader && <p className="text-sm text-muted">{subHeader}</p>}
        </div>
        <div className="flex items-end justify-center flex-col p-3 @md:p-8 @md:pl-20 w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
