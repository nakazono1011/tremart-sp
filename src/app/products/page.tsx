import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="pt-8">
          <div className="flex justify-center items-center gap-2">
            <Input />
            <SearchIcon />
          </div>
          <div className="grid grid-cols-2 mt-8 gap-y-2 gap-x-2">
            {Array.from({ length: 20 }).map((_, index) => {
              return (
                <Link
                  className="flex flex-col justify-center items-center w-full h-full bg-slate-100"
                  key={index}
                  href={`/products/${index}`}
                >
                  <Image
                    src="/favicon.png"
                    layout="contain"
                    width={50}
                    height={50}
                    alt="product"
                  />
                  <div className="text-sm">
                    <h2>商品名_{index}</h2>
                    <p>価格 {index * 100}円 </p>
                    <p>状態 Aランク</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
