export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-primary/35 p-1 md:p-10">
      <div className="w-full max-w-sm md:max-w-5xl">{children}</div>
    </div>
  );
}
