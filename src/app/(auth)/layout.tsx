import Image from "next/image";
import LoginImage from "~/../public/login/login.svg";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between py-8 md:h-screen md:flex-row md:py-0">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-lg items-center justify-center">
          {children}
        </div>
      </div>
      <div className="dark hidden h-full w-full items-center justify-center bg-background text-foreground md:flex">
        <Image
          src={LoginImage}
          alt="Login Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
