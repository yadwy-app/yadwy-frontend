import Link from "next/link"
import Image from "next/image"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { cn } from "~/lib/utils"
import { CiInstagram, CiLinkedin } from "react-icons/ci"
import { FaFacebook } from "react-icons/fa6"
import { s } from "node_modules/framer-motion/dist/types.d-6pKw1mTI"
import LocaleSwitcherLang from "./locale-switcher"


const SocialMediaPlatforms = [
    {
        name:"facebook",
        href:"https://www.facebook.com/",
        icon:FaFacebook
    
    },
    {
        name:"instagram",
        href:"https://www.instagram.com/",
        icon:CiInstagram
    },
    {
        name:"linkedin",
        href:"https://www.linkedin.com/",
        icon:CiLinkedin
    }
]

const aboutUsLinks = [
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "Privacy Policy",
        href: "/Policy",
    },
    {
        title: "Product",
        href: "/product",
    },
]

export function SiteFooter() {

  return (
    <footer className={cn("w-full bg-secondary text-text")}>
      <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-background">
        <div className="flex items-center">
            <h2 className="text-2xl font-bold">Logo</h2>
          </div>
          <div className="flex gap-4">
            {aboutUsLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-lg hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-between items-end py-6 text-background">
          {/* Google Play Button */}
         <div className="flex flex-col gap-2">
            <span className="text-lg">Follow Us:</span>
            <div className="flex items-center gap-2">
                {SocialMediaPlatforms.map((platform) => (
                <Link
                    key={platform.name}
                    href={platform.href}
                    className=""
                >
                    <Button variant="ghost" className="border border-background">
                        <platform.icon className="h-5 w-5" />
                    </Button>
                </Link>
                ))}
            </div>
         </div>
          <LocaleSwitcherLang className="border border-background"/>
        </div>

        <Separator className="bg-background" />
        <div className="text-lg text-background">
          all rights reserved for yadawy © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

