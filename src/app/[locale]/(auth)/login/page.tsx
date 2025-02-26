import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Form from "./form";
import { Button } from "~/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">Login</h2>
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
