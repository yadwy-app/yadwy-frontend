import { Suspense } from "react";
import { LoginForm } from "./form";

// Simple loading component
function LoginFormSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-xl animate-pulse">
      <div className="h-[450px] md:h-[500px] w-full max-w-sm md:max-w-5xl" />
    </div>
  );
}

export default async function Login() {
  return (
    <Suspense fallback={<LoginFormSkeleton />}>
      <LoginForm />
    </Suspense>
  );
}
