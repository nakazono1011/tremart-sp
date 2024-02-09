"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cx } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { Menu, UserRound } from "lucide-react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuButton = () => {
    setOpen(!open);
  };

  const menuRef = useRef<HTMLElement | null>(null);

  useOnClickOutside(menuRef, () => setOpen(false));

  return (
    <nav className="bg-white w-full border-b-2 sticky inset-x-0 z-40 top-0">
      <aside
        ref={menuRef}
        className={cx(
          "fixed top-0 h-full w-64 z-50 transition-transform bg-white border-r-2",
          {
            hidden: !open,
          }
        )}
      >
        <ul className="flex flex-col justify-center space-y-4 p-5">
          <li>
            <Link href="/products">買いたい</Link>
          </li>
          <li>
            <Link href="/sell">売りたい</Link>
          </li>
          <li>
            <Link href="/guide">ご利用案内</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
          <li>特定商法取引に基づく表示</li>
        </ul>
      </aside>
      <div className="flex items-center justify-center h-16 px-4">
        <Menu onClick={handleMenuButton} className="cursor-pointer" size="32" />
        <Link href="/" className="ml-2 font-bold font-mono">
          {/* TreMart */}
          <Image src="/logo.webp" alt="logo" width={120} height={40} />
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
