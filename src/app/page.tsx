import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { cx } from "class-variance-authority";
import NewsCarousel from "@/components/NewsCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-md mt-5">
            要らないもので、欲しいが買える。
            <br /> 下取り購入EC
          </h1>
          <div className="relative h-20 text-center w-full">
            <Image src="/logo.webp" alt="logo" layout="fill" />
          </div>
          <p className="text-sm">
            ほしかったあの商品が、
            <br />
            手持ちの商品下取りで、お得な価格に
          </p>
          <Link href="/products" className={cx(buttonVariants())}>
            簡単に下取り見積もりをする
          </Link>
          <NewsCarousel />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
