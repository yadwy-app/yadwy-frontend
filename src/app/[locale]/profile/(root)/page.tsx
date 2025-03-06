import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import SectionPriview from "../_components/section-priview";
import CosmeticsForm from "./form/cosmatics";
import PersonalForm from "./form/personal-info";
import { Link } from "~/i18n/routing";

export default async function Page() {
  const userInfo = {
    email: "john.doe@example.com",
    emailVerified: null, // or null if the email is not verified
    gender: "m", // or "f" or "o"
  };
  const cosmatics = {
    displayName: "John Doe",
    profilePicture: "/profile.svg", // Default profile picture URL
  };
  return (
    <>
      <Alert>
        <AlertTitle>Not Verified!</AlertTitle>
        <AlertDescription>
          You currently not verified, You&apos;ll not be able to do anything
          until you verify.
        </AlertDescription>
      </Alert>
      <Alert>
        <AlertTitle>Low On Tokens!</AlertTitle>
        <AlertDescription>
          You currently have
          <Link href="/profile/billing" className="underline text-primary">
            Billing
          </Link>
          to buy more
        </AlertDescription>
      </Alert>
      <SectionPriview
        header="cosmatics"
        subHeader="Changing any of the available information will not effect crtical functionality."
      >
        <CosmeticsForm userInfo={cosmatics} />
      </SectionPriview>
      <SectionPriview
        header="personal information"
        subHeader="Changing these information may effect how we contact you."
      >
        <PersonalForm userInfo={userInfo} />
      </SectionPriview>
    </>
  );
}
