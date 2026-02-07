import { Suspense } from "react";
import FormSignUp from "./form";

// Simple loading component
function SignUpFormSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-xl animate-pulse">
      <div className="h-[500px] md:h-[550px] w-full max-w-sm md:max-w-5xl" />
    </div>
  );
}

export default async function SignUp() {
  // Preload translations before rendering component

  return (
    <Suspense fallback={<SignUpFormSkeleton />}>
      <FormSignUp />
    </Suspense>
  );
}
