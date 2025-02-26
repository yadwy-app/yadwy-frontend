import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  Twitter,
} from "lucide-react";
const aboutUsLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Policy",
    href: "/Policy",
  },
  {
    title: "product",
    href: "/product",
  },
];

const SocialMediaPlatforms = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    platform: "Twitter",
    href: "https://twitter.com/",
    icon: Twitter,
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    platform: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="bg-primary py-2 px-4 flex flex-col gap-4">
      <div className="flex md:flex-row flex-col justify-between items-start">
        <Image
          src="/logo.svg"
          width={100}
          height={90}
          alt="logo"
          className="object-contain"
        />
        <div>
          <ul className="flex flex-col md:flex-row md:gap-5">
            {aboutUsLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href}>
                  <Button className="text-text" variant="link">
                    {link.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <SocialMedia platforms={SocialMediaPlatforms} />
        <div className="col-span-6 md:col-span-2">
          <div className="flex flex-col items-center gap-6">
            <Link href={``} className="relative h-10 w-full">
              <Image
                fill
                src={"/footer/google.svg"}
                className="w-full"
                alt="google play"
              />
            </Link>
            <Link href={``} className="relative h-10 w-full">
              <Image
                fill
                src={"/footer/apple.svg"}
                className="w-full"
                alt="google play"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// create component incloude social media platforms

type Props = {
  platforms: {
    platform: string;
    href: string;
    icon: LucideIcon;
  }[];
};

function SocialMedia({ platforms }: Props) {
  return (
    <div className="flex gap-2">
      {platforms.map((platform) => (
        <Link key={platform.platform} href={platform.href}>
          <Button className="border" variant="ghost">
            <platform.icon />
          </Button>
        </Link>
      ))}
    </div>
  );
}
