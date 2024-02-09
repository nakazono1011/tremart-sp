import { buttonVariants } from "@/components/ui/button";
import { cx } from "class-variance-authority";
import { Menu, UserRound } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full border-b-2 sticky inset-x-0 z-50 top-0">
      <div className="flex items-center h-16 px-4">
        <Menu className="" size="32" />
        <Link href="/" className="ml-4 font-bold font-mono">
          TreMart
        </Link>
        <div className="ml-auto flex items-center">
          <Link
            href="/login"
            className={cx(
              buttonVariants({
                variant: "ghost",
              }),
              "text-xs"
            )}
          >
            <UserRound className="mr-2" color="orange" />
            会員登録 <br />
            ログイン
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
