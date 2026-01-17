import { redirect } from "next/navigation";

export default function Page() {
  // Redirect old billing route to new checkout
  redirect("/checkout");
}
