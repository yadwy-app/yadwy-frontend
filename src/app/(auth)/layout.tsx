export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center justify-between py-8 h-screen md:flex-row md:py-0">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-lg items-center justify-center px-4 md:px-0">
          {children}
        </div>
      </div>
    </div>
  );
}
