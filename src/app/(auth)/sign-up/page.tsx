import { FcGoogle } from "react-icons/fc";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import Form from "./form";

export default function SignUp() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold">Sign Up</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button variant="ghost" className="shadow-lg transition-all">
          <FcGoogle />
          Sign Up with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
