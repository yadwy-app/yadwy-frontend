export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center justify-between py-8 h-screen md:flex-row md:py-0">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-lg items-center justify-center px-4 md:px-0">
          {children}
        </div>
      </div>
      <div className="hidden h-full w-full items-center justify-center bg-accent text-foreground md:flex">
        <div className="mx-auto max-w-lg flex flex-col gap-4 justify-center">
          <h2 className="text-2xl font-bold">Yadawy</h2>
          <h2 className="text-xl font-bold">Explore handmade masterpieces </h2>

          <ul className="mb-4 ml-4 list-disc text-lg">
            <li>Control. Monitor. Execute.</li>
            <li>Your decisions drive the system.</li>
            <li>Log in to take charge and stay informed.</li>
          </ul>

          <p className="mt-8 text-sm">
            First time? Admin accounts are granted by the system administrator.
            <br />
            Need assistance? Contact support at{" "}
            <a
              href="mailto:admin-support@yourcompany.com"
              className="text-blue-400 underline"
            >
              admin-support@company.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
