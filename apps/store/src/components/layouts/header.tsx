import Logo from "../logo";
import CartActions from "./cart-actions";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <Logo />
          <MainNav className="hidden md:flex" />
        </div>

        {/* Search Bar - Desktop */}
        <SearchBar className="hidden md:flex flex-1 max-w-[200px] lg:max-w-md mx-4" />

        {/* Cart Actions - Desktop */}
        <CartActions className="hidden md:flex" />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
